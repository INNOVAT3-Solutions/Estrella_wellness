import { IntakeProgress } from "@/components/intake/progress";

export default function QualifyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-sand-50">
      <IntakeProgress />
      <div className="container-x py-12 sm:py-16">{children}</div>
    </div>
  );
}
