import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === "/";

  const goToSection = (id) => {
    setOpen(false);
    if (onHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <nav className="sticky top-0 z-[100] bg-[#fff8f8]/80 backdrop-blur-md transition-all duration-200">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-5 flex items-center justify-between">
        {/* Name / Brand (Matches mockup top-left) */}
        <Link
          to="/"
          className="font-serif text-[1.2rem] font-medium text-ink hover:text-berry transition-colors tracking-tight"
        >
          {profile.name}
        </Link>

        {/* Clean Text Navigation Links (Matches mockup top-right) */}
        <div className="hidden md:flex items-center gap-8 text-[0.92rem] font-sans">
          <button
            onClick={() => goToSection("work")}
            className="text-ink-muted hover:text-ink transition-colors font-medium"
          >
            Work
          </button>
          <button
            onClick={() => goToSection("about")}
            className="text-ink-muted hover:text-ink transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => goToSection("contact")}
            className="text-ink-muted hover:text-ink transition-colors font-medium"
          >
            Contact
          </button>
          <a
            href={profile.resumeUrl}
            download
            className="text-berry hover:text-ink transition-colors font-medium"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-ink-muted hover:text-ink transition-colors p-1"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -6 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="md:hidden bg-[#fff8f8] border-b border-border-rose/40 px-6 py-4 flex flex-col gap-3 font-sans text-[0.95rem] overflow-hidden origin-top"
          >
            <button
              onClick={() => goToSection("work")}
              className="text-left py-2 text-ink-muted hover:text-ink active:scale-[0.98] transition-all"
            >
              Work
            </button>
            <button
              onClick={() => goToSection("about")}
              className="text-left py-2 text-ink-muted hover:text-ink active:scale-[0.98] transition-all"
            >
              About
            </button>
            <button
              onClick={() => goToSection("contact")}
              className="text-left py-2 text-ink-muted hover:text-ink active:scale-[0.98] transition-all"
            >
              Contact
            </button>
            <a
              href={profile.resumeUrl}
              download
              className="py-2 text-berry font-medium active:scale-[0.98] transition-all"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
