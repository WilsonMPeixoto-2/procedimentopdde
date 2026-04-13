import { Callout } from "../Callout";

export function Inclusao() {
  return (
    <section id="inclusao">
      <div className="section-number">Seção 3</div>
      <h1>Inclusão de Documentos Externos</h1>
      <p className="text-muted-foreground font-sans text-[0.92em] -mt-2 mb-6">
        Como incluir documentos digitalizados e nato-digitais no SEI!RIO.
      </p>

      <p>
        Nesta etapa, os documentos reunidos na instrução processual serão inseridos na árvore
        do processo eletrônico. A correta classificação entre documento <strong>digitalizado</strong>{" "}
        e <strong>nato-digital</strong> é essencial para determinar se a peça seguirá para
        autenticação ou será juntada diretamente como original.
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
        Para incluir um documento externo, acesse a árvore do processo e utilize a opção de
        incluir documento. Preencha os campos de identificação com clareza: tipo do documento,
        data, número (quando houver) e formato (digitalizado ou nato-digital).
      </p>

      <Callout type="tip" title="Nome claro na árvore">
        <p>
          Use nomes descritivos para cada peça: "Extrato Bancário – Jan a Dez 2025",
          "Ata de Aprovação do Plano de Gastos", etc. Nomes genéricos como "Documento 1"
          dificultam a conferência posterior.
        </p>
      </Callout>

      <h2>3.3. Ordem de inserção</h2>
      <p>
        Insira os documentos na ordem lógica da instrução: ofício, planejamento, pesquisa de
        preços, demonstrativo, extratos, notas fiscais, atas. A árvore do processo deve refletir
        a sequência natural de leitura da prestação de contas.
      </p>
    </section>
  );
}
