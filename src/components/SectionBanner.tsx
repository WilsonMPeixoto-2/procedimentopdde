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
      className={`section-banner relative -mx-6 my-16 px-6 py-14 sm:py-18 bg-gradient-to-br from-[hsl(224,22%,14%)] to-[hsl(224,22%,9%)] text-white overflow-hidden rounded-xl transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Gradient glow */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-[hsl(215,55%,68%)] opacity-[0.08] blur-[80px]" />

      {/* Top accent gradient */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[hsl(215,55%,68%)] via-[hsl(215,55%,68%,0.4)] to-transparent" />

      <div className="relative flex items-center gap-5 sm:gap-6 max-w-prose mx-auto">
        {/* Number circle */}
        <div className="shrink-0 w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-[hsl(215,55%,68%,0.15)] border border-[hsl(215,55%,68%,0.3)] flex items-center justify-center shadow-lg shadow-black/20 backdrop-blur-sm">
          <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[hsl(215,55%,78%)]">
            {number}
          </span>
        </div>

        <div className="min-w-0">
          <h2 className="!mt-0 !mb-0 !border-0 !border-l-0 !pb-0 !pl-0 text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight after:hidden">
            {title}
          </h2>
          {subtitle && (
            <p className="font-sans text-[15px] sm:text-[17px] !text-white leading-relaxed mt-2.5 !text-left font-medium tracking-normal after:hidden" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
