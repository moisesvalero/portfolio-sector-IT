import { expect, test } from "@playwright/test";

test("portfolio renders without horizontal overflow", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: /Moisés Valero Sánchez/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Descargar CV" }).first(),
  ).toHaveAttribute("href", "/moises-valero-cv-soporte-it.pdf");
  const contactSection = page.locator("#contact");

  await expect(
    contactSection.getByRole("link", { name: "Contacto" }),
  ).toHaveAttribute("href", "mailto:info@moisesvalero.es");
  await expect(
    contactSection.getByRole("link", { name: "WhatsApp" }),
  ).toHaveAttribute("href", "https://wa.me/34627950559");

  const footer = page.locator("footer");

  await expect(
    footer.getByRole("link", { name: "Moisés Valero" }),
  ).toHaveAttribute("href", "https://moisesvalero.es");
  await expect(
    footer.getByRole("link", { name: "Repositorio en GitHub" }),
  ).toHaveAttribute(
    "href",
    "https://github.com/moisesvalero/portfolio-sector-IT",
  );
  await expect(footer.getByRole("link", { name: "LinkedIn" })).toHaveCount(0);

  const metrics = await page.evaluate(() => {
    const main = document.querySelector("main");
    const profileImage = document.querySelector(
      'img[alt="Moisés Valero Sánchez"]',
    );
    const profileFrame = profileImage?.parentElement;
    const imageRect = profileImage?.getBoundingClientRect();
    const frameRect = profileFrame?.getBoundingClientRect();

    return {
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      stylesheetCount: document.styleSheets.length,
      theme: document.documentElement.dataset.theme,
      mainBackground: main ? getComputedStyle(main).backgroundColor : "",
      imageObjectFit: profileImage
        ? getComputedStyle(profileImage).objectFit
        : "",
      imageWidth: imageRect?.width ?? 0,
      imageHeight: imageRect?.height ?? 0,
      frameWidth: frameRect?.width ?? 0,
      frameHeight: frameRect?.height ?? 0,
    };
  });

  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
  expect(metrics.stylesheetCount).toBeGreaterThan(0);
  expect(metrics.theme).toBe("dark");
  expect(metrics.mainBackground).toBe("rgb(0, 0, 0)");
  expect(metrics.imageObjectFit).toBe("cover");
  expect(metrics.frameWidth).toBeGreaterThanOrEqual(180);
  expect(metrics.frameWidth).toBeLessThanOrEqual(260);
  expect(metrics.frameHeight).toBeGreaterThanOrEqual(180);
  expect(metrics.frameHeight).toBeLessThanOrEqual(260);
  expect(metrics.imageWidth).toBeLessThanOrEqual(260);
  expect(metrics.imageHeight).toBeLessThanOrEqual(260);
});

test("theme follows system preference and can be changed", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/");

  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await expect(
    page.getByRole("button", { name: "Modo claro" }),
  ).toHaveAttribute("aria-pressed", "true");

  await page.getByRole("button", { name: "Modo oscuro" }).click();

  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(
    page.getByRole("button", { name: "Modo oscuro" }),
  ).toHaveAttribute("aria-pressed", "true");

  await page.reload();

  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});
