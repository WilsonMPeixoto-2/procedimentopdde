import { Callout } from "../Callout";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function Expandable({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded my-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 font-sans text-sm font-semibold text-heading hover:bg-muted/50 transition-colors"
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {open && <div className="px-4 pb-4 text-[0.92em]">{children}</div>}
    </div>
  );
}

export function Instrucao() {
  return (
    <section id="instrucao">
      <div className="section-number">Seção 2</div>
      <h1>Instrução Processual</h1>
      <p className="text-muted-foreground font-sans text-[0.92em] -mt-2 mb-6">
        Organização documental, regras operacionais e modelos de apoio.
      </p>

      <p>
        Esta etapa reúne o <strong>núcleo documental</strong> da instrução processual. O foco é
        montar um processo inteligível, rastreável e pronto para seguir corretamente o fluxo do
        SEI!RIO.
      </p>

      <Callout type="tip" title="Leitura prática">
        <p>
          Comece pelo checklist (disponível na seção <a href="#checklist">Checklist</a>) e volte
          aos modelos apenas quando precisar acelerar a produção ou conferir o padrão de uma peça.
        </p>
      </Callout>

      <h2>2.1. Regras operacionais</h2>
      <p>
        Antes de montar os autos, consulte rapidamente estes pontos para evitar fragilidade
        documental. Eles aparecem aqui porque impactam diretamente a instrução do processo.
      </p>

      <Expandable title="Pesquisa de preços e SRP">
        <p>
          A rotina exige <strong>três orçamentos</strong> sempre que viável. Quando o número for
          inferior, é necessário justificativa idônea ou uso documentado de Sistema de Registro
          de Preços (SRP). Use esta referência apenas para não montar o processo com documentação
          insuficiente.
        </p>
      </Expandable>

      <Expandable title="Compras pela internet">
        <p>
          Registre o valor final da aquisição e preserve os comprovantes que sustentam a peça
          juntada ao processo. Print de tela com preço, data e identificação do fornecedor
          é o mínimo esperado.
        </p>
      </Expandable>

      <Expandable title="Vedações e enquadramento">
        <p>
          O guia não substitui a análise material da despesa, mas sinaliza quando a documentação
          exige cuidado adicional. Despesas fora do objeto do PDDE, gastos com pessoal e
          pagamentos em espécie são exemplos de situações vedadas ou com restrições significativas.
        </p>
      </Expandable>

      <Expandable title="Erros recorrentes na instrução">
        <p>
          Os problemas mais comuns começam na organização da árvore do processo e na ausência de
          documentos básicos. Falta de extrato bancário, ata sem assinatura, demonstrativo
          incompleto e pesquisa de preços com apenas um orçamento são as ocorrências mais
          frequentes nas devoluções.
        </p>
      </Expandable>

      <Callout type="warning" title="Importante">
        <p>
          Não use esta seção como substituta de uma orientação completa sobre execução
          financeira do PDDE. Aqui o foco é apenas a instrução processual.
        </p>
      </Callout>

      <h2>2.2. Autenticação de documento digitalizado</h2>
      <p>
        Documentos escaneados de originais físicos devem ser autenticados no SEI!RIO no momento
        da inserção, declarando que a cópia digital <strong>confere com o original</strong>. Os
        originais devem permanecer arquivados na unidade pelo prazo aplicável da{" "}
        <a href="https://www.gov.br/fnde/pt-br/acesso-a-informacao/legislacao/resolucoes/2021/resolucao-no-15-de-16-de-setembro-de-2021/view" target="_blank" rel="noopener noreferrer">
          Resolução CD/FNDE nº 15/2021
        </a>. Para a classificação detalhada entre digitalizado e nato-digital, consulte a{" "}
        <a href="#inclusao">Seção 3</a>.
      </p>

      <h2>2.3. O que vem em seguida</h2>
      <p>
        Ao concluir esta etapa, você já deve saber quais peças entram no processo, quais ainda
        precisam ser produzidas no SEI!RIO e quais exigirão autenticação. A próxima seção mostra
        como inserir documentos digitalizados e nato-digitais com classificação correta.
      </p>
    </section>
  );
}
