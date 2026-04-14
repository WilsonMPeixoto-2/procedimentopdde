import { Callout } from "../Callout";
import { SystemPreview, SeiTreeItem, SeiButton } from "../SystemPreview";

export function Autenticacao() {
  return (
    <section id="autenticacao">
      <div className="section-number">Seção 4</div>
      <h1>Autenticação de Documentos</h1>
      <p className="text-muted-foreground font-sans text-[0.92em] -mt-2 mb-6">
        Procedimento para autenticar documentos externos no SEI!RIO.
      </p>

      <p>
        A autenticação administrativa no SEI!RIO aplica-se exclusivamente a documentos
        <strong> digitalizados</strong> — aqueles que tiveram origem em papel e foram convertidos
        para formato eletrônico. Documentos <strong>nato-digitais</strong> são juntados como
        originais e não passam por esta etapa.
      </p>

      <h2>4.1. Quando autenticar</h2>
      <p>
        Autentique toda peça que tenha sido escaneada ou fotografada a partir de um original
        físico: notas fiscais impressas, atas manuscritas, recibos em papel, extratos impressos.
        A autenticação registra que a cópia digital <strong>confere com o original</strong>.
      </p>

      <h2>4.2. Quando não autenticar</h2>
      <p>
        Não autentique documentos que já nasceram digitais: DANFE gerada eletronicamente,
        extrato bancário baixado do internet banking, comprovante de transferência eletrônica,
        documentos gerados no próprio SEI!RIO.
      </p>

      <Callout type="warning" title="Atenção">
        <p>
          Confundir autenticação com assinatura eletrônica é um dos erros mais comuns. A
          autenticação atesta que uma cópia digital corresponde ao original físico. A assinatura
          eletrônica é ato de manifestação de vontade ou concordância sobre o conteúdo do documento.
        </p>
      </Callout>

      <h2>4.3. Procedimento no SEI!RIO</h2>
      <p>
        Acesse o documento digitalizado na árvore do processo, utilize a funcionalidade de
        autenticação e selecione a opção que declara conformidade com o original.
        Os originais físicos devem permanecer arquivados na unidade escolar pelo prazo
        regulamentar.
      </p>

      <SystemPreview title="Autenticação de documento digitalizado">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="sm:w-52 border-r border-border sm:pr-4">
            <div className="text-[11px] uppercase tracking-wide text-muted-foreground font-semibold font-sans mb-2">
              Árvore do processo
            </div>
            <SeiTreeItem icon="📄" label="Ofício de Encaminhamento" />
            <SeiTreeItem icon="🧾" label="Nota Fiscal nº 4521" active />
            <SeiTreeItem icon="📝" label="Ata de Aprovação" />
          </div>
          <div className="flex-1 space-y-3">
            <div className="text-[11px] uppercase tracking-wide text-muted-foreground font-semibold font-sans">
              Opções do documento
            </div>
            <div className="flex flex-wrap gap-2">
              <SeiButton>📋 Consultar</SeiButton>
              <SeiButton primary>✔ Autenticar</SeiButton>
              <SeiButton>🔗 Mover</SeiButton>
            </div>
            <div className="mt-2 p-3 border border-dashed border-[hsl(var(--tip-border))] bg-[hsl(var(--tip-bg))] rounded text-[12px] font-sans text-[hsl(var(--tip-fg))]">
              <strong>Tipo de conferência:</strong> Documento digitalizado — confere com o original.
            </div>
          </div>
        </div>
      </SystemPreview>
    </section>
  );
}
