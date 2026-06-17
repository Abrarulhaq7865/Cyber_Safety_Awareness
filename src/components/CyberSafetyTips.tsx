import { Shield, Key, Smartphone, Lock, RefreshCw, Link, Settings, Globe, HardDrive, Fingerprint, CheckCircle } from 'lucide-react';

const tips = [
  {
    id: 1,
    icon: Shield,
    title: 'Never Share Your OTP',
    titleTe: 'OTP ఎప్పుడూ పంచుకోకండి',
    description: 'Your OTP is your digital PIN — it expires in seconds and is meant only for you. No bank, government body, or company will ever ask for it.',
    descriptionTe: 'మీ OTP మీ డిజిటల్ పిన్ — ఇది సెకన్లలో గడువు ముగుస్తుంది మరియు మీకు మాత్రమే ఉద్దేశించబడింది.',
    color: 'from-cyber-error/20 to-cyber-error/5',
    iconColor: 'text-cyber-error',
    borderColor: 'border-cyber-error/30',
  },
  {
    id: 2,
    icon: Key,
    title: 'Use Strong Passwords',
    titleTe: 'బలమైన పాస్‌వర్డ్‌లు వాడండి',
    description: 'Create passwords with 12+ characters mixing uppercase, lowercase, numbers, and symbols. Avoid birthdates, names, or "1234".',
    descriptionTe: '12+ అక్షరాలతో పెద్ద అక్షరాలు, చిన్న అక్షరాలు, సంఖ్యలు మరియు చిహ్నాలు కలిపి పాస్‌వర్డ్ సృష్టించండి.',
    color: 'from-cyber-primary/20 to-cyber-primary/5',
    iconColor: 'text-cyber-primary',
    borderColor: 'border-cyber-primary/30',
  },
  {
    id: 3,
    icon: Smartphone,
    title: 'Enable Two-Factor Authentication',
    titleTe: 'రెండు-కారక ప్రమాణీకరణ ఆన్ చేయండి',
    description: 'Enable 2FA on all banking and social media apps. Even if your password is stolen, attackers cannot access your account without the second factor.',
    descriptionTe: 'అన్ని బ్యాంకింగ్ మరియు సోషల్ మీడియా అప్లికేషన్లలో 2FA ఆన్ చేయండి.',
    color: 'from-cyber-accent/20 to-cyber-accent/5',
    iconColor: 'text-cyber-accent',
    borderColor: 'border-cyber-accent/30',
  },
  {
    id: 4,
    icon: Lock,
    title: 'Lock Your Devices',
    titleTe: 'మీ పరికరాలను లాక్ చేయండి',
    description: 'Always lock your phone when not in use. Use biometric (fingerprint/face) or a strong PIN — not a simple pattern that others can see and replicate.',
    descriptionTe: 'ఉపయోగించనప్పుడు మీ ఫోన్‌ను ఎప్పుడూ లాక్ చేయండి.',
    color: 'from-cyber-secondary/20 to-cyber-secondary/5',
    iconColor: 'text-cyber-secondary',
    borderColor: 'border-cyber-secondary/30',
  },
  {
    id: 5,
    icon: RefreshCw,
    title: 'Keep Apps Updated',
    titleTe: 'అప్లికేషన్లను అప్‌డేట్ చేయండి',
    description: 'App updates patch security vulnerabilities. Outdated apps are easy targets for hackers. Enable auto-updates for all installed apps.',
    descriptionTe: 'అప్లికేషన్ అప్‌డేట్‌లు భద్రతా లోపాలను పరిష్కరిస్తాయి.',
    color: 'from-cyber-warning/20 to-cyber-warning/5',
    iconColor: 'text-cyber-warning',
    borderColor: 'border-cyber-warning/30',
  },
  {
    id: 6,
    icon: Link,
    title: 'Verify Unknown Links',
    titleTe: 'తెలియని లింక్‌లు ధృవీకరించండి',
    description: 'Before clicking any link — check the full URL. Hover over it to preview the destination. If in doubt, type the URL directly in the browser.',
    descriptionTe: 'ఏదైనా లింక్ క్లిక్ చేయడానికి ముందు — పూర్తి URL తనిఖీ చేయండి.',
    color: 'from-cyber-primary/20 to-cyber-primary/5',
    iconColor: 'text-cyber-primary',
    borderColor: 'border-cyber-primary/30',
  },
  {
    id: 7,
    icon: Settings,
    title: 'Check Privacy Settings',
    titleTe: 'గోప్యత సెట్టింగులు తనిఖీ చేయండి',
    description: 'Review privacy settings on WhatsApp, Facebook, and Instagram regularly. Set profile visibility to "Friends Only" and disable location sharing.',
    descriptionTe: 'WhatsApp, Facebook, Instagram గోప్యత సెట్టింగులు క్రమం తప్పకుండా సమీక్షించండి.',
    color: 'from-cyber-accent/20 to-cyber-accent/5',
    iconColor: 'text-cyber-accent',
    borderColor: 'border-cyber-accent/30',
  },
  {
    id: 8,
    icon: Globe,
    title: 'Verify Websites',
    titleTe: 'వెబ్‌సైట్‌లు ధృవీకరించండి',
    description: 'Only enter sensitive information on HTTPS websites (look for the lock icon in the address bar). Verify the exact domain name carefully.',
    descriptionTe: 'HTTPS వెబ్‌సైట్‌లలో మాత్రమే సున్నితమైన సమాచారాన్ని నమోదు చేయండి.',
    color: 'from-cyber-secondary/20 to-cyber-secondary/5',
    iconColor: 'text-cyber-secondary',
    borderColor: 'border-cyber-secondary/30',
  },
  {
    id: 9,
    icon: HardDrive,
    title: 'Backup Your Data',
    titleTe: 'డేటాను బ్యాకప్ చేయండి',
    description: 'Regularly backup important photos, documents, and contacts to Google Drive or another secure cloud service. This protects against ransomware and device loss.',
    descriptionTe: 'ముఖ్యమైన ఫోటోలు, పత్రాలు, సంప్రదింపులను Google Drive కి క్రమం తప్పకుండా బ్యాకప్ చేయండి.',
    color: 'from-cyber-warning/20 to-cyber-warning/5',
    iconColor: 'text-cyber-warning',
    borderColor: 'border-cyber-warning/30',
  },
  {
    id: 10,
    icon: Fingerprint,
    title: 'Protect Biometrics',
    titleTe: 'బయోమెట్రిక్స్ రక్షించుకోండి',
    description: 'Your fingerprints and face can be used to access banking apps. Never let strangers use your biometric data. Disable biometric login if your phone is compromised.',
    descriptionTe: 'మీ వేలిముద్రలు మరియు ముఖం బ్యాంకింగ్ అప్లికేషన్‌లను యాక్సెస్ చేయడానికి ఉపయోగించవచ్చు.',
    color: 'from-cyber-error/20 to-cyber-error/5',
    iconColor: 'text-cyber-error',
    borderColor: 'border-cyber-error/30',
  },
];

