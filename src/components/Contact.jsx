import { useState } from "react";
import { Mail, Download } from "lucide-react";
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

const rows = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: profile.githubHandle,
    href: profile.github,
    external: true,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: profile.linkedinHandle,
    href: profile.linkedin,
    external: true,
  },
  {
    icon: Download,
    label: "Resume",
    value: "Download My Resume",
    href: profile.resumeUrl,
    external: false,
    download: true,
  },
];

export default function Contact() {
  const ref = useReveal();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending message...");
    
    // Simulate interactive submit response with smooth state feedback
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setStatus("Thank you! Your message has been sent successfully.");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => {
      setStatus("");
      setIsSuccess(false);
    }, 6000);
  };

  return (
    <section id="contact" className="py-24 sm:py-28" ref={ref}>
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <div className="reveal max-w-[640px] mb-14">
          <span className="text-[0.8rem] font-semibold text-violet-bright uppercase tracking-wider mb-3.5 block">
            Contact
          </span>
          <h2 className="text-[clamp(2rem,3.6vw,2.8rem)]">Let's build something amazing.</h2>
          <p className="text-ink-dim mt-3.5 text-[1.05rem]">
            I'm always open to discussing new projects, collaborations, or
            opportunities.
          </p>
        </div>

        <div className="reveal grid lg:grid-cols-[1fr_1.2fr] gap-7">
          <div className="flex flex-col gap-3.5">
            {rows.map((r) => (
              <a
                key={r.label}
                href={r.href}
                target={r.external ? "_blank" : undefined}
                rel={r.external ? "noopener noreferrer" : undefined}
                download={r.download}
                className="flex items-center gap-4 bg-bg-card border border-border rounded-md2 px-5 py-4.5 transition-colors hover:border-violet-bright"
              >
                <div className="w-10 h-10 rounded-[10px] bg-violet/[0.14] flex items-center justify-center flex-shrink-0">
                  <r.icon size={18} className="text-violet-bright" />
                </div>
                <div>
                  <div className="text-[0.75rem] text-ink-faint mb-0.5">{r.label}</div>
                  <div className="text-[0.92rem] font-medium">{r.value}</div>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-bg-card border border-border rounded-md2 p-7 flex flex-col gap-4"
          >
            <div className="grid sm:grid-cols-2 gap-3.5">
              <div>
                <label htmlFor="cf-name" className="text-[0.78rem] text-ink-faint mb-1.5 block">
                  Name
                </label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-bg-raised border border-border rounded-[10px] px-3.5 py-3 text-[0.9rem] focus:border-violet-bright focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="cf-email" className="text-[0.78rem] text-ink-faint mb-1.5 block">
                  Email
                </label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full bg-bg-raised border border-border rounded-[10px] px-3.5 py-3 text-[0.9rem] focus:border-violet-bright focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label htmlFor="cf-msg" className="text-[0.78rem] text-ink-faint mb-1.5 block">
                Message
              </label>
              <textarea
                id="cf-msg"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full bg-bg-raised border border-border rounded-[10px] px-3.5 py-3 text-[0.9rem] resize-y focus:border-violet-bright focus:outline-none"
              />
            </div>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <span className={`text-[0.85rem] min-h-[20px] transition-colors ${isSuccess ? "text-success font-medium" : "text-ink-dim"}`}>
                {status}
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 rounded-full font-semibold text-[0.9rem] bg-brand text-bg transition-all hover:-translate-y-0.5 ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message →"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
