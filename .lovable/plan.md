

## Objetivo

Integrar o projeto **Despacho Express 4ª CRE** (https://despacho-express-4cre.vercel.app/) ao manual POP atual, oferecendo aos usuários a ferramenta de geração rápida de despachos diretamente do manual.

## Investigação inicial

Antes de propor a integração definitiva, preciso entender o que o projeto externo faz. Pelo nome e URL pública, trata-se de um gerador de despachos administrativos voltado à 4ª CRE — o que é altamente complementar ao POP de Prestação de Contas (que inclui justamente despachos no SEI!RIO, etapas 1, 2, 5 e 6).

Existem duas abordagens possíveis de integração, com trade-offs distintos.

## Opções de integração

### Opção A — Link externo destacado (rápido, baixo risco)
Adicionar um card/botão de destaque em pontos estratégicos do manual apontando para `https://despacho-express-4cre.vercel.app/` em nova aba.

**Onde inserir:**
1. Nova subseção em **Modelos e Anexos** — card "Ferramenta: Gerador de Despachos" com descrição, screenshot/ícone e CTA "Abrir ferramenta".
2. Callout discreto nas seções **2. Instrução Processual** e **5. Bloco de Assinatura** (onde despachos são redigidos) — "Use o Despacho Express para agilizar a redação".
3. Item no menu lateral (`Sidebar.tsx`) na seção "Material de Apoio".

**Prós:** Implementação imediata, sem dependências, sempre atualizado pelo projeto fonte.
**Contras:** Tira o usuário do manual.

### Opção B — Embed via iframe (imersivo)
Criar uma rota interna (ex: `/despacho-express`) que carrega a ferramenta dentro de um iframe responsivo, mantendo o usuário no contexto do manual.

**Prós:** Experiência unificada.
**Contras:** Depende de o site externo permitir embedding (CSP/X-Frame-Options); pode quebrar se o projeto externo mudar; não funciona offline/PDF.

### Opção C — Remix/cópia do código (integração nativa)
Trazer o código do repositório GitHub para dentro deste projeto como rota interna real (`/despacho-express`), totalmente integrado ao design system do manual.

**Prós:** Integração visual perfeita, controle total, sem dependência externa.
**Contras:** Maior esforço, precisa de manutenção paralela, requer permissão para copiar.

## Recomendação

**Opção A** como primeira entrega — rápida, segura e já entrega valor. Caso aprovada, podemos posteriormente migrar para B ou C.

## Detalhamento da Opção A (proposta)

**Arquivos a alterar:**

1. **`src/components/sections/Modelos.tsx`**
   - Adicionar bloco "Ferramentas Auxiliares" com card destacado:
     - Ícone (ex: `Zap` ou `FileEdit` do lucide-react)
     - Título: "Despacho Express — 4ª CRE"
     - Descrição institucional (1-2 linhas) sobre o uso para gerar despachos padronizados
     - Botão `<a href="..." target="_blank" rel="noopener noreferrer">` estilizado como CTA primário
     - Badge "Ferramenta externa"

2. **`src/components/sections/Instrucao.tsx`** e **`src/components/sections/Assinatura.tsx`**
   - Inserir um `Callout` tipo `tip` com link para a ferramenta, texto curto: "Para agilizar a elaboração de despachos padronizados, utilize o **Despacho Express**."

3. **`src/components/Sidebar.tsx`**
   - Adicionar item no grupo "apoio": `{ id: "ferramentas", label: "Despacho Express", icon: Zap, group: "apoio", external: true }` com tratamento para abrir em nova aba (ícone de link externo `ExternalLink` ao lado).

4. **`src/pages/Index.tsx`**
   - Garantir âncora `id="ferramentas"` se necessário (provavelmente integrada à seção Modelos).

**Questões abertas que preciso confirmar com você:**

