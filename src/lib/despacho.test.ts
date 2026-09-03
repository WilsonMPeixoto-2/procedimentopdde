import { describe, expect, it } from "vitest";
import { despachoFormSchema, getDespachoFileName } from "./despacho";

const validData = {
  unidadeEscolar: "Escola Municipal Teste",
  programa: "PDDE BÁSICO/2025",
  presidente: "Maria da Silva",
  cnpj: "12.345.678/0001-95",
  processo: "000704.001704/2026",
};

describe("despachoFormSchema", () => {
  it("aceita um conjunto completo de dados", () => {
    expect(despachoFormSchema.parse(validData)).toEqual(validData);
  });

  it("rejeita cada campo obrigatório quando vazio", () => {
    for (const field of Object.keys(validData) as Array<keyof typeof validData>) {
      const result = despachoFormSchema.safeParse({ ...validData, [field]: "" });
      expect(result.success, field).toBe(false);
    }
  });

  it("preserva a regra atual de exigir conteúdo sem impor máscara", () => {
    const relaxed = {
      ...validData,
      cnpj: "CEC sem máscara",
      processo: "processo legado",
    };
    expect(despachoFormSchema.safeParse(relaxed).success).toBe(true);
  });
});

describe("getDespachoFileName", () => {
  it("converte blocos de espaço em underscores", () => {
    expect(getDespachoFileName("Escola   Municipal\nTeste")).toBe(
      "Despachos_Escola_Municipal_Teste.docx",
    );
  });
});
