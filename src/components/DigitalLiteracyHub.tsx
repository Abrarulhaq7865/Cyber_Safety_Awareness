import { useState } from 'react';
import { BookOpen, Wifi, Fingerprint, Shield, Smartphone, Share2, Lock, Database, Globe, ChevronRight } from 'lucide-react';

const modules = [
  {
    id: 'basics',
    icon: BookOpen,
    title: 'Digital Literacy Basics',
    color: 'text-cyber-primary',
    borderColor: 'border-cyber-primary/40',
    bgColor: 'bg-cyber-primary/5',
    topics: ['What is Internet?', 'What is Digital Identity?', 'Digital Footprints', 'Safe Browsing'],
    description: 'Understand the fundamentals of digital life — from what the internet is to how your online actions leave permanent traces.',
    tips: [
      'Your digital footprint includes every website you visit, post you make, and account you create',
      'Always use HTTPS websites for sensitive transactions',
      'Think before you click — unknown links can install malware on your device',
      'Your digital identity is as important as your physical identity',
    ],
  },
  {
    id: 'device',
    icon: Smartphone,
    title: 'Smartphone Awareness',
    color: 'text-cyber-secondary',
    borderColor: 'border-cyber-secondary/40',
    bgColor: 'bg-cyber-secondary/5',
    topics: ['Secure Device Usage', 'App Permissions', 'Privacy Settings', 'Data Protection'],
    description: 'Learn how to secure your smartphone, manage app permissions wisely, and protect your personal data.',
    tips: [
      'Lock your phone with a strong PIN, pattern, or biometric',
      'Review app permissions — a flashlight app does not need your contacts',
      'Update apps regularly to patch security vulnerabilities',
      'Enable remote wipe in case your phone is lost or stolen',
    ],
  },
  {
    id: 'social',
    icon: Share2,
    title: 'Social Media Awareness',
    color: 'text-cyber-warning',
    borderColor: 'border-cyber-warning/40',
    bgColor: 'bg-cyber-warning/5',
    topics: ['Facebook Safety', 'Instagram Safety', 'WhatsApp Safety', 'Responsible Posting'],
    description: 'Navigate social media platforms safely — from privacy settings to recognizing fake profiles and scam messages.',
    tips: [
      'Never share your phone number, Aadhaar, or bank details on social media',
      'Set all social profiles to "Friends Only" or "Private"',
      'Verify before sharing — stop the spread of fake news',
      'Think twice before posting — content online is permanent',
    ],
  },
  {
    id: 'privacy',
    icon: Lock,
    title: 'Privacy & Security',
    color: 'text-cyber-accent',
    borderColor: 'border-cyber-accent/40',
    bgColor: 'bg-cyber-accent/5',
    topics: ['Strong Passwords', 'Two-Factor Auth', 'Password Managers', 'Account Security'],
    description: 'Build strong defense layers for your online accounts with powerful passwords and two-factor authentication.',
    tips: [
      'Use passwords with 12+ characters including letters, numbers, and symbols',
      'Never use the same password on multiple accounts',
      'Enable 2FA on banking, UPI, and social media apps',
      'Never share passwords or OTPs — no legitimate service will ask for them',
    ],
  },
  {
    id: 'internet',
    icon: Globe,
    title: 'Safe Browsing',
    color: 'text-cyber-purple',
    borderColor: 'border-cyber-purple/40',
    bgColor: 'bg-cyber-purple/5',
    topics: ['URL Verification', 'Public Wi-Fi Safety', 'Download Safety', 'Fake Websites'],
    description: 'Stay safe while browsing — learn to identify secure websites, avoid phishing traps, and use public Wi-Fi safely.',
    tips: [
      'Always check for HTTPS and the lock icon before entering any credentials',
      'Avoid using banking apps on public Wi-Fi',
      'Verify website URLs carefully — criminals use lookalike domains',
      'Only download apps from official app stores (Play Store, App Store)',
    ],
  },
  {
    id: 'data',
    icon: Database,
    title: 'Data Protection',
    color: 'text-cyber-error',
    borderColor: 'border-cyber-error/40',
    bgColor: 'bg-cyber-error/5',
    topics: ['Personal Data Safety', 'Aadhaar Security', 'Biometric Safety', 'Cloud Backup'],
    description: 'Protect your sensitive personal data — Aadhaar, biometrics, financial information — from unauthorized access.',
    tips: [
      'Never share Aadhaar as a general ID — use a masked Aadhaar',
      'Protect your fingerprints — biometric fraud is a real risk',
      'Backup important data securely to trusted cloud services',
      'Shred physical documents with sensitive info before disposal',
    ],
  },
];

