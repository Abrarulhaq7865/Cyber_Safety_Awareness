import { useState } from 'react';
import { AlertTriangle, Mail, MessageSquare, Smartphone, User, Newspaper, Users, Briefcase, ChevronDown, Shield, Eye, X } from 'lucide-react';

const threats = [
  {
    id: 'phishing',
    icon: Mail,
    title: 'Phishing',
    subtitle: 'Fake Emails & Links',
    severity: 'critical',
    description: 'Phishing involves sending fake emails or messages that appear to be from legitimate organizations (banks, government, e-commerce) to steal your personal information.',
    warningSigns: [
      'Urgent language: "Your account will be closed!"',
      'Misspelled domains like "sbi-bank.net" instead of "sbi.co.in"',
      'Requests for OTP, passwords, or credit card details',
      'Links that redirect to suspicious websites',
    ],
    realExamples: 'A villager in Akkampalle received an email claiming to be from "UIDAI" saying their Aadhaar card was blocked, with a link to "verify" by entering their bank details.',
    preventionTips: [
      'Never click links from unknown senders',
      'Always verify the exact website URL before entering details',
      'Banks never ask for OTP or PIN via email or SMS',
      'Report phishing to cybercrime.gov.in immediately',
    ],
  },
  {
    id: 'otp-fraud',
    icon: Smartphone,
    title: 'OTP Fraud',
    subtitle: 'One-Time Password Theft',
    severity: 'critical',
    description: 'Fraudsters trick you into sharing your OTP (One-Time Password) through fake calls, fake websites, or by pretending to be bank officials or government agents.',
    warningSigns: [
      'Call from "bank" asking you to share OTP to "verify" account',
      'Message claiming your KYC is expired with a link to update',
      'Stranger asking to "scan" their QR code to receive money',
      'Unknown person asking to install remote access apps',
    ],
    realExamples: 'A woman in the village received a call from "SBI customer care" saying her account would be blocked. She shared her OTP and ₹18,000 was immediately transferred out.',
    preventionTips: [
      'NEVER share OTP with anyone — not even bank officials',
      'OTP is a one-way code — you receive it, you use it, no one else needs it',
      'Hang up immediately on calls asking for OTP',
      'Scan QR code only to PAY money, never to RECEIVE money',
    ],
  },
  {
    id: 'upi-fraud',
    icon: Smartphone,
    title: 'UPI Fraud',
    subtitle: 'Digital Payment Scams',
    severity: 'high',
    description: 'UPI fraud involves various tricks to steal money through digital payment systems including fake QR codes, collect requests, and screen-sharing scams.',
    warningSigns: [
      '"Send ₹1 to verify your account to receive ₹1 lakh"',
      'Collect request on UPI apps asking you to enter PIN',
      'QR code claiming to give you cashback or prize',
      'Someone asking you to share your UPI PIN on call',
    ],
    realExamples: 'A shopkeeper was told to scan a QR code to receive payment for goods. He scanned it and entered his UPI PIN — money was deducted instead of credited.',
    preventionTips: [
      'You NEVER enter PIN to receive money — only to send',
      'Never share screen during UPI transactions',
      'Verify sender identity before accepting collect requests',
      'Enable transaction limits and notifications on UPI apps',
    ],
  },
  {
    id: 'identity-theft',
    icon: User,
    title: 'Identity Theft',
    subtitle: 'Aadhaar & Personal Data Misuse',
    severity: 'high',
    description: 'Criminals steal your personal identity — Aadhaar, PAN, bank account details — to open fake accounts, take loans, or commit crimes in your name.',
    warningSigns: [
      'Unknown transactions appearing in your bank statement',
      'Loan EMI notices for loans you never took',
      'SMS for OTPs on apps you never registered for',
      'Aadhaar or PAN being misused in unknown places',
    ],
    realExamples: 'A farmer\'s Aadhaar details were used to open a fake bank account. He discovered this only when police arrived about suspicious transactions.',
    preventionTips: [
      'Use Masked Aadhaar for general ID purposes',
      'Lock your Aadhaar biometric at uidai.gov.in',
      'Regularly check your CIBIL credit score for unauthorized loans',
      'Never share Aadhaar photo via WhatsApp to unknown people',
    ],
  },
  {
    id: 'fake-news',
    icon: Newspaper,
    title: 'Fake News & Misinformation',
    subtitle: 'Viral False Content',
    severity: 'medium',
    description: 'False news, morphed images, and fabricated videos spread rapidly on WhatsApp and Facebook, causing panic, communal tension, and financial scams.',
    warningSigns: [
      'Messages with "Forward to 10 people to avoid bad luck"',
      'News without source or credible publication citation',
      'Viral images of disasters that look suspicious or outdated',
      'WhatsApp messages about "free government schemes" with links',
    ],
    realExamples: 'A fake WhatsApp message about a "government scheme offering free ration for 3 years" circulated in Akkampalle, sending residents to a fake link that stole their bank details.',
    preventionTips: [
      'Verify news on fact-check sites: factcheck.in, boomlive.in',
      'Check image authenticity using Google Reverse Image Search',
      'Do not forward unverified content — stop the cycle of misinformation',
      'Report fake news to WhatsApp and Facebook directly',
    ],
  },
  {
    id: 'cyberbullying',
    icon: Users,
    title: 'Cyberbullying',
    subtitle: 'Online Harassment',
    severity: 'medium',
    description: 'Cyberbullying involves using digital platforms to harass, threaten, humiliate, or intimidate individuals — especially targeting children and young women.',
    warningSigns: [
      'Receiving threatening or abusive messages repeatedly',
      'Someone spreading false rumors about you online',
      'Fake profiles created to impersonate and embarrass you',
      'Unauthorized sharing of personal or intimate photos',
    ],
    realExamples: 'A school student in the nearby town received repeated harassment on Instagram from an anonymous account. She was afraid to report it and suffered silently for months.',
    preventionTips: [
      'Block and report the harasser immediately',
      'Save screenshots as evidence before blocking',
      'Tell a trusted adult — teacher, parent, or counsellor',
      'Report to cybercrime.gov.in or call 1930',
    ],
  },
  {
    id: 'job-scams',
    icon: Briefcase,
    title: 'Fake Job Offers',
    subtitle: 'Employment & Telegram Scams',
    severity: 'high',
    description: 'Fraudsters offer high-paying jobs with minimal requirements, asking for registration fees or personal documents, then disappear with the money.',
    warningSigns: [
      '"Earn ₹10,000 per day working from home — No experience needed"',
      'Job offers asking for advance payment or registration fee',
      'Telegram groups promising money for "liking YouTube videos"',
      'Jobs that ask for Aadhaar/PAN upfront before any interview',
    ],
    realExamples: 'Three youth from the village paid ₹5,000 each as "registration fees" for a fake data entry job advertised on Facebook. The scammers disappeared after collecting the money.',
    preventionTips: [
      'Legitimate companies never ask for money before employment',
      'Verify company existence on MCA21 (mca.gov.in)',
      'Avoid Telegram "easy money" schemes — they are invariably scams',
      'Report to cybercrime.gov.in if you have been defrauded',
    ],
  },
  {
    id: 'deepfakes',
    icon: Eye,
    title: 'Deepfakes & AI Scams',
    subtitle: 'AI-Generated Fraud',
    severity: 'high',
    description: 'AI-generated fake videos and voice clones are being used to impersonate family members or authority figures to demand urgent money transfers.',
    warningSigns: [
      'Video call from "family member" in distress asking for money',
      'Voice message from a familiar voice asking for urgent transfer',
      'Slightly unnatural facial movements or audio in video calls',
      'Requests for secrecy — "Don\'t tell anyone, just transfer money"',
    ],
    realExamples: 'A person in Kerala received a WhatsApp video call from someone who looked and sounded exactly like their son, claiming to be in an accident and needing ₹40,000 immediately.',
    preventionTips: [
      'Always call back on a known number to verify such requests',
      'Establish a family code word to verify genuine emergency calls',
      'Be suspicious of any urgent money requests — even from "family"',
      'Hang up and verify through a different communication channel',
    ],
  },
];

