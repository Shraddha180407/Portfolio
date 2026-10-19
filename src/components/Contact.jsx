import { useState } from "react";
import { Mail, Download, ArrowUpRight, Send, CheckCircle2, MessageCircle } from "lucide-react";
import { profile } from "../data/portfolio";
import useReveal from "../hooks/useReveal";

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.79-.25.79-.55v-2.1c-3.2.7-3.87-1.36-3.87-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.7 5.38-5.27 5.67.42.36.78 1.08.78 2.18v3.24c0 .3.21.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18} {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.37 4.25 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

const PROJECT_TYPES = [
  "Business / Coaching Website",
  "Custom Web App / MVP",
  "Website Redesign",
  "General Inquiry",
];

export default function Contact() {
  const ref = useReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [projectType, setProjectType] = useState("Business / Coaching Website");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Submitting your inquiry...");

    await new Promise((resolve) => setTimeout(resolve, 600));

    setIsSubmitting(false);
    setIsSuccess(true);
    setStatus("Thank you! Your project inquiry has been received. I'll get back to you promptly.");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => {
      setStatus("");
      setIsSuccess(false);
    }, 6000);
  };

  const channels = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat on WhatsApp (Instant)",
      href: profile.whatsappUrl,
      external: true,
      highlight: true,
    },
    {
      icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      external: false,
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: profile.linkedinHandle,
      href: profile.linkedin,
      external: true,
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: profile.githubHandle,
      href: profile.github,
      external: true,
    },
    {
      icon: Download,
      label: "Resume",
      value: "Download Resume PDF",
      href: profile.resumeUrl,
      external: false,
      download: true,
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 relative border-t border-border-rose/30 max-w-5xl mx-auto px-6 sm:px-8" ref={ref}>
      {/* Title */}
      <div className="reveal mb-14 sm:mb-18">
        <div className="text-[0.78rem] font-mono text-berry font-semibold uppercase tracking-wider mb-2">
          Project Inquiries & Contact
        </div>
        <h2 className="font-serif text-[clamp(2.4rem,4.6vw,3.6rem)] text-ink font-normal tracking-tight mb-3">
          Start a Project or Get in Touch
        </h2>
        <p className="text-[1.05rem] text-ink-muted font-sans font-light max-w-2xl">
          I build fast, modern websites and custom web applications for businesses, educators, and startups. Need a high-converting website, an interactive MVP, or a clean redesign? Let's connect.
        </p>
      </div>

      <div className="reveal grid md:grid-cols-[1fr_1.18fr] gap-12 sm:gap-16 items-start">
        {/* Direct Channels Column */}
        <div className="space-y-4">
          <div className="space-y-2.5">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                download={c.download ? "" : undefined}
                className={`p-4 rounded-xl border flex items-center justify-between transition-all duration-150 active:scale-[0.98] group ${
                  c.highlight
                    ? "bg-emerald-50/70 border-emerald-300 hover:bg-emerald-50 hover:border-emerald-500 shadow-2xs"
                    : "bg-white border-border-rose/50 hover:border-berry/40"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                      c.highlight
                        ? "bg-emerald-600 text-white"
                        : "bg-[#fff0f2] text-berry"
                    }`}
                  >
                    <c.icon size={17} />
                  </div>
                  <div>
                    <div className="text-[0.72rem] font-mono uppercase text-ink-faint">
                      {c.label}
                    </div>
                    <div
                      className={`text-[0.92rem] font-medium font-sans ${
                        c.highlight ? "text-emerald-950 font-semibold" : "text-ink"
                      }`}
                    >
                      {c.value}
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  size={15}
                  className={`transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                    c.highlight ? "text-emerald-700" : "text-ink-faint group-hover:text-berry"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Service Scope Card */}
          <div className="p-5 rounded-2xl bg-[#fff0f2]/60 border border-border-rose/60 text-[0.84rem] text-ink-muted space-y-2 font-sans">
            <div className="text-[0.72rem] font-mono uppercase text-berry font-semibold tracking-wider">
              Service Capabilities
            </div>
            <ul className="space-y-1.5 text-ink-muted">
              <li>• <strong>Starter Business Websites:</strong> Fast, mobile-first pages with WhatsApp lead generation.</li>
              <li>• <strong>Web Applications & MVPs:</strong> Custom portals built with React, Node.js, or FastAPI.</li>
              <li>• <strong>Website Redesigns:</strong> Clean typography, modern aesthetics, and performance optimization.</li>
            </ul>
          </div>
        </div>

        {/* Project Inquiry Form */}
        <div className="bg-white border border-border-rose/50 rounded-2xl p-7 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between mb-1">
            <h3 className="font-serif text-[1.25rem] font-medium text-ink">
              Send a project inquiry
            </h3>
            <span className="text-[0.72rem] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              Prompt Response
            </span>
          </div>
          <p className="text-[0.84rem] text-ink-muted mb-5 font-sans font-light">
            Share your requirements below and I'll get back to you with timeline and scope details.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Project Type Selector */}
            <div>
              <label className="block text-[0.74rem] font-mono text-ink-muted uppercase tracking-wider mb-1.5">
                Project Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setProjectType(type)}
                    className={`px-3 py-2 rounded-lg text-[0.78rem] font-medium text-left transition-all border ${
                      projectType === type
                        ? "bg-[#450920] text-white border-[#450920]"
                        : "bg-[#fff8f8] text-ink-muted border-border-rose/50 hover:border-berry/40"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-[0.74rem] font-mono text-ink-muted uppercase tracking-wider mb-1"
              >
                Your Name / Business Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className="w-full bg-[#fff8f8] border border-border-rose/50 rounded-lg px-3.5 py-2.5 text-[0.92rem] text-ink placeholder:text-ink-faint/50 focus:outline-none focus:border-berry transition-all font-sans"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-[0.74rem] font-mono text-ink-muted uppercase tracking-wider mb-1"
              >
                Email or WhatsApp Number
              </label>
              <input
                id="email"
                name="email"
                type="text"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="email@domain.com or +91..."
                className="w-full bg-[#fff8f8] border border-border-rose/50 rounded-lg px-3.5 py-2.5 text-[0.92rem] text-ink placeholder:text-ink-faint/50 focus:outline-none focus:border-berry transition-all font-sans"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-[0.74rem] font-mono text-ink-muted uppercase tracking-wider mb-1"
              >
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={form.message}
                onChange={handleChange}
                placeholder={`Tell me about your ${projectType.toLowerCase()} requirements, goals, or preferred timeline...`}
                className="w-full bg-[#fff8f8] border border-border-rose/50 rounded-lg px-3.5 py-2.5 text-[0.92rem] text-ink placeholder:text-ink-faint/50 focus:outline-none focus:border-berry transition-all font-sans resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-full font-medium text-[0.88rem] bg-[#450920] text-white transition-all duration-200 hover:bg-berry active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 shadow-xs"
            >
              {isSubmitting ? (
                <span>Submitting inquiry...</span>
              ) : (
                <>
                  <span>Send Project Inquiry</span>
                  <Send size={14} />
                </>
              )}
            </button>

            {status && (
              <div
                className={`flex items-center gap-2 text-[0.84rem] p-3 rounded-xl font-medium mt-3 ${
                  isSuccess
                    ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                    : "bg-[#fff0f2] text-berry border border-border-rose"
                }`}
              >
                {isSuccess && <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />}
                <span>{status}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
