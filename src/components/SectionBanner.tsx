import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface SectionBannerProps {
  number: number | string;
  title: string;
  subtitle?: string;
  id?: string;
}

export function SectionBanner({ number, title, subtitle, id }: SectionBannerProps) {
  const { ref, isVisible } = useScrollAnimation({ rootMargin: "0px 0px -40px 0px" });

  return (
    <div
      ref={ref}
      id={id}
      className={`relative -mx-6 my-14 px-6 py-12 sm:py-16 bg-[hsl(var(--sidebar-background))] text-[hsl(var(--sidebar-foreground))] overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[hsl(var(--sidebar-primary)/0.4)] to-transparent" />

      <div className="relative flex items-center gap-4 sm:gap-5 max-w-prose mx-auto">
        {/* Number circle */}
        <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[hsl(var(--sidebar-primary)/0.15)] border border-[hsl(var(--sidebar-primary)/0.25)] flex items-center justify-center">
          <span className="font-sans text-lg sm:text-xl font-bold text-[hsl(var(--sidebar-primary))]">
            {number}
          </span>
        </div>

        <div className="min-w-0">
          <h2 className="!mt-0 !mb-0 !border-0 !border-l-0 !pb-0 !pl-0 text-lg sm:text-xl font-extrabold text-[hsl(var(--sidebar-foreground))] tracking-tight leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="font-sans text-[13px] text-[hsl(var(--sidebar-foreground)/0.55)] leading-relaxed mt-1">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