interface DigitalLiteracyHubProps {
  isTelugu: boolean;
}

export default function DigitalLiteracyHub({ isTelugu }: DigitalLiteracyHubProps) {
  const [activeModule, setActiveModule] = useState<string | null>(null);

  const selected = modules.find(m => m.id === activeModule);

  return (
    <section id="literacy" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="cyber-badge mb-4 mx-auto w-fit">
            <BookOpen className="w-3 h-3" />
            {isTelugu ? 'డిజిటల్ లిటరసీ హబ్' : 'Digital Literacy Hub'}
          </div>
          <h2 className="section-title mb-4">
            {isTelugu ? 'డిజిటల్ జ్ఞాన కేంద్రం' : 'Digital Education Center'}
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {isTelugu
              ? 'ఆన్‌లైన్ ప్రపంచంలో సురక్షితంగా ఉండటానికి అవసరమైన జ్ఞానాన్ని పొందండి'
              : 'Gain essential knowledge to navigate the digital world safely and responsibly'}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Module List */}
          <div className="lg:col-span-1 space-y-3">
            {modules.map((mod) => {
              const Icon = mod.icon;
              const isActive = activeModule === mod.id;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(isActive ? null : mod.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 text-left ${
                    isActive
                      ? `${mod.bgColor} ${mod.borderColor}`
                      : 'bg-cyber-card/50 border-cyber-border/40 hover:border-cyber-border hover:bg-cyber-card'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg ${mod.bgColor} border ${mod.borderColor} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-5 h-5 ${mod.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm font-semibold ${isActive ? mod.color : 'text-cyber-text'}`}>{mod.title}</div>
                    <div className="text-xs text-cyber-textMuted mt-0.5 truncate">{mod.topics.join(' • ')}</div>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-cyber-textDim transition-transform ${isActive ? 'rotate-90' : ''}`} />
                </button>
              );
            })}
          </div>

          {/* Module Detail */}
          <div className="lg:col-span-2">
            {selected ? (
              <div className={`glass-card p-6 border ${selected.borderColor} h-full`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl ${selected.bgColor} border ${selected.borderColor} flex items-center justify-center`}>
                    <selected.icon className={`w-7 h-7 ${selected.color}`} />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-cyber-text">{selected.title}</div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {selected.topics.map(t => (
                        <span key={t} className={`text-xs px-2 py-0.5 rounded-full ${selected.bgColor} ${selected.color} border ${selected.borderColor}`}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-cyber-textMuted mb-6 leading-relaxed">{selected.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className={`w-4 h-4 ${selected.color}`} />
                    <span className="text-sm font-semibold text-cyber-text">Key Safety Tips</span>
                  </div>
                  {selected.tips.map((tip, i) => (
                    <div key={i} className={`flex items-start gap-3 p-3 rounded-lg ${selected.bgColor}`}>
                      <div className={`w-5 h-5 rounded-full border ${selected.borderColor} flex items-center justify-center shrink-0 mt-0.5`}>
                        <span className={`text-xs font-bold ${selected.color}`}>{i + 1}</span>
                      </div>
                      <span className="text-sm text-cyber-textMuted">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="glass-card p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <div className="w-16 h-16 rounded-full bg-cyber-primary/10 flex items-center justify-center mb-4">
                  <Wifi className="w-8 h-8 text-cyber-primary" />
                </div>
                <h3 className="text-xl font-bold text-cyber-text mb-2">Select a Module</h3>
                <p className="text-cyber-textMuted text-sm max-w-xs">
                  Choose any topic from the left to explore detailed digital literacy content and safety tips
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
