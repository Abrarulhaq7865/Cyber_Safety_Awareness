import { useState } from 'react';
import { AlertTriangle, CheckCircle, XCircle, RefreshCw, Zap, Mail, MessageSquare, Smartphone, Briefcase, CreditCard } from 'lucide-react';

const scenarios = [
  {
    id: 1,
    type: 'phishing-email',
    icon: Mail,
    title: 'Email Message',
    label: 'INBOX',
    isScam: true,
    content: {
      from: 'sbi-alerts@security-sbi-bank.net',
      to: 'you@email.com',
      subject: 'URGENT: Your SBI Account has been BLOCKED — Verify Now!',
      body: `Dear Valued Customer,

Your SBI account has been temporarily suspended due to suspicious activity. To restore your account within 24 hours, please verify your details immediately.

Click the link below to verify:
http://sbi-verify-secure.com/account-restore?ref=URGENT

You will need to provide:
• Account number
• ATM PIN
• OTP received on your registered mobile

Failure to verify within 24 hours will result in permanent account closure.

SBI Customer Security Team
security@sbi.co.in`,
    },
    redFlags: [
      'Sender domain is "sbi-bank.net" not "sbi.co.in" — FAKE domain',
      'Urgent, threatening language designed to create panic',
      'Link goes to "sbi-verify-secure.com" — completely different from sbi.co.in',
      'SBI (or any bank) NEVER asks for ATM PIN or OTP via email',
      'Grammar errors and aggressive tone are typical of scam emails',
    ],
    explanation: 'This is a classic phishing email. The fake domain, urgent language, and request for sensitive credentials are all hallmarks of a phishing attack. Real banks never ask for PINs or OTPs via email.',
  },
  {
    id: 2,
    type: 'scam-sms',
    icon: MessageSquare,
    title: 'SMS Message',
    label: 'SMS',
    isScam: true,
    content: {
      from: '+91-8123456789',
      body: `CONGRATULATIONS! Your mobile number has been selected for Rs.25,00,000 LOTTERY PRIZE by KBC!

To claim your prize call: 8800XXXXXX or WhatsApp NOW!

Your Lucky Number: KBC-7829-PRIZE

Reply STOP to unsubscribe`,
    },
    redFlags: [
      'You never participated in any KBC lottery',
      'KBC does not select people by phone number',
      'Any "prize" requiring you to call a number is a scam',
      '"Reply STOP to unsubscribe" makes it look legitimate — it is not',
      'Once you call, they will ask for "processing fees" to release prize',
    ],
    explanation: 'This is a classic lottery scam. No legitimate lottery selects winners via SMS. Once you call, they will extract money as "fees" and disappear. The KBC logo is being misused.',
  },
  {
    id: 3,
    type: 'whatsapp-scam',
    icon: Smartphone,
    title: 'WhatsApp Message',
    label: 'WHATSAPP',
    isScam: true,
    content: {
      from: 'Unknown Number (+91 9876XXXXXX)',
      body: `Hi! I'm from YouTube's India Promotion Team.

We are giving ₹150 per video you LIKE on YouTube. This is our special promotion to increase engagement.

Join our WhatsApp group: wa.me/XXXXXXX

You will receive:
✅ Daily payment via UPI
✅ No investment required
✅ Work from home
✅ Earn ₹3000-10000 per day

Only 5 spots left! Join NOW before it's too late.`,
    },
    redFlags: [
      'YouTube does not pay people to like videos',
      '"Only 5 spots left" is a pressure tactic to prevent careful thinking',
      'This is a Task Fraud scam — common on Telegram and WhatsApp',
      'First few payments are real to build trust, then large fees demanded',
      'Eventually, you will be asked to invest money to "unlock higher earnings"',
    ],
    explanation: 'This is a "Task Fraud" or "Like & Earn" scam. Initial small payments build trust, then you are asked to invest larger amounts for bigger returns — which are never paid. Thousands of people have been defrauded across India.',
  },
  {
    id: 4,
    type: 'fake-job',
    icon: Briefcase,
    title: 'Job Offer',
    label: 'RECRUITMENT',
    isScam: true,
    content: {
      from: 'hr@infosys-hiring-india.com',
      subject: 'Job Offer — Data Entry Executive — ₹25,000/month',
      body: `Dear Candidate,

Congratulations! After reviewing your profile, Infosys Ltd. has selected you for the position of Data Entry Executive.

Salary: ₹25,000 per month (work from home)
Qualification: 10th Pass

To confirm your joining, please complete the registration process:

1. Pay registration fee: ₹2,500 via UPI to infosys.hr@paytm
2. Submit: Aadhaar, PAN, Bank Passbook photos

Joining date: Next Monday
Offer valid for 48 hours only.

HR Team
Infosys Careers`,
    },
    redFlags: [
      'Real Infosys sends offers from "@infosys.com" not "@infosys-hiring-india.com"',
      'Legitimate companies NEVER charge registration fees',
      'Asking for Aadhaar, PAN, and bank details upfront is a red flag',
      '"48 hours validity" is a pressure tactic',
      'No job description, interview, or assessment mentioned',
    ],
    explanation: 'This is a fake job offer scam impersonating Infosys. The fake domain, registration fee demand, and personal document collection are clear signs. Real companies never ask for fees to join.',
  },
  {
    id: 5,
    type: 'upi-scam',
    icon: CreditCard,
    title: 'UPI Request',
    label: 'UPI',
    isScam: true,
    content: {
      from: 'flipkart_refund@upi',
      request: 'Flipkart Refund Processing',
      amount: '₹499',
      note: 'Enter your UPI PIN to RECEIVE your Flipkart refund of ₹499 for Order #FK789234. Your money will be credited in 2 hours.',
    },
    redFlags: [
      'You NEVER enter your UPI PIN to RECEIVE money — only to SEND',
      'Entering your PIN on this request will DEDUCT ₹499 from your account',
      'UPI ID "flipkart_refund@upi" is not an official Flipkart address',
      'Refunds are processed automatically — companies never ask for PIN',
      'This is a "Collect Request" scam disguised as a refund',
    ],
    explanation: 'This is a UPI collect request scam. The scammer has sent a request to deduct money from your account, disguised as a refund. Entering your PIN would transfer money TO the scammer, not receive money from them.',
  },
];

