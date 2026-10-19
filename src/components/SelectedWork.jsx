import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, GraduationCap, ChevronDown } from "lucide-react";
import { commercialDemoProject, featuredProject, projects } from "../data/portfolio";
import useReveal from "../hooks/useReveal";
import ProjectModal from "./ProjectModal";

export default function SelectedWork() {
  const ref = useReveal();
  const [inspectProject, setInspectProject] = useState(null);
  const [expandedNotes, setExpandedNotes] = useState({});

  const toggleNote = (id) => {
    setExpandedNotes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Curated showcase: 1 Commercial Concept Demo + 3 Grounded Technical Projects
  const showcaseProjects = [
    commercialDemoProject,
    featuredProject,
    ...projects.filter((p) => p.id === "moodbowl" || p.id === "fake-news"),
  ];

  return (
    <section id="work" className="py-20 sm:py-28 relative max-w-5xl mx-auto px-6 sm:px-8" ref={ref}>
      {/* Section Header */}
      <div className="reveal mb-14 sm:mb-20">
        <div className="text-[0.78rem] font-mono text-berry font-semibold uppercase tracking-wider mb-2">
          Portfolio & Case Studies
        </div>
        <h2 className="font-serif text-[clamp(2.4rem,4.6vw,3.6rem)] text-ink font-normal tracking-tight mb-3">
          Selected Work
        </h2>
        <p className="text-[1.05rem] text-ink-muted font-sans font-light max-w-2xl">
          Commercial web solutions for client businesses alongside genuine machine learning and full-stack software systems.
        </p>
      </div>

      {/* Alternating Project Showcase */}
      <div className="space-y-20 sm:space-y-24">
        {showcaseProjects.map((p, idx) => {
          const isReverse = idx % 2 === 1;
          const isCommercial = p.id === "apex-academy";

          return (
            <div
              key={p.name}
              className="reveal grid md:grid-cols-2 gap-8 sm:gap-14 items-center"
            >
              {/* Media Preview Column */}
              <div
                className={`rounded-2xl overflow-hidden border border-border-rose/50 bg-[#450920] shadow-soft-rose ${
                  isReverse ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="relative aspect-video w-full flex items-center justify-center overflow-hidden">
                  {p.previewVideo ? (
                    <video
                      src={p.previewVideo}
                      muted
                      loop
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : isCommercial ? (
                    /* High-fidelity interactive preview card for the Commercial Concept Demo */
                    <Link
                      to="/demo/coaching-institute"
                      className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-7 flex flex-col justify-between text-white group hover:opacity-95 transition-all active:scale-[0.99]"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-3">
                        <div className="flex items-center gap-2 text-xs font-mono text-white/70">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          <span className="ml-2 text-white/50">apexacademy-demo.com</span>
                        </div>
                        <span className="text-[0.72rem] font-mono px-2 py-0.5 rounded bg-blue-600/80 text-white font-medium uppercase">
                          Live Concept Demo
                        </span>
                      </div>

                      <div className="py-4">
                        <div className="flex items-center gap-2 text-blue-400 text-xs font-mono mb-1.5">
                          <GraduationCap size={15} />
                          <span>COACHING & ADMISSIONS PLATFORM</span>
                        </div>
                        <div className="font-serif text-2xl sm:text-3xl font-medium text-white mb-2 leading-tight">
                          Apex Academy
                        </div>
                        <p className="text-xs text-white/75 font-sans font-light max-w-sm">
                          Course catalogs, transparent fee schedules, student reviews, and direct WhatsApp admissions inquiry flow.
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-medium text-blue-300 group-hover:text-white transition-colors">
                        <span>Click to launch interactive sample site</span>
                        <span className="inline-flex items-center gap-1">
                          Test Demo <ArrowRight size={13} />
                        </span>
                      </div>
                    </Link>
                  ) : (
                    <div className="p-8 text-center text-white/90">
                      <div className="font-serif text-2xl font-medium mb-1">{p.name}</div>
                      <div className="text-xs font-mono text-white/60">{p.category}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Text Description Column */}
              <div className={`flex flex-col justify-center ${isReverse ? "md:order-1" : "md:order-2"}`}>
                <div className="text-[0.74rem] font-mono text-berry font-semibold uppercase tracking-wider mb-2">
                  {p.badge || `${p.category} · ${p.status}`}
                </div>

                <h3 className="font-serif text-[1.85rem] sm:text-[2.2rem] font-medium text-ink mb-2 leading-snug">
                  {p.name}
                </h3>

                <p className="text-[0.98rem] text-ink-muted leading-relaxed mb-4 font-sans font-light">
                  {p.solution}
                </p>

                {/* Structured Commercial Note for Business Showcase */}
                {p.commercialNote && (
                  <div className="mb-5 p-4 rounded-xl bg-white/95 border border-border-rose/60 text-[0.84rem] text-ink-muted space-y-2 shadow-2xs font-sans">
                    <div className="text-[0.72rem] font-mono uppercase text-berry font-semibold tracking-wider">
                      Commercial Note / Business Offer
                    </div>
                    <div>
                      <span className="font-semibold text-ink">Client Goal: </span>
                      {p.commercialNote.clientGoal}
                    </div>
                    <div>
                      <span className="font-semibold text-ink">Deliverables: </span>
                      {p.commercialNote.deliverables}
                    </div>
                    <div className="text-[0.78rem] text-ink-faint italic pt-1.5 border-t border-border-rose/30">
                      {p.commercialNote.disclaimer}
                    </div>
                  </div>
                )}

                {/* Progressive Disclosure: Structured Engineering Note for Technical Projects */}
                {p.engineeringNote && (
                  <div className="mb-5">
                    <button
                      onClick={() => toggleNote(p.id)}
                      className="inline-flex items-center gap-1.5 text-[0.76rem] font-mono font-semibold uppercase tracking-wider text-berry hover:text-ink transition-colors py-1 px-2.5 rounded-lg bg-blush/15 border border-blush/35 active:scale-[0.97]"
                    >
                      <span>Engineering Breakdown</span>
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-200 ${
                          expandedNotes[p.id] ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expandedNotes[p.id] && (
                      <div className="mt-2.5 p-4 rounded-xl bg-white/95 border border-border-rose/60 text-[0.84rem] text-ink-muted space-y-2 shadow-2xs font-sans">
                        <div>
                          <span className="font-semibold text-ink">Challenge: </span>
                          {p.engineeringNote.challenge}
                        </div>
                        <div>
                          <span className="font-semibold text-ink">Decision: </span>
                          {p.engineeringNote.decision}
                        </div>
                        <div>
                          <span className="font-semibold text-ink">Verification: </span>
                          {p.engineeringNote.verification}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Comma-separated tech stack */}
                <div className="text-[0.82rem] font-mono text-ink-faint mb-5">
                  <span className="text-ink-muted font-medium">Stack: </span>
                  {(p.tech || p.tags || []).join(", ")}
                </div>

                {/* Direct Action Links with Tactile Active Compression */}
                <div className="flex items-center gap-5 flex-wrap text-[0.88rem] font-medium">
                  {isCommercial ? (
                    <>
                      <Link
                        to="/demo/coaching-institute"
                        className="text-berry hover:text-ink inline-flex items-center gap-1 font-semibold transition-all active:scale-[0.97]"
                      >
                        Launch Live Demo <ArrowUpRight size={14} />
                      </Link>
                      <button
                        onClick={() =>
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="text-ink-muted hover:text-ink inline-flex items-center gap-1 transition-all active:scale-[0.97]"
                      >
                        Inquire for Your Website →
                      </button>
                    </>
                  ) : (
                    <>
                      {p.demoUrl && (
                        <a
                          href={p.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-berry hover:text-ink inline-flex items-center gap-1 font-semibold transition-all active:scale-[0.97]"
                        >
                          Live Demo <ArrowUpRight size={14} />
                        </a>
                      )}
                      {p.caseStudyUrl && (
                        <Link
                          to={p.caseStudyUrl}
                          className="text-berry hover:text-ink inline-flex items-center gap-1 font-semibold transition-all active:scale-[0.97]"
                        >
                          Case Study <ArrowRight size={14} />
                        </Link>
                      )}
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-ink-muted hover:text-ink inline-flex items-center gap-1 transition-all active:scale-[0.97]"
                        >
                          GitHub <ArrowUpRight size={14} />
                        </a>
                      )}
                      <button
                        onClick={() => setInspectProject(p)}
                        className="text-ink-muted hover:text-ink inline-flex items-center gap-1 transition-all active:scale-[0.97]"
                      >
                        Quick Specs →
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Specs Modal */}
      <ProjectModal
        project={inspectProject}
        isOpen={Boolean(inspectProject)}
        onClose={() => setInspectProject(null)}
      />
    </section>
  );
}
