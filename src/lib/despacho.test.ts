import { describe, expect, it } from "vitest";
import { despachoFormSchema, getDespachoFileName } from "./despacho";

const validData = {
  unidadeEscolar: "Escola Municipal Teste",
  programa: "PDDE BÁSICO",
  exercicio: "2026",
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

  it("exige exercício com quatro dígitos", () => {
    expect(despachoFormSchema.safeParse({ ...validData, exercicio: "26" }).success).toBe(false);
  });

  it("preserva a regra de não impor máscara a CNPJ e processo", () => {
    const relaxed = {
      ...validData,
      cnpj: "CEC sem máscara",
      processo: "processo legado",
    };
    expect(despachoFormSchema.safeParse(relaxed).success).toBe(true);
  });
});

describe("getDespachoFileName", () => {
  it("inclui unidade e exercício no nome do arquivo", () => {
    expect(getDespachoFileName("Escola   Municipal\nTeste", "2026")).toBe(
      "Encaminhamento_Escola_Municipal_Teste_2026.docx",
    );
  });
});