const severityConfig = {
  critical: { label: 'Critical', color: 'text-cyber-error', bg: 'bg-cyber-error/10', border: 'border-cyber-error/30' },
  high: { label: 'High Risk', color: 'text-cyber-warning', bg: 'bg-cyber-warning/10', border: 'border-cyber-warning/30' },
  medium: { label: 'Medium', color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/30' },
};

interface CyberThreatsCenterProps {
  isTelugu: boolean;
}

export default function CyberThreatsCenter({ isTelugu }: CyberThreatsCenterProps) {
  const [selected, setSelected] = useState<typeof threats[0] | null>(null);

  return (
    <section id="threats" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="cyber-badge-red mb-4 mx-auto w-fit">
            <AlertTriangle className="w-3 h-3" />
            {isTelugu ? 'సైబర్ ముప్పులు' : 'Cyber Threats'}
          </div>
          <h2 className="section-title mb-4">
            {isTelugu ? 'సైబర్ ముప్పుల అభ్యాసన కేంద్రం' : 'Cyber Threats Learning Center'}
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {isTelugu
              ? 'ఈ ముప్పులను అర్థం చేసుకోండి, గుర్తించండి మరియు మిమ్మల్ని రక్షించుకోండి'
              : 'Understand, recognize, and protect yourself from the most common cyber threats targeting rural communities'}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {threats.map((threat) => {
            const Icon = threat.icon;
            const sev = severityConfig[threat.severity as keyof typeof severityConfig];
            return (
              <div
                key={threat.id}
                className="threat-card cursor-pointer"
                onClick={() => setSelected(threat)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyber-error/10 border border-cyber-error/30 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-cyber-error" />
                  </div>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${sev.bg} ${sev.color} ${sev.border} border`}>
                    {sev.label}
                  </span>
                </div>
                <h3 className="font-bold text-cyber-text mb-1">{threat.title}</h3>
                <p className="text-xs text-cyber-textMuted mb-3">{threat.subtitle}</p>
                <p className="text-xs text-cyber-textDim line-clamp-2">{threat.description}</p>
                <div className="mt-3 text-xs text-cyber-primary font-semibold flex items-center gap-1">
                  Learn More <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detail Modal */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <div
              className="relative max-w-2xl w-full glass-card max-h-[85vh] overflow-y-auto animate-fade-in"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyber-error/10 border border-cyber-error/30 flex items-center justify-center">
                      <selected.icon className="w-6 h-6 text-cyber-error" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-cyber-text">{selected.title}</h3>
                      <p className="text-sm text-cyber-textMuted">{selected.subtitle}</p>
                    </div>
                  </div>
                  <button onClick={() => setSelected(null)} className="text-cyber-textDim hover:text-cyber-text transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-cyber-textMuted mb-6 leading-relaxed">{selected.description}</p>

                <div className="space-y-5">
                  {/* Warning Signs */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="w-4 h-4 text-cyber-warning" />
                      <span className="text-sm font-bold text-cyber-warning">Warning Signs</span>
                    </div>
                    <div className="space-y-2">
                      {selected.warningSigns.map((sign, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-cyber-textMuted">
                          <span className="text-cyber-warning mt-0.5">•</span> {sign}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Real Example */}
                  <div className="p-4 rounded-lg bg-cyber-warning/5 border border-cyber-warning/20">
                    <div className="text-xs font-bold text-cyber-warning mb-2">REAL CASE EXAMPLE</div>
                    <p className="text-sm text-cyber-textMuted italic">{selected.realExamples}</p>
                  </div>

                  {/* Prevention */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-4 h-4 text-cyber-accent" />
                      <span className="text-sm font-bold text-cyber-accent">Prevention Tips</span>
                    </div>
                    <div className="space-y-2">
                      {selected.preventionTips.map((tip, i) => (
                        <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-cyber-accent/5">
                          <span className="text-cyber-accent font-bold mt-0.5 shrink-0">✓</span>
                          <span className="text-sm text-cyber-textMuted">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
