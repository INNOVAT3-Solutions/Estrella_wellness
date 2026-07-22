"use client";

import Link from "next/link";
import {
  MessageSquare,
  RefreshCw,
  FlaskConical,
  Truck,
  ArrowRight,
} from "lucide-react";
import { useLang, pick } from "@/lib/i18n";

const COPY = {
  en: {
    eyebrow: "Patient dashboard preview",
    title: "One place for messaging, refills, labs, and shipments.",
    body: "This is a preview of your patient dashboard. After you complete your consultation and your weight loss plan is approved, you'll log in here to manage everything in your program — including your nutrition plan and exercises.",
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
        title: "Shipments",
        body: "Track current and past shipments, manage your shipping address, and update your schedule.",
      },
    ],
  },
  es: {
    eyebrow: "Vista previa del panel del paciente",
    title: "Un solo lugar para mensajes, resurtidos, laboratorios y envíos.",
    body: "Esta es una vista previa de tu panel de paciente. Cuando completes tu consulta y tu plan de pérdida de peso sea aprobado, entrarás aquí para manejar todo tu programa — incluyendo tu plan de nutrición y tus ejercicios.",
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
        title: "Envíos",
        body: "Rastrea envíos actuales y pasados, administra tu dirección y actualiza tu calendario.",
      },
    ],
  },
};

const ICONS = [MessageSquare, RefreshCw, FlaskConical, Truck];

export default function DashboardPage() {
  const { lang } = useLang();
  const t = pick(lang, COPY);

  return (
    <section className="section bg-sand-50">
      <div className="container-x">
        <div className="rounded-[2.5rem] bg-navy-gradient p-10 text-white sm:p-14">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sun-300">
            {t.eyebrow}
          </div>
          <h1 className="mt-2 font-display text-3xl sm:text-4xl">{t.title}</h1>
          <p className="mt-4 max-w-xl text-white/75">{t.body}</p>
          <Link
            href="/qualify"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-sun-500 px-6 py-3 font-medium text-white shadow-glow hover:bg-sun-600"
          >
            {t.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {t.tiles.map((tile, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={tile.title}
                className="rounded-3xl border border-navy-100 bg-white p-6 shadow-soft"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy-900 text-sun-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-5 font-display text-lg text-navy-900">
                  {tile.title}
                </div>
                <div className="mt-2 text-sm leading-relaxed text-navy-600">
                  {tile.body}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
