import { useState, useEffect } from "react";
import { Terminal, Sparkles, CheckCircle2, Cpu, Activity } from "lucide-react";
import useTilt from "../hooks/useTilt";

const CODE_SNIPPETS = [
  {
    file: "agent.py",
    language: "Python",
    lines: [
      { type: "comment", text: "# Initializing autonomous AI pipeline" },
      { type: "code", text: "from agents import Pipeline, GeminiModel" },
      { type: "code", text: "model = GeminiModel(temperature=0.2)" },
      { type: "code", text: "agent = Pipeline(model, tools=[search, voice])" },
      { type: "output", text: "✓ Vector index loaded: 2,400 embeddings" },
      { type: "output", text: "✓ Real-time emotion analyzer: ACTIVE" },
      { type: "highlight", text: "➜ Agent ready to solve real-world problems." },
    ],
  },
  {
    file: "civic_engine.ts",
    language: "TypeScript",
    lines: [
      { type: "comment", text: "// Real-time eligibility evaluation" },
      { type: "code", text: "const matches = await matchSchemes({" },
      { type: "code", text: "  profile: userProfile," },
      { type: "code", text: "  criteria: ['education', 'income', 'region']" },
      { type: "code", text: "});" },
      { type: "output", text: "✓ Evaluated 100+ public schemes in 18ms" },
      { type: "highlight", text: "➜ 12 qualifying schemes recommended." },
    ],
  },
];

export default function HeroTerminal() {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);
  const tiltRef = useTilt(7);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setVisibleLines(CODE_SNIPPETS[0].lines.length);
      return;
    }

    let lineCounter = 0;
    const totalLines = CODE_SNIPPETS[snippetIndex].lines.length;
    setVisibleLines(0);

    const lineInterval = setInterval(() => {
      lineCounter++;
      setVisibleLines(lineCounter);

      if (lineCounter >= totalLines) {
        clearInterval(lineInterval);
        // Switch snippet after reading delay
        setTimeout(() => {
          setSnippetIndex((prev) => (prev + 1) % CODE_SNIPPETS.length);
        }, 3600);
      }
    }, 280);

    return () => clearInterval(lineInterval);
  }, [snippetIndex]);

  const currentSnippet = CODE_SNIPPETS[snippetIndex];

  return (
    <div
      ref={tiltRef}
      className="w-full max-w-[480px] lg:max-w-none mx-auto bg-[#0c0c14]/90 backdrop-blur-xl border border-border-strong/80 rounded-lg2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(139,92,246,0.15)] overflow-hidden transition-all duration-300 hover:border-violet-bright/50"
    >
      {/* Terminal Window Header */}
      <div className="bg-[#12121e]/90 px-4 py-3 border-b border-border/80 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]/90 shadow-[0_0_6px_rgba(255,95,86,0.4)]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/90 shadow-[0_0_6px_rgba(255,189,46,0.4)]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]/90 shadow-[0_0_6px_rgba(39,201,63,0.4)]" />
          <span className="ml-2 text-[0.75rem] font-mono text-ink-faint flex items-center gap-1.5">
            <Terminal size={12} className="text-violet-bright" />
            {currentSnippet.file}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-[0.68rem] font-mono px-2 py-0.5 rounded-full bg-violet/10 text-violet-bright border border-violet/20">
            <Cpu size={10} /> AI Runtime
          </span>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="p-5 font-mono text-[0.82rem] sm:text-[0.86rem] leading-relaxed min-h-[220px] flex flex-col justify-between">
        <div className="space-y-1.5">
          {currentSnippet.lines.slice(0, visibleLines).map((line, idx) => (
            <div
              key={idx}
              className="animate-in fade-in slide-in-from-left-1 duration-200"
            >
              {line.type === "comment" && (
                <span className="text-ink-faint italic">{line.text}</span>
              )}
              {line.type === "code" && (
                <span className="text-ink">
                  <span className="text-violet-bright">
                    {line.text.split(" ")[0]}
                  </span>{" "}
                  {line.text.split(" ").slice(1).join(" ")}
                </span>
              )}
              {line.type === "output" && (
                <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="flex-shrink-0" />
                  {line.text.replace("✓ ", "")}
                </span>
              )}
              {line.type === "highlight" && (
                <span className="text-coral-bright font-semibold flex items-center gap-1.5 bg-coral/10 px-2 py-1 rounded border border-coral/20 mt-2">
                  <Sparkles size={13} className="flex-shrink-0 text-coral" />
                  {line.text.replace("➜ ", "")}
                </span>
              )}
            </div>
          ))}
          {visibleLines < currentSnippet.lines.length && (
            <span className="inline-block w-2 h-4 bg-violet-bright animate-pulse ml-0.5" />
          )}
        </div>

        {/* Real-time Status Footer */}
        <div className="mt-5 pt-3.5 border-t border-border/50 flex items-center justify-between text-[0.72rem] text-ink-faint">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            Live Engine: Standby
          </span>
          <span className="flex items-center gap-1 font-mono">
            <Activity size={12} className="text-violet-bright" /> Latency: 18ms
          </span>
        </div>
      </div>
    </div>
  );
}
