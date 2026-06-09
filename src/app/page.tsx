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
  "Montaje PC",
  "Active Directory (básico)",
];

const offers = [
  "Resolución de incidencias con trato cercano",
  "Preparación de equipos listos para trabajar",
  "Configuración de periféricos, correo y herramientas",
  "Montaje y puesta a punto de PCs nuevos",
  "Soporte remoto y presencial en entornos Windows",
  "Registro claro de tickets y soluciones aplicadas",
];

const experiences = [
  {
    role: "Técnico IT / Soporte informático",
    period: "2024 - Actualidad",
    company: "Autónomo y proyectos propios",
    description:
      "Soporte técnico para usuarios, organizaciones y equipos de trabajo que necesitan resolver incidencias sin fricción.",
  },
  {
    role: "Mantenimiento IT y soporte web",
    period: "2012 - 2014",
    company: "MutuaSAD",
    description:
      "Mantenimiento preventivo y correctivo de sistemas, soporte web y mejora de procesos digitales internos.",
  },
  {
    role: "Operario de línea - control digital",
    period: "2015 - 2019",
    company: "Replus",
    description:
      "Control de maquinaria CNC y gestión de procesos digitales en un entorno industrial con foco en precisión y continuidad.",
  },
];

const education = [
  {
    icon: GraduationCap,
    title: "Certificado de Soporte IBM",
    subtitle: "IBM SkillsBuild",
  },
  {
    icon: Code2,
    title: "Certificado IFCD0210",
    subtitle: "Desarrollo de aplicaciones web",
  },
  {
    icon: Sparkles,
    title: "IA generativa para soporte",
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
            Descargar CV
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
                className="object-cover contrast-[1.02] saturate-[1.08] transition-all duration-500 hover:scale-105 hover:saturate-[1.18]"
              />
            </div>
          </div>

          <div className="text-center md:col-span-9 md:text-left">
            <h1 className="mb-4 text-[24px] leading-8 font-bold text-white md:text-[52px] md:leading-[60px] xl:text-[64px] xl:leading-[72px]">
              Moisés Valero Sánchez
            </h1>
            <p className="mx-auto mb-4 max-w-2xl text-[20px] leading-7 font-semibold text-[#A1A1AA] md:mx-0 md:text-[24px] md:leading-8">
              Técnico de soporte IT N1 para usuarios y equipos Windows
            </p>
            <p className="mx-auto flex max-w-full items-start justify-center gap-2 text-[16px] leading-6 text-[#888888] md:mx-0 md:justify-start">
              <MapPin className="mt-1 size-4 shrink-0" aria-hidden="true" />
              <span className="min-w-0">
                Alcoy, Alicante · Disponible presencial, híbrido o remoto
              </span>
            </p>
          </div>
        </section>

        <section className="mb-12 max-w-3xl">
          <h2 className="mb-6 text-[14px] leading-5 font-medium text-[#888888] uppercase">
            Sobre mí
          </h2>
          <p className="text-[18px] leading-7 text-[#e2e2e2]">
            Ayudo a usuarios y equipos de trabajo a recuperar su ritmo cuando
            algo falla: equipos Windows, Microsoft 365, redes básicas,
            periféricos, soporte remoto y documentación de incidencias. También
            monto y pongo a punto PCs nuevos, desde equipos de trabajo hasta
            configuraciones a medida. Combino trato cercano con base técnica en
            desarrollo web y automatización para entender el problema,
            resolverlo y dejarlo bien explicado.
          </p>
        </section>

        <section className="mb-24">
          <div className="rounded-xl border border-l-4 border-[#333333] border-l-white bg-[#111111] p-12 transition-colors hover:border-white">
            <p className="text-[20px] leading-7 font-semibold text-white italic md:text-[24px] md:leading-8">
              &quot;Mi experiencia en desarrollo web me da una base técnica
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
                Qué aporto
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
              Experiencia profesional
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
              Herramientas e infraestructura
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
              Formación y certificaciones
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
            ¿Buscas un técnico IT resolutivo para tu equipo?
          </h2>
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <a
              className="rounded-lg bg-white px-10 py-4 text-[14px] leading-5 font-bold text-black transition-opacity hover:opacity-90"
              href="/moises-valero-cv-soporte-it.pdf"
              download
            >
              Descargar CV
            </a>
            <a className="contact-button" href="mailto:info@moisesvalero.es">
              <Mail className="size-4" aria-hidden="true" />
              Contacto
            </a>
            <a
              className="contact-button"
              href="https://wa.me/34627950559"
              target="_blank"
              rel="noreferrer"
            >
              <Phone className="size-4" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </section>
      </div>

      <footer className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-4 border-t border-[#333333] px-4 py-12 md:flex-row md:px-6">
        <p className="text-[14px] leading-5 font-medium text-[#888888]">
          Desarrollado por{" "}
          <a
            className="text-white transition-opacity hover:opacity-80"
            href="https://moisesvalero.es"
            target="_blank"
            rel="noreferrer"
          >
            Moisés Valero
          </a>
        </p>
        <div className="flex gap-6">
          <a
            className="nav-link"
            href="https://github.com/moisesvalero/portfolio-sector-IT"
            target="_blank"
            rel="noreferrer"
            aria-label="Repositorio en GitHub"
          >
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.09.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.32 9.32 0 0 1 12 7.02c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.95.68 1.91v2.83c0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
            </svg>
          </a>
          <a
            className="nav-link"
            href="mailto:info@moisesvalero.es"
            aria-label="Enviar email"
          >
            <Mail className="size-5" aria-hidden="true" />
          </a>
        </div>
      </footer>
    </main>
  );
}
