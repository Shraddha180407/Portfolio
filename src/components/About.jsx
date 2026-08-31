import { GraduationCap, Compass, Sparkles, Code2, ArrowUpRight, BookOpen, Quote } from "lucide-react";
import { aboutBento, profile } from "../data/portfolio";
import useReveal from "../hooks/useReveal";
import useTilt from "../hooks/useTilt";

function BioCard() {
  const tiltRef = useTilt(3);
  return (
    <div
      ref={tiltRef}
      className="reveal bg-bg-card border border-border rounded-lg2 p-7 flex flex-col justify-between transition-all duration-300 hover:border-violet-bright/50 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.2)] lg:col-span-2"
    >
      <div>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-[12px] bg-brand flex items-center justify-center font-display font-bold text-xl text-bg shadow-[0_0_20px_rgba(139,92,246,0.4)]">
            {profile.initials}
          </div>
          <div>
            <h3 className="text-[1.3rem] font-bold text-ink">{profile.name}</h3>
            <p className="text-[0.82rem] text-violet-bright font-mono">
              AI Engineer & Full-Stack Developer
            </p>
          </div>
        </div>

        <div className="space-y-3 text-ink-dim text-[0.96rem] leading-relaxed">
          {aboutBento.bio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-border/60 flex items-center gap-3 text-ink text-[0.92rem] font-medium bg-white/[0.02] p-4 rounded-md2 border border-border/40">
        <Quote size={18} className="text-coral flex-shrink-0" />
        <span className="italic">"{aboutBento.principles[0].desc}"</span>
      </div>
    </div>
  );
}

function EducationCard() {
  const tiltRef = useTilt(3);
  const { education } = aboutBento;

  return (
    <div
      ref={tiltRef}
      className="reveal bg-bg-card border border-border rounded-lg2 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-violet-bright/50 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.2)]"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-[10px] bg-violet/[0.12] border border-violet/25 flex items-center justify-center text-violet-bright">
              <GraduationCap size={18} />
            </div>
            <h4 className="text-[1.1rem] font-bold text-ink">Education</h4>
          </div>
          <span className="text-[0.7rem] font-mono text-ink-faint border border-border px-2 py-0.5 rounded">
            {education.period}
          </span>
        </div>

        <div className="mb-4">
          <div className="text-[0.98rem] font-semibold text-ink">{education.degree}</div>
          <div className="text-[0.84rem] text-violet-bright">{education.institution}</div>
        </div>

        <div className="space-y-2 mt-4">
          <div className="text-[0.72rem] font-semibold text-ink-faint uppercase tracking-wider">
            Core Coursework & Domains
          </div>
          <div className="flex flex-wrap gap-1.5">
            {education.highlights.map((course) => (
              <span
                key={course}
                className="text-[0.74rem] font-mono text-ink-dim bg-white/[0.03] border border-border/80 px-2.5 py-1 rounded"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ExploringCard() {
  const tiltRef = useTilt(3);

  return (
    <div
      ref={tiltRef}
      className="reveal bg-bg-card border border-border rounded-lg2 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-violet-bright/50 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.2)]"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-[10px] bg-coral/10 border border-coral/25 flex items-center justify-center text-coral-bright">
              <Compass size={18} />
            </div>
            <h4 className="text-[1.1rem] font-bold text-ink">Currently Exploring</h4>
          </div>
          <span className="flex items-center gap-1.5 text-[0.68rem] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Active Focus
          </span>
        </div>

        <div className="space-y-3 mt-3">
          {aboutBento.currentlyExploring.map((item) => (
            <div
              key={item.title}
              className="p-3 rounded-md2 bg-white/[0.02] border border-border/60 hover:border-border-strong transition-colors"
            >
              <div className="text-[0.86rem] font-semibold text-ink mb-0.5">
                {item.title}
              </div>
              <div className="text-[0.76rem] text-ink-faint leading-relaxed">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PrinciplesCard() {
  const tiltRef = useTilt(3);

  return (
    <div
      ref={tiltRef}
      className="reveal bg-bg-card border border-border rounded-lg2 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-violet-bright/50 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.2)] lg:col-span-2"
    >
      <div>
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-9 h-9 rounded-[10px] bg-violet/[0.12] border border-violet/25 flex items-center justify-center text-violet-bright">
            <Sparkles size={18} />
          </div>
          <h4 className="text-[1.1rem] font-bold text-ink">Engineering Philosophy</h4>
        </div>

        <div className="grid sm:grid-cols-3 gap-3.5 mt-4">
          {aboutBento.principles.map((p, idx) => (
            <div
              key={p.title}
              className="p-4 rounded-md2 bg-white/[0.02] border border-border/70 flex flex-col justify-between"
            >
              <div>
                <div className="text-[0.7rem] font-mono text-violet-bright mb-1.5">
                  0{idx + 1}
                </div>
                <div className="text-[0.88rem] font-bold text-ink mb-1">
                  {p.title}
                </div>
                <div className="text-[0.78rem] text-ink-dim leading-relaxed">
                  {p.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="py-24 sm:py-28 relative" ref={ref}>
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="reveal max-w-[640px] mb-12">
          <span className="text-[0.8rem] font-semibold text-violet-bright uppercase tracking-wider mb-3.5 block">
            About Me
          </span>
          <h2 className="text-[clamp(2rem,3.6vw,2.8rem)] font-bold">
            Builder, thinker, CS student.
          </h2>
          <p className="text-ink-dim mt-3.5 text-[1.05rem] leading-relaxed">
            Passionate about bringing artificial intelligence from theory to production with intuitive, delightful interfaces.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-2 gap-5">
          <BioCard />
          <EducationCard />
          <ExploringCard />
          <PrinciplesCard />
        </div>
      </div>
    </section>
  );
}
