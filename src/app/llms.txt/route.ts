import { siteConfig } from "@/config/site";

export function GET() {
  const body = `# ${siteConfig.name}

${siteConfig.description}

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn-style components

## Useful paths

- /: portafolio homepage
- /sitemap.xml: sitemap
- /robots.txt: crawler policy

## Repository

https://github.com/moisesvalero/portfolio-sector-IT
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
