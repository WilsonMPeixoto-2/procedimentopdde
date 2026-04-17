import { Building2, FileText } from "lucide-react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="manual-hero relative w-full mb-16 overflow-hidden bg-gradient-to-br from-[hsl(224,64%,33%)] via-[hsl(224,58%,24%)] to-[hsl(224,60%,16%)] text-white">
      {/* Radial light accents */}
      <div className="absolute top-0 left-[10%] w-[600px] h-[600px] opacity-[0.10] rounded-full bg-white blur-[200px]" />
      <div className="absolute bottom-0 right-[5%] w-[400px] h-[400px] opacity-[0.06] rounded-full bg-[hsl(215,55%,68%)] blur-[160px]" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.5'%3E%3Cpath fill-rule='evenodd' d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* ── Floating decorative SVGs ── */}
      <svg className="hero-float-a absolute top-16 right-[10%] w-14 h-14 text-white/[0.04] hidden sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
      <svg className="hero-float-b absolute bottom-24 right-[18%] w-10 h-10 text-white/[0.04] hidden sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
      <div className="hero-float-c absolute top-28 right-[30%] w-2.5 h-2.5 rounded-full bg-white/[0.06] hidden sm:block" />
      <div className="hero-float-d absolute bottom-36 left-[15%] w-4 h-4 rounded-full border border-white/[0.06] hidden sm:block" />

      {/* Corner brackets */}
      <svg className="hero-float-a absolute top-6 left-6 w-6 h-6 text-white/[0.08] hidden lg:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="1 10 1 1 10 1" />
      </svg>
      <svg className="hero-float-b absolute bottom-6 right-6 w-6 h-6 text-white/[0.08] hidden lg:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="14 23 23 23 23 14" />
      </svg>

      <div className="relative max-w-3xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        {/* Top: Org mark */}
        <div className="flex items-center gap-3 mb-10 animate-fade-in" style={{ animationDelay: '0ms', animationFillMode: 'both' }}>
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

        {/* Center: Editorial title block */}
        <div className="mb-12">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-6 animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
            <div className="w-11 h-[1.5px] bg-white/40" />
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.22em] text-white/65">
              Procedimento Operacional Padrão
            </span>
          </div>

          {/* Main title — editorial scale */}
          <h1 className="!border-0 !pb-0 !mb-0 text-white text-[2.4rem] sm:text-[3.6rem] lg:text-[4.2rem] font-extrabold leading-[0.95] tracking-[-0.04em] after:hidden text-left animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'both', fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
            Prestação
            <br />
            de Contas
          </h1>

          {/* Accent — serif italic */}
          <h1 className="!border-0 !pb-0 !mt-1 !mb-0 text-white/90 text-[2.2rem] sm:text-[3.2rem] lg:text-[3.8rem] leading-[0.95] tracking-[-0.02em] after:hidden text-left animate-fade-in" style={{ animationDelay: '350ms', animationFillMode: 'both', fontFamily: "'Fraunces', Georgia, serif", fontStyle: 'italic', fontWeight: 500 }}>
            PDDE
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-[0.95rem] sm:text-[1.05rem] leading-[1.6] text-white/70 max-w-lg !text-left animate-fade-in mb-16" style={{ animationDelay: '450ms', animationFillMode: 'both', fontFamily: "'Inter', sans-serif", fontWeight: 400 }}>
          Guia institucional de tramitação no SEI!RIO — abertura, instrução,
          assinatura e finalização do processo.
        </p>

        {/* Bottom: Metadata grid */}
        <div className="pt-6 border-t border-white/[0.15] animate-fade-in" style={{ animationDelay: '550ms', animationFillMode: 'both' }}>
          <div className="grid grid-cols-3 gap-6 sm:gap-10 max-w-sm">
            {[
              { label: "Edição", value: "v2.6 · abril 2026" },
              { label: "Órgão", value: "E/4ª CRE / GAD" },
              { label: "Cidade", value: "Rio de Janeiro" },
            ].map(({ label, value }) => (
              <div key={label}>
                <div className="font-sans text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.18em] text-white/40 mb-1">
                  {label}
                </div>
                <div className="font-heading text-[11px] sm:text-[13px] font-semibold text-white/90 leading-tight">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator — absolute bottom center */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/25 animate-bounce print:hidden">
        <span className="font-sans text-[9px] tracking-[0.1em] font-semibold uppercase">Role para continuar</span>
        <ChevronDown className="w-3.5 h-3.5" />
      </div>
    </section>
  );
}
