import { Callout } from "../Callout";
import { SystemPreview, SeiMenu, SeiField, SeiButton } from "../SystemPreview";

export function Abertura() {
  return (
    <section id="abertura">

      <h2>1.1. Sobre esta etapa</h2>
      <p>
        A etapa inicial compreende a autuação do processo administrativo eletrônico em que serão
        registrados os dados básicos da prestação de contas, definidos os campos de identificação
        e criada a base formal sobre a qual a instrução seguirá nas etapas posteriores.
      </p>

      <Callout type="tip" title="Antes de começar">
        <p>
          Certifique-se de ter em mãos o <strong>CNPJ do CEC</strong>, a{" "}
          <strong>designação da escola</strong> e o <strong>exercício de referência</strong> antes
          de iniciar a autuação. Confirme o ano da prestação de contas e tenha o CNPJ correto
          para evitar inconsistências.
        </p>
      </Callout>

      <h2>1.2. Iniciando o Processo</h2>
      <p>
        Para abrir um novo processo no SEI!RIO, localize no menu lateral o comando{" "}
        <strong>Iniciar Processo</strong> e use esse atalho para começar a autuação.
      </p>

      <SystemPreview title="Menu lateral do SEI!RIO">
        <div className="flex gap-4">
          <div className="w-48 border-r border-border pr-4">
            <div className="text-[11px] uppercase tracking-wide text-muted-foreground font-semibold font-sans mb-2">
              Menu Principal
            </div>
            <SeiMenu
              items={[
                "📊  Estatísticas da Unidade",
                "⭐  Favoritos",
                "▶  Iniciar Processo",
                "🔍  Pesquisa",
                "📁  Base de Conhecimento",
              ]}
              activeIndex={2}
            />
          </div>
          <div className="flex-1 flex items-center justify-center text-[12px] text-muted-foreground font-sans italic">
            Clique em "Iniciar Processo" para abrir o formulário de autuação.
          </div>
        </div>
      </SystemPreview>

      <h2>1.3. Tipo correto de processo</h2>
      <p>
        Ao acessar a criação do processo, o sistema solicitará a seleção do tipo processual.
        Use o tipo padronizado da prestação de contas do CEC, evitando resultados de busca
        semelhantes, porém estranhos a este fluxo.
      </p>

      <Callout type="info" title="Tipo de processo correto">
        <p>
          <code>GESTÃO DOS CONSELHOS MUNICIPAIS DE EDUCAÇÃO: PRESTAÇÃO DE CONTAS DO CONSELHO ESCOLA COMUNIDADE - CEC</code>
        </p>
      </Callout>

      <SystemPreview title="Seleção do tipo de processo">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-wide text-muted-foreground font-semibold font-sans">
              Tipo do Processo:
            </span>
            <div className="flex-1 border border-border rounded px-2 py-1 text-[12px] font-sans bg-[hsl(var(--muted)/0.3)]">
              prestação de contas cec
            </div>
            <SeiButton>🔍 Pesquisar</SeiButton>
          </div>
          <div className="border border-border rounded overflow-hidden">
            <div className="px-3 py-1.5 bg-[hsl(var(--muted))] text-[11px] font-sans font-semibold text-muted-foreground">
              Resultados da busca
            </div>
            <div className="text-[12px] font-sans">
              <div className="px-3 py-2 bg-[hsl(var(--primary)/0.08)] text-[hsl(var(--primary))] font-semibold border-l-3 border-[hsl(var(--primary))]">
                ✔ GESTÃO DOS CONSELHOS MUNICIPAIS DE EDUCAÇÃO: PRESTAÇÃO DE CONTAS DO CONSELHO ESCOLA COMUNIDADE - CEC
              </div>
              <div className="px-3 py-2 text-muted-foreground border-t border-border">
                ✗ GESTÃO DOS CONSELHOS MUNICIPAIS DE EDUCAÇÃO: PRESTAÇÃO DE CONTAS — OUTROS
              </div>
            </div>
          </div>
        </div>
      </SystemPreview>

      <h2>1.4. Classificação por Assuntos</h2>
      <p>
        A classificação por assuntos decorre do tipo de processo escolhido na etapa anterior.
        Ela deve permanecer coerente com a autuação e não precisa ser reinventada pelo cadastrante
        quando o tipo correto já tiver sido selecionado.
      </p>
      <p>
        Classificação automática esperada:{" "}
        <code>03.04.01.02 - PRESTAÇÃO DE CONTAS DO CONSELHO ESCOLA COMUNIDADE - CEC</code>
      </p>

      <h2>1.5. Padrão de identificação</h2>
      <p>
        Para fins de triagem, busca e padronização interna da 4ª CRE/GAD, o cadastrante deverá
        digitar a especificação seguindo o padrão abaixo, incluindo sempre o <strong>exercício</strong>{" "}
        (ano de referência) e a <strong>ação do PDDE</strong> quando aplicável.
      </p>

      <table>
        <thead>
          <tr>
            <th>Situação</th>
            <th>Padrão de especificação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Uma ação do PDDE</td>
            <td>
              <code>PDDE — Exercício AAAA — E/CRE (04.xx.xxx) — NOME DA UE — CNPJ</code>
            </td>
          </tr>
          <tr>
            <td>Mais de uma ação</td>
            <td>
              <code>PDDE (Básico + Ações Integradas) — Exercício AAAA — E/CRE (04.xx.xxx) — NOME — CNPJ</code>
            </td>
          </tr>
        </tbody>
      </table>

      <SystemPreview title="Formulário de autuação — campos preenchidos">
        <div className="space-y-0">
          <SeiField label="Tipo do Processo" value="GESTÃO DOS CONSELHOS MUNICIPAIS DE EDUCAÇÃO: PRESTAÇÃO DE CONTAS DO CONSELHO ESCOLA COMUNIDADE - CEC" />
          <SeiField label="Classificação" value="03.04.01.02 - PRESTAÇÃO DE CONTAS DO CONSELHO ESCOLA COMUNIDADE - CEC" />
          <SeiField label="Especificação" value="PDDE — Exercício 2025 — E/CRE (04.30.502) — Ciep Elis Regina — 00.000.000/0001-00" highlight />
          <SeiField label="Interessados" value="E/4a.CRE/GAD · Ciep Elis Regina" />
          <SeiField label="Nível de Acesso" value="Público" />
          <SeiField label="Observações" value="INSERIR CNPJ DO CEC DA UNIDADE (00.000.000/0001-00)" />
        </div>
        <div className="mt-4 flex gap-2">
          <SeiButton primary>Salvar</SeiButton>
          <SeiButton>Cancelar</SeiButton>
        </div>
      </SystemPreview>

      <Callout type="tip" title="Exemplo prático">
        <p>
          <code>PDDE — Exercício 2025 — E/CRE (04.30.502) — Ciep Elis Regina — 00.000.000/0001-00</code>
        </p>
        <p>
          Essa padronização interna assegura a distinção precisa entre exercícios, ações e
          prestações de contas distintas, sem pretensão de fixar nomenclatura única para toda a SME.
        </p>
      </Callout>

      <h2>1.6. Nível de acesso</h2>
      <p>
        A definição do nível de acesso é decisão administrativa relacionada à publicidade do
        processo, à transparência da prestação de contas, à rastreabilidade do fluxo e à proteção
        de dados pessoais quando a documentação exigir tratamento específico.
      </p>

      <table>
        <thead>
          <tr>
            <th>Nível</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Público</strong></td>
            <td>Acessíveis a qualquer pessoa, usuário interno ou externo via Consulta Pública.</td>
          </tr>
          <tr>
            <td><strong>Restrito</strong></td>
            <td>Acessíveis apenas para a unidade criadora e unidades que recebam o processo.</td>
          </tr>
          <tr>
            <td><strong>Sigiloso</strong></td>
            <td>Acesso controlado por Credenciais de Acesso, para informações confidenciais.</td>
          </tr>
        </tbody>
      </table>

      <Callout type="info" title="Diretriz para o nível de acesso">
        <p>
          <strong>Regra geral:</strong> selecione <strong>Público</strong> como padrão. Use{" "}
          <strong>Restrito</strong> quando houver dados pessoais sensíveis (dados bancários,
          endereços, assinaturas) e justifique o tratamento adotado. Mantenha públicos os
          documentos que possam ser amplamente consultados sem risco.
        </p>
      </Callout>

      <h2>1.7. Interessados do processo</h2>
      <p>
        Registre as unidades que possuem interesse direto no processo. Para o fluxo da prestação
        de contas do PDDE, a GAD e a unidade escolar devem constar desde a abertura.
      </p>
      <ul>
        <li>
          Adicione a GAD: <code>10729 - E/4a.CRE/GAD</code>
        </li>
        <li>
          Busque pela designação oficial da unidade escolar para adicioná-la como interessada.
        </li>
      </ul>

      <h2>1.8. Observações da unidade</h2>
      <p>
        O campo <strong>Observações desta unidade</strong> deve registrar a informação padronizada
        utilizada pela 4ª CRE para identificar a entidade executora. O preenchimento precisa ser
        objetivo e uniforme:
      </p>
      <p>
        <code>INSERIR CNPJ DO CEC DA UNIDADE (00.000.000/0001-00)</code>
      </p>

      <Callout type="warning" title="Atenção">
        <p>Evite inserir observações paralelas ou comentários extensos neste campo da autuação inicial.</p>
      </Callout>

      <h2>1.9. Salvar e registrar o NUP</h2>
      <p>
        Após revisar os campos de cadastro, conclua a autuação pelo botão <strong>Salvar</strong>.
        Com essa ação, o sistema cria o processo e passa a exibir o número único que identificará
        formalmente o expediente no SEI!RIO.
      </p>

      <SystemPreview title="Processo criado com sucesso">
        <div className="text-center py-3">
          <div className="text-[11px] uppercase tracking-wide text-muted-foreground font-semibold font-sans mb-1">
            Número Único de Protocolo (NUP)
          </div>
          <div className="text-xl font-mono font-bold text-[hsl(var(--primary))]">
            000704.000123/2026-45
          </div>
          <div className="text-[11px] text-muted-foreground font-sans mt-2">
            Registre este número no controle interno da GCGR.
          </div>
        </div>
      </SystemPreview>

      <Callout type="tip" title="Após a criação">
        <p>
          Registre o <strong>NUP</strong> (Número Único de Protocolo) no controle de processos
          utilizado para controle interno da GCGR, de modo a manter a rastreabilidade desde a
          abertura. Exemplo: <code>000704.000123/2026-45</code>
        </p>
      </Callout>
    </section>
  );
}