interface CyberSafetyTipsProps {
  isTelugu: boolean;
}

export default function CyberSafetyTips({ isTelugu }: CyberSafetyTipsProps) {
  return (
    <section id="tips" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="cyber-badge-green mb-4 mx-auto w-fit">
            <CheckCircle className="w-3 h-3" />
            {isTelugu ? 'భద్రతా చిట్కాలు' : 'Safety Tips'}
          </div>
          <h2 className="section-title mb-4">
            {isTelugu ? 'ఇంటరాక్టివ్ సైబర్ సేఫ్టీ చిట్కాలు' : 'Interactive Cyber Safety Tips'}
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {isTelugu
              ? '10 అవసరమైన సైబర్ భద్రతా చిట్కాలు మీకు మరియు మీ కుటుంబాన్ని ఆన్‌లైన్‌లో సురక్షితంగా ఉంచుతాయి'
              : '10 essential cyber safety practices that protect you and your family from online threats'}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {tips.map((tip) => {
            const Icon = tip.icon;
            return (
              <div
                key={tip.id}
                className={`rounded-xl p-5 bg-gradient-to-br ${tip.color} border ${tip.borderColor} hover:scale-[1.02] transition-all duration-300 cursor-default group`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-cyber-bg/50 flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${tip.iconColor}`} />
                  </div>
                  <span className="text-2xl font-bold text-cyber-textDim/40">{String(tip.id).padStart(2, '0')}</span>
                </div>
                <h3 className="text-sm font-bold text-cyber-text mb-2 leading-snug">
                  {isTelugu ? tip.titleTe : tip.title}
                </h3>
                <p className="text-xs text-cyber-textMuted leading-relaxed">
                  {isTelugu ? tip.descriptionTe : tip.description}
                </p>
                <div className={`mt-4 flex items-center gap-1.5 text-xs font-semibold ${tip.iconColor}`}>
                  <CheckCircle className="w-3.5 h-3.5" />
                  Always Do This
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
