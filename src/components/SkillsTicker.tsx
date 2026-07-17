import {
  Link2,
  Globe,
  FileText,
  Workflow,
  Mic,
  Layers,
  Bot,
  Brain,
  Database,
  Mail,
  ShoppingCart,
  BarChart3,
  Zap,
  Cpu,
  Cloud,
  type LucideIcon,
} from 'lucide-react';

type Skill = {
  name: string;
  icon: LucideIcon;
  featured?: boolean;
};

const skills: Skill[] = [
  { name: 'API & Webhook Integration', icon: Link2 },
  { name: 'Responsive Funnel Design', icon: Globe },
  { name: 'Technical Documentation', icon: FileText },
  { name: 'End-to-End Automation', icon: Workflow, featured: true },
  { name: 'AI Voice & Chat Agents', icon: Mic },
  { name: 'CRM & Pipeline Architecture', icon: Layers },
  { name: 'AI Agent Workflows', icon: Bot },
  { name: 'LLM Prompt Engineering', icon: Brain },
  { name: 'Data Pipelines', icon: Database },
  { name: 'Email Automation', icon: Mail },
  { name: 'Amazon VA Operations', icon: ShoppingCart },
  { name: 'Reporting & Dashboards', icon: BarChart3 },
  { name: 'Zapier & n8n', icon: Zap },
  { name: 'AI Model Integration', icon: Cpu },
  { name: 'Cloud Orchestration', icon: Cloud },
];

// constellation dot positions (percentages within the decorative layer)
const stars = [
  { top: '12%', left: '4%', r: 2 },
  { top: '78%', left: '9%', r: 1.5 },
  { top: '30%', left: '16%', r: 2.5 },
  { top: '62%', left: '22%', r: 1.5 },
  { top: '18%', left: '30%', r: 2 },
  { top: '84%', left: '36%', r: 1.5 },
  { top: '44%', left: '42%', r: 2 },
  { top: '22%', left: '50%', r: 1.5 },
  { top: '70%', left: '56%', r: 2.5 },
  { top: '36%', left: '64%', r: 2 },
  { top: '88%', left: '70%', r: 1.5 },
  { top: '16%', left: '76%', r: 2 },
  { top: '54%', left: '82%', r: 1.5 },
  { top: '28%', left: '90%', r: 2.5 },
  { top: '74%', left: '96%', r: 2 },
];

const lines = [
  { x1: '4%', y1: '12%', x2: '16%', y2: '30%' },
  { x1: '16%', y1: '30%', x2: '30%', y2: '18%' },
  { x1: '30%', y1: '18%', x2: '42%', y2: '44%' },
  { x1: '42%', y1: '44%', x2: '50%', y2: '22%' },
  { x1: '50%', y1: '22%', x2: '64%', y2: '36%' },
  { x1: '64%', y1: '36%', x2: '76%', y2: '16%' },
  { x1: '9%', y1: '78%', x2: '22%', y2: '62%' },
  { x1: '22%', y1: '62%', x2: '36%', y2: '84%' },
  { x1: '56%', y1: '70%', x2: '70%', y2: '88%' },
  { x1: '70%', y1: '88%', x2: '82%', y2: '54%' },
  { x1: '82%', y1: '54%', x2: '96%', y2: '74%' },
  { x1: '90%', y1: '28%', x2: '96%', y2: '74%' },
];

function SkillItem({ skill }: { skill: Skill }) {
  const Icon = skill.icon;
  if (skill.featured) {
    return (
      <div
        className="ticker-item featured"
        style={{
          background: '#dbeafe',
          color: '#1e3a8a',
          border: '1px solid #bfdbfe',
        }}
      >
        <Icon size={16} style={{ color: '#1e3a8a' }} />
        <span className="font-display font-semibold">{skill.name}</span>
      </div>
    );
  }
  return (
    <div className="ticker-item">
      <Icon size={16} style={{ color: '#f97316' }} />
      <span className="font-display">{skill.name}</span>
    </div>
  );
}

export default function SkillsTicker() {
  // duplicate the list for seamless loop
  const loop = [...skills, ...skills];

  return (
    <section
      aria-label="Skills"
      className="relative overflow-hidden py-14 md:py-16"
      style={{ background: '#0a0a0f' }}
    >
      {/* constellation decorative layer */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        style={{ opacity: 0.22 }}
        aria-hidden="true"
      >
        {lines.map((l, i) => (
          <line
            key={i}
            x1={l.x1}
            y1={l.y1}
            x2={l.x2}
            y2={l.y2}
            stroke="#f97316"
            strokeWidth="0.5"
            opacity="0.5"
          />
        ))}
        {stars.map((s, i) => (
          <circle
            key={i}
            cx={s.left}
            cy={s.top}
            r={s.r}
            fill="#f97316"
            opacity="0.6"
          />
        ))}
      </svg>

      {/* soft edge fades */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10"
        style={{
          width: '12%',
          background: 'linear-gradient(to right, #0a0a0f, transparent)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10"
        style={{
          width: '12%',
          background: 'linear-gradient(to left, #0a0a0f, transparent)',
        }}
      />

      {/* marquee */}
      <div className="ticker-track-wrap">
        <div className="ticker-track">
          {loop.map((skill, i) => (
            <SkillItem key={`${skill.name}-${i}`} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
