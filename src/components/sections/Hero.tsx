import { BookOpen, Building2, FileText, Calendar } from "lucide-react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="manual-hero relative w-full mb-16 px-6 py-20 sm:py-28 overflow-hidden text-center bg-gradient-to-br from-[hsl(225,30%,97%)] via-[hsl(220,25%,96%)] to-[hsl(42,25%,97%)]">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23264785' fill-opacity='0.5'%3E%3Cpath fill-rule='evenodd' d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Gradient orbs */}
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] opacity-[0.06] rounded-full bg-[hsl(224,64%,33%)] blur-[140px]" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 opacity-[0.04] rounded-full bg-[hsl(224,64%,50%)] blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-[0.02] rounded-full bg-[hsl(224,64%,33%)] blur-[160px]" />

      {/* ── Decorative SVG elements ── */}
      {/* Floating document icon — top right */}
      <svg className="hero-float-a absolute top-12 right-[12%] w-16 h-16 text-primary/[0.06] hidden sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>

      {/* Floating shield/checkmark — left side */}
      <svg className="hero-float-b absolute top-32 left-[8%] w-12 h-12 text-primary/[0.05] hidden sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>

      {/* Floating pen — bottom right */}
      <svg className="hero-float-c absolute bottom-20 right-[10%] w-10 h-10 text-primary/[0.05] hidden sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
      </svg>

      {/* Geometric accents — circles and rings */}
      <div className="hero-float-d absolute top-16 left-[22%] w-3 h-3 rounded-full bg-primary/[0.08] hidden sm:block" />
      <div className="hero-float-a absolute bottom-28 left-[18%] w-5 h-5 rounded-full border border-primary/[0.08] hidden sm:block" />
      <div className="hero-float-c absolute top-24 right-[25%] w-2 h-2 rounded-full bg-primary/[0.06] hidden sm:block" />

      {/* Decorative lines */}
      <svg className="hero-float-b absolute bottom-32 right-[22%] w-20 h-1 text-primary/[0.06] hidden sm:block" viewBox="0 0 80 4">
        <line x1="0" y1="2" x2="80" y2="2" stroke="currentColor" strokeWidth="1" strokeDasharray="6 4" />
      </svg>
      <svg className="hero-float-d absolute top-40 left-[32%] w-16 h-1 text-primary/[0.05] hidden sm:block" viewBox="0 0 64 4">
        <line x1="0" y1="2" x2="64" y2="2" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" />
      </svg>

      {/* Corner bracket accents */}
      <svg className="hero-float-a absolute top-8 left-[6%] w-8 h-8 text-primary/[0.06] hidden lg:block" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="1 12 1 1 12 1" />
      </svg>
      <svg className="hero-float-b absolute bottom-8 right-[6%] w-8 h-8 text-primary/[0.06] hidden lg:block" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="20 31 31 31 31 20" />
      </svg>

      <div className="relative max-w-2xl mx-auto">
        {/* Org badge — staggered entrance */}
        <div className="inline-flex items-center gap-2 font-sans text-[11px] font-bold uppercase tracking-[0.16em] text-primary mb-3 px-5 py-2 rounded-full border border-primary/15 bg-primary/[0.06] backdrop-blur-sm shadow-sm animate-fade-in" style={{ animationDelay: '0ms', animationFillMode: 'both' }}>
          <Building2 className="w-3.5 h-3.5" />
          4ª Coordenadoria Regional de Educação
        </div>

        {/* POP badge */}
        <div className="inline-flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8 px-4 py-1.5 rounded-full border border-border/60 bg-background/60 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>
          <FileText className="w-3 h-3" />
          Procedimento Operacional Padrão
        </div>

        <h1 className="!border-0 !pb-0 text-foreground text-[1.85rem] sm:text-[2.5rem] font-extrabold leading-[1.1] mb-1.5 tracking-[-0.03em] after:hidden text-center mx-auto animate-fade-in" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
          Prestação de Contas
        </h1>
        <h1 className="!border-0 !pb-0 text-primary text-[1.85rem] sm:text-[2.5rem] font-extrabold leading-[1.1] mb-7 tracking-[-0.03em] after:hidden text-center mx-auto animate-fade-in" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
          PDDE no SEI!RIO
        </h1>

        <p className="text-[1.02rem] sm:text-[1.08rem] leading-[1.62] text-muted-foreground mb-12 max-w-md mx-auto !text-center animate-fade-in italic" style={{ animationDelay: '400ms', animationFillMode: 'both', fontFamily: "'Fraunces', Georgia, serif", fontWeight: 400, letterSpacing: '-0.005em' }}>
          Orientações para abertura, instrução e finalização do processo de prestação de contas do PDDE no SEI!RIO.
        </p>

        {/* Info cards grid — glass morphism */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto mb-12">
          {[
            { icon: Building2, title: "GAD", desc: "Gerência de Administração", delay: 500 },
            { icon: BookOpen, title: "POP", desc: "Procedimento Operacional Padrão", delay: 575 },
            { icon: FileText, title: "SEI!RIO", desc: "Sistema Eletrônico", delay: 650 },
            { icon: Calendar, title: "V. 2.5", desc: "Abril/2026", delay: 725 },
          ].map(({ icon: Icon, title, desc, delay }) => (
            <div key={title} className="group flex flex-col items-center gap-2.5 p-4 rounded-xl bg-background/60 backdrop-blur-xl border border-border/40 shadow-[0_2px_8px_hsl(224,30%,50%,0.06)] hover:shadow-[0_8px_24px_hsl(224,30%,50%,0.12)] hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 ease-out animate-fade-in" style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}>
              <div className="w-10 h-10 rounded-xl bg-primary/[0.08] flex items-center justify-center group-hover:bg-primary/[0.14] group-hover:scale-110 transition-all duration-300">
                <Icon className="w-[18px] h-[18px] text-primary" />
              </div>
              <span className="font-sans text-[13px] font-bold text-foreground tracking-tight">{title}</span>
              <span className="font-sans text-[11px] text-muted-foreground leading-snug text-center">{desc}</span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-1.5 text-primary/35 animate-bounce">
          <span className="font-sans text-[10px] tracking-[0.1em] font-semibold uppercase">Role para continuar</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}
