import React, { useEffect, useState, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

export const AnimatedCounter = ({ from = 0, to, duration = 2, suffix = "", prefix = "" }) => {
  const [displayValue, setDisplayValue] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    // Parse numeric value if string has commas or plus
    const numericTarget = typeof to === 'number' ? to : parseFloat(String(to).replace(/[^0-9.]/g, '')) || 0;

    const controls = animate(from, numericTarget, {
      duration,
      ease: [0.16, 1, 0.3, 1], // Luxury cubic bezier curve
      onUpdate: (latest) => {
        setDisplayValue(Math.floor(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{displayValue.toLocaleString('en-IN')}{suffix}
    </span>
  );
};
