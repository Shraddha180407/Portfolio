import { useState, useEffect } from "react";
import { stats, profile } from "../data/portfolio";
import useCountUp from "../hooks/useCountUp";
import useTilt from "../hooks/useTilt";
import NeuralCanvas from "./NeuralCanvas";
import HeroTerminal from "./HeroTerminal";

const WORDS = [
  "AI products",
  "civic platforms",
  "voice interfaces",
  "intelligent tools",
];

function StatCard({ s }) {
  const { displayValue, elementRef } = useCountUp(s.num);
  const tiltRef = useTilt(6);

  // Combine refs
  const setRefs = (node) => {
    elementRef.current = node;
    tiltRef.current = node;
  };

  return (
    <div
      ref={setRefs}
      className="bg-white/[0.03] backdrop-blur-sm border border-border rounded-md2 px-4 py-4 transition-all hover:border-violet-bright/50 hover:shadow-[0_12px_32px_-10px_rgba(139,92,246,0.25)]"
    >
      <div className="font-display font-bold text-[1.6rem] text-violet-bright">
        {displayValue}
      </div>
      <div className="text-[0.76rem] text-ink-faint mt-0.5 font-medium">{s.label}</div>
    </div>
  );
}

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % WORDS.length);
        setIsFading(false);
      }, 300);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[92vh] flex items-center pt-28 pb-20"
    >
      {/* Interactive Neural Network Particles Canvas */}
      <NeuralCanvas />

      {/* Enhanced Animated Aurora Ambient Light */}
      <div
        aria-hidden
        className="animate-aurora pointer-events-none absolute -inset-y-[20%] -inset-x-[10%] blur-[70px] opacity-75"
        style={{
          background:
            "radial-gradient(42% 50% at 20% 25%, rgba(139,92,246,0.42), transparent 70%), radial-gradient(35% 42% at 75% 20%, rgba(251,133,98,0.28), transparent 70%), radial-gradient(45% 50% at 50% 65%, rgba(109,40,217,0.32), transparent 70%)",
        }}
      />

      {/* Tech Grid Pattern Overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_15%,#000_70%,transparent_100%)]"
      />

      <div className="relative z-10 max-w-wrap mx-auto px-5 sm:px-8 w-full">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline & Hero Content */}
          <div>
            <span className="inline-flex items-center gap-2 text-[0.82rem] font-medium text-ink-dim border border-border px-3.5 py-1.5 rounded-full mb-6 bg-white/[0.02] backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-success shadow-[0_0_8px_#4ade80] animate-pulse" />
              AI Engineer · Full-Stack Developer · CS Student
            </span>

            <h1 className="text-[clamp(2.3rem,4.8vw,4.1rem)] leading-[1.08] font-bold max-w-[650px] tracking-tight">
              Building{" "}
              <span className="inline-block relative min-w-[200px] sm:min-w-[290px]">
                <span
                  className={`inline-block text-violet-bright transition-all duration-300 transform ${
                    isFading
                      ? "opacity-0 -translate-y-2 blur-sm"
                      : "opacity-100 translate-y-0 blur-0"
                  }`}
                >
                  {WORDS[index]}
                </span>
              </span>{" "}
              that solve real-world problems.
            </h1>

            <p className="mt-5 text-[1.08rem] sm:text-[1.12rem] text-ink-dim max-w-[540px] leading-relaxed">
              I build intelligent, scalable, and user-centric applications using modern
              web technologies and AI — from civic platforms to voice-first
              recommendation systems.
            </p>

            <div className="flex gap-3.5 mt-8 flex-wrap">
              <button
                onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3.5 rounded-full font-semibold text-[0.95rem] bg-brand text-bg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(139,92,246,0.6)] active:translate-y-0"
              >
                View Selected Work →
              </button>
              <a
                href={profile.resumeUrl}
                download
                className="px-6 py-3.5 rounded-full font-medium text-[0.95rem] border border-border-strong transition-all duration-200 hover:border-violet-bright hover:bg-violet/10 active:translate-y-0"
              >
                Download Resume ↓
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mt-12 max-w-[620px]">
              {stats.map((s) => (
                <StatCard key={s.label} s={s} />
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal */}
          <div className="w-full flex justify-center lg:justify-end">
            <HeroTerminal />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-ink-faint text-[0.75rem]">
        <span>Scroll to explore</span>
        <span className="animate-stick w-px h-[30px] bg-gradient-to-b from-ink-faint to-transparent" />
      </div>
    </section>
  );
}
