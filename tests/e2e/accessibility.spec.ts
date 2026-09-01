import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

for (const path of ["/", "/despacho-express"]) {
  test(`${path} não possui violações críticas de acessibilidade`, async ({ page }) => {
    await page.goto(path);

    const results = await new AxeBuilder({ page }).analyze();
    const critical = results.violations.filter(
      (violation) => violation.impact === "critical",
    );

    expect(critical, JSON.stringify(critical, null, 2)).toEqual([]);
  });
}
