import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Layers } from "lucide-react";
import { motion } from "motion/react";
import { civicIndiaCaseStudy as cs, featuredProject } from "../data/portfolio";
import useReveal from "../hooks/useReveal";
import useTilt from "../hooks/useTilt";

export default function CivicIndiaCaseStudy() {
  const ref = useReveal();
  const tiltRef = useTilt(3);

  useEffect(() => {
    document.title = "CivicIndia Case Study — Shraddha Gautam";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-wrap mx-auto px-5 sm:px-8 py-10"
      ref={ref}
    >
      {/* Back Link */}
      <Link
        to="/#work"
        className="inline-flex items-center gap-2 text-ink-muted text-[0.92rem] font-medium mb-8 hover:text-berry transition-all active:scale-[0.97] group"
      >
        <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" /> Back to Selected Work
      </Link>

      {/* Hero Header */}
      <div className="reveal grid md:grid-cols-2 gap-10 md:gap-14 items-center pb-16">
        <div>
          <div className="inline-flex items-center gap-2 text-[0.72rem] font-mono uppercase tracking-widest text-berry font-bold bg-blush/20 border border-blush/40 px-3 py-1 rounded-full mb-4">
            Civic Tech · Public Infrastructure
          </div>
          <h1 className="font-serif text-[clamp(2.4rem,4.8vw,3.6rem)] font-normal tracking-tight text-ink mb-4 leading-[1.08]">
            CivicIndia
          </h1>
          <p className="text-ink-muted text-[1.1rem] mb-6 leading-relaxed font-sans">
            {cs.tagline}
          </p>
          <div className="flex flex-wrap gap-2">
            {cs.tags.map((t) => (
              <span
                key={t}
                className="text-[0.75rem] font-mono text-berry border border-border-rose px-3 py-1 rounded-full bg-white shadow-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Video / Visual Comps */}
        {featuredProject.previewVideo ? (
          <div
            ref={tiltRef}
            className="rounded-3xl overflow-hidden border border-border-rose shadow-[0_30px_70px_-20px_rgba(69,9,32,0.18)] bg-[#450920] transition-all hover:border-berry/40"
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
            className="border border-border-rose rounded-3xl p-7 shadow-[0_30px_70px_-20px_rgba(69,9,32,0.18)] bg-white transition-all hover:border-berry/40"
          >
            <div className="text-[0.75rem] font-mono text-ink-muted mb-4 flex gap-2 items-center">
              <span className="w-2 h-2 rounded-full bg-rose-glow animate-pulse" /> {featuredProject.mock?.url || "civicindia.gov.in"}
            </div>
            <h4 className="text-[1.4rem] mb-2 font-serif font-semibold text-ink">{featuredProject.mock?.title || "Civic Services"}</h4>
            <p className="text-[0.92rem] text-ink-muted mb-5">One trusted citizen portal.</p>
            <div className="flex flex-wrap gap-2">
              {(featuredProject.mock?.pills || ["Grievance Triage", "Transparency", "RTI Sync"]).map((p) => (
                <span
                  key={p}
                  className="text-[0.74rem] bg-surface-warm border border-border-rose px-3 py-1.5 rounded-lg text-ink font-mono"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Overview & Tech Stack */}
      <div className="reveal grid md:grid-cols-2 gap-8 sm:gap-14 py-12 border-t border-border-rose/60">
        <div>
          <h2 className="font-serif text-[1.6rem] font-medium text-ink mb-4">Overview</h2>
          <p className="text-ink-muted text-[1rem] leading-relaxed">{cs.overview}</p>
        </div>
        <div>
          <h2 className="font-serif text-[1.6rem] font-medium text-ink mb-4">Tech Stack & Tools</h2>
          <div className="grid grid-cols-2 gap-3">
            {cs.techStack.map((t) => (
              <div
                key={t.name}
                className="flex items-center gap-2.5 text-[0.92rem] p-3 rounded-xl bg-white border border-border-rose/80 shadow-sm"
              >
                <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-rose-glow" />
                <span className="font-mono text-ink text-[0.84rem] font-medium">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="reveal py-12 border-t border-border-rose/60">
        <h2 className="font-serif text-[1.6rem] font-medium text-ink mb-6">Key Engineering Features</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {cs.keyFeatures.map((f) => (
            <div
              key={f}
              className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-border-rose shadow-sm"
            >
              <CheckCircle2 size={18} className="text-berry flex-shrink-0 mt-0.5" />
              <span className="text-[0.92rem] text-ink-muted leading-relaxed">{f}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Architecture Flow */}
      <div className="reveal py-12 border-t border-border-rose/60">
        <div className="flex items-center gap-2 mb-6">
          <Layers size={18} className="text-rose-glow" />
          <h2 className="font-serif text-[1.6rem] font-medium text-ink">System Architecture Flow</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
          {cs.architecture.map((box, index) => (
            <div
              key={box.label}
              className={`rounded-2xl p-4 text-center transition-transform hover:-translate-y-1 shadow-sm ${
                box.accent
                  ? "border border-berry bg-surface-rose text-ink"
                  : "bg-white border border-border-rose text-ink-muted"
              }`}
            >
              <div className="text-[0.68rem] font-mono text-berry font-bold mb-1">
                LAYER 0{index + 1}
              </div>
              <div className="text-[0.88rem] font-semibold text-ink whitespace-pre-line">
                {box.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Challenges & Results */}
      <div className="reveal py-12 border-t border-border-rose/60">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-border-rose shadow-sm">
            <h3 className="font-serif text-[1.2rem] mb-3 font-semibold text-ink">Key Challenges</h3>
            <ul className="flex flex-col gap-2.5">
              {cs.challenges.map((c) => (
                <li key={c} className="text-[0.88rem] text-ink-muted flex gap-2">
                  <span className="text-rose-glow font-bold flex-shrink-0">—</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-border-rose shadow-sm">
            <h3 className="font-serif text-[1.2rem] mb-3 font-semibold text-ink">Impact & Results</h3>
            <ul className="flex flex-col gap-2.5">
              {cs.results.map((r) => (
                <li key={r} className="text-[0.88rem] text-ink-muted flex gap-2">
                  <span className="text-berry font-bold flex-shrink-0">✓</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-border-rose shadow-sm">
            <h3 className="font-serif text-[1.2rem] mb-3 font-semibold text-ink">Planned Next Steps</h3>
            <ul className="flex flex-col gap-2.5">
              {(cs.nextUp || []).map((n) => (
                <li key={n} className="text-[0.88rem] text-ink-muted flex gap-2">
                  <span className="text-cotton-candy font-bold flex-shrink-0">→</span>
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="reveal my-14 p-8 sm:p-12 rounded-3xl border border-border-rose bg-gradient-to-br from-surface-rose to-surface-warm flex items-center justify-between gap-6 flex-wrap shadow-sm">
        <div>
          <h3 className="font-serif text-[1.6rem] font-semibold text-ink mb-2">
            {cs.demoUrl ? "Curious to see CivicIndia live?" : "Explore the Code Repository"}
          </h3>
          <p className="text-ink-muted text-[0.96rem] max-w-xl">
            {cs.demoUrl
              ? "Interact with the citizen portal and inspect the automated routing pipeline."
              : "Browse the full repository, database schemas, and FastAPI orchestration on GitHub."}
          </p>
        </div>
        <div className="flex gap-3 flex-wrap">
          {cs.demoUrl ? (
            <a
              href={cs.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-semibold text-[0.9rem] bg-gradient-to-r from-rose-glow to-berry text-white inline-flex items-center gap-1.5 shadow-sm hover:shadow-md transition-all active:scale-[0.97] hover:-translate-y-0.5"
            >
              Live Demo <ArrowUpRight size={15} />
            </a>
          ) : (
            <a
              href={cs.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-semibold text-[0.9rem] bg-gradient-to-r from-rose-glow to-berry text-white inline-flex items-center gap-1.5 shadow-sm hover:shadow-md transition-all active:scale-[0.97] hover:-translate-y-0.5"
            >
              View on GitHub <ArrowUpRight size={15} />
            </a>
          )}
          {cs.demoUrl && (
            <a
              href={cs.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-medium text-[0.9rem] border border-border-rose bg-white text-ink hover:border-berry transition-all active:scale-[0.97] shadow-sm"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
