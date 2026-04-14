import { Callout } from "../Callout";
import { SystemPreview, SeiTreeItem, SeiButton } from "../SystemPreview";

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

      <SystemPreview title="Bloco de assinatura — documentos incluídos">
        <div className="space-y-3">
          <div className="text-[11px] uppercase tracking-wide text-muted-foreground font-semibold font-sans">
            Bloco de Assinatura #127
          </div>
          <div className="border border-border rounded overflow-hidden text-[12px] font-sans">
            <div className="grid grid-cols-[1fr_auto_auto] gap-2 px-3 py-1.5 bg-[hsl(var(--muted))] font-semibold text-muted-foreground">
              <span>Documento</span>
              <span>Assinatura</span>
              <span>Status</span>
            </div>
            <div className="grid grid-cols-[1fr_auto_auto] gap-2 px-3 py-2 border-t border-border items-center">
              <span>📄 Ofício de Encaminhamento</span>
              <span className="text-muted-foreground">Diretor(a)</span>
              <span className="text-[hsl(var(--tip-fg))] font-semibold">✔ Assinado</span>
            </div>
            <div className="grid grid-cols-[1fr_auto_auto] gap-2 px-3 py-2 border-t border-border items-center">
              <span>📄 Declaração de Execução</span>
              <span className="text-muted-foreground">Diretor(a)</span>
              <span className="text-[hsl(var(--warning-fg))] font-semibold">⏳ Pendente</span>
            </div>
          </div>
        </div>
      </SystemPreview>

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

      <SystemPreview title="Envio do processo">
        <div className="space-y-3">
          <div className="space-y-0">
            <div className="flex items-center gap-2 py-1.5 border-b border-dashed border-border">
              <span className="text-[11px] uppercase tracking-wide text-muted-foreground font-semibold font-sans min-w-[120px]">
                Unidade destino
              </span>
              <span className="text-[13px] font-sans font-semibold text-[hsl(var(--primary))]">
                E/4a.CRE/GAD
              </span>
            </div>
            <div className="flex items-center gap-2 py-1.5">
              <span className="text-[11px] uppercase tracking-wide text-muted-foreground font-semibold font-sans min-w-[120px]">
                Manter aberto
              </span>
              <span className="text-[13px] font-sans text-foreground">
                ☐ Manter processo aberto na unidade atual
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <SeiButton primary>Enviar</SeiButton>
            <SeiButton>Cancelar</SeiButton>
          </div>
        </div>
      </SystemPreview>
    </section>
  );
}
