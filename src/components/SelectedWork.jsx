import { useState } from "react";
import { ArrowUpRight, Mic, BarChart3, Search, GraduationCap, Folder, Layers, Sparkles } from "lucide-react";
import { featuredProject, projects } from "../data/portfolio";
import useReveal from "../hooks/useReveal";
import useTilt from "../hooks/useTilt";
import ProjectModal from "./ProjectModal";

const ICON_MAP = {
  Mic,
  BarChart3,
  Search,
  GraduationCap,
};

const CATEGORIES = ["All", "AI & ML", "Full-Stack", "Research"];

function MockFrame({ mock }) {
  return (
    <div className="w-full max-w-[340px] bg-[#0d0c16] border border-white/10 rounded-[14px] p-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
      <div className="text-[0.72rem] text-ink-faint mb-2.5 flex gap-1.5 items-center">
        <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" /> {mock.url}
      </div>
      <h4 className="text-[1.05rem] font-display mb-1">{mock.title}</h4>
      <p className="text-[0.78rem] text-ink-dim mb-3.5">{mock.subtitle}</p>
      <div className="flex gap-1.5 flex-wrap">
        {mock.pills.map((p) => (
          <span
            key={p}
            className="text-[0.68rem] bg-white/[0.06] border border-border px-2.5 py-1.5 rounded-lg text-ink-dim"
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}

function FeaturedCard({ onInspect }) {
  const p = featuredProject;
  const tiltRef = useTilt(3);

  return (
    <div
      ref={tiltRef}
      className="reveal bg-gradient-to-br from-violet/[0.08] to-coral/[0.04] border border-border-strong rounded-lg2 p-1.5 mb-8 overflow-hidden transition-all duration-300 hover:border-violet-bright/40 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.2)]"
    >
      <div className="grid md:grid-cols-[1.1fr_1fr] bg-bg-card rounded-[calc(22px-8px)] overflow-hidden">
        <div
          className="p-9 flex items-center justify-center min-h-[300px]"
          style={{
            background:
              "radial-gradient(60% 60% at 30% 20%, rgba(139,92,246,0.35), transparent 60%), linear-gradient(160deg, #1b1730, #0f0d1c)",
          }}
        >
          <MockFrame mock={p.mock} />
        </div>
        <div className="p-8 flex flex-col">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-[0.72rem] font-semibold text-coral-bright uppercase tracking-wider">
              {p.badge}
            </span>
            <button
              onClick={() => onInspect(p)}
              className="text-[0.75rem] font-medium text-violet-bright hover:underline inline-flex items-center gap-1"
            >
              <Layers size={12} /> Inspect Architecture
            </button>
          </div>
          <h3 className="text-[1.8rem] mb-3 font-bold">{p.name}</h3>

          <div className="mb-3.5">
            <div className="text-[0.72rem] font-semibold text-ink-faint uppercase tracking-wider mb-1">
              Problem
            </div>
            <div className="text-[0.92rem] text-ink-dim leading-relaxed">{p.problem}</div>
          </div>
          <div className="mb-3.5">
            <div className="text-[0.72rem] font-semibold text-ink-faint uppercase tracking-wider mb-1">
              Solution
            </div>
            <div className="text-[0.92rem] text-ink-dim leading-relaxed">{p.solution}</div>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 my-4">
            {p.highlights.slice(0, 6).map((h) => (
              <li key={h} className="text-[0.84rem] text-ink-dim flex gap-2 items-start">
                <span className="text-emerald-400 font-bold flex-shrink-0">✓</span>
                {h}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-6">
            {p.tech.map((t) => (
              <span
                key={t}
                className="text-[0.75rem] font-mono text-ink-dim border border-border px-2.5 py-1 rounded-md bg-white/[0.02]"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-2.5 flex-wrap mt-auto">
            <a
              href={p.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full font-semibold text-[0.85rem] bg-brand text-bg transition-all hover:-translate-y-0.5 inline-flex items-center gap-1.5"
            >
              View on GitHub <ArrowUpRight size={14} />
            </a>
            <a
              href={p.caseStudyUrl}
              className="px-4.5 py-2.5 rounded-full font-medium text-[0.85rem] border border-border-strong hover:border-violet-bright transition-colors"
            >
              Deep Case Study →
            </a>
            <button
              onClick={() => onInspect(p)}
              className="px-4.5 py-2.5 rounded-full font-medium text-[0.85rem] border border-border-strong hover:border-violet-bright transition-colors"
            >
              Quick Specs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onInspect }) {
  const IconComponent = ICON_MAP[project.icon] || Folder;
  const tiltRef = useTilt(5);
  const [isHovered, setIsHovered] = useState(false);
  const [vidRef, setVidRef] = useState(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (vidRef) { vidRef.currentTime = 0; vidRef.play(); }
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (vidRef) { vidRef.pause(); vidRef.currentTime = 0; }
  };

  return (
    <div
      ref={tiltRef}
      className="reveal bg-bg-card border border-border rounded-md2 flex flex-col transition-all duration-300 hover:border-violet-bright/50 hover:shadow-[0_12px_36px_-10px_rgba(139,92,246,0.2)] group overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* MP4 Video Preview */}
      {project.previewVideo && (
        <div className="relative w-full aspect-video bg-[#0d0c16] overflow-hidden border-b border-border/60">
          <video
            ref={setVidRef}
            src={project.previewVideo}
            muted
            playsInline
            loop
            preload="metadata"
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-70"
            }`}
          />
          {/* Play hint badge */}
          {!isHovered && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[0.7rem] font-medium text-ink-dim bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                ▶ Hover to play
              </span>
            </div>
          )}
          {/* Category pill overlay */}
          <span className="absolute top-2.5 left-2.5 text-[0.65rem] font-semibold text-violet-bright bg-[#0e0e18]/80 backdrop-blur-sm border border-violet/25 px-2 py-0.5 rounded-full">
            {project.category}
          </span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <div className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center text-violet-bright bg-violet/[0.12] border border-violet/25 group-hover:scale-105 transition-transform">
            <IconComponent size={20} />
          </div>
          {project.status && (
            <span className="text-[0.68rem] text-coral-bright bg-coral/10 border border-coral/25 px-2.5 py-1 rounded-full w-fit">
              {project.status}
            </span>
          )}
        </div>

        <h4 className="text-[1.2rem] font-bold mb-2">{project.name}</h4>
        
        <div className="text-[0.72rem] font-semibold text-ink-faint uppercase tracking-wider mt-1 mb-1">
          Problem
        </div>
        <div className="text-[0.86rem] text-ink-dim leading-relaxed">{project.problem}</div>
        
        <div className="text-[0.72rem] font-semibold text-ink-faint uppercase tracking-wider mt-3 mb-1">
          Solution
        </div>
        <div className="text-[0.86rem] text-ink-dim leading-relaxed">{project.solution}</div>

        <div className="flex flex-wrap gap-1.5 my-4">
          {project.tags.map((t) => (
            <span key={t} className="text-[0.7rem] font-mono text-ink-faint bg-white/[0.04] px-2 py-1 rounded-md">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-3 border-t border-border/50 flex items-center justify-between gap-3">
          <button
            onClick={() => onInspect(project)}
            className="text-[0.82rem] font-medium text-violet-bright hover:underline inline-flex items-center gap-1"
          >
            <Layers size={13} /> View Architecture & Specs
          </button>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.8rem] font-medium text-ink-faint group-hover:text-ink transition-colors inline-flex items-center gap-1 shrink-0"
            >
              GitHub <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}


export default function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [modalProject, setModalProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ref = useReveal([activeCategory]);

  const handleInspect = (proj) => {
    setModalProject(proj);
    setIsModalOpen(true);
  };

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "All") return true;
    return p.category === activeCategory;
  });

  return (
    <section id="work" className="py-24 sm:py-28" ref={ref}>
      <ProjectModal
        project={modalProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="reveal max-w-[640px] mb-10">
          <span className="text-[0.8rem] font-semibold text-violet-bright uppercase tracking-wider mb-3.5 block">
            Selected Work
          </span>
          <h2 className="text-[clamp(2rem,3.6vw,2.8rem)] font-bold">
            A showcase of products I've built and shipped.
          </h2>
          <p className="text-ink-dim mt-3.5 text-[1.05rem] leading-relaxed">
            Spanning civic technology, AI voice interfaces, product analytics, and machine learning pipelines.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="reveal flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-[0.85rem] font-medium transition-all ${
                activeCategory === cat
                  ? "bg-brand text-bg font-semibold shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                  : "bg-white/[0.03] text-ink-dim hover:text-ink border border-border hover:border-border-strong"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Case Study Card */}
        {(activeCategory === "All" || activeCategory === "Full-Stack") && (
          <FeaturedCard onInspect={handleInspect} />
        )}

        {/* Grid of Projects */}
        <div className="grid sm:grid-cols-2 gap-5">
          {filteredProjects.map((p) => (
            <ProjectCard key={p.name} project={p} onInspect={handleInspect} />
          ))}
        </div>
      </div>
    </section>
  );
}
