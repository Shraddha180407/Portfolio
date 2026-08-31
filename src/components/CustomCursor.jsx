import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on touch / mobile devices or reduced motion
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (isTouch || prefersReducedMotion) return;

    setIsVisible(true);

    let animationFrameId;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      const target = e.target;
      const isInteractive =
        target.closest("a, button, input, textarea, [role='button'], .interactive-hover") !== null;
      setIsHovered(isInteractive);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const updateCursor = () => {
      // Smooth spring interpolation
      currentX += (targetX - currentX) * 0.2;
      currentY += (targetY - currentY) * 0.2;
      setPos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updateCursor);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    animationFrameId = requestAnimationFrame(updateCursor);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ambient glow dot */}
      <div
        aria-hidden
        className={`pointer-events-none fixed z-[999] rounded-full transition-transform duration-200 ease-out -translate-x-1/2 -translate-y-1/2 ${
          isHovered
            ? "w-14 h-14 bg-violet-bright/20 border border-violet-bright/40 shadow-[0_0_24px_rgba(167,139,250,0.5)] scale-110"
            : "w-8 h-8 bg-violet/15 border border-violet/30 shadow-[0_0_16px_rgba(139,92,246,0.3)] scale-100"
        }`}
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      />
      {/* Inner precise dot */}
      <div
        aria-hidden
        className="pointer-events-none fixed z-[999] w-1.5 h-1.5 bg-coral rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#fb8562]"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      />
    </>
  );
}
