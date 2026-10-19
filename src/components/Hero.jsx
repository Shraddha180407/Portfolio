import { profile } from "../data/portfolio";
import AudioWaveCanvas from "./AudioWaveCanvas";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[82vh] sm:min-h-[88vh] flex flex-col justify-center items-center px-6 overflow-hidden pt-8 pb-20"
    >
      {/* Living Ambient Acoustic Ribbon positioned softly to frame the lower stage without obscuring text */}
      <div className="absolute inset-x-0 top-[64%] -translate-y-1/2 h-[280px] pointer-events-none opacity-40 z-0">
        <AudioWaveCanvas />
      </div>

      {/* Center Content Layer */}
      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50/90 border border-emerald-200/80 text-emerald-800 text-[0.8rem] font-sans font-medium mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          Available for freelance projects
        </div>

        {/* Headline (Balanced 2-Line Composition) */}
        <h1 className="font-serif text-[clamp(2.7rem,6.4vw,5rem)] leading-[1.08] text-ink tracking-tight font-normal">
          Building software that<br />
          listens, thinks, and feels.
        </h1>

        {/* Client & Technical Focus Subtext (Clear, High-Contrast Service Offering) */}
        <p className="mt-6 text-[1.05rem] sm:text-[1.18rem] text-ink/85 max-w-xl mx-auto leading-relaxed font-sans font-normal">
          I design and build fast, modern business websites and custom web applications for businesses, educators, and startups — alongside research in voice AI and full-stack software.
        </p>

        {/* High-Converting Tactile Pill Buttons */}
        <div className="flex gap-3.5 mt-8 justify-center items-center flex-wrap">
          <button
            onClick={() => scrollTo("contact")}
            className="px-7 py-3 rounded-full font-medium text-[0.92rem] bg-[#450920] text-white shadow-sm transition-all duration-150 hover:bg-berry active:scale-[0.97]"
          >
            Start a Project
          </button>

          <button
            onClick={() => scrollTo("work")}
            className="px-7 py-3 rounded-full font-medium text-[0.92rem] bg-white border border-border-rose text-ink shadow-xs transition-all duration-150 hover:bg-[#fff0f2] active:scale-[0.97]"
          >
            View Work
          </button>

          <a
            href={profile.resumeUrl}
            download
            className="px-6 py-3 rounded-full font-medium text-[0.92rem] text-ink-muted hover:text-ink transition-all duration-150 active:scale-[0.97] font-sans"
          >
            Resume →
          </a>
        </div>
      </div>
    </section>
  );
}
