import { useState } from "react";
import {
  BadgeDollarSign,
  Banknote,
  Boxes,
  ClipboardList,
  FileCheck2,
  FileSearch2,
  Landmark,
  ReceiptText,
  SearchCheck,
} from "lucide-react";

type Eixo = "planejamento" | "despesa" | "financeiro" | "patrimonio";

const filtros: Array<{ id: "todos" | Eixo; label: string }> = [
  { id: "todos", label: "Todos" },
  { id: "planejamento", label: "Planejamento" },
  { id: "despesa", label: "Despesa" },
  { id: "financeiro", label: "Financeiro" },
  { id: "patrimonio", label: "Patrimônio" },
];

const itens = [
  {
    eixo: "planejamento" as const,
    icon: ClipboardList,
    documento: "Rol / planejamento do gasto",
    conferir:
      "Se o objeto executado corresponde ao que foi priorizado e aprovado para utilização dos recursos.",
    confrontar: "Ata ou aprovação do plano, pesquisa de preços e documentos da despesa.",
    atencao:
      "Aquisição ou serviço sem relação clara com o planejamento apresentado, ou descrição genérica que impeça reconhecer o objeto.",
    efeito:
      "Pode exigir esclarecimento ou documentação complementar antes de concluir a coerência da despesa.",
    base: "Resolução CD/FNDE nº 15/2021, art. 33, I.",
  },
  {
    eixo: "planejamento" as const,
    icon: FileSearch2,
    documento: "Pesquisa e consolidação de preços",
    conferir:
      "Se a pesquisa identifica objeto comparável, fornecedores e valores, e se há justificativa quando a pesquisa mínima não foi viável.",
    confrontar: "Rol/planejamento, fornecedor escolhido, nota fiscal e valor efetivamente pago.",
    atencao:
      "Orçamentos que não permitem comparar o mesmo objeto, quantidade ou condição, ou ausência de justificativa quando necessária.",
    efeito:
      "A fragilidade pode impedir confirmar a economicidade e justificar diligência.",
    base: "Resolução CD/FNDE nº 15/2021, arts. 23 e 27.",
  },
  {
    eixo: "despesa" as const,
    icon: ReceiptText,
    documento: "Nota fiscal ou comprovante da despesa",
    conferir:
      "Emitente, data, objeto, quantidade, valor e identificação suficiente para relacionar a despesa ao programa e ao que foi adquirido ou contratado.",
    confrontar: "Pesquisa de preços, comprovante de pagamento, extrato e demonstrativo.",
    atencao:
      "Objeto, quantidade ou valor sem correspondência com as demais peças, documento ilegível ou sem elementos suficientes para identificar a operação.",
    efeito:
      "Pode exigir documento substitutivo, esclarecimento ou comprovação adicional.",
    base: "Resolução CD/FNDE nº 15/2021, arts. 26 e 33.",
  },
  {
    eixo: "despesa" as const,
    icon: FileCheck2,
    documento: "Atesto e comprovação de entrega / execução",
    conferir:
      "Se há evidência de que o material, bem ou serviço foi efetivamente recebido ou executado e, quando cabível, o atesto contém identificação adequada.",
    confrontar: "Documento fiscal, objeto contratado e eventual evidência técnica ou material.",
    atencao:
      "Documento fiscal presente, mas sem evidência suficiente de recebimento, execução ou resultado quando o objeto exigir comprovação adicional.",
    efeito:
      "A despesa pode permanecer sem comprovação material suficiente até a complementação.",
    base: "Resolução CD/FNDE nº 15/2021, art. 26.",
  },
  {
    eixo: "financeiro" as const,
    icon: Banknote,
    documento: "Comprovante de pagamento",
    conferir:
      "Se o valor pago, a data e o favorecido podem ser relacionados à despesa correspondente.",
    confrontar: "Nota fiscal, extrato bancário e demonstrativo de pagamentos.",
    atencao:
      "Pagamento sem documento fiscal relacionado, valor divergente ou favorecido que não possa ser explicado pelas peças do processo.",
    efeito:
      "Pode exigir esclarecimento para restabelecer a trilha entre despesa e saída financeira.",
    base: "Resolução CD/FNDE nº 15/2021, art. 26, § 1º.",
  },
  {
    eixo: "financeiro" as const,
    icon: Landmark,
    documento: "Extratos da conta e das aplicações",
    conferir:
      "Se os créditos, débitos, rendimentos e saldos permitem acompanhar a movimentação do recurso durante o período analisado.",
    confrontar: "Demonstrativo, comprovantes de pagamento, conciliação e registros de aplicações.",
    atencao:
      "Débito sem correspondência identificável, pagamento fora da trilha documental ou saldo que não se explica pelos registros apresentados.",
    efeito:
      "A divergência deve ser esclarecida antes da conclusão da análise financeira.",
    base: "Resolução CD/FNDE nº 15/2021, art. 33, IV.",
  },
  {
    eixo: "financeiro" as const,
    icon: BadgeDollarSign,
    documento: "Demonstrativo de execução",
    conferir:
      "Se receitas, rendimentos, despesas, pagamentos e saldos estão registrados de forma coerente com a documentação financeira.",
    confrontar: "Extratos, notas fiscais, pagamentos e conciliação bancária.",
    atencao:
      "Lançamento sem reflexo no extrato, valor divergente ou saldo final incompatível com a movimentação bancária.",
    efeito:
      "Pode exigir correção do demonstrativo ou justificativa documental.",
    base: "Resolução CD/FNDE nº 15/2021, art. 33, III.",
  },
  {
    eixo: "financeiro" as const,
    icon: SearchCheck,
    documento: "Conciliação bancária",
    conferir:
      "Se diferenças entre registros e saldo bancário estão identificadas, explicadas e documentalmente sustentadas quando a conciliação for necessária.",
    confrontar: "Extratos, demonstrativo e saldo em conta.",
    atencao:
      "Saldo ou diferença sem explicação, ou conciliação que apenas repete valores sem demonstrar a causa da divergência.",
    efeito:
      "A análise financeira permanece inconclusiva enquanto a diferença relevante não for explicada.",
    base: "Resolução CD/FNDE nº 15/2021, art. 33, V.",
  },
  {
    eixo: "patrimonio" as const,
    icon: Boxes,
    documento: "Bens adquiridos ou produzidos",
    conferir:
      "Quando houver despesa de capital, se os bens estão identificados e acompanhados da documentação patrimonial exigível no fluxo aplicável.",
    confrontar: "Nota fiscal, relação de bens, registros patrimoniais e eventual termo de doação.",
    atencao:
      "Bem permanente adquirido sem identificação suficiente ou sem a documentação patrimonial correspondente ao caso.",
    efeito:
      "Pode exigir complementação antes de considerar regular o tratamento do bem.",
    base: "Formulários oficiais de prestação de contas do PDDE / Relação de Bens e Termo de Doação.",
  },
];

