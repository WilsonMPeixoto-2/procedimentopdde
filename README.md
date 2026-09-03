# Procedimento PDDE — 4ª CRE

Guia institucional de Prestação de Contas do **PDDE** (Programa Dinheiro Direto na Escola) no **SEI!RIO**, elaborado pela Gerência de Administração (GAD) da 4ª Coordenadoria Regional de Educação — Secretaria Municipal de Educação do Rio de Janeiro.

## Sobre

Este Procedimento Operacional Padrão (POP) orienta diretores, secretários escolares e servidores administrativos vinculados à 4ª CRE na abertura, instrução, assinatura e finalização do processo de prestação de contas do PDDE no Sistema Eletrônico de Informações do Município do Rio de Janeiro (SEI!RIO).

**Arquitetura:** aplicação web pública e estática. Não possui login, autenticação, banco de dados ou backend próprio. O Despacho Express gera os arquivos DOCX localmente no navegador.

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
2. `npm audit --audit-level=high`;
3. typecheck;
4. lint;
5. auditoria de arquivos e dependências mortas com Knip;
6. testes unitários com cobertura de 100% da camada `src/lib`;
7. build de produção;
8. orçamento de bundle inicial;
9. testes E2E em Chromium;
10. auditoria automatizada de acessibilidade com Axe.

Os relatórios e evidências do Playwright são preservados como artefatos do GitHub Actions por 14 dias, inclusive em execuções com falha.

A cobertura unitária é aplicada à camada `src/lib`, onde ficam validação, utilitários e geração de DOCX, com threshold de 100% para statements, branches, functions e lines. A interface e as jornadas públicas permanecem protegidas por Playwright e Axe.

## Performance

O Despacho Express é carregado sob demanda, mantendo a página principal do manual livre do peso do gerador DOCX até que a ferramenta seja aberta.

Baseline após a otimização:

- JavaScript inicial: **188,61 kB gzip** (antes: 370,50 kB gzip; redução aproximada de 49%);
- CSS inicial: **17,16 kB gzip**;
- chunk do Despacho Express: **167,82 kB gzip**, carregado apenas na rota `/despacho-express`.

O CI aplica orçamento máximo de **210 KiB gzip para o JavaScript inicial** e **20 KiB gzip para o CSS inicial**. Alterações que ultrapassem esses limites falham antes da integração.

## Gerenciador de pacotes e atualização de dependências

O projeto usa **npm** como gerenciador canônico. O `package-lock.json` é a fonte de verdade do grafo de dependências e deve permanecer sincronizado com o `package.json`. O CI nunca altera nem envia commits ao repositório.

O Dependabot verifica semanalmente dependências npm e GitHub Actions. Atualizações npm `minor` e `patch` são agrupadas; atualizações `major` permanecem fora da atualização automática de versão e devem ser avaliadas de forma controlada. Correções de segurança continuam sujeitas às regras do Dependabot Security Updates do GitHub.

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
