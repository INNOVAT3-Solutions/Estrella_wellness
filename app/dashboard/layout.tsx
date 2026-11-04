import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { SHOW_PATIENT_PORTAL } from "@/lib/features";

// The patient portal is private, even when the feature flag turns it on.
export const metadata: Metadata = { robots: { index: false, follow: false } };

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!SHOW_PATIENT_PORTAL) redirect("/");
  return children;
}
