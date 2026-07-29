import type { Metadata } from "next";
import Link from "next/link";

import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Aviso Legal",
  path: "/aviso-legal",
  noIndex: true,
});

export default function AvisoLegalPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 text-[var(--foreground)]">
      <h1 className="mb-8 text-[32px] leading-10 font-bold">Aviso Legal</h1>
      <p className="mb-6 text-[14px] leading-5 text-[var(--subtle-foreground)]">
        Última actualización: julio 2026
      </p>

      <section className="space-y-4 text-[16px] leading-6 text-[var(--body-copy)]">
        <h2 className="text-[20px] leading-7 font-semibold text-[var(--foreground)]">
          Datos identificativos
        </h2>
        <p>
          <strong>Titular:</strong> Moisés Valero Sánchez
          <br />
          <strong>Email:</strong> info@moisesvalero.es
          <br />
          <strong>Teléfono:</strong> +34 627 950 559
          <br />
          <strong>Domicilio:</strong> Alcoy, Alicante (España)
        </p>

        <h2 className="text-[20px] leading-7 font-semibold text-[var(--foreground)]">
          Finalidad
        </h2>
        <p>
          Este sitio web tiene como finalidad mostrar el portafolio profesional
          y los servicios de soporte IT de Moisés Valero Sánchez, así como
          facilitar el contacto con posibles clientes o empleadores.
        </p>

        <h2 className="text-[20px] leading-7 font-semibold text-[var(--foreground)]">
          Propiedad intelectual
        </h2>
        <p>
          Todos los contenidos del sitio (textos, imágenes, diseño, código) son
          propiedad de Moisés Valero Sánchez, salvo que se indique lo contrario.
          Queda prohibida la reproducción total o parcial sin autorización
          expresa.
        </p>

        <h2 className="text-[20px] leading-7 font-semibold text-[var(--foreground)]">
          Exención de responsabilidad
        </h2>
        <p>
          El titular no se responsabiliza de los daños o perjuicios derivados
          del uso de la información contenida en este sitio web, ni de los
          contenidos enlazados a sitios de terceros.
        </p>

        <h2 className="text-[20px] leading-7 font-semibold text-[var(--foreground)]">
          Legislación aplicable
        </h2>
        <p>
          Este aviso legal se rige por la legislación española. Cualquier
          controversia se someterá a los juzgados y tribunales de Alcoy
          (Alicante).
        </p>

        <h2 className="text-[20px] leading-7 font-semibold text-[var(--foreground)]">
          Contacto
        </h2>
        <p>
          Para cualquier consulta, puedes escribir a info@moisesvalero.es o
          consultar la{" "}
          <Link
            href="/privacidad"
            className="text-[var(--primary)] underline underline-offset-2"
          >
            política de privacidad
          </Link>{" "}
          y la{" "}
          <Link
            href="/cookies"
            className="text-[var(--primary)] underline underline-offset-2"
          >
            política de cookies
          </Link>
          .
        </p>
      </section>

      <div className="mt-12">
        <Link
          href="/"
          className="text-[14px] leading-5 text-[var(--subtle-foreground)] underline underline-offset-2 transition-colors hover:text-[var(--foreground)]"
        >
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}