const eixoLabel: Record<Eixo, string> = {
  planejamento: "Planejamento",
  despesa: "Despesa",
  financeiro: "Financeiro",
  patrimonio: "Patrimônio",
};

export function FiscalizacaoMatriz() {
  const [filtro, setFiltro] = useState<"todos" | Eixo>("todos");
  const [aberto, setAberto] = useState<string | null>("Pesquisa e consolidação de preços");

  const visiveis = filtro === "todos" ? itens : itens.filter((item) => item.eixo === filtro);

  return (
    <div className="not-prose my-7">
      <div className="flex flex-wrap gap-2 mb-4" aria-label="Filtrar matriz de fiscalização">
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

      <div className="space-y-3">
        {visiveis.map(({ eixo, icon: Icon, documento, conferir, confrontar, atencao, efeito, base }) => {
          const expanded = aberto === documento;
          return (
            <article key={documento} className="overflow-hidden rounded-xl border border-border bg-card">
              <button
                type="button"
                onClick={() => setAberto(expanded ? null : documento)}
                aria-expanded={expanded}
                className="w-full px-5 py-4 text-left hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/10 p-2 mt-0.5">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-sans text-sm font-bold text-heading m-0">{documento}</h3>
                      <span className="rounded-full bg-muted px-2 py-0.5 font-sans text-[10px] font-semibold text-muted-foreground">
                        {eixoLabel[eixo]}
                      </span>
                    </div>
                    <p className="font-sans text-[13px] leading-relaxed text-muted-foreground mt-1.5 mb-0">
                      <strong className="text-foreground/80">O que conferir:</strong> {conferir}
                    </p>
                  </div>
                  <span className="font-sans text-[11px] font-semibold text-primary mt-1">
                    {expanded ? "Fechar" : "Detalhar"}
                  </span>
                </div>
              </button>

              {expanded && (
                <div className="grid gap-4 border-t border-border/60 bg-muted/15 px-5 py-5 sm:grid-cols-2">
                  <div>
                    <div className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground mb-1.5">
                      Confronte com
                    </div>
                    <p className="font-sans text-[13px] leading-relaxed text-foreground/80 m-0">{confrontar}</p>
                  </div>
                  <div>
                    <div className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground mb-1.5">
                      Sinal de atenção
                    </div>
                    <p className="font-sans text-[13px] leading-relaxed text-foreground/80 m-0">{atencao}</p>
                  </div>
                  <div>
                    <div className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground mb-1.5">
                      Efeito na análise
                    </div>
                    <p className="font-sans text-[13px] leading-relaxed text-foreground/80 m-0">{efeito}</p>
                  </div>
                  <div>
                    <div className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground mb-1.5">
                      Base de referência
                    </div>
                    <p className="font-sans text-[12px] leading-relaxed text-muted-foreground m-0">{base}</p>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div className="mt-4 rounded-lg border border-border bg-muted/20 px-4 py-3 font-sans text-[11.5px] leading-relaxed text-muted-foreground">
        A matriz resume critérios gerais de leitura do PDDE. Ações integradas e situações específicas
        podem ter regras próprias. Consulte sempre a norma aplicável ao programa e ao exercício analisado.{" "}
        <a
          href="https://www.gov.br/fnde/pt-br/acesso-a-informacao/legislacao/resolucoes/2021/resolucao-no-15-de-16-de-setembro-de-2021"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary underline underline-offset-2"
        >
          Resolução CD/FNDE nº 15/2021
        </a>{" "}
        ·{" "}
        <a
          href="https://www.gov.br/fnde/pt-br/acesso-a-informacao/acoes-e-programas/programas/pdde/resolucoes-e-formularios"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary underline underline-offset-2"
        >
          Formulários oficiais do PDDE
        </a>.
      </div>
    </div>
  );
}
