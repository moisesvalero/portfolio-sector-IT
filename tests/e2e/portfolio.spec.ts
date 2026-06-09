import { expect, test } from "@playwright/test";

test("portfolio renders without horizontal overflow", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: /Moises Valero Sanchez/i }),
  ).toBeVisible();
  await expect(
    page.getByRole("link", { name: "Descargar CV (PDF)" }),
  ).toHaveAttribute("href", "/moises-valero-cv-soporte-it.pdf");

  const metrics = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));

  expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
});
