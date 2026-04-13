import { useState } from "react";
import { Check, Square } from "lucide-react";

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
      <p className="text-muted-foreground font-sans text-[0.92em] -mt-2 mb-6">
        Use esta lista para conferir a documentação antes de remeter o processo.
      </p>

      <h2>Bloco A — Documentos federais mínimos ({doneA}/{blocoA.length})</h2>
      <p>
        Núcleo da comprovação da execução e da prestação de contas.
      </p>
      <div className="space-y-1 mb-8">
        {blocoA.map((item, i) => (
          <button
            key={i}
            onClick={() => toggle(checkedA, setCheckedA, i)}
            className="checklist-item w-full text-left cursor-pointer hover:bg-muted/40 rounded px-2 py-1.5 transition-colors"
          >
            {checkedA[i] ? (
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            ) : (
              <Square className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
            )}
            <span className={checkedA[i] ? "line-through text-muted-foreground" : ""}>
              {item}
            </span>
          </button>
        ))}
      </div>

      <h2>Bloco B — Instrução complementar ({doneB}/{blocoB.length})</h2>
      <p>
        Inclua quando o objeto, o fluxo local ou a rotina patrimonial/documental exigir reforço.
      </p>
      <div className="space-y-1">
        {blocoB.map((item, i) => (
          <button
            key={i}
            onClick={() => toggle(checkedB, setCheckedB, i)}
            className="checklist-item w-full text-left cursor-pointer hover:bg-muted/40 rounded px-2 py-1.5 transition-colors"
          >
            {checkedB[i] ? (
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            ) : (
              <Square className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
            )}
            <span className={checkedB[i] ? "line-through text-muted-foreground" : ""}>
              {item}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
