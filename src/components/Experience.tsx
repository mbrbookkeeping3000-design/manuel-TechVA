import { Award, ExternalLink } from 'lucide-react';

const timeline = [
  {
    period: '2026 — Present',
    role: 'AI Automation Specialist / Tech VA',
    company: 'Independent — Global clients',
    bullets: [
      'Design and ship production automations across n8n, Make.com, and Zapier for founders and small teams.',
      'Build AI agents with memory, RAG, and multi-model fallbacks integrated into Messenger, Telegram, and custom webhooks.',
      'Deliver documented handoffs so clients own and can extend the systems.',
    ],
    tags: ['n8n', 'Make.com', 'Zapier', 'Claude', 'OpenAI'],
  },
  {
    period: '2019 — 2025',
    role: 'Amazon Account Manager & Virtual Assistant',
    company: 'E-commerce clients (US & AU)',
    bullets: [
      'Managed Amazon Seller Central operations: listings, inventory, PPC oversight, and case management.',
      'Layered automation on top of daily ops — pricing checks, review tracking, and reporting to Sheets.',
      'Built the operations fluency behind today\'s automation work.',
    ],
    tags: ['Amazon Seller Central', 'PPC', 'Inventory Ops'],
  },
];

const certs = [
  {
    title: 'No-Code Automation with Zapier',
    issuer: 'TARA AI Community · n8n',
    date: 'July 2026',
    url: 'https://my-certificates.com/certificates/6a56f22a237eddf363787567',
  },
  {
    title: 'No-Code Automation with Make.com',
    issuer: 'TARA AI Community · n8n',
    date: 'July 2026',
    url: 'https://my-certificates.com/certificates/6a4ca4c681683ab63966bf69',
  },
  {
    title: 'n8n Automation Specialist',
    issuer: 'TARA AI Community · n8n',
    date: 'July 2026',
    url: 'https://my-certificates.com/certificates/6a4b298c83f03b163af4bfea',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="section-label mb-3">Experience</p>
          <h2
            className="font-display font-bold leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#f0f0f0', letterSpacing: '-0.02em' }}
          >
            Seven years of shipping —<br className="hidden sm:block" />
            from Amazon ops to autonomous agents.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center pt-1">
                  <div className="timeline-dot" />
                  {i < timeline.length - 1 && (
                    <div className="flex-1 w-px mt-2" style={{ background: '#1f1f1f' }} />
                  )}
                </div>
                <div>
                  <span className="text-xs font-medium mb-1 block" style={{ color: '#555' }}>
                    {item.period}
                  </span>
                  <h3
                    className="font-display font-semibold mb-0.5"
                    style={{ fontSize: '1.05rem', color: '#f0f0f0' }}
                  >
                    {item.role}
                  </h3>
                  <span className="text-xs mb-3 block" style={{ color: '#f97316' }}>
                    {item.company}
                  </span>
                  <ul className="flex flex-col gap-1.5 mb-3">
                    {item.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-sm" style={{ color: '#666', lineHeight: '1.6' }}>
                        <span style={{ color: '#333', flexShrink: 0, marginTop: '0.35em' }}>—</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span key={t} className="tag tag-gray">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award size={16} style={{ color: '#f97316' }} />
              <h3
                className="font-display font-semibold"
                style={{ fontSize: '1rem', color: '#f0f0f0' }}
              >
                Certifications
              </h3>
            </div>

            <div className="flex flex-col gap-3">
              {certs.map((cert, i) => (
                <a
                  key={i}
                  href={cert.url}
                  target="_blank"
                  rel="noreferrer"
                  className="card p-4 flex items-start justify-between gap-4 group"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="flex gap-3 items-start">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.2)' }}
                    >
                      <Award size={14} style={{ color: '#f97316' }} />
                    </div>
                    <div>
                      <p
                        className="font-display font-semibold text-sm mb-0.5 transition-colors group-hover:text-orange-400"
                        style={{ color: '#f0f0f0' }}
                      >
                        {cert.title}
                      </p>
                      <p className="text-xs" style={{ color: '#555' }}>
                        {cert.issuer}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: '#444' }}>
                        Issued {cert.date}
                      </p>
                    </div>
                  </div>
                  <ExternalLink
                    size={13}
                    className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: '#f97316' }}
                  />
                </a>
              ))}
            </div>

            <div
              className="card mt-4 p-4 flex items-center gap-2"
              style={{ background: 'rgba(249,115,22,0.04)', borderColor: 'rgba(249,115,22,0.15)' }}
            >
              <span className="text-xs" style={{ color: '#666' }}>
                Issued by <span style={{ color: '#f97316' }}>TARA AI Community · n8n</span> — July 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
