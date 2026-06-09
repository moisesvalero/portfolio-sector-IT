import Image from "next/image";
import {
  Code2,
  GraduationCap,
  LayoutDashboard,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { JsonLd } from "@/components/seo/json-ld";
import { createPersonJsonLd, createWebsiteJsonLd } from "@/lib/seo";

const tools = [
  "Windows 10/11",
  "Microsoft 365",
  "Outlook",
  "Teams",
  "AnyDesk",
  "TeamViewer",
  "GLPI / Jira",
  "Freshdesk",
  "Active Directory (Basico)",
];

const offers = [
  "Soporte a usuarios (L1)",
  "Preparacion de equipos",
  "Configuracion de impresoras",
  "Redes basicas",
  "Gestion y documentacion de tickets",
];

const experiences = [
  {
    role: "Tecnico IT / Soporte informatico",
    period: "2024 - Actualidad",
    company: "Autonomo y proyectos propios",
    description:
      "Soporte tecnico integral para clientes particulares y pequenos negocios.",
  },
  {
    role: "Mantenimiento IT y soporte web",
    period: "2012 - 2014",
    company: "MutuaSAD",
    description:
      "Mantenimiento preventivo y correctivo de sistemas y presencia digital.",
  },
  {
    role: "Operario de linea - control digital",
    period: "2015 - 2019",
    company: "Replus",
    description:
      "Control de maquinaria CNC y gestion de procesos digitales industriales.",
  },
];

const education = [
  {
    icon: GraduationCap,
    title: "IBM Support Certificate",
    subtitle: "IBM SkillsBuild",
  },
  {
    icon: Code2,
    title: "IFCD0210 Certificate",
    subtitle: "Web App Development",
  },
  {
    icon: Sparkles,
    title: "Generative AI for Support",
    subtitle: "Microsoft / LinkedIn",
  },
  {
    icon: LayoutDashboard,
    title: "Google Analytics 4",
    subtitle: "Google Academy",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <JsonLd data={createWebsiteJsonLd()} />
      <JsonLd data={createPersonJsonLd()} />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#333333] bg-black/80 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 md:px-6">
          <a className="text-[18px] leading-7 font-bold text-white" href="#">
            MVS
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a className="nav-link" href="#experience">
              Experiencia
            </a>
            <a className="nav-link" href="#projects">
              Proyectos
            </a>
            <a className="nav-link" href="#education">
              Formacion
            </a>
            <a className="nav-link" href="#contact">
              Contacto
            </a>
          </div>

          <a
            className="rounded-lg bg-white px-4 py-2 text-[14px] leading-5 font-bold text-black transition-opacity hover:opacity-90"
            href="/moises-valero-cv-soporte-it.pdf"
            download
          >
            Resume
          </a>
        </nav>
      </header>

      <div className="mx-auto w-full max-w-[1200px] px-4 pt-32 pb-24 md:px-0">
        <section className="mb-24 grid grid-cols-1 items-center gap-6 md:grid-cols-12">
          <div className="flex justify-center md:col-span-3 md:justify-start">
            <div className="relative size-48 overflow-hidden rounded-full border-2 border-[#333333] bg-[#111111] md:size-64">
              <Image
                src="/moises-valero-profile.png"
                alt="Moises Valero Sanchez"
                fill
                priority
                sizes="(min-width: 768px) 256px, 192px"
                className="object-cover contrast-[1.02] grayscale saturate-[1.08] transition-all duration-500 hover:scale-105 hover:grayscale-0"
              />
            </div>
          </div>

          <div className="text-center md:col-span-9 md:text-left">
            <h1 className="mb-4 text-[24px] leading-8 font-bold text-white md:text-[52px] md:leading-[60px] xl:text-[64px] xl:leading-[72px]">
              Moises Valero Sanchez
            </h1>
            <p className="mx-auto mb-4 max-w-2xl text-[20px] leading-7 font-semibold text-[#A1A1AA] md:mx-0 md:text-[24px] md:leading-8">
              Tecnico IT Nivel 1 / Helpdesk / Soporte a usuarios
            </p>
            <p className="mx-auto flex max-w-full items-start justify-center gap-2 text-[16px] leading-6 text-[#888888] md:mx-0 md:justify-start">
              <MapPin className="mt-1 size-4 shrink-0" aria-hidden="true" />
              <span className="min-w-0">
                Alcoy, Alicante (Disponible para remoto / hibrido)
              </span>
            </p>
          </div>
        </section>

        <section className="mb-12 max-w-3xl">
          <h2 className="mb-6 text-[14px] leading-5 font-medium text-[#888888] uppercase">
            About
          </h2>
          <p className="text-[18px] leading-7 text-[#e2e2e2]">
            Tecnico IT Nivel 1 con experiencia practica en soporte a usuarios,
            Windows 10/11, Microsoft 365, impresoras, redes basicas, soporte
            remoto, documentacion de incidencias y mantenimiento de equipos.
            Perfil resolutivo, con base tecnica solida en entornos web y
            automatizacion, orientado a solucionar problemas reales de usuario.
          </p>
        </section>

        <section className="mb-24">
          <div className="rounded-xl border border-l-4 border-[#333333] border-l-white bg-[#111111] p-12 transition-colors hover:border-white">
            <p className="text-[20px] leading-7 font-semibold text-white italic md:text-[24px] md:leading-8">
              &quot;Mi experiencia en desarrollo web me da una base tecnica
              fuerte para entender sistemas, documentar soluciones y aprender
              herramientas IT con rapidez.&quot;
            </p>
          </div>
        </section>

        <section
          className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-12"
          id="experience"
        >
          <div className="portfolio-card flex flex-col justify-between p-6 md:col-span-4">
            <div>
              <h3 className="mb-6 text-[24px] leading-8 font-semibold text-white">
                What I Offer
              </h3>
              <ul className="flex flex-col gap-4 text-[16px] leading-6 text-[#A1A1AA]">
                {offers.map((offer) => (
                  <li key={offer} className="dash-item">
                    {offer}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 border-t border-[#333333] pt-6">
              <ShieldCheck className="size-10 text-white" aria-hidden="true" />
            </div>
          </div>

          <div className="space-y-4 md:col-span-8">
            <h3 className="mb-6 text-[24px] leading-8 font-semibold text-white">
              Professional Experience
            </h3>
            {experiences.map((item) => (
              <article key={item.role} className="portfolio-card p-4">
                <div className="mb-2 flex items-start justify-between gap-4">
                  <h4 className="text-[18px] leading-7 font-bold text-white">
                    {item.role}
                  </h4>
                  <span className="shrink-0 font-mono text-[13px] leading-[18px] text-[#888888]">
                    {item.period}
                  </span>
                </div>
                <p className="mb-1 text-[16px] leading-6 text-white">
                  {item.company}
                </p>
                <p className="text-[14px] leading-5 text-[#888888]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="md:col-span-12" id="projects">
            <h3 className="mb-6 text-[24px] leading-8 font-semibold text-white">
              Tools &amp; Infrastructure
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span key={tool} className="skill-chip">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-12 md:col-span-12" id="education">
            <h3 className="mb-6 text-[24px] leading-8 font-semibold text-white">
              Education &amp; Certifications
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {education.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="portfolio-card p-4">
                    <Icon
                      className="mb-3 size-5 text-[#888888]"
                      aria-hidden="true"
                    />
                    <h4 className="mb-1 text-[14px] leading-5 font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="font-mono text-[13px] leading-[18px] text-[#888888]">
                      {item.subtitle}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="flex flex-col items-center text-center"
          id="contact"
        >
          <h2 className="mb-8 text-[24px] leading-8 font-semibold text-white md:text-[32px] md:leading-10">
            Ready to strengthen your IT team?
          </h2>
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <a
              className="rounded-lg bg-white px-10 py-4 text-[14px] leading-5 font-bold text-black transition-opacity hover:opacity-90"
              href="/moises-valero-cv-soporte-it.pdf"
              download
            >
              Descargar CV (PDF)
            </a>
            <a className="contact-button" href="mailto:info@moisesvalero.es">
              <Mail className="size-4" aria-hidden="true" />
              info@moisesvalero.es
            </a>
            <a className="contact-button" href="tel:627950559">
              <Phone className="size-4" aria-hidden="true" />
              627 950 559
            </a>
          </div>
        </section>
      </div>

      <footer className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-4 border-t border-[#333333] px-4 py-12 md:flex-row md:px-6">
        <span className="text-[14px] leading-5 font-medium text-[#888888]">
          (c) 2024 Moises Valero Sanchez. Built with structural integrity.
        </span>
        <div className="flex gap-6">
          <a className="nav-link" href="https://github.com/moisesvalero">
            GitHub
          </a>
          <a className="nav-link" href="https://www.linkedin.com/">
            LinkedIn
          </a>
          <a className="nav-link" href="mailto:info@moisesvalero.es">
            Email
          </a>
        </div>
      </footer>
    </main>
  );
}
