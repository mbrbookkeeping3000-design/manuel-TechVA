import { useState, useEffect } from "react";

/**
 * WorkflowGallery
 * ----------------
 * Vite + React component. Import it into a page/section file and render
 * <WorkflowGallery />.
 *
 * Screenshots are served from /public/workflows/ — each `thumb` path below
 * points to one of the 7 PNGs uploaded there.
 *
 * Edit the copy (pain, timeSaved, benefits, tools) freely — it's drafted
 * from what's visible in each workflow, not verified numbers.
 */

interface Workflow {
  id: string;
  title: string;
  tagline: string;
  accent: string;
  thumb: string | null;
  pain: string;
  timeSaved: string;
  benefits: string[];
  tools: string[];
}

const WORKFLOWS: Workflow[] = [
  {
    id: "fb-agent",
    title: "Facebook AI Agent",
    tagline: "Auto-replies to Facebook messages with an AI agent + memory",
    accent: "#4ADE80",
    thumb: "/workflows/fb-agent.png",
    pain: "Manually answering repetitive Facebook messages and comments eats hours every week.",
    timeSaved: "5–8 hrs / week",
    benefits: [
      "Instant, 24/7 replies — no more waiting on a human to log in",
      "Consistent tone across every conversation",
      "Pulls context from a live reference document instead of guessing",
    ],
    tools: ["n8n", "Google Gemini", "Facebook Graph API", "Webhook"],
  },
  {
    id: "content-repurpose",
    title: "Content Repurposing Engine",
    tagline: "One video in, four pieces of content out",
    accent: "#60A5FA",
    thumb: "/workflows/content-repurpose.png",
    pain: "Turning one video into multi-platform content used to take a full afternoon of writing and manual posting.",
    timeSaved: "4–6 hrs / video",
    benefits: [
      "One upload becomes two blog posts plus LinkedIn and Facebook updates",
      "No manual transcription or rewriting",
      "Publishes itself the moment the file lands in the folder",
    ],
    tools: ["Zapier", "AI transcription", "LinkedIn", "Facebook Pages"],
  },
  {
    id: "messenger-assistant",
    title: "Messenger Knowledge Assistant",
    tagline: "Support agent that answers from your own knowledge base",
    accent: "#4ADE80",
    thumb: "/workflows/messenger-assistant.png",
    pain: "Customers wait hours for basic answers that are already sitting in your docs or FAQ.",
    timeSaved: "10+ hrs / week",
    benefits: [
      "Answers grounded in your real knowledge base, not guesses",
      "Automatic backup model keeps replies flowing if the primary fails",
      "Remembers the conversation instead of starting cold each message",
    ],
    tools: ["n8n", "Gemini 2.5", "Groq / Llama backup", "Conversation memory"],
  },
  {
    id: "job-scraper",
    title: "Job Scraper + Resume Optimizer",
    tagline: "Slack message in, tailored resume + proposal out",
    accent: "#F59E0B",
    thumb: "/workflows/job-scraper.png",
    pain: "Hours spent searching listings and rewriting a resume for every single application.",
    timeSaved: "3–5 hrs / session",
    benefits: [
      "Scrapes and filters listings automatically",
      "Generates a tailored resume and proposal per job",
      "Starts and ends inside Slack — no extra tools to check",
    ],
    tools: ["Slack", "OpenRouter", "Groq", "Google Docs / Gmail"],
  },
  {
    id: "email-sorter",
    title: "Email Attachment Sorter",
    tagline: "Attachments get described, filed, logged, and summarized",
    accent: "#60A5FA",
    thumb: "/workflows/email-sorter.png",
    pain: "Manually saving, naming, and tracking every attachment that comes through email.",
    timeSaved: "2–3 hrs / week",
    benefits: [
      "Every attachment gets an AI-written description automatically",
      "Files land in the right Drive folder with no manual sorting",
      "A running spreadsheet log means nothing gets lost",
    ],
    tools: ["Gmail", "Gemini", "Google Drive", "Google Sheets"],
  },
  {
    id: "xero-asana",
    title: "Xero → Asana Reconciliation",
    tagline: "Bank data and task tracking stay in sync automatically",
    accent: "#C084FC",
    thumb: "/workflows/xero-asana.png",
    pain: "Manually cross-checking bank statements against project tracking every week.",
    timeSaved: "3–4 hrs / week",
    benefits: [
      "Bank transactions logged to Sheets with no copy-pasting",
      "Reconciled statements attach themselves back into Asana",
      "One system of record instead of three manual checks",
    ],
    tools: ["Asana", "Xero", "Google Sheets", "Make.com"],
  },
  {
    id: "asmr-video",
    title: "ASMR Shorts Generator",
    tagline: "Fully automated daily video pipeline, prompt to publish",
    accent: "#F59E0B",
    thumb: "/workflows/asmr-video.png",
    pain: "Sourcing ideas, generating, and manually uploading short-form video every day.",
    timeSaved: "1–2 hrs / day",
    benefits: [
      "Writes its own fresh prompt on a schedule",
      "Generates and polls the video with no manual checking",
      "Publishes straight to YouTube Shorts and Facebook Reels",
    ],
    tools: ["Google Gemini", "Video generation API", "YouTube", "Facebook"],
  },
];

