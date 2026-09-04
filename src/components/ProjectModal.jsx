import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Sparkles,
  ExternalLink,
  FolderGit2,
  CheckCircle2,
  Layers,
  ArrowRight,
  Target,
  Lightbulb,
} from "lucide-react";

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[250] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[680px] bg-[#0e0e18]/95 backdrop-blur-2xl border border-border-strong rounded-lg2 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9),0_0_40px_rgba(139,92,246,0.2)] overflow-hidden my-auto max-h-[88vh] flex flex-col"
          >
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-border/80 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <span className="text-[0.72rem] font-semibold text-coral-bright bg-coral/10 border border-coral/25 px-2.5 py-1 rounded-full">
                  {project.category || "Project Specs"}
                </span>
                {project.status && (
                  <span className="text-[0.72rem] text-violet-bright font-mono">
                    {project.status}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-ink-dim hover:text-ink hover:bg-white/[0.06] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-7 overflow-y-auto space-y-6 scrollbar-thin">

              {/* MP4 Video Preview */}
              {project.previewVideo && (
                <div className="w-full rounded-xl overflow-hidden border border-border/60 bg-[#0d0c16]">
                  <div className="relative w-full aspect-video">
                    <video
                      src={project.previewVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2.5 right-2.5 text-[0.65rem] font-mono text-ink-faint bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/10 pointer-events-none">
                      ▶ Demo Preview
                    </span>
                  </div>
                </div>
              )}

              {/* GIF Preview (fallback) */}
              {!project.previewVideo && project.previewGif && (
                <div className="w-full rounded-xl overflow-hidden border border-border/60 bg-[#0d0c16]">
                  <div className="relative w-full aspect-video">
                    <img
                      src={project.previewGif}
                      alt={`${project.name} demo`}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2.5 right-2.5 text-[0.65rem] font-mono text-ink-faint bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/10">
                      ▶ Demo Preview
                    </span>
                  </div>
                </div>
              )}

              {/* Title & Tagline */}
              <div>
                <h3 className="text-[1.6rem] sm:text-[1.8rem] font-bold text-ink mb-2">
                  {project.name}
                </h3>
                <p className="text-ink-dim text-[0.96rem] leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-bg-raised/70 border border-border rounded-md2 p-4">
                  <div className="flex items-center gap-2 text-ink-faint text-[0.75rem] uppercase tracking-wider font-semibold mb-2">
                    <Target size={14} className="text-coral" /> Problem Statement
                  </div>
                  <p className="text-ink-dim text-[0.88rem] leading-relaxed">
                    {project.problem}
                  </p>
                </div>


                <div className="bg-bg-raised/70 border border-border rounded-md2 p-4">
                  <div className="flex items-center gap-2 text-ink-faint text-[0.75rem] uppercase tracking-wider font-semibold mb-2">
                    <Lightbulb size={14} className="text-violet-bright" /> Engineered Solution
                  </div>
                  <p className="text-ink-dim text-[0.88rem] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Architecture Flow */}
              {project.architecture && (
                <div>
                  <h4 className="text-[0.82rem] uppercase tracking-wider font-semibold text-ink-faint mb-3 flex items-center gap-2">
                    <Layers size={14} className="text-violet-bright" /> System Architecture
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {project.architecture.map((layer, index) => (
                      <div
                        key={layer}
                        className="bg-white/[0.03] border border-border rounded-lg p-3 text-center"
                      >
                        <div className="text-[0.68rem] text-violet-bright font-mono mb-1">
                          0{index + 1}
                        </div>
                        <div className="text-[0.8rem] font-medium text-ink">
                          {layer}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights & Engineering Features */}
              {project.highlights && (
                <div>
                  <h4 className="text-[0.82rem] uppercase tracking-wider font-semibold text-ink-faint mb-3 flex items-center gap-2">
                    <Sparkles size={14} className="text-coral" /> Technical Highlights
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {project.highlights.map((h) => (
                      <div
                        key={h}
                        className="flex items-start gap-2.5 text-[0.86rem] text-ink-dim"
                      >
                        <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Badges */}
              <div>
                <h4 className="text-[0.82rem] uppercase tracking-wider font-semibold text-ink-faint mb-2.5">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(project.tags || project.tech || []).map((t) => (
                    <span
                      key={t}
                      className="text-[0.76rem] font-mono text-ink-dim border border-border px-3 py-1 rounded-md bg-white/[0.02]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer CTAs */}
            <div className="px-6 py-4.5 border-t border-border/80 bg-bg-raised/80 flex items-center justify-between flex-wrap gap-3">
              <div className="flex gap-3">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full font-semibold text-[0.85rem] bg-brand text-bg inline-flex items-center gap-1.5 transition-transform hover:-translate-y-0.5"
                  >
                    Live Demo <ExternalLink size={13} />
                  </a>
                ) : project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full font-semibold text-[0.85rem] bg-brand text-bg inline-flex items-center gap-1.5 transition-transform hover:-translate-y-0.5"
                  >
                    View on GitHub <ExternalLink size={13} />
                  </a>
                ) : null}
                {project.demoUrl && project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4.5 py-2.5 rounded-full font-medium text-[0.85rem] border border-border-strong text-ink hover:border-violet-bright inline-flex items-center gap-1.5 transition-colors"
                  >
                    <FolderGit2 size={13} /> Source Code
                  </a>
                )}
              </div>
              <button
                onClick={onClose}
                className="text-[0.82rem] text-ink-faint hover:text-ink transition-colors"
              >
                Close Window
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
