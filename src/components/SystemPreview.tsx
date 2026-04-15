import { Monitor } from "lucide-react";

interface SystemPreviewProps {
  title: string;
  children: React.ReactNode;
}

export function SystemPreview({ title, children }: SystemPreviewProps) {
  return (
    <div className="system-preview my-8">
      <div className="flex items-center gap-2 mb-3">
        <Monitor className="w-4 h-4 text-muted-foreground" />
        <span className="font-sans text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
          {title}
        </span>
      </div>
      <div className="sei-window rounded-lg overflow-hidden shadow-md border border-[hsl(220,15%,85%)]">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 px-3.5 py-2.5 bg-[hsl(220,25%,20%)]">
          <div className="w-2.5 h-2.5 rounded-full bg-[hsl(0,60%,60%)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[hsl(45,60%,55%)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[hsl(130,45%,50%)]" />
          <div className="ml-3 flex-1 bg-[hsl(220,20%,26%)] rounded px-3 py-0.5 text-[10px] text-[hsl(0,0%,100%,0.4)] font-sans text-center max-w-[200px]">
            sei.rio.rj.gov.br
          </div>
        </div>
        {/* SEI toolbar */}
        <div className="flex items-center gap-4 px-4 py-2 bg-[hsl(220,20%,26%)] text-[hsl(0,0%,100%,0.65)] text-[11px] font-sans border-b border-[hsl(220,15%,30%)]">
          <span className="font-bold text-[hsl(0,0%,100%,0.9)] text-[12px]">SEI!</span>
          <span className="text-[hsl(0,0%,100%,0.3)]">|</span>
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
          className={`px-2.5 py-1.5 rounded text-[13px] transition-colors ${
            i === activeIndex
              ? "bg-[hsl(var(--primary)/0.12)] text-[hsl(var(--primary))] font-semibold"
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
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-3 py-2 border-b border-dashed border-[hsl(220,13%,90%)] last:border-0">
      <span className="text-[11px] uppercase tracking-wide text-muted-foreground font-semibold font-sans min-w-[140px] shrink-0">
        {label}
      </span>
      <span className={`text-[13px] font-sans leading-snug ${highlight ? "font-semibold text-[hsl(var(--primary))]" : "text-foreground"}`}>
        {value}
      </span>
    </div>
  );
}

export function SeiTreeItem({ icon, label, active, indent }: { icon: string; label: string; active?: boolean; indent?: number }) {
  return (
    <div
      className={`flex items-center gap-2 py-1 text-[12px] font-sans rounded px-2 transition-colors ${
        active ? "bg-[hsl(var(--primary)/0.08)] font-semibold text-[hsl(var(--primary))]" : "text-[hsl(220,15%,35%)]"
      }`}
      style={{ paddingLeft: `${(indent || 0) * 16 + 8}px` }}
    >
      <span className="text-[12px]">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

export function SeiButton({ children, primary }: { children: React.ReactNode; primary?: boolean }) {
  return (
    <span
      className={`inline-flex items-center px-3.5 py-1.5 rounded text-[12px] font-sans font-semibold transition-colors ${
        primary
          ? "bg-[hsl(var(--primary))] text-white shadow-sm"
          : "bg-[hsl(var(--muted))] text-[hsl(var(--heading-color))] border border-border hover:bg-[hsl(var(--muted)/0.8)]"
      }`}
    >
      {children}
    </span>
  );
}