// A small abstract node-diagram motif standing in for a real screenshot.
// Used automatically whenever a workflow's `thumb` is still null.
function NodeMotif({ accent }: { accent: string }) {
  return (
    <svg viewBox="0 0 240 140" className="motif" aria-hidden="true">
      <line x1="30" y1="70" x2="90" y2="40" className="wire" style={{ stroke: accent }} />
      <line x1="90" y1="40" x2="150" y2="70" className="wire" style={{ stroke: accent }} />
      <line x1="150" y1="70" x2="210" y2="40" className="wire" style={{ stroke: accent }} />
      <line x1="90" y1="40" x2="150" y2="100" className="wire" style={{ stroke: accent }} />
      <circle cx="30" cy="70" r="7" className="node" />
      <circle cx="90" cy="40" r="7" className="node" />
      <circle cx="150" cy="70" r="7" className="node" />
      <circle cx="210" cy="40" r="7" className="node" />
      <circle cx="150" cy="100" r="7" className="node" />
      <circle cx="30" cy="70" r="3" fill={accent} className="pulse" />
    </svg>
  );
}

function CardThumb({ workflow }: { workflow: Workflow }) {
  if (workflow.thumb) {
    return <img src={workflow.thumb} alt={workflow.title} className="thumb-img" />;
  }
  return (
    <div className="thumb-fallback">
      <NodeMotif accent={workflow.accent} />
    </div>
  );
}

