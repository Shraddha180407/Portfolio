import { useEffect, useRef } from "react";

export default function NeuralCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width, height, animId;
    let mouseX = -1000;
    let mouseY = -1000;

    const PARTICLE_COUNT = 55;
    const CONNECTION_DIST = 160;
    const MOUSE_RADIUS = 120;
    const SPEED = 0.35;

    const particles = [];

    function resize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }

    function randBetween(a, b) {
      return a + Math.random() * (b - a);
    }

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: randBetween(0, width),
          y: randBetween(0, height),
          vx: randBetween(-SPEED, SPEED),
          vy: randBetween(-SPEED, SPEED),
          r: randBetween(1.5, 3.2),
          // Alternate colors: violet, coral, white
          color: [
            "rgba(139,92,246,",   // violet
            "rgba(167,139,250,",  // violet-bright
            "rgba(251,133,98,",   // coral
            "rgba(242,241,247,",  // ink
          ][Math.floor(Math.random() * 4)],
        });
      }
    }

    function drawParticle(p) {
      const alpha = 0.7;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + alpha + ")";
      // Glow
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color + "0.8)";
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.35;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(139,92,246,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Mouse-attracted connections
        const p = particles[i];
        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < MOUSE_RADIUS) {
          const alpha = (1 - mdist / MOUSE_RADIUS) * 0.65;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(251,133,98,${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    function updateParticles() {
      for (const p of particles) {
        // Mouse repulsion
        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < MOUSE_RADIUS) {
          const force = (MOUSE_RADIUS - mdist) / MOUSE_RADIUS;
          p.vx += (mdx / mdist) * force * 0.04;
          p.vy += (mdy / mdist) * force * 0.04;
        }

        // Dampen velocity
        p.vx *= 0.995;
        p.vy *= 0.995;

        // Clamp speed
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > SPEED * 2) {
          p.vx = (p.vx / speed) * SPEED * 2;
          p.vy = (p.vy / speed) * SPEED * 2;
        }
        if (speed < SPEED * 0.3) {
          p.vx += randBetween(-0.01, 0.01);
          p.vy += randBetween(-0.01, 0.01);
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      drawConnections();
      for (const p of particles) drawParticle(p);
      updateParticles();
      animId = requestAnimationFrame(draw);
    }

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    const onMouseLeave = () => { mouseX = -1000; mouseY = -1000; };

    resize();
    initParticles();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
      initParticles();
    });
    ro.observe(canvas);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    canvas.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
    />
  );
}
