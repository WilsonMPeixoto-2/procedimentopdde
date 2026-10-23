import { expect, test } from "@playwright/test";

test("manual público apresenta os dois caminhos e navega para fiscalização", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByText("Manual digital interativo", { exact: true })).toBeVisible();
  await expect(
    page.getByRole("heading", { name: /Prestação de Contas\s*PDDE/i }).first(),
  ).toBeVisible();
  await expect(page.getByText("Instrução processual", { exact: true }).first()).toBeVisible();
  await expect(page.getByText("Fiscalização", { exact: true }).first()).toBeVisible();

  await page.getByRole("button", { name: /Pesquisar no manual/i }).click();
  const search = page.getByPlaceholder(/Pesquise o texto do manual/i);
  await expect(search).toBeVisible();
  await search.fill("Fiscalização");
  await page
    .getByLabel("Suggestions")
    .getByText("Fiscalização da Prestação de Contas", { exact: true })
    .click();

  await expect(page.locator("#fiscalizacao")).toBeVisible();
});

test("gerador de minuta valida campos obrigatórios", async ({ page }) => {
  await page.goto("/despacho-express");

  await expect(
    page.getByRole("heading", { name: "Gerador de Minuta" }),
  ).toBeVisible();
  await page.getByRole("button", { name: /Gerar minuta em Word/i }).click();

  await expect(
    page.getByRole("paragraph").filter({ hasText: "Selecione o programa" }),
  ).toBeVisible();
  await expect(page.getByText("Campo obrigatório").first()).toBeVisible();
});

test("gerador produz apenas a minuta de encaminhamento em Word", async ({ page }) => {
  await page.goto("/despacho-express");

  await page.getByLabel("Unidade Escolar").fill("Escola Municipal Teste");
  await page.getByLabel("Exercício").fill("2026");
  await page.getByLabel("Presidente do CEC").fill("Maria da Silva");
  await page.getByLabel("CNPJ").fill("12.345.678/0001-95");
  await page.getByLabel("Processo SEI").fill("000704.001704/2026");

  await page.getByRole("combobox").click();
  await page.getByRole("option", { name: "PDDE BÁSICO", exact: true }).click();

  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("button", { name: /Gerar minuta em Word/i }).click();
  const download = await downloadPromise;

  expect(download.suggestedFilename()).toBe(
    "Encaminhamento_Escola_Municipal_Teste_2026.docx",
  );
  await expect(page.getByText("Minuta gerada com sucesso!")).toBeVisible();
  await expect(page.getByText(/não produz parecer de análise nem aprovação/i)).toBeVisible();
});


test("busca full-text encontra conteúdo textual do manual", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("button", { name: /Pesquisar no manual/i }).click();
  const search = page.getByPlaceholder(/Pesquise o texto do manual/i);
  await search.fill("nato-digital");

  const result = page
    .getByLabel("Suggestions")
    .getByText("Inclusão de Documentos", { exact: true });
  await expect(result).toBeVisible();
  await result.click();

  await expect(page.locator("#inclusao")).toBeVisible();
});

test("matriz de fiscalização filtra e detalha o eixo financeiro", async ({ page }) => {
  await page.goto("/#fiscalizacao-matriz");
  await page.locator("#fiscalizacao-matriz").scrollIntoViewIfNeeded();

  await page.getByRole("button", { name: "Financeiro", exact: true }).click();
  const conciliacao = page.locator("#fiscalizacao").getByRole("button", { name: /Conciliação bancária/i });
  await expect(conciliacao).toBeVisible();
  await conciliacao.click();

  await expect(page.getByText("Confronte com", { exact: true })).toBeVisible();
  await expect(page.getByText(/extratos, demonstrativo e saldo em conta/i)).toBeVisible();
});
