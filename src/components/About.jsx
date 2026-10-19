import useReveal from "../hooks/useReveal";
import { aboutBento } from "../data/portfolio";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="py-20 sm:py-28 relative border-t border-border-rose/30 max-w-5xl mx-auto px-6 sm:px-8" ref={ref}>
      {/* Section Title */}
      <div className="reveal mb-14 sm:mb-18">
        <div className="text-[0.78rem] font-mono text-berry font-semibold uppercase tracking-wider mb-2">
          Background & Capabilities
        </div>
        <h2 className="font-serif text-[clamp(2.4rem,4.6vw,3.6rem)] text-ink font-normal tracking-tight">
          About Me
        </h2>
      </div>

      {/* 2-Column Story */}
      <div className="reveal grid md:grid-cols-[1.1fr_1fr] gap-12 sm:gap-16 items-start">
        {/* Story */}
        <div className="space-y-5 text-[1.05rem] text-ink-muted leading-relaxed font-sans font-light">
          {aboutBento.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <p className="text-[0.94rem] text-ink-faint pt-2">
            Whether working directly with small business owners or building machine learning prototypes, I prioritize clear outcomes, fast delivery, and clean code.
          </p>
        </div>

        {/* Education & Focus */}
        <div className="space-y-7 p-6 rounded-2xl bg-white/70 border border-border-rose/50 shadow-2xs">
          <div>
            <h3 className="font-serif text-[1.25rem] font-medium text-ink mb-1.5">
              Education
            </h3>
            <div className="text-[0.98rem] font-medium text-ink font-sans">
              {aboutBento.education.degree}
            </div>
            <div className="text-[0.84rem] text-berry font-mono mb-2.5">
              {aboutBento.education.institution} · {aboutBento.education.period}
            </div>
            <p className="text-[0.84rem] text-ink-faint font-sans font-light leading-normal">
              Coursework: {aboutBento.education.highlights.join(", ")}.
            </p>
          </div>

          <div className="pt-5 border-t border-border-rose/40">
            <h3 className="font-serif text-[1.25rem] font-medium text-ink mb-2">
              Current Focus
            </h3>
            <ul className="space-y-2 text-[0.88rem] text-ink-muted font-sans font-light">
              {aboutBento.currentlyExploring.map((f) => (
                <li key={f.title} className="flex flex-col sm:flex-row sm:gap-1.5">
                  <span className="font-medium text-ink">• {f.title}:</span>
                  <span className="text-ink-muted">{f.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
