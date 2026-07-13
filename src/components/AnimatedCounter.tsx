import { animate, useInView, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export default function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  prefix = "",
}: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          setValue(Math.round(value));
        },
      });
      return () => controls.stop();
    }
  }, [from, to, inView, duration]);

  return (
    <span ref={nodeRef}>
      {prefix}{value.toLocaleString("en-US")}{suffix}
    </span>
  );
}
