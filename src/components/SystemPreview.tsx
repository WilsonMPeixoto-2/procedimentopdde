import { Monitor } from "lucide-react";

interface SystemPreviewProps {
  title: string;
  children: React.ReactNode;
}

export function SystemPreview({ title, children }: SystemPreviewProps) {
  return (
    <div className="system-preview my-6">
      <div className="flex items-center gap-2 mb-3">
        <Monitor className="w-4 h-4 text-muted-foreground" />
        <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground font-semibold">
          {title}
        </span>
      </div>
      <div className="sei-window">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-[hsl(220,25%,22%)] rounded-t">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          <span className="ml-2 text-[10px] text-white/50 font-sans">sei.rio.rj.gov.br</span>
        </div>
        {/* SEI toolbar */}
        <div className="flex items-center gap-3 px-3 py-1.5 bg-[hsl(220,20%,28%)] text-white/70 text-[10px] font-sans border-b border-white/10">
          <span className="font-semibold text-white/90">SEI!RIO</span>
          <span>|</span>
          <span>Processo</span>
          <span>Documentos</span>
          <span>Blocos</span>
        </div>
        {/* Content area */}
        <div className="bg-white rounded-b p-4 border border-t-0 border-border">
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
          className={`px-2 py-1 rounded text-[13px] ${
            i === activeIndex
              ? "bg-[hsl(var(--primary)/0.12)] text-[hsl(var(--primary))] font-semibold"
              : "text-[hsl(220,15%,40%)]"
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
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-2 py-1.5 border-b border-dashed border-border last:border-0">
      <span className="text-[11px] uppercase tracking-wide text-muted-foreground font-semibold font-sans min-w-[140px]">
        {label}
      </span>
      <span className={`text-[13px] font-sans ${highlight ? "font-semibold text-[hsl(var(--primary))]" : "text-foreground"}`}>
        {value}
      </span>
    </div>
  );
}

export function SeiTreeItem({ icon, label, active, indent }: { icon: string; label: string; active?: boolean; indent?: number }) {
  return (
    <div
      className={`flex items-center gap-1.5 py-0.5 text-[12px] font-sans rounded px-1 ${
        active ? "bg-[hsl(var(--primary)/0.1)] font-semibold text-[hsl(var(--primary))]" : "text-[hsl(220,15%,35%)]"
      }`}
      style={{ paddingLeft: `${(indent || 0) * 16 + 4}px` }}
    >
      <span className="text-[11px]">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

export function SeiButton({ children, primary }: { children: React.ReactNode; primary?: boolean }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded text-[12px] font-sans font-semibold ${
        primary
          ? "bg-[hsl(var(--primary))] text-white"
          : "bg-[hsl(var(--muted))] text-[hsl(var(--heading-color))] border border-border"
      }`}
    >
      {children}
    </span>
  );
}
