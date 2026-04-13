import { Info, Lightbulb, AlertTriangle } from "lucide-react";

type CalloutType = "info" | "tip" | "warning";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

const icons: Record<CalloutType, React.ReactNode> = {
  info: <Info className="w-4 h-4 mt-0.5 shrink-0" />,
  tip: <Lightbulb className="w-4 h-4 mt-0.5 shrink-0" />,
  warning: <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />,
};

const typeClass: Record<CalloutType, string> = {
  info: "callout",
  tip: "callout callout-tip",
  warning: "callout callout-warning",
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  return (
    <div className={typeClass[type]}>
      {title && (
        <div className="flex items-start gap-2 font-sans text-sm font-semibold mb-1.5" style={{ color: "inherit" }}>
          {icons[type]}
          <span>{title}</span>
        </div>
      )}
      <div className="text-[0.92em]">{children}</div>
    </div>
  );
}
