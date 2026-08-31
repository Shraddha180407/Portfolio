import { useEffect, useState, useRef } from "react";

export default function useCountUp(targetStr, duration = 1600) {
  const [displayValue, setDisplayValue] = useState("0");
  const elementRef = useRef(null);

  useEffect(() => {
    const numericMatch = targetStr.match(/\d+/);
    if (!numericMatch) {
      setDisplayValue(targetStr);
      return;
    }

    const targetNumber = parseInt(numericMatch[0], 10);
    const prefix = targetStr.substring(0, numericMatch.index);
    const suffix = targetStr.substring(numericMatch.index + numericMatch[0].length);

    const el = elementRef.current;
    if (!el) return;

    let hasAnimated = false;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          hasAnimated = true;
          let startTime = null;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(easeProgress * targetNumber);

            setDisplayValue(`${prefix}${current}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(targetStr);
            }
          };

          requestAnimationFrame(animate);
          io.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [targetStr, duration]);

  return { displayValue, elementRef };
}
