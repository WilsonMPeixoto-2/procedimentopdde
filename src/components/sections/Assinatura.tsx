import { Callout } from "../Callout";

export function Assinatura() {
  return (
    <section id="assinatura">
      <div className="section-number">Seção 5</div>
      <h1>Bloco de Assinatura</h1>
      <p className="text-muted-foreground font-sans text-[0.92em] -mt-2 mb-6">
        Criação do bloco, assinaturas internas, despacho de encaminhamento e remessa.
      </p>

      <p>
        O bloco de assinatura reúne os documentos internos do SEI!RIO que necessitam de
        assinatura eletrônica antes da remessa do processo à GAD. Documentos externos
        (digitalizados ou nato-digitais) <strong>não</strong> entram no bloco de assinatura.
      </p>

      <h2>5.1. Criação do bloco</h2>
      <p>
        Crie o bloco de assinatura a partir do menu do processo. Inclua apenas os documentos
        internos que exigem assinatura — tipicamente o ofício de encaminhamento e eventuais
        declarações produzidas no SEI!RIO.
      </p>

      <h2>5.2. Assinaturas</h2>
      <p>
        Conclua as assinaturas internas necessárias. Após a última assinatura, gere o despacho
        de encaminhamento e remeta o processo à GAD.
      </p>

      <Callout type="info" title="Bloco de assinatura">
        <p>
          No bloco entram apenas documentos internos do SEI!RIO. Documentos externos já foram
          incluídos e, quando aplicável, autenticados nas etapas anteriores.
        </p>
      </Callout>

      <h2>5.3. Remessa à GAD</h2>
      <p>
        Após concluir as assinaturas e gerar o despacho, utilize a funcionalidade de envio
        do processo para encaminhá-lo à 4ª CRE/GAD. Confirme que todos os documentos estão
        na ordem correta na árvore antes de enviar.
      </p>
    </section>
  );
}
