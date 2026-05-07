import Link from "next/link";
import {
  MessageSquare,
  RefreshCw,
  FlaskConical,
  Truck,
  ArrowRight,
} from "lucide-react";

const tiles = [
  {
    icon: MessageSquare,
    title: "Messaging",
    body: "Secure 1:1 messaging with your care team. Most replies are returned within one business day.",
  },
  {
    icon: RefreshCw,
    title: "Refills",
    body: "Request refills, view your active prescriptions, and pause or cancel a program.",
  },
  {
    icon: FlaskConical,
    title: "Labs",
    body: "Upload outside labs, view orders placed by your provider, and track results over time.",
  },
  {
    icon: Truck,
    title: "Shipments",
    body: "Track current and past shipments, manage your shipping address, and update your schedule.",
  },
];

export default function DashboardPage() {
  return (
    <section className="section bg-sand-50">
      <div className="container-x">
        <div className="rounded-[2.5rem] bg-navy-gradient p-10 text-white sm:p-14">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sun-300">
            Patient dashboard preview
          </div>
          <h1 className="mt-2 font-display text-3xl sm:text-4xl">
            One place for messaging, refills, labs, and shipments.
          </h1>
          <p className="mt-4 max-w-xl text-white/75">
            This is a preview of your patient dashboard. After you complete
            intake and your plan is approved, you'll log in here to manage
            everything in your program.
          </p>
          <Link
            href="/qualify"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-sun-500 px-6 py-3 font-medium text-white shadow-glow hover:bg-sun-600"
          >
            Start intake
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-900 text-sun-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-5 font-display text-lg text-navy-900">
                  {t.title}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-navy-600">
                  {t.body}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
