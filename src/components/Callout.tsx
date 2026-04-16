import { Info, Lightbulb, AlertTriangle } from "lucide-react";

type CalloutType = "info" | "tip" | "warning";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const icons: Record<CalloutType, React.ReactNode> = {
  info: <Info className="w-[18px] h-[18px] shrink-0" />,
  tip: <Lightbulb className="w-[18px] h-[18px] shrink-0" />,
  warning: <AlertTriangle className="w-[18px] h-[18px] shrink-0" />,
};

const typeStyles: Record<CalloutType, { wrapper: string; icon: string; iconBg: string; title: string; border: string }> = {
  info: {
    wrapper: "bg-[hsl(var(--callout-bg))] shadow-[inset_0_0_0_1px_hsl(var(--callout-border)/0.12)]",
    icon: "text-[hsl(var(--callout-fg))]",
    iconBg: "bg-[hsl(var(--callout-border)/0.12)]",
    title: "text-[hsl(var(--callout-fg))]",
    border: "from-[hsl(var(--callout-border))] to-[hsl(var(--callout-border)/0.2)]",
  },
  tip: {
    wrapper: "bg-[hsl(var(--tip-bg))] shadow-[inset_0_0_0_1px_hsl(var(--tip-border)/0.12)]",
    icon: "text-[hsl(var(--tip-fg))]",
    iconBg: "bg-[hsl(var(--tip-border)/0.12)]",
    title: "text-[hsl(var(--tip-fg))]",
    border: "from-[hsl(var(--tip-border))] to-[hsl(var(--tip-border)/0.2)]",
  },
  warning: {
    wrapper: "bg-[hsl(var(--warning-bg))] shadow-[inset_0_0_0_1px_hsl(var(--warning-border)/0.12)]",
    icon: "text-[hsl(var(--warning-fg))]",
    iconBg: "bg-[hsl(var(--warning-border)/0.12)]",
    title: "text-[hsl(var(--warning-fg))]",
    border: "from-[hsl(var(--warning-border))] to-[hsl(var(--warning-border)/0.2)]",
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const styles = typeStyles[type];

  return (
    <div className={`relative my-7 rounded-xl overflow-hidden ${styles.wrapper} px-5 py-4 shadow-sm transition-all duration-200 hover:shadow-md`}>
      {/* Gradient left border */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${styles.border}`} />
      
      {title && (
        <div className={`flex items-center gap-3 font-sans text-sm font-bold mb-3 ${styles.title}`}>
          <div className={`w-7 h-7 rounded-lg ${styles.iconBg} flex items-center justify-center`}>
            <span className={styles.icon}>{icons[type]}</span>
          </div>
          <span className="tracking-tight">{title}</span>
        </div>
      )}
      <div className="text-[0.9em] leading-[1.75] opacity-[0.88] pl-10">{children}</div>
    </div>
  );
}
