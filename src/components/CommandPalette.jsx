import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  FolderGit2,
  FileText,
  Mail,
  Copy,
  Check,
  ExternalLink,
  Code2,
  User,
  Sparkles,
  ArrowRight,
  X,
} from "lucide-react";
import { profile, projects, featuredProject } from "../data/portfolio";

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const handleNavigation = (action) => {
    onClose();
    if (action.type === "section") {
      if (window.location.pathname !== "/") {
        navigate(`/#${action.id}`);
      } else {
        document.getElementById(action.id)?.scrollIntoView({ behavior: "smooth" });
      }
    } else if (action.type === "route") {
      navigate(action.path);
    } else if (action.type === "link") {
      window.open(action.url, "_blank", "noopener,noreferrer");
    } else if (action.type === "copy") {
      handleCopyEmail();
    }
  };

  const allActions = [
    {
      category: "Navigation",
      items: [
        {
          id: "work",
          title: "Selected Work",
          subtitle: "Explore showcased AI and full-stack projects",
          icon: FolderGit2,
          type: "section",
        },
        {
          id: "stack",
          title: "Tech Stack",
          subtitle: "Languages, AI/ML tools, and frameworks",
          icon: Code2,
          type: "section",
        },
        {
          id: "about",
          title: "About Me",
          subtitle: "Background, education, and milestones",
          icon: User,
          type: "section",
        },
        {
          id: "contact",
          title: "Contact",
          subtitle: "Get in touch for collaborations or roles",
          icon: Mail,
          type: "section",
        },
      ],
    },
    {
      category: "Projects",
      items: [
        {
          title: "CivicIndia Case Study",
          subtitle: featuredProject.tagline || "Government schemes & eligibility engine",
          icon: Sparkles,
          type: "route",
          path: "/civicindia",
        },
        ...projects.map((p) => ({
          title: p.name,
          subtitle: p.solution,
          icon: FolderGit2,
          type: "section",
          id: "work",
        })),
      ],
    },
    {
      category: "Quick Actions",
      items: [
        {
          title: copied ? "Email Copied to Clipboard!" : "Copy Email Address",
          subtitle: profile.email,
          icon: copied ? Check : Copy,
          type: "copy",
        },
        {
          title: "Download Resume",
          subtitle: "View latest PDF resume",
          icon: FileText,
          type: "link",
          url: profile.resumeUrl,
        },
        {
          title: "GitHub Profile",
          subtitle: profile.githubHandle,
          icon: ExternalLink,
          type: "link",
          url: profile.github,
        },
        {
          title: "LinkedIn Profile",
          subtitle: profile.linkedinHandle,
          icon: ExternalLink,
          type: "link",
          url: profile.linkedin,
        },
      ],
    },
  ];

  // Filter actions by query
  const filteredCategories = allActions
    .map((cat) => ({
      ...cat,
      items: cat.items.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(query.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  const flatItems = filteredCategories.flatMap((c) => c.items);

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (flatItems.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + flatItems.length) % (flatItems.length || 1));
      } else if (e.key === "Enter" && flatItems[selectedIndex]) {
        e.preventDefault();
        handleNavigation(flatItems[selectedIndex]);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, selectedIndex, flatItems]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-start justify-center pt-[12vh] sm:pt-[15vh] px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Palette Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[580px] bg-[#0f0f18]/95 backdrop-blur-2xl border border-border-strong rounded-lg2 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9),0_0_40px_rgba(139,92,246,0.18)] overflow-hidden flex flex-col max-h-[70vh]"
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4.5 py-4 border-b border-border/80 bg-white/[0.02]">
              <Search size={18} className="text-violet-bright flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command, project, or destination..."
                className="w-full bg-transparent text-[0.95rem] text-ink placeholder:text-ink-faint focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 rounded text-ink-faint hover:text-ink transition-colors"
                >
                  <X size={14} />
                </button>
              )}
              <span className="text-[0.72rem] font-mono text-ink-faint border border-border px-2 py-0.5 rounded bg-white/[0.03]">
                ESC
              </span>
            </div>

            {/* Results List */}
            <div className="overflow-y-auto p-2 space-y-3.5 scrollbar-thin">
              {filteredCategories.length === 0 ? (
                <div className="py-10 text-center text-ink-faint text-[0.88rem]">
                  No results found for "<span className="text-ink">{query}</span>"
                </div>
              ) : (
                filteredCategories.map((category) => (
                  <div key={category.category}>
                    <div className="px-3 py-1 text-[0.72rem] uppercase tracking-wider font-semibold text-ink-faint">
                      {category.category}
                    </div>
                    <div className="mt-1 space-y-0.5">
                      {category.items.map((item) => {
                        const globalIndex = flatItems.indexOf(item);
                        const isSelected = globalIndex === selectedIndex;
                        const ItemIcon = item.icon;

                        return (
                          <button
                            key={item.title}
                            onClick={() => handleNavigation(item)}
                            onMouseEnter={() => setSelectedIndex(globalIndex)}
                            className={`w-full text-left px-3.5 py-2.5 rounded-md2 flex items-center justify-between transition-all ${
                              isSelected
                                ? "bg-violet/15 border border-violet-bright/30 text-ink shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                                : "bg-transparent text-ink-dim hover:text-ink border border-transparent"
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div
                                className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                                  isSelected
                                    ? "bg-violet text-bg"
                                    : "bg-white/[0.04] text-violet-bright border border-border"
                                }`}
                              >
                                <ItemIcon size={16} />
                              </div>
                              <div className="truncate">
                                <div className="text-[0.88rem] font-medium truncate">
                                  {item.title}
                                </div>
                                <div className="text-[0.75rem] text-ink-faint truncate">
                                  {item.subtitle}
                                </div>
                              </div>
                            </div>
                            <ArrowRight
                              size={14}
                              className={`transition-transform flex-shrink-0 ml-2 ${
                                isSelected
                                  ? "opacity-100 translate-x-0 text-violet-bright"
                                  : "opacity-0 -translate-x-2"
                              }`}
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Status & Keys Hint */}
            <div className="px-4 py-2.5 border-t border-border/60 bg-bg-raised/60 flex items-center justify-between text-[0.72rem] text-ink-faint">
              <span className="flex items-center gap-2">
                <span>↑↓ Navigate</span>
                <span>•</span>
                <span>↵ Select</span>
              </span>
              <span>Shraddha's Portfolio Command Hub</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
