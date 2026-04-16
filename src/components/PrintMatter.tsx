/**
 * Editorial print-only matter: cover, half-title (contracapa),
 * table of contents and colophon.
 *
 * Hidden on screen via `hidden print:block`. Each section uses a
 * page-break utility so they print as standalone pages.
 */
import { FileText } from "lucide-react";

const tocItems = [
  { num: "", label: "Apresentação" },
  { num: "", label: "Escopo" },
  { num: "1", label: "Abertura do Processo" },
  { num: "2", label: "Instrução Processual" },
  { num: "3", label: "Inclusão de Documentos" },
  { num: "4", label: "Autenticação de Documentos" },
  { num: "5", label: "Bloco de Assinatura" },
  { num: "6", label: "Despacho e Finalização" },
  { num: "", label: "Modelos e Anexos" },
  { num: "", label: "Checklist" },
  { num: "7", label: "Contatos" },
  { num: "8", label: "Referências" },
];

export function PrintFrontMatter() {
  const today = new Date().toLocaleDateString("pt-BR", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="hidden print:block print-front-matter">
      {/* ---------- COVER ---------- */}
      <section className="print-cover">
        <div className="print-cover-mark">
          <FileText className="print-cover-icon" />
          <div>
            <div className="print-cover-org">Secretaria Municipal de Educação</div>
            <div className="print-cover-org-sub">4ª Coordenadoria Regional de Educação · GAD</div>
          </div>
        </div>

        <div className="print-cover-body">
          <div className="print-cover-eyebrow">Procedimento Operacional Padrão</div>
          <h1 className="print-cover-title">
            Prestação de Contas
            <span className="print-cover-title-accent">PDDE</span>
          </h1>
          <p className="print-cover-subtitle">
            Guia institucional de tramitação no SEI!RIO — abertura, instrução,
            assinatura e finalização do processo.
          </p>
        </div>

        <div className="print-cover-footer">
          <div>
            <div className="print-cover-meta-label">Edição</div>
            <div className="print-cover-meta-value">v1.0 · {today}</div>
          </div>
          <div>
            <div className="print-cover-meta-label">Órgão</div>
            <div className="print-cover-meta-value">E/4ª CRE / GAD</div>
          </div>
          <div>
            <div className="print-cover-meta-label">Cidade</div>
            <div className="print-cover-meta-value">Rio de Janeiro</div>
          </div>
        </div>
      </section>

      {/* ---------- HALF-TITLE / CONTRACAPA ---------- */}
      <section className="print-half-title">
        <div className="print-half-title-rule" />
        <p className="print-half-title-text">
          Este documento orienta as Unidades Escolares vinculadas à 4ª CRE quanto à
          tramitação da Prestação de Contas do Programa Dinheiro Direto na Escola
          (PDDE) no Sistema Eletrônico de Informações do Município do Rio de Janeiro
          (SEI!RIO).
        </p>
        <div className="print-half-title-rule" />
        <div className="print-half-title-meta">
          <div>
            <span>Elaboração</span>
            <strong>Gerência de Administração — GAD/4ª CRE</strong>
          </div>
          <div>
            <span>Público</span>
            <strong>Diretores, secretários escolares e servidores administrativos</strong>
          </div>
          <div>
            <span>Vigência</span>
            <strong>{today}</strong>
          </div>
        </div>
      </section>

      {/* ---------- TABLE OF CONTENTS ---------- */}
      <section className="print-toc">
        <div className="print-toc-eyebrow">Sumário</div>
        <h2 className="print-toc-title">Conteúdo do Manual</h2>
        <ol className="print-toc-list">
          {tocItems.map((item, idx) => (
            <li key={idx} className="print-toc-item">
              <span className="print-toc-num">{item.num || "·"}</span>
              <span className="print-toc-label">{item.label}</span>
              <span className="print-toc-leader" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export function PrintColophon() {
  const today = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="hidden print:block print-colophon">
      <div className="print-colophon-mark">
        <div className="print-colophon-rule" />
        <span>Colofão</span>
        <div className="print-colophon-rule" />
      </div>
      <h2 className="print-colophon-title">POP — Prestação de Contas PDDE</h2>
      <p className="print-colophon-text">
        Este Procedimento Operacional Padrão foi elaborado pela Gerência de
        Administração da 4ª Coordenadoria Regional de Educação, com o objetivo de
        padronizar a tramitação dos processos de Prestação de Contas do PDDE no
        SEI!RIO.
      </p>
      <dl className="print-colophon-meta">
        <div>
          <dt>Órgão</dt>
          <dd>Secretaria Municipal de Educação · 4ª CRE / GAD</dd>
        </div>
        <div>
          <dt>Edição</dt>
          <dd>v1.0</dd>
        </div>
        <div>
          <dt>Revisão</dt>
          <dd>{today}</dd>
        </div>
        <div>
          <dt>Tipografia</dt>
          <dd>Plus Jakarta Sans · Inter · Fraunces · JetBrains Mono</dd>
        </div>
      </dl>
      <div className="print-colophon-foot">
        Rio de Janeiro · {new Date().getFullYear()}
      </div>
    </section>
  );
}
