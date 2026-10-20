# Direção de Produto — POP Digital PDDE v3

## Propósito

O POP Digital PDDE é um **manual online, público e interativo** da 4ª CRE/GAD. Seu objetivo é transformar normas, procedimentos e critérios de análise em orientação prática para dois momentos do trabalho:

1. **Instrução processual** — como formar, organizar, assinar, remeter e acompanhar a prestação de contas no SEI!RIO.
2. **Fiscalização** — como examinar o processo instruído, confrontar evidências, classificar achados, diligenciar, reanalisar e chegar a uma conclusão tecnicamente sustentada.

## O que o produto não é

Este projeto **não é um sistema de gestão da fiscalização**. Não deve evoluir para:

- carteira de escolas ou processos;
- login, perfis ou permissões;
- banco institucional de análises;
- workflow multiusuário;
- controle de prazos e pendências por unidade;
- substituição do SEI!RIO;
- julgamento ou aprovação automáticos.

Essas necessidades pertencem aos sistemas específicos de gestão da fiscalização.

## Princípios

- **Ensinar antes de automatizar.**
- **Explicar o raciocínio**, não apenas listar documentos.
- **Interatividade pedagógica**, não persistência operacional.
- **Uma fonte de orientação**, evitando duplicação de sistemas.
- **Modelos e minutas são apoio**, nunca conclusão automática.
- **Conteúdo normativo e fluxo real** têm prioridade sobre efeitos visuais.

## Arquitetura de informação

### Parte I — Instrução Processual
1. Abertura do Processo
2. Instrução Processual
3. Inclusão de Documentos
4. Autenticação
5. Bloco de Assinatura
6. Remessa e Acompanhamento

### Parte II — Fiscalização
7. Fiscalização da Prestação de Contas
   - sequência sugerida de análise;
   - integridade documental;
   - coerência da despesa;
   - trilha financeira;
   - execução e patrimônio;
   - classificação dos achados;
   - diligência;
   - reanálise e conclusão.

### Material de Apoio
- modelos e anexos;
- checklist de instrução;
- minuta de encaminhamento;
- contatos;
- referências normativas.

## Ferramenta de minuta

A rota `/despacho-express` permanece por compatibilidade, mas sua função é **gerar somente a minuta de encaminhamento da unidade escolar à GAD**.

Ela não deve gerar automaticamente:
- parecer favorável;
- diligência sem apontamentos fornecidos pelo usuário;
- aprovação;
- qualquer conclusão que dependa da fiscalização.

## Evoluções seguintes

1. busca full-text real sobre o conteúdo do manual;
2. exemplos interativos de análise por cenário;
3. matriz pedagógica “documento → o que conferir → erro frequente → consequência”;
4. revisão normativa completa e versionada;
5. melhorias de acessibilidade e navegação específicas para leitura longa.
