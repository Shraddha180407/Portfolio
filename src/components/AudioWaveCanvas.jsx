import { useEffect, useRef } from "react";

export default function AudioWaveCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width, height, animId;
    let time = 0;
    let mouse = { x: -1000, y: -1000, active: false };

    function resize() {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Multi-strand acoustic ribbon (matching the mockup reference image)
    const STRANDS = [
      { amp: 42, wl: 190, speed: 0.014, color: "rgba(218, 98, 125, 0.55)", width: 1.4, offset: 0 },
      { amp: 38, wl: 185, speed: 0.014, color: "rgba(218, 98, 125, 0.45)", width: 1.2, offset: 0.12 },
      { amp: 46, wl: 195, speed: 0.014, color: "rgba(165, 56, 96, 0.5)", width: 1.3, offset: -0.12 },
      { amp: 34, wl: 175, speed: 0.016, color: "rgba(255, 165, 171, 0.6)", width: 1.2, offset: 0.25 },
      { amp: 50, wl: 205, speed: 0.013, color: "rgba(218, 98, 125, 0.35)", width: 1.0, offset: -0.25 },
      { amp: 30, wl: 165, speed: 0.018, color: "rgba(255, 190, 200, 0.5)", width: 1.0, offset: 0.38 },
      { amp: 54, wl: 215, speed: 0.012, color: "rgba(165, 56, 96, 0.3)", width: 0.9, offset: -0.38 },
    ];

    function draw() {
      ctx.clearRect(0, 0, width, height);

      const centerY = height * 0.58;

      // Draw each strand
      STRANDS.forEach((s) => {
        ctx.beginPath();
        ctx.lineWidth = s.width;
        ctx.strokeStyle = s.color;

        let first = true;

        for (let x = 0; x <= width; x += 3.5) {
          // Smooth sinusoidal wave across full width
          const progress = x / width;
          const envelope = Math.sin(progress * Math.PI);

          let mouseFactor = 1;
          if (mouse.active) {
            const dist = Math.abs(x - mouse.x);
            if (dist < 140) {
              mouseFactor += (1 - dist / 140) * 0.8;
            }
          }

          const primary = Math.sin(x / s.wl + time * s.speed + s.offset);
          const secondary = Math.cos(x / (s.wl * 0.5) - time * 0.01) * 0.3;

          const y = centerY + (primary + secondary) * s.amp * envelope * mouseFactor;

          if (first) {
            ctx.moveTo(x, y);
            first = false;
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      });

      if (!prefersReducedMotion) {
        time += 1.0;
      }

      if (isVisible) {
        animId = requestAnimationFrame(draw);
      }
    }

    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (!isVisible) {
            isVisible = true;
            cancelAnimationFrame(animId);
            animId = requestAnimationFrame(draw);
          }
        } else {
          isVisible = false;
          cancelAnimationFrame(animId);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(canvas);
    draw();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full h-full pointer-events-auto select-none">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
