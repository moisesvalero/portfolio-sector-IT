import { describe, expect, it } from "vitest";

import {
  createPageMetadata,
  createSoftwareApplicationJsonLd,
  createWebsiteJsonLd,
} from "./seo";

describe("seo helpers", () => {
  it("creates canonical metadata from a relative path", () => {
    const metadata = createPageMetadata({
      title: "Contacto",
      description: "Habla con el equipo.",
      path: "/contacto",
    });

    expect(metadata.alternates?.canonical).toBe(
      "https://moisesvalero.es/contacto",
    );
    expect(metadata.openGraph?.url).toBe("https://moisesvalero.es/contacto");
  });

  it("creates website json-ld for the public portfolio", () => {
    expect(createWebsiteJsonLd()).toMatchObject({
      "@type": "WebSite",
      url: "https://moisesvalero.es",
      inLanguage: "es",
    });
  });

  it("creates software json-ld for answer engines", () => {
    expect(createSoftwareApplicationJsonLd()).toMatchObject({
      "@type": "SoftwareApplication",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
    });
  });
});
