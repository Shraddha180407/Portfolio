import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ArrowUpRight, Search } from "lucide-react";
import { profile } from "../data/portfolio";

const LINKS = [
  { id: "work", label: "Selected Work" },
  { id: "stack", label: "Tech Stack" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ onOpenCommandPalette }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === "/";

  useEffect(() => {
    if (!onHome) return;
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    const onScroll = () => {
      let current = "";
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) current = sec.id;
      });
      setActive(current);
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, [onHome]);

  const goToSection = (id) => {
    setOpen(false);
    if (onHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <nav className="sticky top-0 z-[100] bg-bg/75 backdrop-blur-xl backdrop-saturate-150 border-b border-border">
      <div className="max-w-wrap mx-auto px-5 sm:px-8 py-[16px] flex items-center justify-between">
        <Link
          to="/"
          className="font-display font-bold text-lg w-[38px] h-[38px] rounded-[10px] bg-brand flex items-center justify-center text-bg shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-transform hover:scale-105"
        >
          {profile.initials}
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => goToSection(l.id)}
              className={`relative text-[0.92rem] font-medium transition-colors ${
                active === l.id ? "text-ink" : "text-ink-dim hover:text-ink"
              }`}
            >
              {l.label}
              {active === l.id && (
                <span className="absolute left-0 right-0 -bottom-1.5 h-[2px] rounded-full bg-brand" />
              )}
            </button>
          ))}
        </div>

        {/* Right Actions: Command Palette & GitHub */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Quick Command Palette Button */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-white/[0.03] text-[0.8rem] text-ink-dim hover:text-ink hover:border-violet-bright transition-all"
            title="Open Command Palette (Cmd+K)"
          >
            <Search size={13} className="text-violet-bright" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="font-mono text-[0.68rem] bg-white/[0.06] border border-border px-1.5 py-0.5 rounded text-ink-faint">
              ⌘K
            </kbd>
          </button>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 border border-border-strong px-4 py-2 rounded-full text-[0.85rem] font-medium transition-all hover:border-violet-bright hover:text-violet-bright hover:-translate-y-0.5"
          >
            GitHub <ArrowUpRight size={12} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-1.5 text-ink-dim hover:text-ink transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden flex flex-col bg-[#0d0d14]/95 backdrop-blur-lg border-b border-border px-6 transition-all duration-300 ease-out overflow-hidden ${
          open ? "max-h-[300px] opacity-100 py-3 pb-5" : "max-h-0 opacity-0 py-0"
        }`}
      >
        {LINKS.map((l) => (
          <button
            key={l.id}
            onClick={() => goToSection(l.id)}
            className="text-left py-3 text-[0.95rem] text-ink-dim hover:text-ink transition-colors border-b border-border/50 last:border-none"
          >
            {l.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
