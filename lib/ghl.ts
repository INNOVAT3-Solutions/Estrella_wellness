// GoHighLevel (LeadConnector) API v2, server-side only.
//
//   GHL_PRIVATE_TOKEN   Private Integration token for the Estrella sub-account
//   GHL_LOCATION_ID     that sub-account's Location ID
//   GHL_PIPELINE_ID     "GLP-1 Weight Loss" pipeline
//   GHL_STAGE_NEW_ID    its "NEW" stage
//   GHL_STAGE_PAID_ID   its "Paid" stage
//
// Never import this from a client component: it reads the token.

const API = "https://services.leadconnectorhq.com";

export const TAGS = {
  program: "glp-1",
  source: "glp-1 website",
  paid: "paid",
  location: (name: string) => `location: ${name.toLowerCase()}`,
};

export function ghlConfigured(): boolean {
  return Boolean(process.env.GHL_PRIVATE_TOKEN && process.env.GHL_LOCATION_ID);
}

async function ghl<T>(
  path: string,
  init: { method?: string; body?: unknown; version?: string } = {}
): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    method: init.method ?? "GET",
    headers: {
      Authorization: `Bearer ${process.env.GHL_PRIVATE_TOKEN}`,
      Version: init.version ?? "2021-07-28",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: init.body === undefined ? undefined : JSON.stringify(init.body),
    signal: AbortSignal.timeout(10_000),
    cache: "no-store",
  });
  if (!res.ok) {
    // Log the status and GHL's message only; never the request body (PHI).
    const detail = await res.text().catch(() => "");
    throw new Error(`GHL ${init.method ?? "GET"} ${path.split("?")[0]} -> ${res.status} ${detail.slice(0, 200)}`);
  }
  return (await res.json().catch(() => ({}))) as T;
}

/** Create the contact, or update the one GHL matches by email/phone. Returns its id. */
export async function upsertContact(contact: {
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  phone?: string;
}): Promise<string> {
  const data = await ghl<{ contact: { id: string } }>("/contacts/upsert", {
    method: "POST",
    body: {
      locationId: process.env.GHL_LOCATION_ID,
      source: "Estrella Wellness website",
      ...contact,
    },
  });
  return data.contact.id;
}

/** Adds tags without removing any the contact already has. */
export async function addTags(contactId: string, tags: string[]) {
  await ghl(`/contacts/${contactId}/tags`, { method: "POST", body: { tags } });
}

export async function addNote(contactId: string, body: string) {
  await ghl(`/contacts/${contactId}/notes`, { method: "POST", body: { body } });
}

/** One open opportunity per contact in the GLP-1 pipeline, moved to `stageId`. */
export async function upsertOpportunity(opts: {
  contactId: string;
  name: string;
  stageId: string | undefined;
  monetaryValue?: number;
}) {
  const pipelineId = process.env.GHL_PIPELINE_ID;
  if (!pipelineId || !opts.stageId) return;
  await ghl("/opportunities/upsert", {
    method: "POST",
    body: {
      locationId: process.env.GHL_LOCATION_ID,
      pipelineId,
      pipelineStageId: opts.stageId,
      contactId: opts.contactId,
      name: opts.name,
      status: "open",
      ...(opts.monetaryValue ? { monetaryValue: opts.monetaryValue } : {}),
    },
  });
}

/**
 * Moves the contact's existing GLP-1 card to `stageId`, keeping its name.
 * Creates one (named `fallbackName`) if the contact has none yet.
 */
export async function moveOpportunity(opts: {
  contactId: string;
  stageId: string | undefined;
  fallbackName: string;
}) {
  const pipelineId = process.env.GHL_PIPELINE_ID;
  if (!pipelineId || !opts.stageId) return;
  const found = await ghl<{ opportunities: { id: string; pipelineId: string }[] }>(
    `/opportunities/search?location_id=${process.env.GHL_LOCATION_ID}&contact_id=${opts.contactId}&pipeline_id=${pipelineId}`
  );
  const existing = found.opportunities?.find((o) => o.pipelineId === pipelineId);
  if (existing) {
    await ghl(`/opportunities/${existing.id}`, {
      method: "PUT",
      body: { pipelineStageId: opts.stageId },
    });
  } else {
    await upsertOpportunity({ contactId: opts.contactId, name: opts.fallbackName, stageId: opts.stageId });
  }
}

/** "3055551234" -> "+13055551234" */
export function e164(digits: string): string {
  return `+1${digits}`;
}
