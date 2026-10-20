import { AlignmentType, Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import { getDespachoFileName, type DespachoData } from "@/lib/despacho";

export const generateDespachoDocx = async (data: DespachoData) => {
  const { unidadeEscolar, programa, exercicio, presidente, cnpj, processo } = data;

  const dataAtual = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const doc = new Document({
    creator: "POP Digital — 4ª CRE/GAD",
    title: "Minuta de Encaminhamento - Prestação de Contas PDDE",
    styles: {
      default: {
        document: {
          run: {
            size: 24,
            font: "Arial",
          },
          paragraph: {
            alignment: AlignmentType.JUSTIFIED,
            spacing: { line: 360, after: 200 },
          },
        },
      },
    },
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({
                text: `ENCAMINHAMENTO DE PRESTAÇÃO DE CONTAS (${programa})`,
                bold: true,
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            children: [
              new TextRun({ text: `REF. CONTÁBIL/${exercicio}`, bold: true }),
            ],
          }),
          new Paragraph({ text: "" }),
          new Paragraph({
            alignment: AlignmentType.JUSTIFIED,
            text: `Processo nº ${processo}`,
          }),
          new Paragraph({ text: "" }),
          new Paragraph({ text: "À GAD/4ª CRE," }),
          new Paragraph({
            alignment: AlignmentType.JUSTIFIED,
            children: [
              new TextRun({
                text: `Encaminho a Prestação de Contas referente aos recursos do Programa FNDE/${programa}, executados pelo Conselho Escola Comunidade (CEC) da `,
              }),
              new TextRun({ text: unidadeEscolar, bold: true }),
              new TextRun({ text: ", inscrito no CNPJ sob o nº " }),
              new TextRun({ text: cnpj, bold: true }),
              new TextRun({ text: ", neste ato representado por seu(sua) presidente, " }),
              new TextRun({ text: presidente, bold: true }),
              new TextRun({ text: "." }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.JUSTIFIED,
            text: "Declaro, para os devidos fins, que os documentos anexados a este expediente conferem com os originais apresentados.",
          }),
          new Paragraph({ text: "" }),
          new Paragraph({ text: `Rio de Janeiro, ${dataAtual}` }),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, getDespachoFileName(unidadeEscolar, exercicio));
};
