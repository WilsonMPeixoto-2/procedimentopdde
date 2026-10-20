import { ArrowDownRight, ChevronDown, FileText, FolderTree, SearchCheck } from "lucide-react";

export function Hero() {
  return (
    <section className="manual-hero relative w-full mb-16 overflow-hidden bg-gradient-to-br from-[hsl(224,64%,33%)] via-[hsl(224,58%,24%)] to-[hsl(224,60%,16%)] text-white">
      <div className="absolute top-0 left-[8%] w-[560px] h-[560px] opacity-[0.10] rounded-full bg-white blur-[200px]" />
      <div className="absolute bottom-0 right-[4%] w-[420px] h-[420px] opacity-[0.07] rounded-full bg-[hsl(215,55%,68%)] blur-[160px]" />

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-9 h-9 rounded-lg bg-white/[0.10] backdrop-blur-sm flex items-center justify-center border border-white/[0.08]">
            <FileText className="w-4 h-4 text-white/80" />
          </div>
          <div>
            <div className="font-sans text-[11px] font-bold uppercase tracking-[0.12em] text-white/90 leading-tight">
              Secretaria Municipal de Educação
            </div>
            <div className="font-sans text-[10px] text-white/50 leading-tight">
              4ª Coordenadoria Regional de Educação · GAD
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-11 h-[1.5px] bg-white/40" />
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-white/65">
              Manual digital interativo
            </span>
          </div>

          <h1
            className="!border-0 !pb-0 !mb-0 text-white text-[2.35rem] sm:text-[3.5rem] lg:text-[4rem] font-extrabold leading-[0.98] tracking-[-0.04em] after:hidden text-left"
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            Prestação de Contas
            <br />
            PDDE
          </h1>

          <h2
            className="!border-0 !pb-0 !mt-2 !mb-0 text-white/88 text-[1.65rem] sm:text-[2.25rem] leading-[1.05] tracking-[-0.02em] after:hidden text-left"
            style={{ fontFamily: "'Fraunces', Georgia, serif", fontStyle: "italic", fontWeight: 500 }}
          >
            instrução processual & fiscalização
          </h2>
        </div>

        <p className="text-[0.96rem] sm:text-[1.04rem] leading-[1.65] text-white/70 max-w-2xl !text-left mb-9 font-sans">
          Guia institucional para montar corretamente o processo no SEI!RIO e compreender como a
          prestação de contas deve ser examinada, confrontada, diligenciada e concluída.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 max-w-3xl print:hidden">
          <a
            href="#abertura"
            className="group rounded-xl border border-white/15 bg-white/[0.075] hover:bg-white/[0.11] px-5 py-4 no-underline transition-all backdrop-blur-sm"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-white/10">
                <FolderTree className="w-4 h-4 text-white/85" />
              </div>
              <div className="flex-1">
                <div className="font-sans text-[10px] uppercase tracking-[0.14em] font-bold text-white/45 mb-1">
                  Caminho 1
                </div>
                <div className="font-sans text-sm font-bold text-white">Instrução processual</div>
                <div className="font-sans text-[12.5px] leading-relaxed text-white/60 mt-1">
                  Autuação, documentos, autenticação, assinatura, remessa e acompanhamento.
                </div>
              </div>
              <ArrowDownRight className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors" />
            </div>
          </a>

          <a
            href="#fiscalizacao"
            className="group rounded-xl border border-white/15 bg-white/[0.075] hover:bg-white/[0.11] px-5 py-4 no-underline transition-all backdrop-blur-sm"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-white/10">
                <SearchCheck className="w-4 h-4 text-white/85" />
              </div>
              <div className="flex-1">
                <div className="font-sans text-[10px] uppercase tracking-[0.14em] font-bold text-white/45 mb-1">
                  Caminho 2
                </div>
                <div className="font-sans text-sm font-bold text-white">Fiscalização</div>
                <div className="font-sans text-[12.5px] leading-relaxed text-white/60 mt-1">
                  Evidências, confrontos, achados, diligências, reanálise e conclusão.
                </div>
              </div>
              <ArrowDownRight className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors" />
            </div>
          </a>
        </div>

        <div className="mt-8 pt-5 border-t border-white/[0.14] flex flex-wrap gap-x-8 gap-y-3">
          <div>
            <div className="font-sans text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.18em] text-white/35 mb-1">Edição</div>
            <div className="font-heading text-[11px] sm:text-[13px] font-semibold text-white/88">v3.0 · outubro 2026</div>
          </div>
          <div>
            <div className="font-sans text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.18em] text-white/35 mb-1">Escopo</div>
            <div className="font-heading text-[11px] sm:text-[13px] font-semibold text-white/88">Orientação · não gestão</div>
          </div>
          <div>
            <div className="font-sans text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.18em] text-white/35 mb-1">Órgão</div>
            <div className="font-heading text-[11px] sm:text-[13px] font-semibold text-white/88">E/4ª CRE / GAD</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/25 animate-bounce print:hidden">
        <span className="font-sans text-[9px] tracking-[0.1em] font-semibold uppercase">Role para continuar</span>
        <ChevronDown className="w-3.5 h-3.5" />
      </div>
    </section>
  );
}
