import { Zap, Linkedin, Mail, Briefcase, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-5 md:px-8" style={{ borderTop: '1px solid #1f1f1f' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display font-bold text-sm">
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center"
            style={{ background: '#f97316' }}
          >
            <Zap size={14} color="#fff" fill="#fff" />
          </div>
          Manuel Rebutido<span style={{ color: '#f97316' }}>.</span>
        </div>

        <p className="text-xs" style={{ color: '#555' }}>
          © {new Date().getFullYear()} Manuel Rebutido. Built with intention.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="mailto:manuelr.aiautomation@gmail.com"
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
            style={{ background: '#161616', border: '1px solid #222' }}
            aria-label="Email"
          >
            <Mail size={15} style={{ color: '#888' }} />
          </a>
          <a
            href="https://www.linkedin.com/in/manuel-rebutido-89b21b1a8/"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
            style={{ background: '#161616', border: '1px solid #222' }}
            aria-label="LinkedIn"
          >
            <Linkedin size={15} style={{ color: '#888' }} />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~015bf2b2e2fb5aa980?mp_source=share"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
            style={{ background: '#161616', border: '1px solid #222' }}
            aria-label="Upwork"
          >
            <Briefcase size={15} style={{ color: '#888' }} />
          </a>
          <a
            href="https://v2.onlinejobs.ph/jobseekers/info/829881"
            target="_blank"
            rel="noreferrer"
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
            style={{ background: '#161616', border: '1px solid #222' }}
            aria-label="OnlineJobs.ph"
          >
            <Globe size={15} style={{ color: '#888' }} />
          </a>
        </div>
      </div>
    </footer>
  );
}
