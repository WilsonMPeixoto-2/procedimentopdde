import { useState } from "react";
import { CheckCircle2, ChevronRight, RotateCcw, XCircle } from "lucide-react";

type Caso = {
  id: string;
  titulo: string;
  contexto: string;
  pergunta: string;
  opcoes: string[];
  correta: number;
  explicacao: string;
  fundamento: string;
};

const casos: Caso[] = [
  {
    id: "pagamento-divergente",
    titulo: "Nota fiscal e pagamento não fecham",
    contexto:
      "A nota fiscal registra R$ 850,00. O extrato bancário mostra um débito de R$ 950,00 na mesma data, e o demonstrativo registra R$ 850,00.",
    pergunta: "Qual é a conduta de análise mais adequada?",
    opcoes: [
      "Considerar regular porque existe nota fiscal no processo.",
      "Tratar a divergência como ajuste necessário e reconstruir a relação entre nota, pagamento, extrato e demonstrativo.",
      "Alterar o valor do demonstrativo para R$ 950,00 e concluir a análise.",
    ],
    correta: 1,
    explicacao:
      "A presença isolada da nota não explica a saída financeira. A fiscalização precisa restabelecer a trilha documental e identificar a origem da diferença antes de concluir. A correção de documento pela própria fiscalização também não substitui o esclarecimento da unidade.",
    fundamento: "Resolução CD/FNDE nº 15/2021 — comprovação da despesa, pagamento e peças da prestação de contas.",
  },
  {
    id: "pesquisa-dois-orcamentos",
    titulo: "Pesquisa com apenas dois orçamentos",
    contexto:
      "A pesquisa apresenta duas propostas comparáveis e uma justificativa escrita informando que não foi possível obter uma terceira cotação para aquele objeto.",
    pergunta: "O número de propostas, sozinho, resolve a análise?",
    opcoes: [
      "Sim. Duas propostas tornam a despesa automaticamente irregular.",
      "Não. É preciso examinar a justificativa, a comparabilidade das propostas e os elementos que sustentam a escolha e a economicidade.",
      "Sim. A justificativa dispensa qualquer outra verificação da pesquisa.",
    ],
    correta: 1,
    explicacao:
      "A análise não deve transformar um parâmetro de pesquisa em regra mecânica desconectada do caso. Quando houver justificativa para a impossibilidade de ampliar a pesquisa, ela precisa ser avaliada junto com a coerência do objeto, dos valores e da escolha realizada.",
    fundamento: "Resolução CD/FNDE nº 15/2021 — regras de pesquisa de preços e justificativas na execução.",
  },
  {
    id: "saldo-conciliacao",
    titulo: "Saldo do demonstrativo difere do extrato",
    contexto:
      "Em 31 de dezembro, o demonstrativo informa saldo de R$ 1.200,00 e o extrato bancário mostra R$ 1.050,00. Há uma conciliação bancária juntada ao processo.",
    pergunta: "O que deve ser feito primeiro?",
    opcoes: [
      "Reprovar imediatamente a prestação de contas pela diferença de R$ 150,00.",
      "Ignorar a diferença porque existe uma conciliação no processo.",
      "Ler a conciliação e verificar se ela identifica e comprova a causa da diferença entre os registros.",
    ],
    correta: 2,
    explicacao:
      "A conciliação existe justamente para explicar diferenças entre registros e saldo bancário quando aplicável. O documento precisa demonstrar a causa da divergência; sua simples presença não resolve a análise.",
    fundamento: "Resolução CD/FNDE nº 15/2021, art. 33 — extratos e conciliação bancária entre as peças da prestação de contas.",
  },
  {
    id: "bem-permanente",
    titulo: "Bem permanente com nota e pagamento",
    contexto:
      "O processo contém nota fiscal e comprovante de pagamento de um notebook adquirido com recurso de capital, mas não apresenta a documentação patrimonial correspondente.",
    pergunta: "A despesa está suficientemente instruída apenas com nota e pagamento?",
    opcoes: [
      "Sim. Nota fiscal e pagamento são suficientes para qualquer tipo de despesa.",
      "Não. Em aquisição de bem permanente, também deve ser verificada a documentação de relação, doação/incorporação patrimonial aplicável ao fluxo.",
      "Sim, desde que o notebook esteja fisicamente na escola.",
    ],
    correta: 1,
    explicacao:
      "A comprovação financeira não encerra o tratamento de um bem permanente. O PDDE prevê relação dos bens adquiridos ou produzidos e o tratamento patrimonial cabível, inclusive termo de doação no fluxo da UEx para a EEx.",
    fundamento: "Formulários e Guia de Execução do PDDE — Relação de Bens e Termo de Doação.",
  },
];

const fundamentos = [
  {
    label: "Regra federal",
    className: "border-blue-200 bg-blue-50 text-blue-800",
    descricao: "Obrigação ou referência proveniente de norma, guia ou formulário oficial do FNDE.",
  },
  {
    label: "Fluxo municipal/local",
    className: "border-violet-200 bg-violet-50 text-violet-800",
    descricao: "Procedimento de tramitação, organização ou controle definido para o ambiente municipal/4ª CRE.",
  },
  {
    label: "Orientação prática",
    className: "border-emerald-200 bg-emerald-50 text-emerald-800",
    descricao: "Forma recomendada de raciocinar ou organizar a conferência, sem criar obrigação normativa nova.",
  },
];

