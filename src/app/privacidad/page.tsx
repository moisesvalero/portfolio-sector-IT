import type { Metadata } from "next";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Política de Privacidad",
  path: "/privacidad",
  noIndex: true,
});

export default function PrivacidadPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-[var(--foreground)]">
      <h1 className="mb-8 text-[32px] leading-10 font-bold">
        Política de Privacidad
      </h1>
      <p className="mb-6 text-[14px] leading-5 text-[var(--subtle-foreground)]">
        Última actualización: julio 2026
      </p>

      <section className="space-y-4 text-[16px] leading-6 text-[var(--body-copy)]">
        <h2 className="text-[20px] leading-7 font-semibold text-[var(--foreground)]">
          Responsable del tratamiento
        </h2>
        <p>
          <strong>Moisés Valero Sánchez</strong>
          <br />
          Email: info@moisesvalero.es
          <br />
          Teléfono: +34 627 950 559
          <br />
          Alcoy, Alicante (España)
        </p>

        <h2 className="text-[20px] leading-7 font-semibold text-[var(--foreground)]">
          Finalidad del tratamiento
        </h2>
        <p>
          Los datos personales recogidos a través de este sitio web se utilizan
          únicamente para:
        </p>
        <ul className="list-disc pl-6">
          <li>Gestionar las solicitudes de contacto enviadas por email.</li>
          <li>Gestionar la descarga del currículum vitae.</li>
          <li>
            Analizar el tráfico web mediante herramientas de analítica (si
            aplica).
          </li>
        </ul>

        <h2 className="text-[20px] leading-7 font-semibold text-[var(--foreground)]">
          Base legal
        </h2>
        <p>
          El tratamiento se basa en el consentimiento del usuario al contactar
          voluntariamente, así como en el interés legítimo de mostrar un
          portafolio profesional.
        </p>

        <h2 className="text-[20px] leading-7 font-semibold text-[var(--foreground)]">
          Conservación de los datos
        </h2>
        <p>
          Los datos se conservan durante el tiempo necesario para atender la
          solicitud y posteriormente durante los plazos legales aplicables.
        </p>

        <h2 className="text-[20px] leading-7 font-semibold text-[var(--foreground)]">
          Derechos del usuario
        </h2>
        <p>
          Puedes ejercer tus derechos de acceso, rectificación, supresión,
          limitación, portabilidad y oposición escribiendo a
          info@moisesvalero.es.
        </p>

        <h2 className="text-[20px] leading-7 font-semibold text-[var(--foreground)]">
          Enlaces a terceros
        </h2>
        <p>
          Este sitio puede contener enlaces a sitios externos (GitHub,
          WhatsApp). No nos responsabilizamos de sus prácticas de privacidad.
        </p>

        <h2 className="text-[20px] leading-7 font-semibold text-[var(--foreground)]">
          Cookies
        </h2>
        <p>
          Este sitio no utiliza cookies de terceros ni de seguimiento. Solo se
          almacena localmente la preferencia de tema oscuro/claro en tu
          navegador. Consulta la{" "}
          <a
            href="/cookies"
            className="text-[var(--primary)] underline underline-offset-2"
          >
            política de cookies
          </a>{" "}
          para más información.
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
