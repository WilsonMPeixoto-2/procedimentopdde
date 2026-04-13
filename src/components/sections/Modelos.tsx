import { FileText, ExternalLink } from "lucide-react";

const modelos = [
  {
    category: "Instrução Processual",
    items: [
      { name: "Ofício de Prestação de Contas PDDE", type: "Modelo editável", file: "MODELO_DE_OFICIO_PDDE.pdf", size: "2.5 KB" },
      { name: "Planejamento com Ata", type: "Exemplo preenchido", file: "PLANEJAMENTO_COM_ATA.pdf", size: "743.8 KB" },
      { name: "Consolidação de Pesquisa de Preços", type: "Exemplo preenchido", file: "CONSOLIDACAO_DE_PESQUISA_DE_PRECOS.pdf", size: "106.4 KB" },
    ],
  },
  {
    category: "Documentos Financeiros",
    items: [
      { name: "Demonstrativo de Despesa", type: "Exemplo preenchido", file: "DEMONSTRATIVO_DE_DESPESA.pdf", size: "86.0 KB" },
      { name: "Nota Fiscal Eletrônica — DANFE", type: "Referência visual", file: "NOTA_FISCAL_ELETRONICA_DANFE.pdf", size: "1.5 MB" },
      { name: "Extrato de Conta Corrente", type: "Referência visual", file: "EXTRATO_CONTA_CORRENTE.pdf", size: "1.4 MB" },
      { name: "Extrato de Aplicação", type: "Referência visual", file: "EXTRATO_APLICACAO.pdf", size: "887.3 KB" },
    ],
  },
  {
    category: "Deliberação",
    items: [
      { name: "Parecer do Conselho", type: "Complementar local", file: "PARECER_DO_CONSELHO.pdf", size: "260.9 KB" },
    ],
  },
];

export function Modelos() {
  return (
    <section id="modelos">
      <div className="section-number">Anexos</div>
      <h1>Modelos e Anexos</h1>
      <p className="text-muted-foreground font-sans text-[0.92em] -mt-2 mb-6">
        Referências para acelerar a montagem do processo.
      </p>

      <p>
        Use os modelos como apoio visual e as minutas rápidas apenas quando ajudarem na
        produção das peças internas. Todos os arquivos abaixo estão em formato PDF.
      </p>

      {modelos.map((cat) => (
        <div key={cat.category}>
          <h3>{cat.category}</h3>
          <div className="space-y-2 mb-6">
            {cat.items.map((item) => (
              <a
                key={item.file}
                href={`https://pdde-gad-cre-04.lovable.app/models/${item.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 rounded border border-border hover:bg-muted/50 transition-colors no-underline"
              >
                <FileText className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-sans text-sm font-semibold text-heading">{item.name}</div>
                  <div className="font-sans text-xs text-muted-foreground">
                    {item.type} · {item.size}
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
