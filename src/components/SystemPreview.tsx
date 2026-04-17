import { Monitor } from "lucide-react";

interface SystemPreviewProps {
  title: string;
  children: React.ReactNode;
}

export function SystemPreview({ title, children }: SystemPreviewProps) {
  return (
    <div className="system-preview my-8">
      <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-border/50">
        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center">
          <Monitor className="w-3.5 h-3.5 text-primary" />
        </div>
        <span className="font-sans text-[11px] uppercase tracking-[0.1em] text-muted-foreground font-bold flex-1">
          {title}
        </span>
        <span className="text-[10px] font-sans font-semibold text-primary/60 bg-primary/[0.06] px-2.5 py-0.5 rounded-full border border-primary/10 tracking-wide uppercase">
          Simulação
        </span>
      </div>
      <div className="sei-window rounded-xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(0,0,0,0.12),0_8px_16px_-4px_rgba(0,0,0,0.06)] border border-black/[0.04] ring-1 ring-black/[0.02] transform transition-transform hover:scale-[1.005] duration-500">
        {/* Window chrome - Glassmorphism */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[hsl(224,22%,14%,0.85)] backdrop-blur-2xl border-b border-white/[0.08]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_1px_2px_rgba(0,0,0,0.2)] border border-[#e0443e]/50" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_1px_2px_rgba(0,0,0,0.2)] border border-[#dea123]/50" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_1px_2px_rgba(0,0,0,0.2)] border border-[#1aab29]/50" />
          </div>
          <div className="ml-4 flex-1 bg-black/25 rounded px-3 py-1 text-[10.5px] text-white/40 font-sans text-center max-w-[220px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] border border-white/5 mx-auto">
            sei.rio.rj.gov.br
          </div>
        </div>
        {/* SEI toolbar */}
        <div className="flex items-center gap-4 px-4 py-2.5 bg-[hsl(224,20%,22%)] text-[hsl(0,0%,100%,0.6)] text-[11px] font-sans border-b border-[hsl(224,18%,26%)]">
          <span className="font-extrabold text-[hsl(0,0%,100%,0.95)] text-[13px] tracking-tight">SEI!</span>
          <span className="text-[hsl(0,0%,100%,0.15)]">|</span>
          <span className="hover:text-white/90 transition-colors cursor-default">Processo</span>
          <span className="hover:text-white/90 transition-colors cursor-default">Documentos</span>
          <span className="hover:text-white/90 transition-colors cursor-default">Blocos</span>
        </div>
        {/* Content area */}
        <div className="bg-white p-5">
          {children}
        </div>
      </div>
    </div>
  );
}

/* Subcomponents for building mockup elements */

export function SeiMenu({ items, activeIndex }: { items: string[]; activeIndex?: number }) {
  return (
    <div className="space-y-0.5 text-sm font-sans">
      {items.map((item, i) => (
        <div
          key={i}
          className={`px-3 py-2 rounded-lg text-[13px] transition-all duration-200 ${
            i === activeIndex
              ? "bg-primary/[0.1] text-primary font-semibold border-l-2 border-primary shadow-sm"
              : "text-[hsl(224,15%,40%)] hover:bg-[hsl(225,15%,96%)]"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export function SeiField({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-3 py-3 border-b border-dashed border-[hsl(225,14%,91%)] last:border-0">
      <span className="text-[11px] uppercase tracking-wide text-muted-foreground font-bold font-sans min-w-[140px] shrink-0">
        {label}
      </span>
      <span className={`text-[13px] font-sans leading-snug ${highlight ? "font-bold text-primary" : "text-foreground"}`}>
        {value}
      </span>
    </div>
  );
}

export function SeiTreeItem({ icon, label, active, indent }: { icon: string; label: string; active?: boolean; indent?: number }) {
  return (
    <div
      className={`flex items-center gap-2 py-1.5 text-[12px] font-sans rounded-lg px-2.5 transition-all duration-200 ${
        active ? "bg-primary/[0.08] font-bold text-primary shadow-sm" : "text-[hsl(224,15%,35%)] hover:bg-muted/50"
      }`}
      style={{ paddingLeft: `${(indent || 0) * 16 + 10}px` }}
    >
      <span className="text-[13px]">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

export function SeiButton({ children, primary }: { children: React.ReactNode; primary?: boolean }) {
  return (
    <span
      className={`inline-flex items-center px-4 py-2 rounded-lg text-[12px] font-sans font-bold transition-all duration-200 cursor-default ${
        primary
          ? "bg-gradient-to-b from-primary to-[hsl(224,58%,30%)] text-primary-foreground shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/25"
          : "bg-muted text-foreground border border-border hover:bg-muted/80 shadow-sm"
      }`}
    >
      {children}
    </span>
  );
}
