import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border-rose/30 py-10">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 flex justify-between items-center flex-wrap gap-4 text-[0.82rem] text-ink-faint">
        <div className="font-serif text-[0.95rem] text-ink">
          © 2026 {profile.name}
        </div>

        <div className="flex items-center gap-6 font-medium">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-berry transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-berry transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover:text-ink transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
