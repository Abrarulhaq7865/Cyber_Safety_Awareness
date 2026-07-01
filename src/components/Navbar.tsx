import { useState, useEffect } from 'react';
import { Shield, Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About', labelTe: 'గురించి' },
  { href: '#threats', label: 'Threats', labelTe: 'ముప్పులు' },
  { href: '#tips', label: 'Tips', labelTe: 'చిట్కాలు' },
  { href: '#quiz', label: 'Quiz', labelTe: 'క్విజ్' },
  { href: '#report', label: 'Report', labelTe: 'నివేదించు' },
  { href: '#contact', label: 'Contact', labelTe: 'సంప్రదించు' },
];

interface NavbarProps {
  isTelugu: boolean;
  setIsTelugu: (v: boolean) => void;
}

export default function Navbar({ isTelugu, setIsTelugu }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    setActiveHash(window.location.hash || '#home');

    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleHashChange = () => {
      setActiveHash(window.location.hash || '#home');
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={() => setActiveHash('#home')} className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-cyan-400 to-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.3)] group-hover:scale-105 transition-transform">
            <Shield className="w-5 h-5 text-slate-950 font-bold" />
          </div>
          <div className="hidden sm:block">
            <div className="text-base font-black text-white tracking-wide leading-tight">CyberSafe</div>
            <div className="text-xs font-medium text-cyan-400 tracking-wider leading-tight">Awareness Portal</div>
          </div>
        </a>

        {/* Desktop Nav - Shiny White & Premium Gradient Adaptations */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = activeHash === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveHash(link.href)}
                className={`px-4 py-2 text-base font-bold transition-all duration-200 rounded-md tracking-wide ${
                  isActive
                    ? 'bg-gradient-to-b from-white/25 to-white/5 text-white border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.25)] backdrop-blur-md scale-105' // Shiny White Active State
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {isTelugu ? link.labelTe : link.label}
              </a>
            );
          })}
        </div>

        {/* Actions Suite */}
        <div className="flex items-center gap-3">
          {/* Telugu Toggle - Pure Premium Bright Solid White Gradient */}
          <button
            onClick={() => setIsTelugu(!isTelugu)}
            className={`px-4 py-2 rounded-md text-sm font-black tracking-wider transition-all duration-300 shadow-md ${
              isTelugu
                ? 'bg-gradient-to-b from-white to-slate-200 text-slate-950 shadow-[0_0_20px_rgba(255,255,255,0.4)] border-none scale-105' // Shiny White Active
                : 'bg-slate-900/80 border border-white/20 text-white hover:border-white/50 hover:bg-slate-800'
            }`}
            title="Toggle Telugu language"
          >
            {isTelugu ? 'EN' : 'తె'}
          </button>

          {/* Emergency Helpline - High-Contrast Glossy Safety Crimson Gradient */}
          <a
            href="tel:1930"
            className="hidden sm:flex items-center gap-2 px-4.5 py-2 rounded-md bg-gradient-to-r from-red-500 via-rose-500 to-red-600 text-white text-sm font-black tracking-wide shadow-[0_0_20px_rgba(239,68,68,0.45)] hover:shadow-[0_0_25px_rgba(239,68,68,0.65)] hover:scale-105 active:scale-95 transition-all duration-200 border border-red-400/30"
          >
            <Phone className="w-4 h-4 animate-pulse" />
            1930
          </a>

          {/* Mobile Menu Trigger */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Sidebar Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-slate-950/98 backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeHash === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveHash(link.href);
                    setMobileOpen(false);
                  }}
                  className={`px-4 py-3 text-base font-bold rounded-lg transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-white/20 to-white/5 text-white border border-white/30 pl-5 font-black shadow-inner'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isTelugu ? link.labelTe : link.label}
                </a>
              );
            })}
            <a
              href="tel:1930"
              className="flex items-center justify-center gap-2 px-4 py-3.5 mt-3 rounded-lg bg-gradient-to-r from-red-500 to-rose-600 text-white text-base font-black shadow-[0_0_20px_rgba(239,68,68,0.3)]"
            >
              <Phone className="w-4 h-4" />
              Emergency Helpline: 1930
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
