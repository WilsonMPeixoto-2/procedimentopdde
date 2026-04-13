import { Callout } from "../Callout";

export function Finalizacao() {
  return (
    <section id="finalizacao">
      <div className="section-number">Seção 6</div>
      <h1>Despacho e Finalização</h1>
      <p className="text-muted-foreground font-sans text-[0.92em] -mt-2 mb-6">
        Análise pela GAD, diligências e etapas finais de aprovação.
      </p>

      <p>
        Após a remessa, o processo segue para análise da GAD. Nesta fase, a unidade escolar
        deve acompanhar o andamento no SEI!RIO e responder prontamente a qualquer devolução
        ou diligência.
      </p>

      <h2>6.1. Acompanhamento</h2>
      <p>
        Monitore o processo no SEI!RIO regularmente. Diligências não atendidas no prazo
        podem atrasar a conclusão da prestação de contas e gerar pendências acumuladas
        para o exercício seguinte.
      </p>

      <Callout type="tip" title="Boa prática">
        <p>
          Após a remessa, acompanhe o processo no SEI!RIO e trate rapidamente qualquer
          devolução ou diligência. Respostas ágeis evitam acúmulo de pendências.
        </p>
      </Callout>

      <h2>6.2. Diligências</h2>
      <p>
        Se a GAD identificar inconsistências ou peças faltantes, o processo será devolvido
        com um despacho indicando o que precisa ser corrigido ou complementado. Atenda à
        diligência no próprio SEI!RIO, incluindo os documentos solicitados e remetendo
        novamente o processo.
      </p>

      <h2>6.3. Aprovação</h2>
      <p>
        Uma vez que a documentação esteja completa e conforme, a GAD concluirá a análise
        e registrará a aprovação da prestação de contas. O processo permanece acessível
        no SEI!RIO para consulta.
      </p>
    </section>
  );
}
