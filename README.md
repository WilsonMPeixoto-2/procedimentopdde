# Procedimento PDDE — 4ª CRE

Manual digital interativo sobre **instrução processual e fiscalização da prestação de contas do PDDE**, elaborado pela Gerência de Administração (GAD) da 4ª Coordenadoria Regional de Educação — Secretaria Municipal de Educação do Rio de Janeiro.

## Sobre

O produto reúne dois eixos complementares: **como instruir corretamente o processo no SEI!RIO** e **como fiscalizar a prestação de contas já instruída**. A proposta é ensinar o fluxo, os critérios de leitura, os confrontos documentais, a lógica de diligência e a reanálise, sem substituir o julgamento técnico do servidor.

**Fronteira do produto:** é um manual público, digital, interativo e orientativo. Não possui login, banco de dados ou backend próprio; não controla carteira de escolas, não registra o histórico oficial de análises e não substitui os sistemas institucionais de gestão da fiscalização.

A ferramenta de geração documental integrada produz apenas a **minuta de encaminhamento** da prestação de contas. Parecer de análise e aprovação permanecem condicionados ao resultado efetivo da fiscalização.

**Acesse o manual:** [procedimentopdde.vercel.app](https://procedimentopdde.vercel.app)

## Stack Técnica

| Camada | Tecnologia |
|--------|-----------|
| Framework | React 19 + TypeScript 6 |
| Runtime de build | Node 24 no Vercel |
| Build | Vite 8 + plugin React/Oxc |
| Estilização | TailwindCSS 3.4 + CSS customizado |
| Componentes | shadcn/ui + Radix Primitives |
| Roteamento | React Router 7 |
| Geração DOCX | docx + file-saver |
| Testes | Vitest + Playwright + Axe |

## Desenvolvimento Local

```bash
# Instalar exatamente o grafo versionado
npm ci

# Iniciar servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Executar testes unitários
npm test

# Executar testes com cobertura da lógica central
npm run test:coverage

# Validar TypeScript, lint, testes e build
npm run validate

# Executar testes E2E e acessibilidade
npm run test:e2e

# Verificar arquivos e dependências sem uso
npm run check:dead-code

# Verificar orçamento do bundle após o build
npm run check:bundle-budget
```

## Qualidade e integração contínua

O workflow de CI é executado em pull requests destinados à `main`, em pushes para `main` e sob acionamento manual. O pipeline é **somente leitura** e executa, no mesmo gate:

1. instalação reproduzível com `npm ci`;
2. auditoria bloqueante das dependências de produção (`npm audit --omit=dev --audit-level=high`);
3. auditoria informativa da toolchain de desenvolvimento;
4. typecheck;
5. lint;
6. auditoria de arquivos e dependências mortas com Knip;
7. testes unitários com cobertura de 100% da camada `src/lib`;
8. build de produção;
9. orçamento de bundle inicial;
10. testes E2E em Chromium;
11. auditoria automatizada de acessibilidade com Axe.

Os relatórios e evidências do Playwright são preservados como artefatos do GitHub Actions por 14 dias, inclusive em execuções com falha.

A cobertura unitária é aplicada à camada `src/lib`, onde ficam validação, utilitários e geração de DOCX, com threshold de 100% para statements, branches, functions e lines. A interface e as jornadas públicas permanecem protegidas por Playwright e Axe.

## Recursos interativos de fiscalização

A versão 3.0 inclui uma matriz pedagógica de fiscalização que relaciona cada documento ou situação a quatro perguntas: **o que conferir**, **com o que confrontar**, **qual sinal merece atenção** e **qual efeito pode ter na análise**. A matriz pode ser filtrada por Planejamento, Despesa, Financeiro e Patrimônio.

A busca do manual é **full-text sobre o conteúdo efetivamente renderizado**. Ela não depende de uma lista paralela de palavras-chave: ao pesquisar um termo, o usuário encontra as seções em que aquele conteúdo realmente aparece e recebe um trecho contextual antes de navegar.

### Mapa normativo por assunto

A seção de referências funciona como um mapa de consulta. Em vez de apresentar apenas uma lista cronológica de normas, ela organiza fontes oficiais por problema: base geral do PDDE, prestação de contas, execução e patrimônio, ações integradas e SEI!RIO/assinatura. Cada fonte informa **quando consultar** e **o que ela ajuda a resolver**.

### Casos guiados

A seção de fiscalização inclui exercícios interativos baseados em situações típicas de análise. O usuário escolhe uma conduta e recebe feedback sobre o raciocínio, sem criação de registros, histórico ou decisão automática.

O manual também diferencia visualmente três naturezas de orientação:

- **Regra federal** — norma, guia ou formulário oficial do FNDE;
- **Fluxo municipal/local** — procedimento de tramitação ou organização definido no ambiente municipal/4ª CRE;
- **Orientação prática** — método recomendado para organizar a análise, sem criar obrigação normativa nova.

## Performance

O Despacho Express é carregado sob demanda, mantendo a página principal do manual livre do peso do gerador DOCX até que a ferramenta seja aberta.

Baseline após a otimização:

- JavaScript inicial: **188,61 kB gzip** (antes: 370,50 kB gzip; redução aproximada de 49%);
- CSS inicial: **17,16 kB gzip**;
- chunk do Despacho Express: **167,82 kB gzip**, carregado apenas na rota `/despacho-express`.

O CI aplica orçamento máximo de **210 KiB gzip para o JavaScript inicial** e **20 KiB gzip para o CSS inicial**. Alterações que ultrapassem esses limites falham antes da integração.

## Publicação

A publicação em produção é feita a partir da branch `main`. Pull requests e branches de trabalho devem ser validados pelo GitHub Actions antes da integração; o domínio oficial continua sendo `procedimentopdde.vercel.app`.

## Gerenciador de pacotes e atualização de dependências

O projeto usa **npm** como gerenciador canônico. O `package-lock.json` é a fonte de verdade do grafo de dependências e deve permanecer sincronizado com o `package.json`. O CI nunca altera nem envia commits ao repositório.

O Dependabot verifica semanalmente dependências npm e GitHub Actions. Atualizações npm `minor` e `patch` são agrupadas; atualizações `major` permanecem fora da atualização automática de versão e devem ser avaliadas de forma controlada. Correções de segurança continuam sujeitas às regras do Dependabot Security Updates do GitHub.

## Direção de produto — outubro de 2026

A versão 3.0 reorganiza o manual em dois caminhos de leitura: **Instrução Processual** e **Fiscalização**. A nova seção de fiscalização ensina sequência de análise, eixos de conferência, classificação de achados, diligência e reanálise. A antiga automação de três despachos foi restringida à minuta de encaminhamento para evitar que a ferramenta antecipe parecer favorável ou aprovação.

O princípio de produto é: **orientar melhor o trabalho sem duplicar os sistemas que já fazem a gestão da fiscalização**.

## Baseline de manutenção — agosto de 2026

A modernização da stack foi consolidada na `main` em 31 de agosto de 2026. A baseline correspondente foi validada com instalação reproduzível, auditoria de dependências, TypeScript, lint, testes unitários, build, jornada E2E, geração real de DOCX e auditoria automatizada de acessibilidade.

Alterações futuras de dependências devem preservar essa baseline e passar pelo mesmo gate antes de integração.

## Estrutura do Projeto

```
src/
├── components/
│   ├── sections/       # Seções do manual (Abertura, Instrução, etc.)
│   ├── ui/             # Componentes base (shadcn/ui)
│   ├── ManualLayout.tsx
│   ├── Sidebar.tsx
│   ├── Callout.tsx
│   └── ...
├── hooks/              # Hooks customizados (scroll-spy, toast, etc.)
├── lib/                # Utilitários e templates DOCX
├── pages/              # Páginas (Index, DespachoExpress, NotFound)
└── index.css           # Design system e print stylesheet
```

## Licença

Uso institucional — Secretaria Municipal de Educação do Rio de Janeiro.
