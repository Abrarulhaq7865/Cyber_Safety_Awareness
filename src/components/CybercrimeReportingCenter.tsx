import { Phone, ExternalLink, AlertTriangle, CheckCircle, FileText, Camera, Clock } from 'lucide-react';

const steps = [
  {
    step: 1,
    title: 'Stay Calm & Act Fast',
    description: 'The sooner you report, the higher the chance of recovering funds. Financial fraud must be reported within minutes to freeze the fraudster\'s account.',
    icon: Clock,
    color: 'text-cyber-error',
  },
  {
    step: 2,
    title: 'Collect Evidence',
    description: 'Screenshot all messages, call logs, transaction IDs, and emails. Write down the time, amount, and method of fraud before memory fades.',
    icon: Camera,
    color: 'text-cyber-warning',
  },
  {
    step: 3,
    title: 'Call 1930 Immediately',
    description: 'For financial fraud, call the National Cybercrime Helpline 1930. Available 24×7. Provide all evidence details to the officer.',
    icon: Phone,
    color: 'text-cyber-primary',
  },
  {
    step: 4,
    title: 'File Online Complaint',
    description: 'Go to cybercrime.gov.in → Report Cybercrime → Select category → Fill details → Submit. You will receive a complaint acknowledgment number.',
    icon: FileText,
    color: 'text-cyber-accent',
  },
];

const evidenceChecklist = [
  'Screenshots of fraudulent messages, emails, or calls',
  'Transaction receipt / bank statement showing deduction',
  'Name/phone number/UPI ID of the fraudster (if known)',
  'Date and time of the incident',
  'Any website URLs or apps involved in the fraud',
  'Your bank account/UPI details for reference',
];

const doNotDo = [
  'Do NOT delete messages or transaction history — these are your evidence',
  'Do NOT transfer more money to "recover" previous loss',
  'Do NOT share more personal information with the fraudster',
  'Do NOT wait — financial fraud must be reported within hours',
];

interface CybercrimeReportingCenterProps {
  isTelugu: boolean;
}

export default function CybercrimeReportingCenter({ isTelugu }: CybercrimeReportingCenterProps) {
  return (
    <section id="report" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="cyber-badge-red mb-4 mx-auto w-fit">
            <AlertTriangle className="w-3 h-3" />
            {isTelugu ? 'సైబర్ క్రైమ్ రిపోర్టింగ్' : 'Cybercrime Reporting'}
          </div>
          <h2 className="section-title mb-4">
            {isTelugu ? 'సైబర్ క్రైమ్ రిపోర్టింగ్ కేంద్రం' : 'Cybercrime Reporting Center'}
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {isTelugu
              ? 'మీరు ఆన్‌లైన్ మోసానికి గురైతే, వెంటనే రిపోర్ట్ చేయండి. తక్కువ సమయంలో రిపోర్ట్ చేస్తే నష్టం తగ్గే అవకాశం ఉంది'
              : 'If you have been scammed online, every minute counts. Here\'s exactly what to do to maximize your chances of recovering funds.'}
          </p>
        </div>

        {/* Emergency Banner */}
        <div className="glass-card border-2 border-cyber-error/50 p-6 mb-8 text-center"
          style={{ boxShadow: '0 0 30px rgba(255, 68, 102, 0.15)' }}>
          <div className="text-cyber-textMuted text-sm mb-3">National Cybercrime Helpline — Available 24×7</div>
          <div className="text-7xl font-bold neon-text mb-3">1930</div>
          <div className="text-cyber-textMuted text-sm mb-4">Call immediately if you have been scammed online</div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:1930" className="btn-primary justify-center">
              <Phone className="w-5 h-5" />
              {isTelugu ? 'ఇప్పుడు కాల్ చేయండి: 1930' : 'Call Now: 1930'}
            </a>
            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline justify-center"
            >
              <ExternalLink className="w-4 h-4" />
              cybercrime.gov.in
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Step-by-Step Guide */}
          <div className="glass-card p-6">
            <h3 className="text-xl font-bold text-cyber-text mb-6 flex items-center gap-2">
              <div className="w-1 h-6 rounded-full bg-cyber-primary" />
              {isTelugu ? 'రిపోర్టింగ్ గైడ్' : 'Step-by-Step Reporting Guide'}
            </h3>
            <div className="space-y-5">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full border-2 border-current ${step.color} flex items-center justify-center shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      {step.step < steps.length && (
                        <div className="w-0.5 h-8 bg-cyber-border/30 mt-1" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-bold ${step.color}`}>STEP {step.step}</span>
                      </div>
                      <h4 className="text-sm font-bold text-cyber-text mb-1">{step.title}</h4>
                      <p className="text-xs text-cyber-textMuted leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Evidence Checklist */}
            <div className="glass-card p-6">
              <h3 className="text-base font-bold text-cyber-text mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyber-accent" />
                {isTelugu ? 'సాక్ష్యాల జాబితా' : 'Evidence Checklist'}
              </h3>
              <div className="space-y-2">
                {evidenceChecklist.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-2 rounded-lg bg-cyber-accent/5">
                    <div className="w-5 h-5 rounded border border-cyber-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-cyber-accent" />
                    </div>
                    <span className="text-xs text-cyber-textMuted">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Do NOT List */}
            <div className="glass-card p-6">
              <h3 className="text-base font-bold text-cyber-error mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                {isTelugu ? 'ఇవి చేయకండి' : 'Do NOT Do These'}
              </h3>
              <div className="space-y-2">
                {doNotDo.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-2 rounded-lg bg-cyber-error/5">
                    <span className="text-cyber-error text-lg leading-none shrink-0">✗</span>
                    <span className="text-xs text-cyber-textMuted">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Legal Rights */}
        <div className="glass-card p-6 mt-8">
          <h3 className="text-lg font-bold text-cyber-text mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyber-primary" />
            Your Legal Rights Under IT Act 2000
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: 'Section 66C', desc: 'Identity theft and impersonation online — Imprisonment up to 3 years' },
              { title: 'Section 66D', desc: 'Cheating by impersonation using computer resources — Up to 3 years imprisonment' },
              { title: 'Section 43', desc: 'Unauthorized access to computer system — Compensation up to ₹1 crore' },
            ].map((law, i) => (
              <div key={i} className="p-4 rounded-lg bg-cyber-primary/5 border border-cyber-primary/20">
                <div className="text-sm font-bold text-cyber-primary mb-1">{law.title}</div>
                <div className="text-xs text-cyber-textMuted">{law.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
