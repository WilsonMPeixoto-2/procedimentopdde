import { FileText, ArrowUpRight, Download, Zap } from "lucide-react";
import { Link } from "react-router-dom";

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

const typeBadgeColors: Record<string, string> = {
  "Modelo editável": "bg-primary/10 text-primary",
  "Exemplo preenchido": "bg-[hsl(var(--tip-bg))] text-[hsl(var(--tip-fg))]",
  "Referência visual": "bg-[hsl(var(--callout-bg))] text-[hsl(var(--callout-fg))]",
  "Complementar local": "bg-[hsl(var(--warning-bg))] text-[hsl(var(--warning-fg))]",
};

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

      <h3>Ferramentas Auxiliares</h3>
      <Link
        to="/despacho-express"
        className="group not-prose flex items-start gap-4 p-5 rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/[0.02] hover:border-primary/40 hover:shadow-md transition-all duration-200 no-underline mb-8"
      >
        <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/15 transition-colors">
          <Zap className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="font-sans text-sm font-bold text-heading group-hover:text-primary transition-colors">
              Despacho Express — 4ª CRE
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold font-sans bg-primary/10 text-primary">
              Ferramenta integrada
            </span>
          </div>
          <p className="font-sans text-[12.5px] text-muted-foreground leading-relaxed m-0">
            Gerador automático dos três despachos da prestação de contas (encaminhamento,
            análise da GAD e aprovação) em formato Word, prontos para o SEI!RIO.
          </p>
        </div>
        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 mt-1 transition-colors" />
      </Link>

      {modelos.map((cat) => (
        <div key={cat.category}>
          <h3>{cat.category}</h3>
          <div className="space-y-2.5 mb-8">
            {cat.items.map((item) => (
              <a
                key={item.file}
                href={`https://pdde-gad-cre-04.lovable.app/models/${item.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 p-4 rounded-lg border border-border hover:border-primary/30 hover:bg-accent/30 hover:shadow-sm transition-all duration-200 no-underline"
              >
                <div className="p-2 rounded-md bg-primary/10 group-hover:bg-primary/15 transition-colors">
                  <FileText className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-sans text-sm font-semibold text-heading group-hover:text-primary transition-colors">
                    {item.name}
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold font-sans ${typeBadgeColors[item.type] || ""}`}>
                      {item.type}
                    </span>
                    <span className="font-sans text-[11px] text-muted-foreground">
                      {item.size}
                    </span>
                  </div>
                </div>
                <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 mt-1 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
