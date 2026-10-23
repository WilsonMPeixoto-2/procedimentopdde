import { useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  FileCheck2,
  Landmark,
  PackageCheck,
  ReceiptText,
  RotateCcw,
  SearchCheck,
} from "lucide-react";
import { Callout } from "../Callout";
import { FiscalizacaoMatriz } from "./FiscalizacaoMatriz";

const etapas = [
  {
    title: "1. Delimite o que será analisado",
    text: "Confirme programa, exercício, unidade executora, período e conjunto documental. Antes de procurar erros, saiba exatamente qual prestação de contas está sob exame.",
  },
  {
    title: "2. Verifique a integridade documental",
    text: "Confira se as peças esperadas estão presentes, legíveis, assinadas quando cabível e coerentes com o exercício e o programa analisados.",
  },
  {
    title: "3. Confronte planejamento, contratação e despesa",
    text: "Relacione o que foi planejado, pesquisado, adquirido ou contratado, faturado e efetivamente pago. A fiscalização não deve ler cada peça isoladamente.",
  },
  {
    title: "4. Refaça a trilha financeira",
    text: "Compare demonstrativo, extratos da conta corrente, aplicações, comprovantes de pagamento e conciliação. O objetivo é conseguir explicar a movimentação dos recursos do início ao fim.",
  },
  {
    title: "5. Observe situações específicas",
    text: "Despesas de capital, bens permanentes, devoluções, retenções, serviços com documentação técnica e outras situações particulares exigem verificações adicionais.",
  },
  {
    title: "6. Registre a conclusão de forma verificável",
    text: "Todo apontamento deve indicar o que foi encontrado, em qual evidência se apoia e qual providência é esperada. Evite diligências genéricas ou conclusões sem trilha documental.",
  },
];

const eixos = [
  {
    id: "documental",
    icon: FileCheck2,
    title: "Integridade documental",
    question: "O processo contém as peças necessárias e elas são formalmente utilizáveis?",
    examples: [
      "documento ausente ou ilegível",
      "assinatura necessária não localizada",
      "peça referente a exercício ou programa diferente",
      "ausência de documento complementar exigível para o caso",
    ],
  },
  {
    id: "despesa",
    icon: ReceiptText,
    title: "Coerência da despesa",
    question: "O gasto realizado é compatível com o planejamento, o objeto e a documentação apresentada?",
    examples: [
      "objeto faturado diferente do pesquisado",
      "quantidade ou valor sem correspondência entre peças",
      "pesquisa de preços insuficiente sem justificativa",
      "despesa que exige enquadramento ou documentação adicional",
    ],
  },
  {
    id: "financeiro",
    icon: Landmark,
    title: "Trilha financeira",
    question: "É possível ligar receita, aplicação, pagamento, documento fiscal e saldo final?",
    examples: [
      "pagamento sem documento fiscal correspondente",
      "lançamento do demonstrativo sem reflexo identificável no extrato",
      "saldo que exige conciliação ou justificativa",
      "movimentação financeira que não pode ser explicada pelas peças do processo",
    ],
  },
  {
    id: "material",
    icon: PackageCheck,
    title: "Resultado e patrimônio",
    question: "Quando aplicável, há evidência suficiente de entrega, execução e tratamento patrimonial?",
    examples: [
      "bem permanente sem documentação patrimonial cabível",
      "serviço que exige laudo, relatório ou outra evidência técnica",
      "ausência de comprovação de entrega quando necessária",
      "documentação incompatível com a natureza de custeio ou capital",
    ],
  },
];

