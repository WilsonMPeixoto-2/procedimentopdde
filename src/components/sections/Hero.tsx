export function Hero() {
  return (
    <section className="relative -mx-6 -mt-10 lg:-mt-16 mb-14 px-6 py-16 sm:py-24 bg-[hsl(var(--sidebar-background))] text-[hsl(var(--sidebar-foreground))] overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-[0.06] rounded-full bg-[hsl(var(--sidebar-primary))] blur-[80px] translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-[0.04] rounded-full bg-[hsl(var(--sidebar-primary))] blur-[60px] -translate-x-1/4 translate-y-1/4" />

      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[hsl(var(--sidebar-primary)/0.5)] to-transparent" />

      <div className="relative max-w-xl">
        <div className="inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-[hsl(var(--sidebar-primary))] mb-5 px-3 py-1.5 rounded-full border border-[hsl(var(--sidebar-primary)/0.2)] bg-[hsl(var(--sidebar-primary)/0.08)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--sidebar-primary))] animate-pulse" />
          4ª CRE · Gerência de Administração
        </div>

        <h1 className="text-[hsl(var(--sidebar-foreground))] text-2xl sm:text-[2rem] font-extrabold leading-[1.2] mb-5 tracking-tight">
          Guia de Prestação de Contas — PDDE
        </h1>

        <p className="font-sans text-[0.95rem] leading-relaxed text-[hsl(var(--sidebar-foreground)/0.7)] mb-8 max-w-lg">
          Orientações para abertura, instrução e finalização do processo de prestação de contas do PDDE no SEI!RIO.
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-xs text-[hsl(var(--sidebar-foreground)/0.45)]">
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-[hsl(var(--sidebar-foreground)/0.3)]" />
            Versão 1.0 · Abril 2025
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-[hsl(var(--sidebar-foreground)/0.3)]" />
            Procedimento Operacional Padrão
          </span>
        </div>
      </div>
    </section>
  );
}
