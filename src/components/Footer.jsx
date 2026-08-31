import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-wrap mx-auto px-5 sm:px-8 flex justify-between items-center flex-wrap gap-4 text-[0.82rem] text-ink-faint">
        <span>© 2026 {profile.name}. All rights reserved.</span>
        
        <div className="flex items-center gap-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-bright transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-bright transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="hover:text-violet-bright transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
