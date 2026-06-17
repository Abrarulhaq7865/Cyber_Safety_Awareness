import { useEffect, useState, useRef } from 'react';
import { Shield, ChevronDown, Users, Home, Calendar, Star } from 'lucide-react';

const stats = [
  { value: 50, suffix: '+', label: 'Households Surveyed', labelTe: 'గృహాలు సర్వే', icon: Home },
  { value: 8, suffix: '', label: 'Weeks Campaign', labelTe: 'వారాల ప్రచారం', icon: Calendar },
  { value: 60, suffix: '+', label: 'Community Participants', labelTe: 'సమాజ భాగస్వాములు', icon: Users },
  { value: 5, suffix: '', label: 'Cyber Safety Ambassadors', labelTe: 'సైబర్ రాయబారులు', icon: Star },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ stat, index, active, isTelugu }: { stat: typeof stats[0]; index: number; active: boolean; isTelugu: boolean }) {
  const count = useCountUp(stat.value, 1800 + index * 200, active);
  const Icon = stat.icon;
  return (
    <div className="glass-card p-5 flex flex-col items-center text-center hover:border-cyber-primary/40 transition-all duration-300">
      <div className="w-10 h-10 rounded-lg bg-cyber-primary/10 flex items-center justify-center mb-3">
        <Icon className="w-5 h-5 text-cyber-primary" />
      </div>
      <div className="text-3xl font-bold neon-text">
        {count}{stat.suffix}
      </div>
      <div className="text-xs text-cyber-textMuted mt-1 leading-snug">
        {isTelugu ? stat.labelTe : stat.label}
      </div>
    </div>
  );
}

interface HeroProps {
  isTelugu: boolean;
}

export default function Hero({ isTelugu }: HeroProps) {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40" />

      {/* Radial Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #00d4ff 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8"
          style={{ background: 'radial-gradient(circle, #0066ff 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
      </div>

      {/* Floating Network Nodes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-cyber-primary/30"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
              animation: `float ${4 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="cyber-badge mb-6 animate-fade-in">
          <Shield className="w-3 h-3" />
          {isTelugu ? 'GATES ఇన్‌స్టిట్యూట్ ఆఫ్ టెక్నాలజీ • CSP 2026' : 'GATES Institute of Technology • CSP 2026'}
        </div>

        {/* Floating Shield */}
        <div className="mb-8 animate-float">
          <div className="relative w-24 h-24 mx-auto">
            <div
              className="absolute inset-0 rounded-full opacity-20 animate-pulse-slow"
              style={{ background: 'radial-gradient(circle, #00d4ff, transparent 70%)' }}
            />
            <div className="relative w-24 h-24 rounded-2xl bg-cyber-card/80 border border-cyber-primary/40 flex items-center justify-center"
              style={{ boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)' }}>
              <Shield className="w-12 h-12 text-cyber-primary" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyber-text mb-6 leading-tight max-w-4xl animate-slide-up">
          {isTelugu ? (
            <>సైబర్ సేఫ్టీ అవేర్‌నెస్ &<br /><span className="text-gradient">డిజిటల్ లిటరసీ</span> ప్రచారం</>
          ) : (
            <>Cyber Safety Awareness &<br /><span className="text-gradient">Digital Literacy</span> Campaign</>
          )}
        </h1>

        {/* Subtitle */}
        <p className="text-cyber-textMuted text-lg sm:text-xl max-w-3xl mb-10 leading-relaxed animate-fade-in">
          {isTelugu
            ? 'సైబర్ సెక్యూరిటీ అవేర్‌నెస్, డిజిటల్ లిటరసీ, సురక్షితమైన ఇంటర్నెట్ ప్రాక్టీసులు మరియు ఆన్‌లైన్ మోసాల నివారణ ద్వారా గ్రామీణ సమాజాలను సాధికారపరచడం.'
            : 'Empowering Rural Communities Through Cyber Security Awareness, Digital Literacy, Safe Internet Practices and Online Fraud Prevention.'}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up">
          <a href="#threats" className="btn-primary text-base px-8 py-4">
            <Shield className="w-5 h-5" />
            {isTelugu ? 'సైబర్ సేఫ్టీ నేర్చుకోండి' : 'Learn Cyber Safety'}
          </a>
          <a href="#about" className="btn-outline text-base px-8 py-4">
            {isTelugu ? 'CSP ప్రాజెక్ట్ చూడండి' : 'View CSP Project'}
          </a>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat} index={i} active={statsVisible} isTelugu={isTelugu} />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cyber-textDim animate-bounce">
        <span className="text-xs">Scroll to explore</span>
        <ChevronDown className="w-5 h-5" />
      </div>
    </section>
  );
}
