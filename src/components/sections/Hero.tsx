import { BookOpen, Building2, FileText, Calendar } from "lucide-react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative -mx-6 -mt-10 lg:-mt-16 mb-14 px-6 py-16 sm:py-24 overflow-hidden text-center bg-gradient-to-b from-accent via-[hsl(210,25%,97%)] to-background">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23205080' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Gradient orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] opacity-[0.07] rounded-full bg-primary blur-[120px] translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-72 h-72 opacity-[0.05] rounded-full bg-primary blur-[80px] -translate-x-1/4 translate-y-1/4" />

      <div className="relative max-w-2xl mx-auto">
        {/* Org badge */}
        <div className="inline-flex items-center gap-2 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-primary mb-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/8 shadow-sm">
          <Building2 className="w-3.5 h-3.5" />
          4ª Coordenadoria Regional de Educação
        </div>

        {/* POP badge */}
        <div className="inline-flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6 px-4 py-1.5 rounded-full border border-border bg-background/80 shadow-sm">
          <FileText className="w-3 h-3" />
          Procedimento Operacional Padrão
        </div>

        <h1 className="!border-0 !pb-0 text-foreground text-3xl sm:text-4xl font-extrabold leading-[1.15] mb-2 tracking-tight font-sans after:hidden">
          Prestação de Contas
        </h1>
        <h1 className="!border-0 !pb-0 text-primary text-3xl sm:text-4xl font-extrabold leading-[1.15] mb-6 tracking-tight font-sans after:hidden">
          PDDE no SEI!RIO
        </h1>

        <p className="font-sans text-[0.95rem] leading-relaxed text-muted-foreground mb-10 max-w-lg mx-auto !text-center">
          Orientações para abertura, instrução e finalização do processo de prestação de contas do PDDE no SEI!RIO.
        </p>

        {/* Info cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto mb-10">
          {[
            { icon: Building2, title: "GAD", desc: "Gerência de Administração" },
            { icon: BookOpen, title: "POP", desc: "Procedimento Operacional Padrão" },
            { icon: FileText, title: "SEI!RIO", desc: "Sistema Eletrônico" },
            { icon: Calendar, title: "V. 1.0", desc: "Abril/2025" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background/80 backdrop-blur-sm border border-border/70 shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-200">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-sans text-sm font-bold text-foreground">{title}</span>
              <span className="font-sans text-[11px] text-muted-foreground leading-tight text-center">{desc}</span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-1 text-primary/40 animate-bounce">
          <span className="font-sans text-[11px] tracking-wide font-medium">Role para continuar</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}