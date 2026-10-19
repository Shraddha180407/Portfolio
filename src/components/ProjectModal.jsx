import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Sparkles,
  ExternalLink,
  FolderGit2,
  CheckCircle2,
  Layers,
  Target,
  Lightbulb,
} from "lucide-react";

export default function ProjectModal({ project: incomingProject, isOpen = true, onClose }) {
  const [cachedProject, setCachedProject] = useState(incomingProject);

  useEffect(() => {
    if (incomingProject) {
      setCachedProject(incomingProject);
    }
  }, [incomingProject]);

  const project = incomingProject || cachedProject;

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
            className="fixed inset-0 bg-[#450920]/40 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[680px] bg-white/95 backdrop-blur-2xl border border-border-rose rounded-3xl shadow-[0_30px_90px_-20px_rgba(69,9,32,0.25),0_0_40px_rgba(218,98,125,0.15)] overflow-hidden my-auto max-h-[88vh] flex flex-col text-ink"
          >
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-border-rose/60 flex items-center justify-between bg-surface-warm/60">
              <div className="flex items-center gap-3">
                <span className="text-[0.72rem] font-semibold text-berry bg-blush/20 border border-blush/40 px-3 py-1 rounded-full font-mono uppercase tracking-wider">
                  {project.category || "Project Specs"}
                </span>
                {project.status && (
                  <span className="text-[0.72rem] text-rose-glow font-mono font-medium">
                    {project.status}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full text-ink-muted hover:text-ink hover:bg-surface-rose transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 scrollbar-thin">

              {/* MP4 Video Preview */}
              {project.previewVideo && (
                <div className="w-full rounded-2xl overflow-hidden border border-border-rose bg-[#450920]">
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
                    <span className="absolute bottom-2.5 right-2.5 text-[0.68rem] font-mono text-white bg-ink/75 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/20 pointer-events-none">
                      ▶ Live Recording
                    </span>
                  </div>
                </div>
              )}

              {/* GIF Preview (fallback) */}
              {!project.previewVideo && project.previewGif && (
                <div className="w-full rounded-2xl overflow-hidden border border-border-rose bg-[#450920]">
                  <div className="relative w-full aspect-video">
                    <img
                      src={project.previewGif}
                      alt={`${project.name} demo`}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2.5 right-2.5 text-[0.68rem] font-mono text-white bg-ink/75 backdrop-blur-sm px-2.5 py-0.5 rounded-full border border-white/20">
                      ▶ Live Demo
                    </span>
                  </div>
                </div>
              )}

              {/* Title & Tagline */}
              <div>
                <h3 className="font-serif text-[1.8rem] sm:text-[2.1rem] font-semibold text-ink mb-2 tracking-tight">
                  {project.name}
                </h3>
                <p className="text-ink-muted text-[0.98rem] leading-relaxed">
                  {project.solution}
                </p>
              </div>

              {/* Problem & Solution Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-surface-warm/80 border border-border-rose rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-berry text-[0.75rem] uppercase tracking-wider font-semibold mb-2">
                    <Target size={14} className="text-rose-glow" /> Problem Statement
                  </div>
                  <p className="text-ink-muted text-[0.88rem] leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="bg-surface-rose/40 border border-border-rose rounded-2xl p-5">
                  <div className="flex items-center gap-2 text-berry text-[0.75rem] uppercase tracking-wider font-semibold mb-2">
                    <Lightbulb size={14} className="text-berry" /> Engineered Solution
                  </div>
                  <p className="text-ink-muted text-[0.88rem] leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* Key Architecture Flow */}
              {project.architecture && (
                <div>
                  <h4 className="text-[0.8rem] uppercase tracking-wider font-semibold text-berry mb-3 flex items-center gap-2">
                    <Layers size={14} className="text-rose-glow" /> System Architecture
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {project.architecture.map((layer, index) => (
                      <div
                        key={layer}
                        className="bg-white border border-border-rose rounded-xl p-3 text-center shadow-sm"
                      >
                        <div className="text-[0.68rem] text-berry font-mono font-semibold mb-1">
                          0{index + 1}
                        </div>
                        <div className="text-[0.8rem] font-semibold text-ink">
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
                  <h4 className="text-[0.8rem] uppercase tracking-wider font-semibold text-berry mb-3 flex items-center gap-2">
                    <Sparkles size={14} className="text-rose-glow" /> Technical Highlights
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {project.highlights.map((h) => (
                      <div
                        key={h}
                        className="flex items-start gap-2.5 text-[0.86rem] text-ink-muted bg-white border border-border-rose/60 p-3 rounded-xl shadow-sm"
                      >
                        <CheckCircle2 size={15} className="text-berry flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Badges */}
              <div>
                <h4 className="text-[0.8rem] uppercase tracking-wider font-semibold text-ink-muted mb-2.5">
                  Technologies Deployed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(project.tags || project.tech || []).map((t) => (
                    <span
                      key={t}
                      className="text-[0.76rem] font-mono text-berry border border-border-rose px-3 py-1 rounded-full bg-white shadow-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer CTAs */}
            <div className="px-6 py-4 border-t border-border-rose/60 bg-surface-warm/80 flex items-center justify-between flex-wrap gap-3">
              <div className="flex gap-3">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full font-semibold text-[0.85rem] bg-gradient-to-r from-rose-glow to-berry text-white inline-flex items-center gap-1.5 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                  >
                    Live Demo <ExternalLink size={13} />
                  </a>
                ) : project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full font-semibold text-[0.85rem] bg-gradient-to-r from-rose-glow to-berry text-white inline-flex items-center gap-1.5 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5"
                  >
                    View on GitHub <ExternalLink size={13} />
                  </a>
                ) : null}
                {project.demoUrl && project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4.5 py-2.5 rounded-full font-medium text-[0.85rem] border border-border-rose text-ink hover:border-berry inline-flex items-center gap-1.5 transition-colors bg-white shadow-sm"
                  >
                    <FolderGit2 size={13} /> Source Code
                  </a>
                )}
              </div>
              <button
                onClick={onClose}
                className="text-[0.82rem] text-ink-muted hover:text-ink transition-colors font-medium"
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
