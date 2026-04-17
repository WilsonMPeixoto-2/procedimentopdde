# Procedimento PDDE — 4ª CRE

Guia institucional de Prestação de Contas do **PDDE** (Programa Dinheiro Direto na Escola) no **SEI!RIO**, elaborado pela Gerência de Administração (GAD) da 4ª Coordenadoria Regional de Educação — Secretaria Municipal de Educação do Rio de Janeiro.

## Sobre

Este Procedimento Operacional Padrão (POP) orienta diretores, secretários escolares e servidores administrativos vinculados à 4ª CRE na abertura, instrução, assinatura e finalização do processo de prestação de contas do PDDE no Sistema Eletrônico de Informações do Município do Rio de Janeiro (SEI!RIO).

**Acesse o manual:** [procedimentopdde.vercel.app](https://procedimentopdde.vercel.app)

## Stack Técnica

| Camada | Tecnologia |
|--------|-----------|
| Framework | React 18 + TypeScript |
| Build | Vite 5 |
| Estilização | TailwindCSS 3.4 + CSS customizado |
| Componentes | shadcn/ui + Radix Primitives |
| Roteamento | React Router DOM 6 |
| Geração DOCX | docx + file-saver |
| Testes | Vitest + Testing Library |

## Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build de produção
npm run build

# Executar testes
npm test
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
