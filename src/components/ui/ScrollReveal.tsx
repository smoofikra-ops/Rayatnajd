import { ReactNode, useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

interface ScrollRevealProps { children: ReactNode; }
export const ScrollReveal = ({ children }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { freezeOnceVisible: true, threshold: 0.08 });
  const isVisible = !!entry?.isIntersecting;
  return <div ref={ref} className={`w-full will-change-transform transition-[opacity,transform] duration-700 ease-out motion-reduce:!transition-none motion-reduce:!transform-none motion-reduce:!opacity-100 ${isVisible ? "opacity-100 translate-x-0 translate-y-0" : "opacity-0 translate-x-5 md:translate-x-10 translate-y-8"}`}>{children}</div>;
};
