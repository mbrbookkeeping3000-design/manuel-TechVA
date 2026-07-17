import { ArrowUpRight, Workflow, MessageSquare, Database } from 'lucide-react';

const projects = [
  {
    icon: Workflow,
    title: 'E-commerce Order Sync Pipeline',
    category: 'Workflow Automation',
    description:
      'Built an n8n pipeline that auto-syncs orders from Shopify to a client\'s Airtable inventory, triggers supplier emails, and updates tracking — zero manual touchpoints across 3 marketplaces.',
    stack: ['n8n', 'Shopify API', 'Airtable', 'Gmail'],
    metric: '15 hrs/week saved',
  },
  {
    icon: MessageSquare,
    title: 'AI Support Agent (RAG)',
    category: 'AI Agent',
    description:
      'Deployed a Claude-powered support agent with retrieval over 500+ docs. Handles tier-1 queries, escalates complex tickets, and logs every conversation to HubSpot automatically.',
    stack: ['Claude', 'Pinecone', 'HubSpot', 'n8n'],
    metric: '68% deflection rate',
  },
  {
    icon: Database,
    title: 'Lead Scoring & Enrichment Flow',
    category: 'CRM Automation',
    description:
      'Zapier + Make pipeline that captures form submissions, enriches with Clearbit data, scores against ICP, and routes hot leads to sales reps\' Slack within 30 seconds.',
    stack: ['Zapier', 'Clearbit', 'Slack', 'Salesforce'],
    metric: '3x faster follow-up',
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 px-5 md:px-8" style={{ background: '#0d0d0d' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="section-label mb-3">Selected Work</p>
            <h2
              className="font-display font-bold leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#f0f0f0', letterSpacing: '-0.02em' }}
            >
              Real pipelines. Real hours saved.
            </h2>
          </div>
          <span className="text-sm" style={{ color: '#555' }}>Case studies available on request.</span>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="card p-6 group flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(249,115,22,0.12)' }}
                  >
                    <Icon size={18} style={{ color: '#f97316' }} />
                  </div>
                  <ArrowUpRight
                    size={16}
                    style={{ color: '#444' }}
                    className="transition-colors duration-200 group-hover:text-orange-500"
                  />
                </div>

                <span className="text-xs mb-2" style={{ color: '#f97316' }}>{p.category}</span>
                <h3
                  className="font-display font-semibold mb-2"
                  style={{ fontSize: '1rem', color: '#f0f0f0' }}
                >
                  {p.title}
                </h3>
                <p className="text-sm mb-4 flex-1" style={{ color: '#666', lineHeight: '1.6' }}>
                  {p.description}
                </p>

                <div
                  className="pt-4 mb-4"
                  style={{ borderTop: '1px solid #1f1f1f' }}
                >
                  <span
                    className="font-display font-bold"
                    style={{ fontSize: '1.1rem', color: '#2dd4bf' }}
                  >
                    {p.metric}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className="tag tag-gray" style={{ fontSize: '10px' }}>{t}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
