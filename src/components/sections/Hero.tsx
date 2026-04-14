export function Hero() {
  return (
    <section className="relative -mx-6 -mt-10 lg:-mt-16 mb-12 px-6 py-16 sm:py-20 bg-[hsl(var(--sidebar-background))] text-[hsl(var(--sidebar-foreground))] overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.04] rounded-full bg-[hsl(var(--sidebar-primary))] blur-3xl translate-x-1/3 -translate-y-1/3" />

      <div className="relative max-w-xl">
        <div className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-[hsl(var(--sidebar-primary))] mb-4">
          4ª CRE · Gerência de Administração
        </div>

        <h1 className="text-[hsl(var(--sidebar-foreground))] text-2xl sm:text-3xl font-extrabold leading-tight mb-4 tracking-tight">
          Guia de Prestação de Contas — PDDE
        </h1>

        <p className="font-sans text-[0.95rem] leading-relaxed text-[hsl(var(--sidebar-foreground)/0.75)] mb-6 max-w-lg">
          Orientações para abertura, instrução e finalização do processo de prestação de contas do PDDE no SEI!RIO.
        </p>

        <div className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-xs text-[hsl(var(--sidebar-foreground)/0.5)]">
          <span>Versão 1.0 · Abril 2025</span>
          <span>Procedimento Operacional Padrão</span>
        </div>
      </div>
    </section>
  );
}
