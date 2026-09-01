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

# Validar TypeScript, lint, testes e build
npm run validate

# Executar testes E2E e acessibilidade
npm run test:e2e
```

## Qualidade e integração contínua

O workflow de CI é executado em pull requests destinados à `main`, em pushes para `main` e sob acionamento manual. O pipeline é **somente leitura** e executa, no mesmo gate:

1. instalação reproduzível com `npm ci`;
2. `npm audit --audit-level=high`;
3. typecheck;
4. lint;
5. testes unitários;
6. build de produção;
7. testes E2E em Chromium;
8. auditoria automatizada de acessibilidade com Axe.

Os relatórios e evidências do Playwright são preservados como artefatos do GitHub Actions por 14 dias, inclusive em execuções com falha.

## Gerenciador de pacotes e atualização de dependências

O projeto usa **npm** como gerenciador canônico. O `package-lock.json` é a fonte de verdade do grafo de dependências e deve permanecer sincronizado com o `package.json`. O CI nunca altera nem envia commits ao repositório.

O Dependabot verifica semanalmente dependências npm e GitHub Actions. Atualizações npm `minor` e `patch` são agrupadas; atualizações `major` permanecem fora da atualização automática de versão e devem ser avaliadas de forma controlada. Correções de segurança continuam sujeitas às regras do Dependabot Security Updates do GitHub.

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
