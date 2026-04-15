import { Monitor } from "lucide-react";

interface SystemPreviewProps {
  title: string;
  children: React.ReactNode;
}

export function SystemPreview({ title, children }: SystemPreviewProps) {
  return (
    <div className="system-preview my-8">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/60">
        <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center">
          <Monitor className="w-3.5 h-3.5 text-primary" />
        </div>
        <span className="font-sans text-[11px] uppercase tracking-wider text-muted-foreground font-bold">
          {title}
        </span>
      </div>
      <div className="sei-window rounded-lg overflow-hidden shadow-lg border border-[hsl(220,15%,82%)]">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 px-3.5 py-2.5 bg-[hsl(220,25%,18%)]">
          <div className="w-2.5 h-2.5 rounded-full bg-[hsl(0,60%,60%)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[hsl(45,60%,55%)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[hsl(130,45%,50%)]" />
          <div className="ml-3 flex-1 bg-[hsl(220,20%,24%)] rounded px-3 py-0.5 text-[10px] text-[hsl(0,0%,100%,0.45)] font-sans text-center max-w-[200px]">
            sei.rio.rj.gov.br
          </div>
        </div>
        {/* SEI toolbar */}
        <div className="flex items-center gap-4 px-4 py-2.5 bg-[hsl(220,20%,24%)] text-[hsl(0,0%,100%,0.65)] text-[11px] font-sans border-b border-[hsl(220,15%,28%)]">
          <span className="font-extrabold text-[hsl(0,0%,100%,0.95)] text-[13px] tracking-tight">SEI!</span>
          <span className="text-[hsl(0,0%,100%,0.2)]">|</span>
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
          className={`px-3 py-2 rounded-md text-[13px] transition-all ${
            i === activeIndex
              ? "bg-primary/12 text-primary font-semibold border-l-2 border-primary"
              : "text-[hsl(220,15%,40%)] hover:bg-[hsl(220,15%,96%)]"
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
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-3 py-2.5 border-b border-dashed border-[hsl(220,13%,90%)] last:border-0">
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
      className={`flex items-center gap-2 py-1.5 text-[12px] font-sans rounded-md px-2.5 transition-all ${
        active ? "bg-primary/10 font-bold text-primary shadow-sm" : "text-[hsl(220,15%,35%)] hover:bg-muted/50"
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
      className={`inline-flex items-center px-4 py-2 rounded-md text-[12px] font-sans font-bold transition-all ${
        primary
          ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
          : "bg-muted text-foreground border border-border hover:bg-muted/80 shadow-sm"
      }`}
    >
      {children}
    </span>
  );
}