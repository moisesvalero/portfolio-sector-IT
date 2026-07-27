import type { Metadata } from "next";

import { siteConfig } from "@/config/site";

type PageMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createPageMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = "/opengraph-image",
  noIndex = false,
}: PageMetadataInput = {}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords: siteConfig.keywords,
    alternates: {
      canonical: url,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    openGraph: {
      title: title ?? siteConfig.name,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title ?? siteConfig.name,
      description,
      images: [imageUrl],
      creator: `@${siteConfig.creator}`,
    },
  };
}

export function createWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "es",
    dateModified: new Date().toISOString().split("T")[0],
  };
}

export function createPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Moisés Valero Sánchez",
    jobTitle: "Técnico de soporte IT N1 / Helpdesk",
    url: siteConfig.url,
    email: "info@moisesvalero.es",
    telephone: "+34627950559",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Alcoy",
      addressRegion: "Alicante",
      addressCountry: "ES",
    },
    knowsAbout: [
      "Soporte IT",
      "Helpdesk",
      "Windows 10/11",
      "Microsoft 365",
      "Soporte remoto",
      "Gestión de tickets",
      "Montaje de PC",
    ],
  };
}

export function createSoftwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    description: siteConfig.description,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    url: siteConfig.url,
  };
}

type FaqItem = { question: string; answer: string };

export function createFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
