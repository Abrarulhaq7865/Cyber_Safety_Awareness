import { useEffect, useState, useRef } from 'react';
import { TrendingUp, Users, BarChart2, PieChart } from 'lucide-react';

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function AnimatedBar({ value, maxValue, color, label, delay = 0, inView }: { value: number; maxValue: number; color: string; label: string; delay?: number; inView: boolean }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setWidth((value / maxValue) * 100), delay);
      return () => clearTimeout(timer);
    }
  }, [inView, value, maxValue, delay]);
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-cyber-textMuted">{label}</span>
        <span className={`text-sm font-bold ${color}`}>{value}%</span>
      </div>
      <div className="h-3 bg-cyber-border/30 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%`, background: color.includes('accent') ? 'linear-gradient(90deg, #00ff88, #00d4ff)' : color.includes('primary') ? 'linear-gradient(90deg, #00d4ff, #0066ff)' : color.includes('warning') ? 'linear-gradient(90deg, #ffaa00, #ff8800)' : 'linear-gradient(90deg, #ff4466, #ff0044)' }}
        />
      </div>
    </div>
  );
}

function CircleProgress({ value, size = 120, strokeWidth = 10, color, inView }: { value: number; size?: number; strokeWidth?: number; color: string; inView: boolean }) {
  const [progress, setProgress] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setProgress(value), 300);
      return () => clearTimeout(timer);
    }
  }, [inView, value]);

  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(0,212,255,0.1)" strokeWidth={strokeWidth} />
      <circle
        cx={size / 2} cy={size / 2} r={radius}
        fill="none" stroke={color} strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
      />
    </svg>
  );
}

const beforeAfterData = [
  { label: 'Phishing Awareness', before: 18, after: 76 },
  { label: 'Know Helpline 1930', before: 0, after: 89 },
  { label: 'Updated Privacy Settings', before: 12, after: 71 },
  { label: 'Strong Password Usage', before: 8, after: 64 },
  { label: 'Enabled 2FA', before: 11, after: 58 },
  { label: 'Verify Links Before Clicking', before: 15, after: 73 },
];

const pieData = [
  { label: 'Phishing/OTP Fraud', value: 38, color: '#ff4466' },
  { label: 'UPI Scams', value: 24, color: '#ffaa00' },
  { label: 'Fake Job Offers', value: 18, color: '#7b2fff' },
  { label: 'Social Media Fraud', value: 12, color: '#00d4ff' },
  { label: 'Fake News', value: 8, color: '#00ff88' },
];

interface CommunityImpactDashboardProps {
  isTelugu: boolean;
}

export default function CommunityImpactDashboard({ isTelugu }: CommunityImpactDashboardProps) {
  const { ref, inView } = useInView();

  return (
    <section id="impact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="cyber-badge mb-4 mx-auto w-fit">
            <BarChart2 className="w-3 h-3" />
            {isTelugu ? 'సమాజ ప్రభావం' : 'Community Impact'}
          </div>
          <h2 className="section-title mb-4">
            {isTelugu ? 'కమ్యూనిటీ ఇంపాక్ట్ డ్యాష్‌బోర్డ్' : 'Community Impact Dashboard'}
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {isTelugu
              ? '8 వారాల ప్రచారం తర్వాత అక్కంపల్లి గ్రామంలో సైబర్ అవేర్‌నెస్ లో మెరుగుదల'
              : 'Measurable improvement in cyber safety awareness across Akkampalle Village before and after the 8-week campaign'}
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-3 gap-6">
          {/* Before vs After Bars */}
          <div className="lg:col-span-2 glass-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-5 h-5 text-cyber-primary" />
              <h3 className="text-lg font-bold text-cyber-text">Awareness Before vs After</h3>
            </div>

            <div className="flex gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyber-error/60" />
                <span className="text-xs text-cyber-textMuted">Before</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-cyber-accent" />
                <span className="text-xs text-cyber-textMuted">After</span>
              </div>
            </div>

            <div className="space-y-5">
              {beforeAfterData.map((item, i) => (
                <div key={i}>
                  <div className="text-sm font-medium text-cyber-text mb-2">{item.label}</div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-cyber-textDim w-12 text-right">Before</span>
                      <div className="flex-1 h-2 bg-cyber-border/30 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-cyber-error/50 transition-all duration-1000 ease-out"
                          style={{ width: inView ? `${item.before}%` : '0%', transitionDelay: `${i * 100}ms` }}
                        />
                      </div>
                      <span className="text-xs text-cyber-error w-8">{item.before}%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-cyber-textDim w-12 text-right">After</span>
                      <div className="flex-1 h-2 bg-cyber-border/30 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: inView ? `${item.after}%` : '0%',
                            transitionDelay: `${i * 100 + 200}ms`,
                            background: 'linear-gradient(90deg, #00ff88, #00d4ff)'
                          }}
                        />
                      </div>
                      <span className="text-xs text-cyber-accent w-8">{item.after}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel */}
          <div className="flex flex-col gap-6">
            {/* Overall Impact Circle */}
            <div className="glass-card p-6 flex flex-col items-center text-center">
              <h3 className="text-base font-bold text-cyber-text mb-4">Overall Awareness Improvement</h3>
              <div className="relative">
                <CircleProgress value={76} color="#00d4ff" inView={inView} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold neon-text">76%</span>
                  <span className="text-xs text-cyber-textMuted">After</span>
                </div>
              </div>
              <div className="mt-4 text-sm text-cyber-textMuted">
                Up from <span className="text-cyber-error font-bold">18%</span> baseline — a <span className="text-cyber-accent font-bold">58 point</span> improvement
              </div>
            </div>

            {/* Threat Distribution */}
            <div className="glass-card p-6 flex-1">
              <div className="flex items-center gap-2 mb-4">
                <PieChart className="w-4 h-4 text-cyber-primary" />
                <h3 className="text-sm font-bold text-cyber-text">Threats Reported Pre-Project</h3>
              </div>
              <div className="space-y-2.5">
                {pieData.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                    <div className="flex-1">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-cyber-textMuted truncate">{item.label}</span>
                        <span className="font-bold" style={{ color: item.color }}>{item.value}%</span>
                      </div>
                      <div className="h-1.5 bg-cyber-border/30 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: inView ? `${item.value}%` : '0%',
                            backgroundColor: item.color,
                            transitionDelay: `${i * 150}ms`
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Outcomes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {[
            { label: 'Households Surveyed', value: '50', icon: '🏠', color: 'border-cyber-primary/30 bg-cyber-primary/5' },
            { label: 'Awareness Sessions', value: '8', icon: '📢', color: 'border-cyber-secondary/30 bg-cyber-secondary/5' },
            { label: 'Ambassadors Trained', value: '5', icon: '🛡️', color: 'border-cyber-accent/30 bg-cyber-accent/5' },
            { label: 'Students Reached', value: '55+', icon: '🎓', color: 'border-cyber-warning/30 bg-cyber-warning/5' },
          ].map((item, i) => (
            <div key={i} className={`rounded-xl p-4 border ${item.color} flex items-center gap-4`}>
              <div className="text-3xl">{item.icon}</div>
              <div>
                <div className="text-2xl font-bold text-cyber-text">{item.value}</div>
                <div className="text-xs text-cyber-textMuted">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
