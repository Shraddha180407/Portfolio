import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { civicIndiaCaseStudy as cs, featuredProject } from "../data/portfolio";
import useReveal from "../hooks/useReveal";
import useTilt from "../hooks/useTilt";

export default function CivicIndiaCaseStudy() {
  const ref = useReveal();
  const tiltRef = useTilt(4);

  useEffect(() => {
    document.title = "CivicIndia Case Study — Shraddha Gautam";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-wrap mx-auto px-5 sm:px-8"
      ref={ref}
    >
      <Link
        to="/#work"
        className="inline-flex items-center gap-2 text-ink-dim text-[0.9rem] mt-10 mb-6 hover:text-violet-bright transition-colors group"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back to Projects
      </Link>

      <div className="reveal grid md:grid-cols-2 gap-10 md:gap-14 items-center py-5 pb-16">
        <div>
          <h1 className="text-[clamp(2.2rem,4.4vw,3.2rem)] mb-4">CivicIndia</h1>
          <p className="text-ink-dim text-[1.1rem] mb-5 leading-relaxed">{cs.tagline}</p>
          <div className="flex flex-wrap gap-2">
            {cs.tags.map((t) => (
              <span
                key={t}
                className="text-[0.75rem] font-mono text-ink-dim border border-border px-2.5 py-1 rounded-md bg-white/[0.02]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        {featuredProject.previewVideo ? (
          <div
            ref={tiltRef}
            className="rounded-[18px] overflow-hidden border border-border-strong shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] transition-all hover:border-violet-bright/50"
          >
            <video
              src={featuredProject.previewVideo}
              autoPlay
              muted
              loop
              playsInline
              controls
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
        <div
          ref={tiltRef}
          className="border border-border-strong rounded-[18px] p-6 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] transition-all hover:border-violet-bright/50"
          style={{
            background:
              "radial-gradient(60% 60% at 30% 15%, rgba(139,92,246,0.35), transparent 60%), linear-gradient(160deg,#1b1730,#0f0d1c)",
          }}
        >
          <div className="text-[0.75rem] text-ink-faint mb-3.5 flex gap-1.5 items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" /> {featuredProject.mock.url}
          </div>
          <h4 className="text-[1.3rem] mb-1.5 font-display">{featuredProject.mock.title}</h4>
          <p className="text-[0.88rem] text-ink-dim mb-4.5">One trusted platform.</p>
          <div className="flex flex-wrap gap-2">
            {featuredProject.mock.pills.map((p) => (
              <span
                key={p}
                className="text-[0.72rem] bg-white/[0.06] border border-border px-3 py-2 rounded-lg text-ink-dim"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
        )}
      </div>

      <div className="reveal grid md:grid-cols-2 gap-8 sm:gap-12 py-9 border-t border-border">
        <div>
          <h3 className="text-[1.3rem] mb-4">Overview</h3>
          <p className="text-ink-dim text-[0.96rem] leading-relaxed">{cs.overview}</p>
        </div>
        <div>
          <h3 className="text-[1.3rem] mb-4">Tech Stack</h3>
          <div className="flex flex-col gap-2.5">
            {cs.techStack.map((t) => (
              <div key={t.name} className="flex items-center gap-2.5 text-[0.92rem]">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: t.color }} />
                {t.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="reveal py-9 border-t border-border">
        <h3 className="text-[1.3rem] mb-4">Key Features</h3>
        <ul className="flex flex-col gap-2.5">
          {cs.keyFeatures.map((f) => (
            <li key={f} className="text-[0.92rem] text-ink-dim flex gap-2.5">
              <span className="text-success font-bold flex-shrink-0">✓</span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="reveal py-9 border-t border-border">
        <h3 className="text-[1.3rem] mb-4">Architecture</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          {cs.architecture.map((box) => (
            <div
              key={box.label}
              className={`rounded-[10px] px-3 py-4 text-center text-[0.82rem] whitespace-pre-line transition-transform hover:-translate-y-1 ${
                box.accent
                  ? "border border-violet-bright text-violet-bright bg-violet/[0.08]"
                  : "bg-bg-card border border-border text-ink-dim"
              }`}
            >
              {box.label}
            </div>
          ))}
        </div>
      </div>

      <div className="reveal py-9 border-t border-border">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="text-[0.95rem] mb-2.5 font-semibold text-ink">Challenges</h4>
            <ul className="flex flex-col gap-2">
              {cs.challenges.map((c) => (
                <li key={c} className="text-[0.86rem] text-ink-dim flex gap-2">
                  <span className="text-ink-faint flex-shrink-0">—</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[0.95rem] mb-2.5 font-semibold text-ink">Results</h4>
            <ul className="flex flex-col gap-2">
              {cs.results.map((r) => (
                <li key={r} className="text-[0.86rem] text-ink-dim flex gap-2">
                  <span className="text-ink-faint flex-shrink-0">—</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[0.95rem] mb-2.5 font-semibold text-ink">What I'd Improve Next</h4>
            <ul className="flex flex-col gap-2">
              {cs.nextUp.map((n) => (
                <li key={n} className="text-[0.86rem] text-ink-dim flex gap-2">
                  <span className="text-ink-faint flex-shrink-0">—</span>
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="reveal my-14 p-8 sm:p-11 rounded-lg2 border border-border-strong bg-gradient-to-br from-violet/[0.14] to-coral/[0.08] flex items-center justify-between gap-6 flex-wrap">
        <div>
          <h3 className="text-[1.4rem] mb-1.5">
            {cs.demoUrl ? "Curious to see it live?" : "Want to explore the code?"}
          </h3>
          <p className="text-ink-dim text-[0.92rem]">
            {cs.demoUrl
              ? "Explore the demo or check out the source code on GitHub."
              : "Browse the full repository, architecture, and implementation on GitHub."}
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          {cs.demoUrl ? (
            <a
              href={cs.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full font-semibold text-[0.9rem] bg-brand text-bg inline-flex items-center gap-1.5 hover:-translate-y-0.5 transition-all"
            >
              Live Demo <ArrowUpRight size={14} />
            </a>
          ) : (
            <a
              href={cs.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full font-semibold text-[0.9rem] bg-brand text-bg inline-flex items-center gap-1.5 hover:-translate-y-0.5 transition-all"
            >
              View on GitHub <ArrowUpRight size={14} />
            </a>
          )}
          {cs.demoUrl && (
            <a
              href={cs.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full font-semibold text-[0.9rem] border border-border-strong hover:border-violet-bright transition-colors"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