export default function WorkflowGallery() {
  const [active, setActive] = useState<Workflow | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="gallery-root">
      <style>{`
        .gallery-root {
          --bg: #0b0d0f;
          --card: #14171a;
          --card-border: #22262b;
          --text: #e8eaed;
          --muted: #8b9299;
          background: var(--bg);
          color: var(--text);
          font-family: ui-sans-serif, system-ui, -apple-system, "Inter", sans-serif;
          padding: 48px 24px 80px;
          min-height: 100%;
        }
        .gallery-header {
          max-width: 1100px;
          margin: 0 auto 40px;
        }
        .eyebrow {
          font-family: "JetBrains Mono", ui-monospace, Menlo, monospace;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .gallery-title {
          font-size: clamp(28px, 4vw, 40px);
          font-weight: 700;
          margin: 8px 0 0;
          letter-spacing: -0.02em;
        }
        .grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }
        .card {
          background: var(--card);
          border: 1px solid var(--card-border);
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          text-align: left;
          padding: 0;
          transition: transform 0.15s ease, border-color 0.15s ease;
        }
        .card:hover, .card:focus-visible {
          transform: translateY(-3px);
          border-color: #3a4046;
          outline: none;
        }
        .thumb-fallback {
          background: #0f1215;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid var(--card-border);
        }
        .thumb-img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          display: block;
          border-bottom: 1px solid var(--card-border);
        }
        .motif { width: 80%; height: 80%; }
        .wire { stroke-width: 1.5; opacity: 0.55; fill: none; }
        .node { fill: #0f1215; stroke: #4a5057; stroke-width: 1.5; }
        .pulse {
          animation: travel 3.2s linear infinite;
        }
        @keyframes travel {
          0%   { transform: translate(0px, 0px); opacity: 0; }
          5%   { opacity: 1; }
          28%  { transform: translate(60px, -30px); }
          55%  { transform: translate(120px, 0px); }
          80%  { transform: translate(180px, -30px); opacity: 1; }
          100% { transform: translate(180px, -30px); opacity: 0; }
        }
        .card-body { padding: 16px 18px 18px; }
        .card-title {
          font-size: 16px;
          font-weight: 600;
          margin: 0 0 6px;
        }
        .card-tagline {
          font-size: 13px;
          color: var(--muted);
          margin: 0;
          line-height: 1.4;
        }
        .card-meta {
          margin-top: 12px;
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 11px;
          color: var(--muted);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .dot { width: 6px; height: 6px; border-radius: 50%; }

        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(5, 6, 7, 0.75);
          backdrop-filter: blur(3px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          z-index: 50;
        }
        .modal {
          background: var(--card);
          border: 1px solid var(--card-border);
          border-radius: 16px;
          max-width: 560px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          padding: 28px;
          position: relative;
        }
        .close-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          background: transparent;
          border: 1px solid var(--card-border);
          color: var(--muted);
          width: 30px;
          height: 30px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          line-height: 1;
        }
        .close-btn:hover { color: var(--text); border-color: #4a5057; }
        .modal-title { font-size: 22px; font-weight: 700; margin: 0 0 4px; padding-right: 30px; }
        .modal-tagline { color: var(--muted); font-size: 14px; margin: 0 0 20px; }
        .modal-section { margin-bottom: 18px; }
        .modal-label {
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 6px;
        }
        .modal-stat {
          font-size: 20px;
          font-weight: 700;
        }
        .modal-text { font-size: 14px; line-height: 1.5; color: var(--text); }
        .benefit-list { margin: 0; padding-left: 18px; font-size: 14px; line-height: 1.6; }
        .tool-chips { display: flex; flex-wrap: wrap; gap: 6px; }
        .chip {
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 11px;
          padding: 4px 8px;
          border-radius: 6px;
          border: 1px solid var(--card-border);
          color: var(--muted);
        }
      `}</style>

      <div className="gallery-header">
        <div className="eyebrow">Automation portfolio</div>
        <h2 className="gallery-title">Workflows I've built</h2>
      </div>

      <div className="grid">
        {WORKFLOWS.map((w) => (
          <button
            key={w.id}
            className="card"
            onClick={() => setActive(w)}
            aria-label={`View details for ${w.title}`}
          >
            <CardThumb workflow={w} />
            <div className="card-body">
              <p className="card-title">{w.title}</p>
              <p className="card-tagline">{w.tagline}</p>
              <div className="card-meta">
                <span className="dot" style={{ background: w.accent }} />
                {w.timeSaved} saved
              </div>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div className="overlay" onClick={() => setActive(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActive(null)} aria-label="Close">
              ✕
            </button>
            <h3 className="modal-title">{active.title}</h3>
            <p className="modal-tagline">{active.tagline}</p>

            <div className="modal-section">
              <div className="modal-label">Time saved</div>
              <div className="modal-stat" style={{ color: active.accent }}>
                {active.timeSaved}
              </div>
            </div>

            <div className="modal-section">
              <div className="modal-label">Pain point solved</div>
              <p className="modal-text">{active.pain}</p>
            </div>

            <div className="modal-section">
              <div className="modal-label">Benefits</div>
              <ul className="benefit-list">
                {active.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="modal-section">
              <div className="modal-label">Built with</div>
              <div className="tool-chips">
                {active.tools.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
