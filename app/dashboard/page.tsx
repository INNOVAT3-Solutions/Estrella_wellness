"use client";

import Link from "next/link";
import {
  MessageSquare,
  RefreshCw,
  FlaskConical,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import { useLang, pick } from "@/lib/i18n";

const COPY = {
  en: {
    eyebrow: "Patient dashboard preview",
    title: "One place for messaging, refills, labs, and visits.",
    body: "This is a preview of your patient dashboard. After you complete your consultation and your weight loss plan is approved, you'll log in here to manage everything in your program, including your nutrition plan and exercises.",
    cta: "Start my consultation",
    tiles: [
      {
        title: "Messaging",
        body: "Secure 1:1 messaging with your care team. Most replies are returned within one business day.",
      },
      {
        title: "Refills",
        body: "Request refills, view your active prescriptions, and pause or cancel your program.",
      },
      {
        title: "Labs",
        body: "Upload outside labs, view orders placed by your provider, and track results over time.",
      },
      {
        title: "Visits",
        body: "See your upcoming and past in-clinic visits and manage your weekly appointment schedule.",
      },
    ],
  },
  es: {
    eyebrow: "Vista previa del panel del paciente",
    title: "Un solo lugar para mensajes, resurtidos, laboratorios y visitas.",
    body: "Esta es una vista previa de tu panel de paciente. Cuando completes tu consulta y tu plan de pérdida de peso sea aprobado, entrarás aquí para manejar todo tu programa, incluyendo tu plan de nutrición y tus ejercicios.",
    cta: "Iniciar mi consulta",
    tiles: [
      {
        title: "Mensajes",
        body: "Mensajería segura 1:1 con tu equipo médico. La mayoría de las respuestas llegan en un día hábil.",
      },
      {
        title: "Resurtidos",
        body: "Solicita resurtidos, revisa tus recetas activas y pausa o cancela tu programa.",
      },
      {
        title: "Laboratorios",
        body: "Sube laboratorios externos, revisa órdenes de tu proveedor y sigue tus resultados en el tiempo.",
      },
      {
        title: "Visitas",
        body: "Consulta tus visitas en la clínica, próximas y pasadas, y administra tu calendario de citas semanales.",
      },
    ],
  },
};

const ICONS = [MessageSquare, RefreshCw, FlaskConical, CalendarDays];

export default function DashboardPage() {
  const { lang } = useLang();
  const t = pick(lang, COPY);

  return (
    <section className="bg-mist-50 py-20 font-heading sm:py-28">
      <div className="container-x">
        <div
          className="relative overflow-hidden rounded-3xl bg-navy-950 p-7 text-white shadow-[0_24px_60px_-28px_rgba(6,14,34,.30)] sm:p-12 lg:p-14"
          style={{
            backgroundImage:
              "radial-gradient(55% 70% at 0% 100%, rgba(200,146,56,.18) 0%, rgba(200,146,56,0) 70%)",
          }}
        >
          <span className="tag-pill-dark">
            <span className="h-1.5 w-1.5 rounded-full bg-sun-400" />
            {t.eyebrow}
          </span>
          <h1 className="mt-5 max-w-3xl text-balance font-heading text-[clamp(2.2rem,3.9vw,3.75rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-white">
            {t.title}
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-[17px] leading-relaxed text-white/70">
            {t.body}
          </p>
          <Link href="/qualify" className="btn-pill mt-8">
            {t.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 grid gap-5 sm:mt-8 md:grid-cols-2 lg:grid-cols-4">
          {t.tiles.map((tile, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={tile.title}
                className="rounded-3xl bg-white p-6 shadow-[0_24px_60px_-28px_rgba(6,14,34,.30)] ring-1 ring-navy-900/[0.07] sm:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-950 text-sun-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 font-heading text-[19px] font-bold tracking-[-0.01em] text-navy-950">
                  {tile.title}
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-navy-900/70">
                  {tile.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
