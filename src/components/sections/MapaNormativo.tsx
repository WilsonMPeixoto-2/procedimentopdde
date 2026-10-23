import { useState } from "react";
import {
  BookOpenCheck,
  ExternalLink,
  FileCheck2,
  Landmark,
  Layers3,
  Scale,
  SearchCheck,
  Sparkles,
} from "lucide-react";

type Tema = "base" | "prestacao" | "execucao" | "acoes" | "sei";

const filtros: Array<{ id: "todos" | Tema; label: string }> = [
  { id: "todos", label: "Todos" },
  { id: "base", label: "Base do PDDE" },
  { id: "prestacao", label: "Prestação de contas" },
  { id: "execucao", label: "Execução e patrimônio" },
  { id: "acoes", label: "Ações integradas" },
  { id: "sei", label: "SEI!RIO e assinatura" },
];

const fontes = [
  {
    tema: "base" as const,
    tipo: "Regra federal",
    destaque: "Base geral",
    titulo: "Resolução CD/FNDE nº 15/2021",
    quando:
      "Quando a dúvida for sobre regras gerais do PDDE: execução, fiscalização, monitoramento, documentos e responsabilidades.",
    resumo:
      "É a norma geral que organiza o PDDE Básico e funciona como referência central para a leitura das demais orientações do programa.",
    href: "https://www.gov.br/fnde/pt-br/acesso-a-informacao/legislacao/resolucoes/2021/resolucao-no-15-de-16-de-setembro-de-2021",
    icon: Scale,
  },
  {
    tema: "base" as const,
    tipo: "Fonte oficial",
    destaque: "Acompanhar alterações",
    titulo: "Resoluções e Formulários do PDDE",
    quando:
      "Quando precisar confirmar a versão vigente de atos do PDDE ou localizar formulários oficiais.",
    resumo:
      "Página temática do FNDE que reúne resoluções do programa e modelos oficiais, incluindo alterações posteriores à Resolução nº 15/2021.",
    href: "https://www.gov.br/fnde/pt-br/acesso-a-informacao/acoes-e-programas/programas/pdde/resolucoes-e-formularios",
    icon: Layers3,
  },
  {
    tema: "prestacao" as const,
    tipo: "Regra federal",
    destaque: "Prestação de contas",
    titulo: "Resolução CD/FNDE nº 25/2024",
    quando:
      "Quando a dúvida envolver a disciplina da prestação de contas do PDDE e das ações integradas.",
    resumo:
      "Trata da prestação de contas do PDDE e de suas ações integradas e deve ser lida em conjunto com suas alterações posteriores.",
    href: "https://www.gov.br/fnde/pt-br/acesso-a-informacao/legislacao/resolucoes/2024/resolucao-cd_fnde-no-25-de-25-de-outubro-de-2024/view",
    icon: FileCheck2,
  },
  {
    tema: "prestacao" as const,
    tipo: "Regra federal",
    destaque: "Atualização 2026",
    titulo: "Resolução CD/FNDE nº 13/2026",
    quando:
      "Quando precisar verificar as regras atualizadas de prestação de contas do PDDE e das ações integradas em 2026.",
    resumo:
      "Altera a Resolução nº 25/2024 especificamente para dispor sobre a prestação de contas do PDDE e de suas ações integradas.",
    href: "https://www.gov.br/fnde/pt-br/acesso-a-informacao/legislacao/resolucoes/2026/resolucao-cd-fnde-no-13-de-10-de-agosto-de-2026",
    icon: Sparkles,
  },
  {
    tema: "execucao" as const,
    tipo: "Guia oficial",
    destaque: "Aplicação prática",
    titulo: "Guia de Execução dos Recursos do PDDE",
    quando:
      "Quando a dúvida for operacional: pesquisa de preços, documento fiscal, pagamento, atesto, aquisição ou tratamento de bem permanente.",
    resumo:
      "Traduz regras de execução em orientações práticas e reúne modelos como a Relação de Bens e o Termo de Doação.",
    href: "https://www.gov.br/fnde/pt-br/acesso-a-informacao/acoes-e-programas/programas/pdde/media-pdde/manuais/GuiadeExecuodosRecursosdoPDDE.Verso2023.28.09.2023.pdf/@@download/file",
    icon: BookOpenCheck,
  },
  {
    tema: "execucao" as const,
    tipo: "Regra federal",
    destaque: "Atualização 2026",
    titulo: "Resolução CD/FNDE nº 16/2026 — Contrata+Brasil",
    quando:
      "Quando a dúvida envolver o uso da Plataforma Contrata+Brasil na contratação de serviços com recursos do PDDE.",
    resumo:
      "Estabelece a plataforma como ferramenta de apoio à execução do PDDE, sem afastar a observância das regras gerais do programa.",
    href: "https://mecnormas.mec.gov.br/pesquisa/detalhar/15515",
    icon: SearchCheck,
  },
  {
    tema: "acoes" as const,
    tipo: "Regra federal",
    destaque: "PDDE Equidade",
    titulo: "Resolução CD/FNDE nº 8/2026",
    quando:
      "Quando a análise envolver recursos do PDDE Equidade, seus eixos, execução, monitoramento ou prestação de contas.",
    resumo:
      "Disciplina diretrizes, critérios, transferência, execução e prestação de contas dos recursos do PDDE Equidade.",
    href: "https://www.gov.br/fnde/pt-br/acesso-a-informacao/legislacao/resolucoes/2026/resolucao-cd-fnde-no-8-de-7-de-maio-de-2026",
    icon: Landmark,
  },
  {
    tema: "acoes" as const,
    tipo: "Fonte oficial",
    destaque: "Atualizações 2026",
    titulo: "Resoluções CD/FNDE — 2026",
    quando:
      "Quando precisar verificar se surgiu norma recente para uma ação integrada ou situação específica.",
    resumo:
      "Índice oficial de atos publicados em 2026. Use-o como ponto de verificação antes de aplicar orientação antiga a um caso atual.",
    href: "https://www.gov.br/fnde/pt-br/acesso-a-informacao/legislacao/resolucoes/2026",
    icon: Layers3,
  },
  {
    tema: "sei" as const,
    tipo: "Regra municipal",
    destaque: "SEI!RIO",
    titulo: "Decreto Rio nº 57.250/2025",
    quando:
      "Quando a dúvida for sobre o SEI!RIO como sistema municipal de gestão de processos administrativos eletrônicos.",
    resumo:
      "Institui o SEI.Rio no Poder Executivo municipal e fornece a base para o fluxo processual eletrônico utilizado neste manual.",
    href: "https://doweb.rio.rj.gov.br/apifront/portal/edicoes/publicacoes_ver_conteudo/1218780/7683",
    icon: Landmark,
  },
  {
    tema: "sei" as const,
    tipo: "Regra municipal",
    destaque: "Assinatura eletrônica",
    titulo: "Decreto Rio nº 54.844/2024",
    quando:
      "Quando a dúvida envolver assinatura eletrônica, autoria, integridade ou tratamento de documentos digitais no Município.",
    resumo:
      "Disciplina o uso de assinaturas eletrônicas na Administração Pública Municipal e fundamenta orientações sobre documentos digitais.",
    href: "https://doweb.rio.rj.gov.br/apifront/portal/edicoes/imprimir_materia/1079159/6702",
    icon: FileCheck2,
  },
];

