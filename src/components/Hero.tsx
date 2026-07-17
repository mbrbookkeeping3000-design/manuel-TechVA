import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Mail, Zap } from 'lucide-react';

const stats = [
  { value: '7+', label: 'Years in business' },
  { value: '10+', label: 'Automations deployed' },
  { value: '12+', label: 'Consistent businesses' },
  { value: '24h', label: 'Response & turnaround' },
];

const tools = ['n8n', 'Zapier', 'Claude AI', 'Gemini', 'Make.com', 'OpenAI'];

const TYPING_PHRASES = ['boring workflows', 'manual data entry', 'repetitive tasks', 'slow handoffs'];

function useTypingEffect(phrases: string[]) {
  const [displayed, setDisplayed] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const phrase = phrases[phraseIdx];
    if (!deleting) {
      if (charIdx < phrase.length) {
        timeout.current = setTimeout(() => {
          setDisplayed(phrase.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 65);
      } else {
        timeout.current = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (charIdx > 0) {
        timeout.current = setTimeout(() => {
          setDisplayed(phrase.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, 35);
      } else {
        setDeleting(false);
        setPhraseIdx((p) => (p + 1) % phrases.length);
      }
    }
    return () => clearTimeout(timeout.current);
  }, [charIdx, deleting, phraseIdx, phrases]);

  return displayed;
}

export default function Hero() {
  const typed = useTypingEffect(TYPING_PHRASES);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-5 md:px-8 overflow-hidden"
    >
      {/* background glows */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 60% at 75% 35%, rgba(249,115,22,0.08) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 15% 85%, rgba(45,212,191,0.05) 0%, transparent 60%)',
        }}
      />

      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* LEFT */}
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(28px)',
              transition: 'opacity 0.75s ease, transform 0.75s ease',
            }}
          >
            {/* availability pill */}
            <div className="inline-flex items-center gap-2 mb-7 px-3 py-1.5 rounded-full" style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.18)' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#22c55e' }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#22c55e' }} />
              </span>
              <span className="text-xs font-medium" style={{ color: '#22c55e' }}>
                Available for new projects
              </span>
            </div>

            <p className="section-label mb-5">AI &amp; Automation Specialist</p>

            <h1
              className="font-display font-bold leading-tight mb-3"
              style={{
                fontSize: 'clamp(2rem, 4.8vw, 3.5rem)',
                color: '#f0f0f0',
                letterSpacing: '-0.025em',
              }}
            >
              I eliminate your
            </h1>
            <h1
              className="font-display font-bold leading-tight mb-3"
              style={{
                fontSize: 'clamp(2rem, 4.8vw, 3.5rem)',
                letterSpacing: '-0.025em',
                minHeight: '1.2em',
              }}
            >
              <span className="gradient-text">{typed}</span>
              <span className="cursor-blink" />
            </h1>
            <h1
              className="font-display font-bold leading-tight mb-7"
              style={{
                fontSize: 'clamp(2rem, 4.8vw, 3.5rem)',
                color: '#f0f0f0',
                letterSpacing: '-0.025em',
              }}
            >
              with AI automation.
            </h1>

            <p
              className="text-base leading-relaxed mb-9 max-w-[480px]"
              style={{ color: '#777', lineHeight: '1.75' }}
            >
              Tech VA and AI automation specialist based in Quezon City, PH.
              I design and deploy production pipelines with Zapier, n8n, Claude, and Gemini —
              so your team stops paying time between tasks.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#contact" className="btn-primary">
                Book a Discovery Call <ArrowRight size={15} />
              </a>
              <a href="mailto:manuelr.aiautomation@gmail.com" className="btn-ghost">
                <Mail size={15} /> Send a message
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* RIGHT — profile */}
          <div
            className="flex flex-col items-center lg:items-end gap-8"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.85s ease 0.2s, transform 0.85s ease 0.2s',
            }}
          >
            <div className="relative flex items-center justify-center">
              {/* outer orbit ring */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 340,
                  height: 340,
                  border: '1px dashed rgba(249,115,22,0.18)',
                  animation: 'spin 18s linear infinite',
                }}
              />
              {/* middle ring */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 290,
                  height: 290,
                  border: '1px solid rgba(249,115,22,0.09)',
                }}
              />

              {/* orbiting dot */}
              <div
                className="absolute"
                style={{
                  width: 340,
                  height: 340,
                  animation: 'spin 18s linear infinite',
                }}
              >
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                  style={{ background: '#f97316', boxShadow: '0 0 8px rgba(249,115,22,0.7)' }}
                />
              </div>

              {/* tool badges orbiting */}
              <div
                className="absolute"
                style={{
                  width: 340,
                  height: 340,
                  animation: 'spin 18s linear infinite',
                }}
              >
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 px-2.5 py-1 rounded-full text-xs font-semibold font-display"
                  style={{ background: '#161616', border: '1px solid #2a2a2a', color: '#aaa', whiteSpace: 'nowrap', animation: 'spin-reverse 18s linear infinite' }}
                >
                  n8n
                </div>
              </div>

              {/* profile circle */}
              <div
                className="relative overflow-hidden"
                style={{
                  width: 248,
                  height: 248,
                  borderRadius: '50%',
                  border: '3px solid rgba(249,115,22,0.5)',
                  boxShadow: '0 0 0 6px rgba(249,115,22,0.07), 0 0 40px rgba(249,115,22,0.12)',
                }}
              >
                <img
                  src="/images/mannuelr.png"
                  alt="Manuel Rebutido"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Open to Work badge */}
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 card flex items-center gap-2 px-3 py-1.5"
                style={{ whiteSpace: 'nowrap', background: '#111', borderColor: '#222' }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#22c55e' }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#22c55e' }} />
                </span>
                <span className="text-xs font-medium" style={{ color: '#ccc' }}>Open to Work</span>
              </div>

              {/* floating tool card — top right */}
              <div
                className="absolute -top-2 -right-4 card p-3 flex items-center gap-2.5"
                style={{
                  background: '#111',
                  animation: 'floatY 4s ease-in-out infinite',
                }}
              >
                <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ background: 'rgba(249,115,22,0.15)' }}>
                  <Zap size={13} style={{ color: '#f97316' }} />
                </div>
                <div>
                  <p className="text-xs font-semibold font-display" style={{ color: '#f0f0f0', lineHeight: 1.2 }}>Automation</p>
                  <p className="text-xs" style={{ color: '#555' }}>Running 24/7</p>
                </div>
              </div>

              {/* floating saved hours card — left */}
              <div
                className="absolute -left-6 top-1/3 card p-3"
                style={{
                  background: '#111',
                  animation: 'floatY 5s ease-in-out infinite 1.2s',
                }}
              >
                <p className="text-xs font-semibold font-display mb-0.5" style={{ color: '#2dd4bf' }}>Hours saved</p>
                <p className="font-display font-bold" style={{ fontSize: '1.4rem', color: '#f0f0f0', lineHeight: 1 }}>240+</p>
                <p className="text-xs mt-0.5" style={{ color: '#555' }}>per client / mo</p>
              </div>
            </div>
          </div>
        </div>

        {/* stats bar */}
        <div
          className="mt-24 grid grid-cols-2 md:grid-cols-4"
          style={{
            borderRadius: 14,
            overflow: 'hidden',
            border: '1px solid #1f1f1f',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 1s ease 0.5s, transform 1s ease 0.5s',
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="px-7 py-7 flex flex-col gap-1 relative"
              style={{
                background: '#0d0d0d',
                borderRight: i < stats.length - 1 ? '1px solid #1a1a1a' : undefined,
              }}
            >
              <span
                className="font-display font-bold gradient-text"
                style={{ fontSize: '2.1rem', lineHeight: 1 }}
              >
                {s.value}
              </span>
              <span className="text-sm" style={{ color: '#555' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
