import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Política de Cookies",
  path: "/cookies",
  noIndex: true,
});

export default function CookiesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-[var(--foreground)]">
      <h1 className="mb-8 text-[32px] leading-10 font-bold">
        Política de Cookies
      </h1>
      <p className="mb-6 text-[14px] leading-5 text-[var(--subtle-foreground)]">
        Última actualización: julio 2026
      </p>

      <section className="space-y-4 text-[16px] leading-6 text-[var(--body-copy)]">
        <h2 className="text-[20px] leading-7 font-semibold text-[var(--foreground)]">
          ¿Qué son las cookies?
        </h2>
        <p>
          Las cookies son pequeños archivos de texto que los sitios web
          almacenan en el navegador del usuario para recordar preferencias o
          mejorar la experiencia de navegación.
        </p>

        <h2 className="text-[20px] leading-7 font-semibold text-[var(--foreground)]">
          Cookies utilizadas en este sitio
        </h2>
        <p>
          Este sitio web no utiliza cookies de seguimiento, publicitarias ni de
          terceros. Únicamente se utiliza el almacenamiento local del navegador
          (localStorage) para recordar tu preferencia de tema (oscuro/claro).
          Esta información no se envía a ningún servidor externo.
        </p>

        <h2 className="text-[20px] leading-7 font-semibold text-[var(--foreground)]">
          Cookies de terceros
        </h2>
        <p>
          Este sitio no integra servicios externos que instalen cookies propias.
          Los enlaces a servicios externos (GitHub, WhatsApp) se rigen por sus
          propias políticas de cookies.
        </p>

        <h2 className="text-[20px] leading-7 font-semibold text-[var(--foreground)]">
          Cómo gestionar las cookies
        </h2>
        <p>
          Puedes gestionar o eliminar las cookies desde la configuración de tu
          navegador. A continuación, encontrarás enlaces a las guías de los
          navegadores más comunes:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--primary)] underline underline-offset-2"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--primary)] underline underline-offset-2"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--primary)] underline underline-offset-2"
            >
              Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--primary)] underline underline-offset-2"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>

        <h2 className="text-[20px] leading-7 font-semibold text-[var(--foreground)]">
          Más información
        </h2>
        <p>
          Para cualquier consulta sobre esta política, puedes escribir a
          info@moisesvalero.es.
        </p>
      </section>

      <div className="mt-12">
        <a
          href="/"
          className="text-[14px] leading-5 text-[var(--subtle-foreground)] underline underline-offset-2 transition-colors hover:text-[var(--foreground)]"
        >
          ← Volver al inicio
        </a>
      </div>
    </main>
  );
}
