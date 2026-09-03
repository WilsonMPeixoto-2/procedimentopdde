import { beforeEach, describe, expect, it, vi } from "vitest";
import { saveAs } from "file-saver";
import { generateDespachoDocx } from "./docxTemplate";

vi.mock("file-saver", () => ({
  saveAs: vi.fn(),
}));

const data = {
  unidadeEscolar: "Escola Municipal Teste",
  programa: "PDDE BÁSICO/2025",
  presidente: "Maria da Silva",
  cnpj: "12.345.678/0001-95",
  processo: "000704.001704/2026",
};

describe("generateDespachoDocx", () => {
  beforeEach(() => {
    vi.mocked(saveAs).mockClear();
  });

  it("gera um DOCX real e solicita o download com nome determinístico", async () => {
    await generateDespachoDocx(data);

    expect(saveAs).toHaveBeenCalledTimes(1);
    const [blob, fileName] = vi.mocked(saveAs).mock.calls[0];

    expect(blob).toBeInstanceOf(Blob);
    expect((blob as Blob).size).toBeGreaterThan(5_000);
    expect(fileName).toBe("Despachos_Escola_Municipal_Teste.docx");
  });
});
