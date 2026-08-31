import { Sparkles, Cpu, Server, Layout, Wrench, ArrowUpRight } from "lucide-react";
import { techBento } from "../data/portfolio";
import useReveal from "../hooks/useReveal";
import useTilt from "../hooks/useTilt";

const CATEGORY_ICONS = {
  "AI & Machine Learning": Cpu,
  "Backend & Systems": Server,
  "Frontend & Interfaces": Layout,
  "DevOps & Tooling": Wrench,
};

function BentoCard({ bento, isFeatured }) {
  const tiltRef = useTilt(3);
  const Icon = CATEGORY_ICONS[bento.category] || Sparkles;

  return (
    <div
      ref={tiltRef}
      className={`reveal bg-bg-card border border-border rounded-lg2 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-violet-bright/50 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.18)] ${
        isFeatured ? "lg:col-span-2 bg-gradient-to-br from-bg-card via-bg-card to-violet/[0.06]" : ""
      }`}
    >
      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[10px] bg-violet/[0.12] border border-violet/25 flex items-center justify-center text-violet-bright">
              <Icon size={20} />
            </div>
            <div>
              <h3 className="text-[1.2rem] font-bold text-ink">{bento.category}</h3>
              <p className="text-[0.78rem] text-ink-faint">{bento.description}</p>
            </div>
          </div>
          <span className="text-[0.68rem] font-mono px-2.5 py-1 rounded-full border border-violet-bright/20 bg-violet/10 text-violet-bright">
            {bento.highlight}
          </span>
        </div>

        {/* Items Grid */}
        <div
          className={`grid gap-3 mt-5 ${
            isFeatured ? "sm:grid-cols-2" : "grid-cols-1"
          }`}
        >
          {bento.items.map((item) => (
            <div
              key={item.name}
              className="bg-white/[0.02] border border-border/80 rounded-md2 p-3.5 transition-all hover:bg-white/[0.04] hover:border-border-strong group"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="text-[0.9rem] font-semibold text-ink group-hover:text-violet-bright transition-colors">
                  {item.name}
                </span>
                <span className="text-[0.65rem] font-mono text-ink-faint bg-white/[0.05] border border-border/60 px-2 py-0.5 rounded">
                  {item.tag}
                </span>
              </div>
              <p className="text-[0.78rem] text-ink-dim leading-snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TechStack() {
  const ref = useReveal();

  return (
    <section id="stack" className="py-24 sm:py-28 relative overflow-hidden" ref={ref}>
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="reveal max-w-[640px] mb-12">
          <span className="text-[0.8rem] font-semibold text-violet-bright uppercase tracking-wider mb-3.5 block">
            Technical Arsenal
          </span>
          <h2 className="text-[clamp(2rem,3.6vw,2.8rem)] font-bold">
            Technologies I build and scale with.
          </h2>
          <p className="text-ink-dim mt-3.5 text-[1.05rem] leading-relaxed">
            A curated stack optimized for low-latency AI inference, modern web engineering, and scalable distributed systems.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-2 gap-5">
          {techBento.map((bento, index) => (
            <BentoCard
              key={bento.category}
              bento={bento}
              isFeatured={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
