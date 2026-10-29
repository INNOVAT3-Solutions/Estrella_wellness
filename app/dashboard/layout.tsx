import { redirect } from "next/navigation";
import { SHOW_PATIENT_PORTAL } from "@/lib/features";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!SHOW_PATIENT_PORTAL) redirect("/");
  return children;
}
