import { useState } from "react";
import { Check, Square, CheckCircle2 } from "lucide-react";

const blocoA = [
  "Rol de materiais, bens e serviços priorizados (planejamento do gasto aprovado pelo Conselho/CEC)",
  "Consolidação das pesquisas de preços — 3 orçamentos quando viável, ou justificativa idônea",
  "Demonstrativo/registro federal da execução da receita, da despesa e dos pagamentos",
  "Extratos bancários da conta do PDDE e das aplicações financeiras (período integral do exercício)",
  "Conciliação bancária (quando houver divergência entre extrato e demonstrativo, ou saldo em 31/12)",
  "Documentos comprobatórios das despesas (NF/DANFE/cupom fiscal/recibos/RPA), com atesto e comprovantes de pagamento",
  "Atas de aprovação do plano de gastos e da prestação de contas pelo Conselho Escolar/CEC",
];

const blocoB = [
  "Evidência complementar de entrega/execução (declaração, fotos, laudo), quando o objeto exigir",
  "Relação de bens adquiridos ou produzidos, quando houver despesa de capital",
  "Controle patrimonial — incorporação/registro do bem conforme a rotina da unidade escolar",
  "Comprovante de devolução/recolhimento de saldo ao FNDE (quando houver restituição)",
  "Comprovante do registro federal aplicável ao exercício (ex.: BB Gestão Ágil)",
  "Termo de doação ou instrumento patrimonial equivalente, quando exigido",
  "Declaração de autenticidade, se ainda exigida no fluxo vigente da CRE/SME",
];

function ProgressBar({ done, total }: { done: number; total: number }) {
  const pct = total > 0 ? (done / total) * 100 : 0;
  const isComplete = done === total;

  return (
    <div className="flex items-center gap-3 mb-5 font-sans">
      <div className="flex-1 h-2.5 rounded-full bg-muted overflow-hidden shadow-inner">
        <div
          className={`h-full rounded-full transition-all duration-300 ease-out relative overflow-hidden ${isComplete ? "bg-[hsl(var(--tip-border))]" : "bg-primary"}`}
          style={{ width: `${pct}%` }}
        >
          {pct > 0 && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[shimmer_2s_infinite]" />
          )}
        </div>
      </div>
      <span className={`text-xs font-bold tabular-nums min-w-[36px] text-right ${isComplete ? "text-[hsl(var(--tip-fg))]" : "text-muted-foreground"}`}>
        {done}/{total}
      </span>
      {isComplete && <CheckCircle2 className="w-5 h-5 text-[hsl(var(--tip-fg))]" />}
    </div>
  );
}

export function ChecklistSection() {
  const [checkedA, setCheckedA] = useState<boolean[]>(new Array(blocoA.length).fill(false));
  const [checkedB, setCheckedB] = useState<boolean[]>(new Array(blocoB.length).fill(false));

  const toggle = (arr: boolean[], setArr: (v: boolean[]) => void, i: number) => {
    const next = [...arr];
    next[i] = !next[i];
    setArr(next);
  };

  const doneA = checkedA.filter(Boolean).length;
  const doneB = checkedB.filter(Boolean).length;

  return (
    <section id="checklist">
      <div className="section-number">Recurso</div>
      <h1>Checklist — Prestação de Contas do PDDE</h1>
      <p className="text-muted-foreground font-sans text-[0.92em] -mt-2 mb-6 !text-left">
        Use esta lista para conferir a documentação antes de remeter o processo.
      </p>

      <h2>Bloco A — Documentos federais mínimos</h2>
      <p>
        Núcleo da comprovação da execução e da prestação de contas.
      </p>
      <ProgressBar done={doneA} total={blocoA.length} />
      <div className="space-y-1 mb-8">
        {blocoA.map((item, i) => (
          <button
            key={i}
            onClick={() => toggle(checkedA, setCheckedA, i)}
            className={`checklist-item w-full text-left cursor-pointer rounded-lg px-3.5 py-3 transition-all duration-150 group border ${
              checkedA[i]
                ? "bg-[hsl(var(--tip-bg))] border-[hsl(var(--tip-border)/0.3)]"
                : "border-transparent hover:bg-muted/50 hover:border-border"
            }`}
          >
            {checkedA[i] ? (
              <Check className="w-4.5 h-4.5 text-[hsl(var(--tip-fg))] shrink-0 mt-0.5" />
            ) : (
              <Square className="w-4.5 h-4.5 text-muted-foreground/50 shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
            )}
            <span className={`transition-colors ${checkedA[i] ? "line-through text-muted-foreground/70" : ""}`}>
              {item}
            </span>
          </button>
        ))}
      </div>

      <h2>Bloco B — Instrução complementar</h2>
      <p>
        Inclua quando o objeto, o fluxo local ou a rotina patrimonial/documental exigir reforço.
      </p>
      <ProgressBar done={doneB} total={blocoB.length} />
      <div className="space-y-1">
        {blocoB.map((item, i) => (
          <button
            key={i}
            onClick={() => toggle(checkedB, setCheckedB, i)}
            className={`checklist-item w-full text-left cursor-pointer rounded-lg px-3.5 py-3 transition-all duration-150 group border ${
              checkedB[i]
                ? "bg-[hsl(var(--tip-bg))] border-[hsl(var(--tip-border)/0.3)]"
                : "border-transparent hover:bg-muted/50 hover:border-border"
            }`}
          >
            {checkedB[i] ? (
              <Check className="w-4.5 h-4.5 text-[hsl(var(--tip-fg))] shrink-0 mt-0.5" />
            ) : (
              <Square className="w-4.5 h-4.5 text-muted-foreground/50 shrink-0 mt-0.5 group-hover:text-primary transition-colors" />
            )}
            <span className={`transition-colors ${checkedB[i] ? "line-through text-muted-foreground/70" : ""}`}>
              {item}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}