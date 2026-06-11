import { describe, expect, it } from "vitest";

import nextConfig from "./next.config";

describe("next security headers", () => {
  it("applies the expected hardening headers globally", async () => {
    const headersConfig = await nextConfig.headers?.();
    const globalHeaders = headersConfig?.find(
      (entry) => entry.source === "/(.*)",
    )?.headers;
    const headers = new Map(
      globalHeaders?.map(({ key, value }) => [key, value]),
    );

    expect(headers.get("Content-Security-Policy")).toContain(
      "default-src 'self'",
    );
    expect(headers.get("Content-Security-Policy")).toContain(
      "object-src 'none'",
    );
    expect(headers.get("Content-Security-Policy")).toContain(
      "frame-ancestors 'none'",
    );
    expect(headers.get("Cross-Origin-Opener-Policy")).toBe("same-origin");
    expect(headers.get("Cross-Origin-Resource-Policy")).toBe("same-origin");
    expect(headers.get("Cross-Origin-Embedder-Policy")).toBe("require-corp");
    expect(headers.get("X-Content-Type-Options")).toBe("nosniff");
    expect(headers.get("Referrer-Policy")).toBe(
      "strict-origin-when-cross-origin",
    );
    expect(headers.get("Permissions-Policy")).toBe(
      "camera=(), microphone=(), geolocation=()",
    );
  });
});