export function FiscalizacaoCasos() {
  const [casoAtivo, setCasoAtivo] = useState(casos[0].id);
  const [respostas, setRespostas] = useState<Record<string, number>>({});

  const caso = casos.find((item) => item.id === casoAtivo) ?? casos[0];
  const resposta = respostas[caso.id];
  const respondido = resposta !== undefined;
  const acertou = resposta === caso.correta;

  const responder = (indice: number) => {
    if (!respondido) {
      setRespostas((atuais) => ({ ...atuais, [caso.id]: indice }));
    }
  };

  const reiniciar = () => {
    setRespostas((atuais) => {
      const proximo = { ...atuais };
      delete proximo[caso.id];
      return proximo;
    });
  };

  return (
    <div className="not-prose my-7 space-y-5">
      <div className="rounded-xl border border-border bg-muted/20 p-4">
        <div className="font-sans text-[11px] font-bold uppercase tracking-[0.13em] text-muted-foreground mb-3">
          Como interpretar as orientações do manual
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {fundamentos.map((item) => (
            <div key={item.label}>
              <span className={"inline-flex rounded-full border px-2.5 py-1 font-sans text-[10.5px] font-bold " + item.className}>
                {item.label}
              </span>
              <p className="mt-1.5 mb-0 font-sans text-[11.5px] leading-relaxed text-muted-foreground">
                {item.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-2" role="tablist" aria-label="Casos guiados de fiscalização">
        {casos.map((item, indice) => {
          const concluido = respostas[item.id] !== undefined;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={casoAtivo === item.id}
              onClick={() => setCasoAtivo(item.id)}
              className={
                "flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors " +
                (casoAtivo === item.id
                  ? "border-primary bg-primary/[0.06]"
                  : "border-border bg-card hover:border-primary/30")
              }
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted font-sans text-[11px] font-bold text-muted-foreground">
                {concluido ? "✓" : indice + 1}
              </span>
              <span className="font-sans text-[12.5px] font-semibold text-foreground">{item.titulo}</span>
            </button>
          );
        })}
      </div>

      <section
        aria-label={"Caso guiado: " + caso.titulo}
        className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
      >
        <div className="border-b border-border/60 bg-muted/15 px-5 py-5 sm:px-6">
          <div className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-primary mb-2">
            Caso guiado
          </div>
          <h3 className="m-0 font-sans text-lg font-bold text-heading">{caso.titulo}</h3>
          <p className="mt-2 mb-0 font-sans text-[13px] leading-relaxed text-muted-foreground">
            {caso.contexto}
          </p>
        </div>

        <div className="px-5 py-5 sm:px-6">
          <div className="font-sans text-[13px] font-bold text-foreground mb-3">{caso.pergunta}</div>
          <div className="space-y-2">
            {caso.opcoes.map((opcao, indice) => {
              const selecionada = resposta === indice;
              const correta = caso.correta === indice;
              const mostrarCorreta = respondido && correta;
              const mostrarErro = respondido && selecionada && !correta;

              return (
                <button
                  key={opcao}
                  type="button"
                  disabled={respondido}
                  onClick={() => responder(indice)}
                  className={
                    "w-full rounded-xl border px-4 py-3 text-left font-sans text-[12.5px] leading-relaxed transition-colors disabled:cursor-default " +
                    (mostrarCorreta
                      ? "border-emerald-300 bg-emerald-50 text-emerald-900"
                      : mostrarErro
                        ? "border-red-300 bg-red-50 text-red-900"
                        : "border-border bg-background text-foreground/85 hover:border-primary/40 hover:bg-muted/25")
                  }
                >
                  <span className="flex items-start gap-2.5">
                    {mostrarCorreta ? (
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    ) : mostrarErro ? (
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    ) : (
                      <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    )}
                    <span>{opcao}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {respondido && (
            <div
              role="status"
              className={
                "mt-5 rounded-xl border p-4 " +
                (acertou
                  ? "border-emerald-200 bg-emerald-50/70"
                  : "border-amber-200 bg-amber-50/70")
              }
            >
              <div className="font-sans text-[12px] font-bold text-foreground mb-1.5">
                {acertou ? "Raciocínio adequado" : "Reveja o raciocínio"}
              </div>
              <p className="m-0 font-sans text-[12.5px] leading-relaxed text-foreground/80">
                {caso.explicacao}
              </p>
              <p className="mt-2.5 mb-0 font-sans text-[11px] leading-relaxed text-muted-foreground">
                <strong>Fundamento:</strong> {caso.fundamento}
              </p>
              <button
                type="button"
                onClick={reiniciar}
                className="mt-3 inline-flex items-center gap-1.5 font-sans text-[11.5px] font-semibold text-primary hover:underline"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                Responder novamente
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
