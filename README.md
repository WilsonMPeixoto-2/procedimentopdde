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


## Gerenciador de Pacotes

O projeto usa **npm** como gerenciador canônico. O `package-lock.json` é a fonte de verdade do grafo de dependências e deve permanecer sincronizado com o `package.json`.
