import { Bot, GitBranch, Plug, Megaphone } from 'lucide-react';

const services = [
  {
    icon: Bot,
    title: 'AI Agent & Chatbot Development',
    description:
      'Custom AI agents trained on your business data. Deploy intelligent chatbots that handle support, qualification, and internal queries autonomously.',
    tags: ['Claude', 'OpenAI', 'LangChain', 'RAG'],
  },
  {
    icon: GitBranch,
    title: 'n8n / Workflow Automation Pipelines',
    description:
      'End-to-end workflow orchestration using n8n and Zapier. From triggers to multi-step logic, I build pipelines that run while you sleep.',
    tags: ['n8n', 'Zapier', 'Make.com', 'Webhooks'],
  },
  {
    icon: Plug,
    title: 'API & CRM Integration',
    description:
      'Seamless connections between your tools — CRMs, databases, spreadsheets, and third-party APIs. One source of truth, zero manual syncing.',
    tags: ['HubSpot', 'Notion', 'Airtable', 'REST APIs'],
  },
  {
    icon: Megaphone,
    title: 'Content & Lead Ops',
    description:
      'Automated lead capture, scoring, nurturing sequences, and content pipelines. Your sales team gets warm leads — never cold spreadsheets.',
    tags: ['Email', 'LinkedIn', 'Lead Scoring', 'CRM'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-5 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="section-label mb-3">Services</p>
          <h2
            className="font-display font-bold leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#f0f0f0', letterSpacing: '-0.02em' }}
          >
            Four ways I take manual work<br className="hidden sm:block" />
            off your calendar.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title} className="card p-6 group">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors duration-200 group-hover:bg-orange-500"
                  style={{ background: 'rgba(249,115,22,0.12)' }}
                >
                  <Icon size={18} style={{ color: '#f97316' }} className="group-hover:text-white" />
                </div>
                <h3
                  className="font-display font-semibold mb-2"
                  style={{ fontSize: '1.05rem', color: '#f0f0f0' }}
                >
                  {s.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: '#777', lineHeight: '1.65' }}>
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="tag-gray tag">{t}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <a href="#contact" className="btn-primary">
            Let's scope your project
          </a>
        </div>
      </div>
    </section>
  );
}