interface CyberAttackSimulatorProps {
  isTelugu: boolean;
}

export default function CyberAttackSimulator({ isTelugu }: CyberAttackSimulatorProps) {
  const [current, setCurrent] = useState(0);
  const [answered, setAnswered] = useState<'safe' | 'scam' | null>(null);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const scenario = scenarios[current];
  const Icon = scenario.icon;

  const handleAnswer = (answer: 'safe' | 'scam') => {
    setAnswered(answer);
    setTotal(prev => prev + 1);
    if (answer === 'scam' && scenario.isScam) setScore(prev => prev + 1);
    if (answer === 'safe' && !scenario.isScam) setScore(prev => prev + 1);
    setShowExplanation(true);
  };

  const nextScenario = () => {
    setCurrent(prev => (prev + 1) % scenarios.length);
    setAnswered(null);
    setShowExplanation(false);
  };

  const isCorrect = answered === (scenario.isScam ? 'scam' : 'safe');

  return (
    <section id="simulator" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="cyber-badge mb-4 mx-auto w-fit">
            <Zap className="w-3 h-3" />
            {isTelugu ? 'సైబర్ అటాక్ సిమ్యులేటర్' : 'Cyber Attack Simulator'}
          </div>
          <h2 className="section-title mb-4">
            {isTelugu ? 'మీరు గుర్తించగలరా?' : 'Can You Spot the Scam?'}
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {isTelugu
              ? 'నిజమైన స్కామ్‌లను పోలిన సందేశాలు చూడండి మరియు అవి సురక్షితమా లేదా స్కామ్ అని నిర్ణయించుకోండి'
              : 'Look at realistic examples of scams and decide — Safe or Scam? Learn from each scenario to build your detection skills.'}
          </p>
        </div>

        {/* Score */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="glass-card px-4 py-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cyber-accent" />
              <span className="text-sm font-bold text-cyber-accent">{score}</span>
              <span className="text-xs text-cyber-textMuted">Correct</span>
            </div>
            <div className="glass-card px-4 py-2 flex items-center gap-2">
              <span className="text-xs text-cyber-textMuted">Scenario</span>
              <span className="text-sm font-bold text-cyber-primary">{current + 1}/{scenarios.length}</span>
            </div>
          </div>
          <div className="flex gap-1">
            {scenarios.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i === current ? 'bg-cyber-primary' : i < current ? 'bg-cyber-accent' : 'bg-cyber-border'}`} />
            ))}
          </div>
        </div>

        {/* Scenario Card */}
        <div className="glass-card overflow-hidden">
          {/* Type Header */}
          <div className="bg-cyber-card/80 px-5 py-3 border-b border-cyber-border/50 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyber-bg flex items-center justify-center">
              <Icon className="w-4 h-4 text-cyber-primary" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyber-primary">{scenario.label}</span>
              <div className="text-sm font-semibold text-cyber-text">{scenario.title}</div>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            {scenario.type === 'phishing-email' || scenario.type === 'fake-job' ? (
              <div className="font-mono text-sm space-y-2">
                {'from' in scenario.content && (
                  <div className="flex gap-2">
                    <span className="text-cyber-textDim w-16 shrink-0">From:</span>
                    <span className="text-cyber-warning">{scenario.content.from}</span>
                  </div>
                )}
                {'subject' in scenario.content && (
                  <div className="flex gap-2">
                    <span className="text-cyber-textDim w-16 shrink-0">Subject:</span>
                    <span className="text-cyber-text font-bold">{scenario.content.subject}</span>
                  </div>
                )}
                <div className="mt-4 p-4 bg-cyber-bg/60 rounded-lg border border-cyber-border/30 text-cyber-textMuted leading-relaxed whitespace-pre-line text-xs">
                  {scenario.content.body}
                </div>
              </div>
            ) : scenario.type === 'scam-sms' || scenario.type === 'whatsapp-scam' ? (
              <div className="max-w-sm mx-auto">
                <div className="text-xs text-cyber-textDim mb-2">{scenario.content.from}</div>
                <div className="bg-cyber-card/80 rounded-2xl rounded-tl-sm p-4 border border-cyber-border/40">
                  <p className="text-sm text-cyber-text whitespace-pre-line">{scenario.content.body}</p>
                </div>
              </div>
            ) : (
              <div className="max-w-sm mx-auto glass-card p-5 border-2 border-cyber-primary/30">
                <div className="text-center mb-4">
                  <div className="text-xs text-cyber-textDim">{scenario.content.from}</div>
                  <div className="text-lg font-bold text-cyber-primary mt-2">{scenario.content.amount}</div>
                  <div className="text-sm text-cyber-text mt-1">{scenario.content.request}</div>
                </div>
                <div className="p-3 bg-cyber-warning/5 rounded-lg border border-cyber-warning/20 text-xs text-cyber-textMuted">
                  {scenario.content.note}
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          {!answered && (
            <div className="px-5 pb-5 flex gap-4">
              <button
                onClick={() => handleAnswer('safe')}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border-2 border-cyber-accent/40 bg-cyber-accent/5 text-cyber-accent font-bold hover:bg-cyber-accent/10 transition-all"
              >
                <CheckCircle className="w-5 h-5" />
                {isTelugu ? 'సురక్షితం' : 'SAFE'}
              </button>
              <button
                onClick={() => handleAnswer('scam')}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border-2 border-cyber-error/40 bg-cyber-error/5 text-cyber-error font-bold hover:bg-cyber-error/10 transition-all"
              >
                <XCircle className="w-5 h-5" />
                {isTelugu ? 'స్కామ్' : 'SCAM'}
              </button>
            </div>
          )}

          {/* Result */}
          {showExplanation && (
            <div className={`mx-5 mb-5 rounded-xl p-4 border ${isCorrect ? 'bg-cyber-accent/5 border-cyber-accent/30' : 'bg-cyber-error/5 border-cyber-error/30'}`}>
              <div className={`flex items-center gap-2 mb-3 font-bold ${isCorrect ? 'text-cyber-accent' : 'text-cyber-error'}`}>
                {isCorrect ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                {isCorrect ? 'Correct! Great Detection Skills!' : 'Incorrect — This is a SCAM!'}
              </div>
              <p className="text-sm text-cyber-textMuted mb-4">{scenario.explanation}</p>
              <div className="space-y-2">
                <div className="text-xs font-bold text-cyber-warning flex items-center gap-1.5 mb-2">
                  <AlertTriangle className="w-3.5 h-3.5" /> Red Flags
                </div>
                {scenario.redFlags.map((flag, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-cyber-textMuted">
                    <span className="text-cyber-warning shrink-0">•</span> {flag}
                  </div>
                ))}
              </div>
              <button
                onClick={nextScenario}
                className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-cyber-primary/10 border border-cyber-primary/30 text-cyber-primary text-sm font-semibold hover:bg-cyber-primary/15 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Next Scenario
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
