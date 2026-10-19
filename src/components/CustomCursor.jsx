import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const haloRef = useRef(null);
  const dotRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isHoveredRef = useRef(false);

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

      // Update inner dot immediately on the GPU with 0 latency
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      }

      const target = e.target;
      const isInteractive =
        target.closest("a, button, input, textarea, [role='button'], .interactive-hover") !== null;

      if (isHoveredRef.current !== isInteractive) {
        isHoveredRef.current = isInteractive;
        if (haloRef.current) {
          haloRef.current.setAttribute("data-hover", isInteractive ? "true" : "false");
        }
      }
    };

    const onMouseLeave = () => {
      if (haloRef.current) haloRef.current.style.opacity = "0";
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };

    const onMouseEnter = () => {
      if (haloRef.current) haloRef.current.style.opacity = "1";
      if (dotRef.current) dotRef.current.style.opacity = "1";
    };

    const updateHalo = () => {
      // Smooth inertial trailing for outer halo
      currentX += (targetX - currentX) * 0.22;
      currentY += (targetY - currentY) * 0.22;

      if (haloRef.current) {
        haloRef.current.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(updateHalo);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    animationFrameId = requestAnimationFrame(updateHalo);

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
      {/* Outer ambient glow halo (smooth GPU transform, 0 layout reflows) */}
      <div
        ref={haloRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[999] rounded-full w-9 h-9 bg-blush/15 border border-blush/35 shadow-[0_0_18px_rgba(218,98,125,0.22)] will-change-transform transition-[width,height,background-color,border-color,box-shadow] duration-200 ease-out data-[hover=true]:w-14 data-[hover=true]:h-14 data-[hover=true]:bg-blush/25 data-[hover=true]:border-blush/50 data-[hover=true]:shadow-[0_0_26px_rgba(218,98,125,0.4)]"
        style={{
          transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
        }}
      />
      {/* Inner precise berry dot (0ms input latency) */}
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[999] w-1.5 h-1.5 bg-berry rounded-full shadow-[0_0_8px_rgba(165,56,96,0.6)] will-change-transform"
        style={{
          transform: "translate3d(-100px, -100px, 0) translate(-50%, -50%)",
        }}
      />
    </>
  );
}
