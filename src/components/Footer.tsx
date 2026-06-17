import { Shield, Heart, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const quickLinks = [
  { label: 'About Project', href: '#about', telugu: 'ప్రాజెక్ట్ గురించి' },
  { label: 'Digital Literacy', href: '#literacy', telugu: 'డిజిటల్ అక్షరాస్యత' },
  { label: 'Cyber Threats', href: '#threats', telugu: 'సైబర్ ముప్పులు' },
  { label: 'Attack Simulator', href: '#simulator', telugu: 'దాడి సిమ్యులేటర్' },
  { label: 'Safety Quiz', href: '#quiz', telugu: 'సురక్ష క్విజ్' },
  { label: 'Report Cybercrime', href: '#report', telugu: 'సైబర్ క్రైమ్ రిపోర్ట్' },
];

const resources = [
  { label: 'cybercrime.gov.in', href: 'https://cybercrime.gov.in', external: true },
  { label: 'CERT-In', href: 'https://cert-in.org.in', external: true },
  { label: 'National Helpline 1930', href: 'tel:1930', external: false },
  { label: 'RBI Fraud Alert', href: 'https://www.rbi.org.in', external: true },
];

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

interface FooterProps {
  isTelugu: boolean;
}

export default function Footer({ isTelugu }: FooterProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-cyber-border/30 bg-cyber-bg/80 backdrop-blur-sm">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyber-primary/20 border border-cyber-primary/40 flex items-center justify-center">
                <Shield className="w-5 h-5 text-cyber-primary" />
              </div>
              <div>
                <div className="text-lg font-bold text-cyber-text">CyberSafe</div>
                <div className="text-xs text-cyber-textDim">Awareness Campaign</div>
              </div>
            </div>
            <p className="text-sm text-cyber-textMuted leading-relaxed mb-4">
              {isTelugu
                ? 'అక్కంపల్లి గ్రామంలో సైబర్ అవేర్‌నెస్ ప్రచారం. GATES ఇన్‌స్టిట్యూట్ ఆఫ్ టెక్నాలజీ కమ్యూనిటీ సర్వీస్ ప్రాజెక్ట్.'
                : 'Community Service Project promoting cyber safety awareness in rural India. Making digital spaces safer, one village at a time.'}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link, i) => {
                const Icon = link.icon;
                return (
                  <a
                    key={i}
                    href={link.href}
                    aria-label={link.label}
                    className="w-9 h-9 rounded-lg bg-cyber-card border border-cyber-border/40 flex items-center justify-center text-cyber-textDim hover:text-cyber-primary hover:border-cyber-primary/40 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-cyber-text mb-4">
              {isTelugu ? 'శీఘ్ర లింకులు' : 'Quick Links'}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm text-cyber-textMuted hover:text-cyber-primary transition-colors"
                  >
                    {isTelugu ? link.telugu : link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold text-cyber-text mb-4">
              {isTelugu ? 'అధికారిక వనరులు' : 'Official Resources'}
            </h3>
            <ul className="space-y-2.5">
              {resources.map((res, i) => (
                <li key={i}>
                  <a
                    href={res.href}
                    target={res.external ? '_blank' : undefined}
                    rel={res.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-cyber-textMuted hover:text-cyber-primary transition-colors flex items-center gap-1.5"
                  >
                    {res.label}
                    {res.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-cyber-text mb-4">
              {isTelugu ? 'సంప్రదింపు' : 'Contact'}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyber-primary shrink-0 mt-0.5" />
                <span className="text-sm text-cyber-textMuted">
                  Akkampalle Village, Anantapur District, Andhra Pradesh
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyber-accent" />
                <span className="text-sm text-cyber-textMuted">GATES Institute of Technology</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyber-warning" />
                <a href="tel:1930" className="text-sm text-cyber-primary hover:underline">1930 (Helpline)</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Project Team Credits */}
        <div className="border-t border-cyber-border/30 pt-8 mb-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div className="p-3 rounded-lg bg-cyber-card/50 border border-cyber-border/20">
              <div className="text-xs text-cyber-textDim mb-1">Team Lead</div>
              <div className="text-sm font-semibold text-cyber-text">Shaik Mohammad Abrarul Haq</div>
            </div>
            <div className="p-3 rounded-lg bg-cyber-card/50 border border-cyber-border/20">
              <div className="text-xs text-cyber-textDim mb-1">Team Members</div>
              <div className="text-sm font-semibold text-cyber-text">Divvala Naveen, Siddha Nikhil</div>
            </div>
            <div className="p-3 rounded-lg bg-cyber-card/50 border border-cyber-border/20">
              <div className="text-xs text-cyber-textDim mb-1">Team Members</div>
              <div className="text-sm font-semibold text-cyber-text">Vajrala Tharakeshwar, Chenna Mahendra</div>
            </div>
            <div className="p-3 rounded-lg bg-cyber-card/50 border border-cyber-border/20">
              <div className="text-xs text-cyber-textDim mb-1">Project Guide</div>
              <div className="text-sm font-semibold text-cyber-text">Ms. Venkata Lakshmi</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyber-border/30 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-cyber-textDim text-center sm:text-left">
            {isTelugu ? (
              <>
                <span className="text-cyber-text">GATES Institute of Technology</span> లో కమ్యూనిటీ సర్వీస్ ప్రాజెక్ట్
              </>
            ) : (
              <>
                Community Service Project at <span className="text-cyber-text">GATES Institute of Technology</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-sm text-cyber-textDim">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-cyber-error animate-pulse" />
            <span>for Digital India</span>
          </div>
        </div>

        <div className="text-center mt-6 text-xs text-cyber-textDim">
          {new Date().getFullYear()} CyberSafe Awareness Campaign. {isTelugu ? 'అన్ని హక్కులు కేటాయించబడ్డాయి.' : 'All rights reserved.'}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 w-10 h-10 rounded-full bg-cyber-primary/10 border border-cyber-primary/40 flex items-center justify-center text-cyber-primary hover:bg-cyber-primary/20 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
