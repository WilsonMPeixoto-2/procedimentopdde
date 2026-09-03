import { z } from "zod";

export const despachoFormSchema = z.object({
  unidadeEscolar: z.string().min(1, "Campo obrigatório"),
  programa: z.string().min(1, "Selecione o programa"),
  presidente: z.string().min(1, "Campo obrigatório"),
  cnpj: z.string().min(1, "Campo obrigatório"),
  processo: z.string().min(1, "Campo obrigatório"),
});

export type DespachoData = z.infer<typeof despachoFormSchema>;

export function getDespachoFileName(unidadeEscolar: string) {
  return `Despachos_${unidadeEscolar.replace(/\s+/g, "_")}.docx`;
}
