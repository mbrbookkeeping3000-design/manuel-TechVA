import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Linkedin, Briefcase, Globe } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  const profiles = [
    {
      label: 'LinkedIn',
      value: 'Manuel Rebutido',
      href: 'https://www.linkedin.com/in/manuel-rebutido-89b21b1a8/',
      icon: <Linkedin size={15} style={{ color: '#0a66c2' }} />,
      bg: 'rgba(10,102,194,0.12)',
    },
    {
      label: 'Upwork',
      value: 'View Profile',
      href: 'https://www.upwork.com/freelancers/~015bf2b2e2fb5aa980?mp_source=share',
      icon: <Briefcase size={15} style={{ color: '#14a800' }} />,
      bg: 'rgba(20,168,0,0.12)',
    },
    {
      label: 'OnlineJobs.ph',
      value: 'View Profile',
      href: 'https://v2.onlinejobs.ph/jobseekers/info/829881',
      icon: <Globe size={15} style={{ color: '#3b82f6' }} />,
      bg: 'rgba(59,130,246,0.12)',
    },
  ];

  return (
    <section id="contact" className="py-24 px-5 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="section-label mb-3">Contact</p>
          <h2
            className="font-display font-bold leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#f0f0f0', letterSpacing: '-0.02em' }}
          >
            Let's automate the busywork.
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: '#777', lineHeight: '1.65' }}>
            Tell me what's eating your team's time. I'll reply within 24 hours with
            a first-look automation plan.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {/* contact info */}
          <div className="md:col-span-2 flex flex-col gap-3">
            {/* Email */}
            <div className="card p-4 flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(249,115,22,0.12)' }}
              >
                <Mail size={15} style={{ color: '#f97316' }} />
              </div>
              <div>
                <p className="text-xs mb-0.5" style={{ color: '#555' }}>Email</p>
                <a
                  href="mailto:manuelr.aiautomation@gmail.com"
                  className="text-xs font-medium transition-colors"
                  style={{ color: '#ccc' }}
                >
                  manuelr.aiautomation@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="card p-4 flex items-start gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(45,212,191,0.1)' }}
              >
                <MapPin size={15} style={{ color: '#2dd4bf' }} />
              </div>
              <div>
                <p className="text-xs mb-0.5" style={{ color: '#555' }}>Location</p>
                <p className="text-xs font-medium" style={{ color: '#ccc' }}>
                  Quezon City, PH — UTC+8
                </p>
              </div>
            </div>

            {/* Profile links */}
            {profiles.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="card p-4 flex items-start gap-3 group"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: p.bg }}
                >
                  {p.icon}
                </div>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: '#555' }}>{p.label}</p>
                  <p
                    className="text-xs font-medium transition-colors group-hover:text-orange-400"
                    style={{ color: '#ccc' }}
                  >
                    {p.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Availability */}
            <div
              className="card p-4"
              style={{ background: 'rgba(34,197,94,0.04)', borderColor: 'rgba(34,197,94,0.15)' }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-2 h-2 rounded-full animate-pulse-ring" style={{ background: '#22c55e' }} />
                <span className="text-xs font-medium" style={{ color: '#22c55e' }}>
                  Currently Available
                </span>
              </div>
              <p className="text-xs" style={{ color: '#666', lineHeight: '1.5' }}>
                Taking on 2 new automation projects this month.
              </p>
            </div>
          </div>

          {/* form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 card p-6 flex flex-col gap-4">
            <div>
              <label className="text-xs font-medium mb-1.5 block" style={{ color: '#888' }}>
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-colors"
                style={{
                  background: '#0d0d0d',
                  border: '1px solid #222',
                  color: '#f0f0f0',
                  fontFamily: 'var(--font-body)',
                }}
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label className="text-xs font-medium mb-1.5 block" style={{ color: '#888' }}>
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg text-sm outline-none transition-colors"
                style={{
                  background: '#0d0d0d',
                  border: '1px solid #222',
                  color: '#f0f0f0',
                  fontFamily: 'var(--font-body)',
                }}
                placeholder="jane@company.com"
              />
            </div>
            <div>
              <label className="text-xs font-medium mb-1.5 block" style={{ color: '#888' }}>
                What's eating your time?
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg text-sm outline-none resize-none transition-colors"
                style={{
                  background: '#0d0d0d',
                  border: '1px solid #222',
                  color: '#f0f0f0',
                  fontFamily: 'var(--font-body)',
                }}
                placeholder="We spend 10 hours a week manually syncing orders between..."
              />
            </div>
            <button
              type="submit"
              className="btn-primary justify-center"
              disabled={sent}
              style={sent ? { background: '#22c55e' } : {}}
            >
              {sent ? (
                <>
                  <CheckCircle2 size={15} /> Message Sent
                </>
              ) : (
                <>
                  Send Message <Send size={15} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
