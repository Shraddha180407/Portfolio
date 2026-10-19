import useReveal from "../hooks/useReveal";
import { techToolkit } from "../data/portfolio";

export default function TechStack() {
  const ref = useReveal();

  return (
    <section id="stack" className="py-20 sm:py-28 relative border-t border-border-rose/30 max-w-5xl mx-auto px-6 sm:px-8" ref={ref}>
      {/* Clean Title */}
      <div className="reveal mb-14 sm:mb-18">
        <div className="text-[0.78rem] font-mono text-berry font-semibold uppercase tracking-wider mb-2">
          Technical Toolkit
        </div>
        <h2 className="font-serif text-[clamp(2.4rem,4.6vw,3.6rem)] text-ink font-normal tracking-tight mb-3">
          Technologies & Proficiency
        </h2>
        <p className="text-[1.05rem] text-ink-muted font-sans font-light max-w-2xl">
          Practical tools and frameworks applied across client web builds, open-source repositories, and machine learning systems.
        </p>
      </div>

      {/* 3 Scannable Columns with Direct Project Evidence */}
      <div className="reveal grid md:grid-cols-3 gap-8 sm:gap-12">
        {techToolkit.map((cat) => (
          <div key={cat.category} className="flex flex-col justify-between p-6 rounded-2xl bg-white/70 border border-border-rose/50 shadow-2xs">
            <div>
              <div className="pb-4 border-b border-border-rose/40 mb-5">
                <div className="text-[0.74rem] font-mono text-berry font-semibold uppercase tracking-wider mb-1">
                  Stream {cat.number}
                </div>
                <h3 className="font-serif text-[1.35rem] font-medium text-ink mb-1.5">
                  {cat.category}
                </h3>
                <p className="text-[0.84rem] text-ink-muted font-sans font-light">
                  {cat.description}
                </p>
              </div>

              {/* Tools list */}
              <div className="flex flex-wrap gap-2 mb-6">
                {cat.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-md bg-[#fff0f2] border border-border-rose/60 text-ink text-[0.84rem] font-mono font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Demonstrated In Evidence Footer */}
            <div className="pt-4 border-t border-border-rose/40 text-[0.82rem] font-sans">
              <span className="font-medium text-ink block mb-0.5">Demonstrated in:</span>
              <span className="text-ink-muted font-light">{cat.demonstratedIn}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
