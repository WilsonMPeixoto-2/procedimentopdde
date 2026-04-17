import { Building2, Phone, Mail } from "lucide-react";

export function InstitutionalFooter() {
  return (
    <div className="mt-20 mb-4">
      {/* Divider */}
      <div className="flex items-center gap-4 mb-10">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="w-2 h-2 rounded-full bg-primary/30" />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* GAD Card */}
      <div className="rounded-2xl bg-gradient-to-b from-accent to-background border border-border/60 p-6 sm:p-8 text-center shadow-sm">
        <div className="flex items-center justify-center gap-2 text-muted-foreground font-sans text-sm mb-2">
          <Building2 className="w-4 h-4 text-primary/60" />
          4ª Coordenadoria Regional de Educação
        </div>

        <h3 className="!mt-1 !mb-2 font-sans text-xl sm:text-2xl font-extrabold text-foreground tracking-tight">
          Gerência de Administração (GAD)
        </h3>

        <p className="font-sans text-sm text-muted-foreground mb-5 max-w-md mx-auto">
          Este documento foi elaborado pela Gerência de Administração da 4ª CRE para
          auxiliar diretores e gestores escolares na prestação de contas do PDDE.
        </p>

        {/* CRE badge */}
        <div className="inline-flex items-center gap-3 bg-background border border-border rounded-xl px-5 py-3 shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-[hsl(var(--sidebar-background))] text-[hsl(var(--sidebar-foreground))] flex items-center justify-center font-sans text-sm font-bold">
            4ª
          </div>
          <div className="text-left">
            <div className="font-sans text-sm font-bold text-foreground">CRE</div>
            <div className="font-sans text-xs text-muted-foreground">SME · Rio de Janeiro</div>
          </div>
        </div>
      </div>

      {/* Combined: Metadata + Developer credits */}
      <div className="mt-8 pt-6 border-t border-border/50">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 sm:gap-8">
          {/* Left: Version metadata */}
          <div className="text-center sm:text-left font-sans text-sm text-muted-foreground space-y-0.5">
            <p className="m-0 font-medium text-foreground/80">Procedimento Operacional Padrão — Prestação de Contas PDDE</p>
            <p className="m-0">4ª Coordenadoria Regional de Educação | GAD</p>
            <p className="m-0 text-xs">Versão 2.6 · Abril 2026</p>
          </div>

          {/* Right: Developer */}
          <div className="text-center sm:text-right shrink-0 space-y-1">
            <p className="font-sans text-sm text-muted-foreground m-0">
              Desenvolvido por <strong className="text-foreground font-semibold">Wilson M. Peixoto</strong> — SME/RJ
            </p>
            <p className="font-sans text-xs italic text-muted-foreground/70 m-0">
              Inovação para a Gestão Pública
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-2 sm:gap-5 font-sans text-sm text-muted-foreground mt-2">
              <a href="tel:+5521994974132" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors no-underline">
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span className="leading-none">(21) 99497-4132</span>
              </a>
              <a href="mailto:wilsonmp2@gmail.com" className="inline-flex items-center gap-1.5 hover:text-primary transition-colors no-underline">
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span className="leading-none">wilsonmp2@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