const temaLabel: Record<Tema, string> = {
  base: "Base do PDDE",
  prestacao: "Prestação de contas",
  execucao: "Execução e patrimônio",
  acoes: "Ações integradas",
  sei: "SEI!RIO e assinatura",
};

const tipoClass: Record<string, string> = {
  "Regra federal": "border-blue-200 bg-blue-50 text-blue-800",
  "Regra municipal": "border-violet-200 bg-violet-50 text-violet-800",
  "Guia oficial": "border-emerald-200 bg-emerald-50 text-emerald-800",
  "Fonte oficial": "border-slate-200 bg-slate-50 text-slate-700",
};

export function MapaNormativo() {
  const [filtro, setFiltro] = useState<"todos" | Tema>("todos");
  const visiveis = filtro === "todos" ? fontes : fontes.filter((fonte) => fonte.tema === filtro);

  return (
    <div className="not-prose my-7">
      <div className="flex flex-wrap gap-2 mb-5" aria-label="Filtrar referências por assunto">
        {filtros.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFiltro(item.id)}
            aria-pressed={filtro === item.id}
            className={
              "rounded-full border px-3 py-1.5 font-sans text-[12px] font-semibold transition-colors " +
              (filtro === item.id
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground")
            }
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {visiveis.map(({ tema, tipo, destaque, titulo, quando, resumo, href, icon: Icon }) => (
          <article key={titulo} className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="mt-0.5 rounded-xl bg-primary/10 p-2.5">
                <Icon className="h-5 w-5 text-primary" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={"rounded-full border px-2.5 py-1 font-sans text-[10px] font-bold " + tipoClass[tipo]}>
                    {tipo}
                  </span>
                  <span className="rounded-full bg-muted px-2.5 py-1 font-sans text-[10px] font-semibold text-muted-foreground">
                    {temaLabel[tema]}
                  </span>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-[0.1em] text-primary/75">
                    {destaque}
                  </span>
                </div>

                <h3 className="m-0 font-sans text-base font-bold text-heading">{titulo}</h3>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="mb-1 font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                      Quando consultar
                    </div>
                    <p className="m-0 font-sans text-[12.5px] leading-relaxed text-foreground/80">
                      {quando}
                    </p>
                  </div>
                  <div>
                    <div className="mb-1 font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                      O que esta fonte resolve
                    </div>
                    <p className="m-0 font-sans text-[12.5px] leading-relaxed text-foreground/80">
                      {resumo}
                    </p>
                  </div>
                </div>

                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 font-sans text-[12px] font-bold text-primary underline-offset-4 hover:underline"
                >
                  Abrir fonte oficial
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
