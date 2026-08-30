import { expect, test } from "@playwright/test";

test("manual público carrega e busca navega para uma seção", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.locator("#main-content").getByText("Procedimento Operacional Padrão", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /Prestação\s*de Contas/i }).first(),
  ).toBeVisible();
  await expect(
    page.locator("#main-content").getByRole("heading", { name: "PDDE", exact: true }),
  ).toBeVisible();

  await page.keyboard.press("Control+K");
  const search = page.getByPlaceholder(/Digite um termo ou assunto/i);
  await expect(search).toBeVisible();
  await search.fill("Abertura");
  await page.getByText("Abertura do Processo", { exact: true }).click();

  await expect(page.locator("#abertura")).toBeVisible();
});

test("Despacho Express valida campos obrigatórios", async ({ page }) => {
  await page.goto("/despacho-express");

  await expect(
    page.getByRole("heading", { name: "Gerador de Despachos" }),
  ).toBeVisible();
  await page.getByRole("button", { name: /Gerar e baixar Word/i }).click();

  await expect(
    page.getByRole("paragraph").filter({ hasText: "Selecione o programa" }),
  ).toBeVisible();
  await expect(page.getByText("Campo obrigatório").first()).toBeVisible();
});

test("Despacho Express gera um arquivo Word localmente", async ({ page }) => {
  await page.goto("/despacho-express");

  await page.getByLabel("Unidade Escolar").fill("Escola Municipal Teste");
  await page.getByLabel("Presidente do CEC").fill("Maria da Silva");
  await page.getByLabel("CNPJ").fill("12.345.678/0001-95");
  await page.getByLabel("Processo SEI").fill("000704.001704/2026");

  await page.getByRole("combobox").click();
  await page.getByRole("option", { name: "PDDE BÁSICO/2025" }).click();

  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: /Gerar e baixar Word/i }).click();
  const download = await downloadPromise;

  expect(download.suggestedFilename()).toMatch(/\.docx$/i);
  await expect(page.getByText("Despachos gerados com sucesso!")).toBeVisible();
});
