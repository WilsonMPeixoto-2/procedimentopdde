import { Callout } from "../Callout";
import { MapaNormativo } from "./MapaNormativo";

export function Referencias() {
  return (
    <section id="referencias">
      <div className="section-number">Seção 9</div>
      <h1>Mapa Normativo e Fontes Oficiais</h1>

      <p className="text-muted-foreground font-sans text-[0.92em] -mt-2 mb-6 !text-left">
        Encontre a fonte pela dúvida que precisa resolver, não pelo número da norma.
      </p>

      <p>
        A prestação de contas do PDDE é orientada por uma <strong>base geral</strong> e por atos
        específicos que tratam de prestação de contas, ações integradas, modalidades do programa e
        procedimentos locais. Por isso, uma única resolução raramente responde sozinha a todas as
        situações de um processo.
      </p>

      <Callout type="info" title="Como usar este mapa">
        <p>
          Comece pelo <strong>assunto da dúvida</strong>. Consulte a fonte indicada e, quando houver
          uma norma específica do programa ou do exercício, leia-a em conjunto com a base geral do
          PDDE. Procedimentos municipais de tramitação e assinatura complementam o fluxo local, mas
          não substituem as regras federais de execução e prestação de contas.
        </p>
      </Callout>

      <MapaNormativo />

      <h2 id="referencias-atualizacoes">9.1. Atualizações que merecem atenção em 2026</h2>

      <p>
        O conjunto normativo continuou evoluindo em 2026. Entre as alterações relevantes para este
        manual estão a atualização das regras de <strong>prestação de contas do PDDE e das ações
        integradas</strong>, a nova disciplina do <strong>PDDE Equidade</strong> e a possibilidade
        de uso da <strong>Plataforma Contrata+Brasil</strong> como ferramenta de apoio à execução
        dos recursos do programa.
      </p>

      <p>
        Por esse motivo, orientações antigas não devem ser aplicadas automaticamente a exercícios
        novos. Antes de concluir uma análise, confirme se o programa ou a ação integrada recebeu
        regulamentação específica posterior.
      </p>

      <div className="not-prose rounded-xl border border-border bg-muted/25 px-4 py-3.5 font-sans text-[11.5px] leading-relaxed text-muted-foreground">
        <strong className="text-foreground/80">Revisão normativa deste mapa:</strong> outubro de
        2026. Os links apontam para fontes oficiais do FNDE/MEC ou do Município do Rio de Janeiro.
      </div>
    </section>
  );
}
