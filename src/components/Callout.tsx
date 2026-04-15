import { Info, Lightbulb, AlertTriangle } from "lucide-react";

type CalloutType = "info" | "tip" | "warning";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const icons: Record<CalloutType, React.ReactNode> = {
  info: <Info className="w-[18px] h-[18px] mt-0.5 shrink-0" />,
  tip: <Lightbulb className="w-[18px] h-[18px] mt-0.5 shrink-0" />,
  warning: <AlertTriangle className="w-[18px] h-[18px] mt-0.5 shrink-0" />,
};

const typeColors: Record<CalloutType, { icon: string; border: string; bg: string; title: string }> = {
  info: {
    icon: "text-[hsl(var(--callout-fg))]",
    border: "border-l-[hsl(var(--callout-border))]",
    bg: "bg-[hsl(var(--callout-bg))]",
    title: "text-[hsl(var(--callout-fg))]",
  },
  tip: {
    icon: "text-[hsl(var(--tip-fg))]",
    border: "border-l-[hsl(var(--tip-border))]",
    bg: "bg-[hsl(var(--tip-bg))]",
    title: "text-[hsl(var(--tip-fg))]",
  },
  warning: {
    icon: "text-[hsl(var(--warning-fg))]",
    border: "border-l-[hsl(var(--warning-border))]",
    bg: "bg-[hsl(var(--warning-bg))]",
    title: "text-[hsl(var(--warning-fg))]",
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const colors = typeColors[type];

  return (
    <div className={`my-6 rounded-lg border-l-4 ${colors.border} ${colors.bg} px-5 py-4 shadow-sm`}>
      {title && (
        <div className={`flex items-center gap-2.5 font-sans text-sm font-bold mb-2.5 ${colors.title}`}>
          <span className={colors.icon}>{icons[type]}</span>
          <span>{title}</span>
        </div>
      )}
      <div className="text-[0.92em] leading-relaxed opacity-90">{children}</div>
    </div>
  );
}