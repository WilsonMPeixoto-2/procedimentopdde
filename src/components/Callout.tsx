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

const typeStyles: Record<CalloutType, { wrapper: string; icon: string; title: string }> = {
  info: {
    wrapper: "border-l-[hsl(var(--callout-border))] bg-[hsl(var(--callout-bg))] shadow-[inset_0_0_0_1px_hsl(var(--callout-border)/0.12)]",
    icon: "text-[hsl(var(--callout-fg))]",
    title: "text-[hsl(var(--callout-fg))]",
  },
  tip: {
    wrapper: "border-l-[hsl(var(--tip-border))] bg-[hsl(var(--tip-bg))] shadow-[inset_0_0_0_1px_hsl(var(--tip-border)/0.12)]",
    icon: "text-[hsl(var(--tip-fg))]",
    title: "text-[hsl(var(--tip-fg))]",
  },
  warning: {
    wrapper: "border-l-[hsl(var(--warning-border))] bg-[hsl(var(--warning-bg))] shadow-[inset_0_0_0_1px_hsl(var(--warning-border)/0.12)]",
    icon: "text-[hsl(var(--warning-fg))]",
    title: "text-[hsl(var(--warning-fg))]",
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const styles = typeStyles[type];

  return (
    <div className={`my-7 rounded-xl border-l-4 ${styles.wrapper} px-5 py-4 shadow-sm transition-all duration-200 hover:shadow-md`}>
      {title && (
        <div className={`flex items-center gap-2.5 font-sans text-sm font-bold mb-3 ${styles.title}`}>
          <span className={styles.icon}>{icons[type]}</span>
          <span className="tracking-tight">{title}</span>
        </div>
      )}
      <div className="text-[0.9em] leading-[1.75] opacity-[0.88]">{children}</div>
    </div>
  );
}
