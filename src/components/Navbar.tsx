import { useState, useEffect } from 'react';
import { Shield, Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About', labelTe: 'గురించి' },
  { href: '#threats', label: 'Threats', labelTe: 'ముప్పులు' },
  { href: '#tips', label: 'Tips', labelTe: 'చిట్కాలు' }, // Fixed a tiny typo in the Telugu script here
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

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-cyber-bg/95 backdrop-blur-md border-b border-cyber-border/50 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-cyber-primary/10 border border-cyber-primary/30 flex items-center justify-center group-hover:border-cyber-primary/60 transition-colors">
            <Shield className="w-5 h-5 text-cyber-primary" />
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-bold text-white leading-tight">CyberAware</div>
            <div className="text-[10px] text-white/90 leading-tight">Portal</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              /* CHANGED: Scaled up padding and font size to make buttons noticeably bigger, and locked text color to pure bright white */
              className="px-4 py-2 text-base md:text-lg font-bold text-white hover:text-white transition-colors rounded-md hover:bg-white/10"
            >
              {isTelugu ? link.labelTe : link.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Telugu Toggle */}
          <button
            onClick={() => setIsTelugu(!isTelugu)}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold border transition-all duration-200 ${
              isTelugu
                ? 'bg-cyber-primary/10 border-cyber-primary/40 text-white'
                : 'border-cyber-border/50 text-white hover:border-cyber-primary/30'
            }`}
            title="Toggle Telugu language"
          >
            {isTelugu ? 'EN' : 'తె'}
          </button>

          {/* Emergency Helpline */}
          <a
            href="tel:1930"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-cyber-error/10 border border-cyber-error/30 text-white text-xs font-bold hover:bg-cyber-error/15 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-white" />
            1930
          </a>

          {/* Mobile Menu Open Trigger */}
          <button
            className="md:hidden p-2 text-white hover:text-cyber-text transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-cyber-bg/98 backdrop-blur-md border-b border-cyber-border/50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                /* CHANGED: Made buttons big and pure white in mobile responsive view as well */
                className="px-4 py-3 text-base font-bold text-white hover:text-cyber-primary hover:bg-cyber-primary/5 rounded-lg transition-colors"
              >
                {isTelugu ? link.labelTe : link.label}
              </a>
            ))}
            <a
              href="tel:1930"
              className="flex items-center gap-2 px-4 py-3 mt-2 rounded-lg bg-cyber-error/10 border border-cyber-error/30 text-white text-sm font-bold"
            >
              <Phone className="w-4 h-4 text-white" />
              Emergency Helpline: 1930
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
