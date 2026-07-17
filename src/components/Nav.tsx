import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#experience', label: 'Experience' },
    { href: '#work', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid #1f1f1f' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-16">
        <a
          href="#hero"
          className="flex items-center gap-2 font-display font-bold text-sm tracking-tight"
          style={{ color: '#f0f0f0' }}
          onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}
        >
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center"
            style={{ background: '#f97316' }}
          >
            <Zap size={14} color="#fff" fill="#fff" />
          </div>
          Manuel R.<span style={{ color: '#f97316' }}>.</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-150"
              style={{ color: '#888', fontFamily: 'var(--font-body)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f0f0f0')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
            >
              {l.label}
            </button>
          ))}
          <a href="#contact" className="btn-primary ml-3" style={{ padding: '8px 16px', fontSize: '13px' }}>
            Let's Talk
          </a>
        </nav>

        <button
          className="md:hidden p-2 rounded-md"
          style={{ color: '#f0f0f0' }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden border-t"
          style={{ background: 'rgba(10,10,10,0.98)', borderColor: '#1f1f1f' }}
        >
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors"
                style={{ color: '#aaa', fontFamily: 'var(--font-body)' }}
              >
                {l.label}
              </button>
            ))}
            <a href="#contact" className="btn-primary mt-3 justify-center">
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