const classificacoes = [
  {
    icon: CheckCircle2,
    title: "Sem apontamentos",
    text: "A evidência examinada é suficiente e não exige providência adicional para aquele item.",
    tone: "border-[hsl(var(--tip-border))]/35 bg-[hsl(var(--tip-bg))]",
  },
  {
    icon: CircleHelp,
    title: "Ajuste recomendável",
    text: "Há oportunidade de melhorar clareza, organização ou documentação, sem impedir a compreensão ou a conclusão do item.",
    tone: "border-primary/20 bg-primary/[0.035]",
  },
  {
    icon: AlertTriangle,
    title: "Ajuste necessário",
    text: "Existe ausência, inconsistência ou fragilidade que precisa ser corrigida ou esclarecida antes da conclusão da análise.",
    tone: "border-[hsl(var(--warning-border))]/40 bg-[hsl(var(--warning-bg))]",
  },
  {
    icon: RotateCcw,
    title: "Não se aplica",
    text: "O requisito não incide naquele caso concreto. Não trate ausência como irregularidade quando a peça não é exigível.",
    tone: "border-border bg-muted/35",
  },
];

export function Fiscalizacao() {
  const [openAxis, setOpenAxis] = useState<string | null>("documental");

  return (
    <section id="fiscalizacao">
      <div className="section-number">Seção 7</div>
      <h1>Fiscalização da Prestação de Contas</h1>

      <p className="text-muted-foreground font-sans text-[0.92em] -mt-2 mb-6 !text-left">
        Roteiro de leitura, confronto e conclusão para orientar a análise administrativa.
      </p>

      <p>
        A fiscalização começa <strong>depois que o processo foi instruído</strong>. Nesta etapa, o
        objetivo deixa de ser apenas verificar se os documentos foram juntados corretamente e passa
        a ser avaliar se o conjunto apresentado <strong>sustenta a regularidade da execução</strong>.
      </p>

      <Callout type="tip" title="O papel deste manual">
        <p>
          Esta seção ensina <strong>como raciocinar e o que observar</strong> durante a fiscalização.
          Ela não registra análises, não controla carteira de escolas, não substitui o sistema de
          fiscalização e não produz decisão automática. A conclusão continua sendo responsabilidade
          do servidor competente, apoiada pelas evidências do processo.
        </p>
      </Callout>

      <h2 id="fiscalizacao-sequencia">7.1. Sequência sugerida de análise</h2>
      <p>
        Evite começar por detalhes isolados. Uma sequência estável reduz retrabalho e ajuda a
        perceber inconsistências entre documentos que, separadamente, parecem corretos.
      </p>

      <div className="not-prose grid gap-3 my-6">
        {etapas.map((etapa) => (
          <div key={etapa.title} className="rounded-xl border border-border bg-card px-5 py-4 shadow-sm">
            <div className="font-sans text-sm font-bold text-heading">{etapa.title}</div>
            <p className="font-sans text-[13px] leading-relaxed text-muted-foreground mt-1.5 mb-0">
              {etapa.text}
            </p>
          </div>
        ))}
      </div>

      <h2 id="fiscalizacao-eixos">7.2. Quatro eixos para conferir cada caso</h2>
      <p>
        Use estes eixos como perguntas de controle. Eles ajudam a evitar uma análise puramente
        formal, em que a presença do documento é confundida com a suficiência da evidência.
      </p>

      <div className="not-prose space-y-3 my-6">
        {eixos.map(({ id, icon: Icon, title, question, examples }) => {
          const open = openAxis === id;
          return (
            <div key={id} className="rounded-xl border border-border bg-card overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenAxis(open ? null : id)}
                className="w-full flex items-start gap-3 px-5 py-4 text-left hover:bg-muted/35 transition-colors"
                aria-expanded={open}
              >
                <div className="mt-0.5 p-2 rounded-lg bg-primary/10">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-sans text-sm font-bold text-heading">{title}</div>
                  <div className="font-sans text-[13px] text-muted-foreground mt-1">{question}</div>
                </div>
                <ChevronDown
                  className={"w-4 h-4 mt-2 text-muted-foreground transition-transform " + (open ? "rotate-180" : "")}
                />
              </button>
              {open && (
                <div className="px-5 pb-5 pt-1 border-t border-border/60 bg-muted/15">
                  <div className="font-sans text-[11px] uppercase tracking-[0.12em] font-bold text-muted-foreground mt-3 mb-2">
                    Exemplos de sinais de atenção
                  </div>
                  <ul className="m-0 space-y-1.5 font-sans text-[13px] text-foreground/80">
                    {examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <h2 id="fiscalizacao-matriz">7.3. Matriz prática: documento, confronto e consequência</h2>
      <p>
        A análise ganha qualidade quando cada peça é lida em relação às demais. Use a matriz abaixo
        para lembrar <strong>o que conferir</strong>, <strong>com o que confrontar</strong> e
        <strong> qual tipo de inconsistência merece atenção</strong>.
      </p>

      <FiscalizacaoMatriz />

      <h2 id="fiscalizacao-achados">7.4. Como classificar o resultado de cada verificação</h2>
      <p>
        Nem toda observação exige diligência. Classificar corretamente o achado ajuda a separar
        falhas que impedem a conclusão de melhorias que apenas aperfeiçoam a instrução.
      </p>

      <div className="not-prose grid sm:grid-cols-2 gap-3 my-6">
        {classificacoes.map(({ icon: Icon, title, text, tone }) => (
          <div key={title} className={"rounded-xl border p-4 " + tone}>
            <div className="flex items-center gap-2 mb-2">
              <Icon className="w-4 h-4 text-primary" />
              <div className="font-sans text-sm font-bold text-heading">{title}</div>
            </div>
            <p className="font-sans text-[13px] leading-relaxed text-muted-foreground m-0">{text}</p>
          </div>
        ))}
      </div>

      <h2 id="fiscalizacao-diligencia">7.5. Quando diligenciar e como escrever um apontamento útil</h2>
      <p>
        A diligência deve permitir que a unidade entenda <strong>o que foi encontrado</strong> e
        <strong> o que precisa fazer</strong>. Um bom apontamento evita expressões vagas como
        “regularizar documentação” sem indicar a peça ou a inconsistência.
      </p>

      <div className="not-prose rounded-xl border border-primary/20 bg-primary/[0.035] p-5 my-6">
        <div className="flex items-center gap-2 mb-3">
          <SearchCheck className="w-4 h-4 text-primary" />
          <div className="font-sans text-sm font-bold text-heading">Estrutura recomendada</div>
        </div>
        <ol className="font-sans text-[13px] text-foreground/80 space-y-2 m-0 pl-5">
          <li><strong>Identifique a peça ou o fato:</strong> informe exatamente o que está sendo analisado.</li>
          <li><strong>Descreva o problema:</strong> diga qual ausência, divergência ou insuficiência foi encontrada.</li>
          <li><strong>Indique a evidência:</strong> relacione o apontamento ao documento, valor, período ou informação pertinente.</li>
          <li><strong>Defina a providência:</strong> solicite de forma objetiva o documento, esclarecimento ou correção necessária.</li>
        </ol>
      </div>

      <Callout type="warning" title="Evite conclusões automáticas">
        <p>
          Parecer favorável e aprovação devem refletir o resultado efetivo da fiscalização. Modelos,
          minutas e ferramentas de apoio podem acelerar a redação, mas não devem antecipar uma
          conclusão que ainda não foi sustentada pela análise.
        </p>
      </Callout>

      <h2 id="fiscalizacao-reanalise">7.6. Reanálise após diligência</h2>
      <p>
        Na reanálise, retome cada apontamento anterior e verifique se a nova documentação
        <strong> resolve especificamente a causa da diligência</strong>. A simples juntada de novos
        arquivos não significa, por si só, que a pendência foi sanada.
      </p>

      <p>
        Ao concluir, verifique se ainda existe algum <strong>ajuste necessário</strong>. Somente
        depois dessa revisão a análise deve avançar para a manifestação conclusiva cabível.
      </p>
    </section>
  );
}
