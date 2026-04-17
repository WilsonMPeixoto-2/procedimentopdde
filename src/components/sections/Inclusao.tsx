import { Callout } from "../Callout";
import { SystemPreview, SeiTreeItem, SeiField, SeiButton } from "../SystemPreview";

export function Inclusao() {
  return (
    <section id="inclusao">

      <p>
        Nesta etapa, os documentos reunidos na instrução processual serão inseridos na{" "}
        <strong>árvore do processo eletrônico</strong>. A correta classificação entre documento{" "}
        <strong>digitalizado</strong> e <strong>nato-digital</strong> é essencial para determinar
        se a peça seguirá para autenticação ou será juntada diretamente como original.
      </p>

      <h2>3.1. Documento digitalizado vs. nato-digital</h2>
      <p>
        <strong>Digitalizado</strong> é o documento que teve origem em papel e foi convertido
        para formato eletrônico por meio de scanner ou fotografia. <strong>Nato-digital</strong>{" "}
        é o documento que já nasceu em meio eletrônico — foi criado, assinado ou emitido
        diretamente no ambiente digital.
      </p>

      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Origem</th>
            <th>Autenticação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Digitalizado</td>
            <td>Papel → scanner/foto</td>
            <td>Exige autenticação no SEI!RIO</td>
          </tr>
          <tr>
            <td>Nato-digital</td>
            <td>Criado em meio eletrônico</td>
            <td>Juntado como original, sem autenticação</td>
          </tr>
        </tbody>
      </table>

      <h2>3.2. Procedimento de inclusão</h2>
      <p>
        Para incluir um <strong>documento externo</strong>, acesse a árvore do processo e utilize
        a opção de incluir documento. Preencha os campos de identificação com clareza:{" "}
        <strong>tipo do documento, data, número</strong> (quando houver) e <strong>formato</strong>{" "}
        (digitalizado ou nato-digital).
      </p>

      <SystemPreview title="Inclusão de documento externo">
        <div className="space-y-0">
          <SeiField label="Tipo do Documento" value="Extrato Bancário" />
          <SeiField label="Data do Documento" value="31/12/2026" />
          <SeiField label="Formato" value="Nato-digital (documento original eletrônico)" highlight />
          <SeiField label="Nível de Acesso" value="Público" />
          <SeiField label="Anexar Arquivo" value="extrato_jan_dez_2026.pdf" />
        </div>
        <div className="mt-3 flex gap-2">
          <SeiButton primary>Confirmar Dados</SeiButton>
          <SeiButton>Cancelar</SeiButton>
        </div>
      </SystemPreview>

      <Callout type="warning" title="Atenção: nomenclatura precisa é obrigatória">
        <p>
          <strong>A nomeação correta de cada documento na árvore do processo é etapa crítica
          da instrução.</strong> Utilize sempre nomes descritivos, coerentes com o conteúdo do
          anexo, indicando tipo, período e referência — por exemplo: <em>"Extrato Bancário —
          Jan a Dez 2026"</em>, <em>"Ata de Aprovação do Plano de Gastos — 12/03/2026"</em>,
          <em> "Nota Fiscal nº 4521 — Material de Limpeza"</em>.
        </p>
        <p>
          Nomes genéricos como <em>"Documento 1"</em>, <em>"Anexo"</em> ou <em>"Arquivo"</em>{" "}
          comprometem a rastreabilidade, dificultam a conferência pela GAD e podem gerar
          devolução do processo.
        </p>
      </Callout>

      <h2>3.3. Ordem de inserção</h2>
      <p>
        Insira os documentos na <strong>ordem lógica da instrução</strong>: ofício, planejamento,
        pesquisa de preços, demonstrativo, extratos, notas fiscais, atas. A árvore do processo
        deve refletir a <strong>sequência natural de leitura</strong> da prestação de contas.
      </p>

      <SystemPreview title="Árvore do processo — ordem sugerida">
        <div className="space-y-0.5">
          <SeiTreeItem icon="📄" label="Ofício de Encaminhamento" />
          <SeiTreeItem icon="📋" label="Plano de Aplicação / Plano de Gastos" />
          <SeiTreeItem icon="📊" label="Pesquisa de Preços (3 orçamentos)" />
          <SeiTreeItem icon="📑" label="Demonstrativo Financeiro" />
          <SeiTreeItem icon="🏦" label="Extrato Bancário – Jan a Dez 2026" active />
          <SeiTreeItem icon="🧾" label="Notas Fiscais (NF-e / DANFE)" />
          <SeiTreeItem icon="📝" label="Ata de Aprovação da Prestação de Contas" />
          <SeiTreeItem icon="📝" label="Ata de Eleição do CEC" />
        </div>
      </SystemPreview>
    </section>
  );
}
