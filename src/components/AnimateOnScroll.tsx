import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-in-up" | "scale-in";
  delay?: number;
}

export function AnimateOnScroll({
  children,
  className = "",
  animation = "fade-in",
  delay = 0,
}: AnimateOnScrollProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? `animate-${animation}` : "opacity-0"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
