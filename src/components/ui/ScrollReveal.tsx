import { ReactNode, useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

interface ScrollRevealProps {
  children: ReactNode;
}

export const ScrollReveal = ({ children }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {
    freezeOnceVisible: true,
    threshold: 0.1,
  });

  const isVisible = !!entry?.isIntersecting;

  return (
    <div
      ref={ref}
      className={`w-full transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0 blur-none" : "opacity-0 translate-y-12 blur-[10px]"
      }`}
    >
      {children}
    </div>
  );
};
