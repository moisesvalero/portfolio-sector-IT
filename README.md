# Moises Valero Sanchez - Portfolio Soporte IT

Micro landing profesional orientada a reclutadores para presentar mi perfil de **Tecnico IT Nivel 1 / Helpdesk / Soporte a usuarios**.

![Captura del portfolio](docs/images/portfolio-screenshot.png)

## Perfil

Soy Moises Valero Sanchez, tecnico IT con enfoque practico en soporte a usuarios, resolucion de incidencias y preparacion de equipos. Trabajo con entornos Windows 10/11, Microsoft 365, Outlook, impresoras, redes basicas, soporte remoto y documentacion de tickets.

Busco oportunidades en soporte IT, helpdesk o service desk, especialmente en entornos donde se valore la comunicacion clara con usuarios, la autonomia y la capacidad de aprender herramientas internas con rapidez.

## Contenido del portfolio

- Resumen profesional enfocado a soporte IT Nivel 1.
- Experiencia relevante en soporte informatico, mantenimiento IT y control digital.
- Stack de herramientas: Windows, Microsoft 365, Outlook, Teams, AnyDesk, TeamViewer, GLPI/Jira, Freshdesk y Active Directory basico.
- Formacion y certificaciones relacionadas con soporte, desarrollo web, IA aplicada y analitica.
- CV descargable en PDF desde la propia landing.

## Seguridad y privacidad

Este repositorio no incluye secretos, claves privadas ni variables de entorno reales.

Antes de hacerlo publico se reviso:

- Ausencia de archivos `.env.local`, claves `.pem/.key` o credenciales privadas trackeadas.
- Busqueda de patrones sensibles como tokens, passwords, claves API, IBAN y DNI/NIF.
- PDF publico del CV revisado para evitar DNI/NIF, IBAN, numeros largos o direccion completa.

Los datos personales publicados quedan limitados al contenido profesional necesario del portfolio y del CV.

## Stack tecnico

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- pnpm
- oxlint
- knip
- Vitest
- Playwright
- Husky + lint-staged

## Desarrollo local

```bash
pnpm install
pnpm dev
```

La web queda disponible por defecto en:

```bash
http://localhost:3000
```

## Validacion

```bash
pnpm lint
pnpm knip
pnpm check
pnpm format
pnpm test
pnpm test:e2e
pnpm build
```

## Estructura principal

```text
src/app/page.tsx                 Landing principal
src/app/globals.css              Sistema visual oscuro inspirado en Vercel
src/config/site.ts               Metadata base del portfolio
src/lib/seo.ts                   JSON-LD y metadata SEO
public/moises-valero-profile.png Imagen de perfil
public/moises-valero-cv-soporte-it.pdf CV descargable
tests/e2e/portfolio.spec.ts      Test responsive y enlace de descarga
```
