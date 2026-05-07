"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type IntakeData = {
  // Section 1 — Account
  fullName: string;
  dob: string;
  biologicalSex: "male" | "female" | "prefer_not_to_say" | "";
  phone: string;
  email: string;
  shippingAddress: string;
  state: string;

  // Section 2 — Program
  goals: string[]; // What are you interested in improving

  // Section 3 — Health Status
  heightFeet: string;
  heightInches: string;
  weightLb: string;
  diagnoses: string[];
  contraindications: string[];

  // Section 4 — Medications
  takingMedications: "yes" | "no" | "";
  medicationsList: string;
  currentlyUsing: string[];

  // Section 5 — Allergies & Safety
  hasAllergies: "yes" | "no" | "";
  allergyDetails: string;
  injectableReaction: "yes" | "no" | "";
  pregnancyStatus: "yes" | "no" | "na" | "";

  // Section 6 — Goal-specific
  weightLossGoals: string[];
  weightStruggleDuration: string;
  triedWeightLossMeds: "yes" | "no" | "";
  previousWeightMeds: string[];
  eatingHabits: string[];

  recoveryGoals: string[];
  hasActiveInjury: "yes" | "no" | "";
  recentSurgery: "yes" | "no" | "";

  hormoneSymptoms: string[];
  hadRecentLabs: "yes" | "no" | "";

  edFrequency: string;
  takingNitrates: "yes" | "no" | "";

  // Section 7 — Lifestyle
  exerciseFrequency: string;
  sleepQuality: string;
  alcohol: string;
  tobacco: "yes" | "no" | "";

  // Section 8 — Consent
  consentTelehealth: boolean;
  consentHipaa: boolean;
  consentCompounded: boolean;
  consentSubscription: boolean;
  consentMedicalAccuracy: boolean;
};

const initial: IntakeData = {
  fullName: "",
  dob: "",
  biologicalSex: "",
  phone: "",
  email: "",
  shippingAddress: "",
  state: "",
  goals: [],
  heightFeet: "",
  heightInches: "",
  weightLb: "",
  diagnoses: [],
  contraindications: [],
  takingMedications: "",
  medicationsList: "",
  currentlyUsing: [],
  hasAllergies: "",
  allergyDetails: "",
  injectableReaction: "",
  pregnancyStatus: "",
  weightLossGoals: [],
  weightStruggleDuration: "",
  triedWeightLossMeds: "",
  previousWeightMeds: [],
  eatingHabits: [],
  recoveryGoals: [],
  hasActiveInjury: "",
  recentSurgery: "",
  hormoneSymptoms: [],
  hadRecentLabs: "",
  edFrequency: "",
  takingNitrates: "",
  exerciseFrequency: "",
  sleepQuality: "",
  alcohol: "",
  tobacco: "",
  consentTelehealth: false,
  consentHipaa: false,
  consentCompounded: false,
  consentSubscription: false,
  consentMedicalAccuracy: false,
};

type IntakeStore = {
  data: IntakeData;
  set: <K extends keyof IntakeData>(key: K, value: IntakeData[K]) => void;
  toggleArr: (key: keyof IntakeData, value: string) => void;
  reset: () => void;
};

export const useIntake = create<IntakeStore>()(
  persist(
    (setStore) => ({
      data: initial,
      set: (key, value) =>
        setStore((s) => ({ data: { ...s.data, [key]: value } })),
      toggleArr: (key, value) =>
        setStore((s) => {
          const arr = (s.data[key] as unknown as string[]) || [];
          const exists = arr.includes(value);
          const next = exists ? arr.filter((v) => v !== value) : [...arr, value];
          return { data: { ...s.data, [key]: next as any } };
        }),
      reset: () => setStore({ data: initial }),
    }),
    { name: "estrella-intake" }
  )
);

export const calcBmi = (
  feet: string,
  inches: string,
  weightLb: string
): string => {
  const ft = parseFloat(feet);
  const inch = parseFloat(inches);
  const lb = parseFloat(weightLb);
  if (!ft || isNaN(inch) || !lb) return "—";
  const totalInches = ft * 12 + (isNaN(inch) ? 0 : inch);
  if (!totalInches) return "—";
  const bmi = (lb / (totalInches * totalInches)) * 703;
  return bmi.toFixed(1);
};

// risk-tier logic for the provider review screen
export const computeRiskTier = (
  d: IntakeData
): { tier: "low" | "moderate" | "high"; reasons: string[] } => {
  const reasons: string[] = [];
  let tier: "low" | "moderate" | "high" = "low";

  const hardStops = [
    "Pancreatitis",
    "Thyroid cancer",
    "MEN2 syndrome",
    "Cancer",
  ];

  const moderateFlags = [
    "Gallbladder disease",
    "Kidney disease",
    "Liver disease",
    "Stroke",
    "Heart attack",
    "Eating disorder",
    "Seizures",
  ];

  d.contraindications.forEach((c) => {
    if (hardStops.includes(c)) {
      tier = "high";
      reasons.push(`History of ${c} requires a clinician video visit.`);
    } else if (moderateFlags.includes(c)) {
      if (tier !== "high") tier = "moderate";
      reasons.push(`Provider will review your history of ${c}.`);
    }
  });

  if (d.takingNitrates === "yes" && d.goals.includes("Sexual performance")) {
    tier = "high";
    reasons.push(
      "Nitrate use is a contraindication for ED medications — provider review required."
    );
  }

  if (d.pregnancyStatus === "yes") {
    tier = "high";
    reasons.push("Pregnancy / breastfeeding requires clinician review.");
  }

  if (d.injectableReaction === "yes") {
    if (tier === "low") tier = "moderate";
    reasons.push("Past reaction to an injectable will be reviewed.");
  }

  return { tier, reasons };
};
