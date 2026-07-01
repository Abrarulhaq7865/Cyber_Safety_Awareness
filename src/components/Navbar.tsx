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
  
  // NEW State: Tracks which layout section button is currently clicked/active
  const [activeHash, setActiveHash] = useState('');

  useEffect(() => {
    // Set initial active state based on current browser address bar hash on load
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
          ? 'bg-cyber-bg/95 backdrop-blur-md border-b border-cyber-border/50 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={() => setActiveHash('#home')} className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-lg bg-cyber-primary/10 border border-cyber-primary/30 flex items-center justify-center group-hover:border-cyber-primary/60 transition-colors">
            <Shield className="w-5 h-5 text-cyber-primary" />
          </div>
          <div className="hidden sm:block">
            <div className="text-base font-bold text-cyber-text leading-tight">CyberSafe</div>
            <div className="text-xs text-cyber-textMuted leading-tight">Awareness Portal</div>
          </div>
        </a>

        {/* Desktop Nav - Bounded text sizes up from text-sm to text-base */}
        <div className="hidden md:flex items-center gap-1.5">
          {navLinks.map((link) => {
            const isActive = activeHash === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActiveHash(link.href)}
                className={`px-3.5 py-2 text-base font-semibold transition-all rounded-md ${
                  isActive
                    ? 'bg-cyber-primary/15 text-cyber-primary shadow-sm border border-cyber-primary/20 font-bold' // Distinct Highlight Color Variant
                    : 'text-cyber-textMuted hover:text-cyber-primary hover:bg-cyber-primary/5'
                }`}
              >
                {isTelugu ? link.labelTe : link.label}
              </a>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2.5">
          {/* Telugu Toggle - Scaled text metrics from text-xs to text-sm */}
          <button
            onClick={() => setIsTelugu(!isTelugu)}
            className={`px-3.5 py-2 rounded-md text-sm font-bold border transition-all duration-200 ${
              isTelugu
                ? 'bg-cyber-primary/10 border-cyber-primary/40 text-cyber-primary'
                : 'border-cyber-border/50 text-cyber-textMuted hover:border-cyber-primary/30 hover:text-cyber-text'
            }`}
            title="Toggle Telugu language"
          >
            {isTelugu ? 'EN' : 'తె'}
          </button>

          {/* Emergency Helpline - Bounded text sizing up from text-xs to text-sm with comfort padding changes */}
          <a
            href="tel:1930"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-md bg-cyber-error/10 border border-cyber-error/30 text-cyber-error text-sm font-extrabold hover:bg-cyber-error/15 transition-all shadow-md active:scale-95"
          >
            <Phone className="w-4 h-4" />
            1930
          </a>

          {/* Mobile Menu */}
          <button
            className="md:hidden p-2 text-cyber-textMuted hover:text-cyber-text transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Open Drawer container */}
      {mobileOpen && (
        <div className="md:hidden bg-cyber-bg/98 backdrop-blur-md border-b border-cyber-border/50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1.5">
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
                  className={`px-4 py-3 text-base font-semibold rounded-lg transition-colors ${
                    isActive
                      ? 'bg-cyber-primary/15 text-cyber-primary font-bold border-l-4 border-cyber-primary pl-3'
                      : 'text-cyber-textMuted hover:text-cyber-primary hover:bg-cyber-primary/5'
                  }`}
                >
                  {isTelugu ? link.labelTe : link.label}
                </a>
              );
            })}
            <a
              href="tel:1930"
              className="flex items-center justify-center gap-2 px-4 py-3.5 mt-2 rounded-lg bg-cyber-error/10 border border-cyber-error/30 text-cyber-error text-base font-extrabold"
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
