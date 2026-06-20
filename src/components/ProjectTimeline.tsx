import { useState } from 'react';
import { ChevronDown, CheckCircle, Search, FileText, CreditCard, Share2, School, AlertCircle, UserCheck, ClipboardCheck } from 'lucide-react';

const weeks = [
  {
    week: 1,
    title: 'Baseline Survey',
    date: '20 Apr – 26 Apr',
    icon: Search,
    color: 'text-cyber-primary',
    borderColor: 'border-cyber-primary/40',
    bgColor: 'bg-cyber-primary/5',
    activities: [
      'Visited Akkampalle Village',
      'Designed digital literacy survey questionnaire',
      'Conducted door-to-door survey across 25 households (north & central areas)',
      'Completed survey — all 50 households covered',
      'Analyzed survey data; identified key problem areas (OTP fraud, phishing, fake news)',
      'Presented findings to Faculty Guide; finalized 8-week activity schedule',
    ],
    outcome: 'Baseline data collected — 82% unaware of phishing/OTP fraud',
  },
  {
    week: 2,
    title: 'Awareness Materials',
    date: '27 Apr – 03 May',
    icon: FileText,
    color: 'text-cyber-secondary',
    borderColor: 'border-cyber-secondary/40',
    bgColor: 'bg-cyber-secondary/5',
    activities: [
      'Prepared Telugu-English bilingual brochures on phishing & OTP fraud',
      'Created display charts on Top 10 Cyber Safety Tips',
      'Coordinated with Gram Panchayat for venue',
      'Conducted first community awareness session (35+ residents)',
      'Door-to-door brochure distribution and direct counselling',
      'Collected feedback; noted areas for improvement',
    ],
    outcome: '80 bilingual brochures and 5 display charts completed',
  },
  {
    week: 3,
    title: 'UPI Safety Workshop',
    date: '04 May – 10 May',
    icon: CreditCard,
    color: 'text-cyber-accent',
    borderColor: 'border-cyber-accent/40',
    bgColor: 'bg-cyber-accent/5',
    activities: [
      'Session on safe UPI practices, PIN protection, QR code fraud awareness',
      'Live demo of fake QR codes and screen-sharing scams',
      'Dedicated session for Women\'s SHG groups',
      'Educated on strong passwords and fake banking websites',
      'Assisted residents in setting up 2FA on UPI apps',
      'Distributed safe digital payment reference cards',
    ],
    outcome: '40+ residents participated; practical understanding of UPI fraud achieved',
  },
  {
    week: 4,
    title: 'Social Media Safety',
    date: '11 May – 17 May',
    icon: Share2,
    color: 'text-cyber-warning',
    borderColor: 'border-cyber-warning/40',
    bgColor: 'bg-cyber-warning/5',
    activities: [
      'Facebook, WhatsApp, Instagram privacy settings session',
      'Dangers of oversharing — Aadhaar, location, phone numbers',
      'Identifying fake news, morphed videos, misinformation',
      'Demonstrating how to report fake accounts',
      'Youth awareness on digital reputation and cyberbullying',
      'Distributed Safe Social Media Habits reference chart',
    ],
    outcome: 'Youth updated privacy settings during the session itself',
  },
  {
    week: 5,
    title: 'School Programs',
    date: '18 May – 24 May',
    icon: School,
    color: 'text-cyber-purple',
    borderColor: 'border-cyber-purple/40',
    bgColor: 'bg-cyber-purple/5',
    activities: [
      'Conducted interactive cyber safety awareness workshops near the local school in Akkampalle village.',
      'Educated students on identifying phishing links, cyberbullying, and fake social media profiles.',
      'Taught students to secure their mobile devices and avoid downloading unverified third-party apps',
      'Demonstrated how to immediately report digital financial scams to the 1930 national helpline',
      'Demonstrated educational cybersecurity charts and posters to children to promote safe online habits.',
    ],
    outcome: '55+ students participated; parents equipped with child safety tools',
  },
  {
    week: 6,
    title: 'Cybercrime Reporting',
    date: '25 May – 31 May',
    icon: AlertCircle,
    color: 'text-cyber-error',
    borderColor: 'border-cyber-error/40',
    bgColor: 'bg-cyber-error/5',
    activities: [
      'Introduced National Cybercrime Reporting Portal (cybercrime.gov.in)',
      'Live demo of filing a complaint on cybercrime.gov.in',
      'Shared Cybercrime Helpline 1930 information widely',
      'Educated on legal rights under IT Act 2000',
      'Group discussion on real AP cybercrime cases',
      'Distributed helpline cards to all households',
    ],
    outcome: 'All 50 households informed of Helpline 1930',
  },
  {
    week: 7,
    title: 'Ambassador Training',
    date: '01 Jun – 07 Jun',
    icon: UserCheck,
    color: 'text-cyber-primary',
    borderColor: 'border-cyber-primary/40',
    bgColor: 'bg-cyber-primary/5',
    activities: [
      'Gathered 5 interested community youth to act as informal Cyber Safety Ambassadors.',
      'Conducted casual discussions with the youth about phishing, password security, and OTP fraud.',
      'Guided the youth volunteers to initiate independent cyber safety conversations with village women.',
      'Organized an interactive cyber safety quiz to test the knowledge of community members.',
      'Acknowledged the active participation of the quiz players and youth volunteers in a casual gathering',
      'Held a wrap-up discussion to address remaining community doubts and build digital safety confidence.',
    ],
    outcome: '5 Ambassadors trained; 60+ participated in quiz competition',
  },
  {
    week: 8,
    title: 'Final Evaluation',
    date: '08 Jun – 10 Jun',
    icon: ClipboardCheck,
    color: 'text-cyber-accent',
    borderColor: 'border-cyber-accent/40',
    bgColor: 'bg-cyber-accent/5',
    activities: [
      'Compiled all 8 weeks of activity logs and weekly reports',
      'Post-project survey among 50 households to measure improvement',
      'Organized photographs and feedback into final report appendix',
      'Submitted draft report to Faculty Guide for review',
      'Finalized report with corrections; obtained endorsements',
      
    ],
    outcome: '76% can identify phishing (up from 18% at baseline)',
  },
];

interface ProjectTimelineProps {
  isTelugu: boolean;
}

export default function ProjectTimeline({ isTelugu }: ProjectTimelineProps) {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="timeline" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="cyber-badge mb-4 mx-auto w-fit">
            <ClipboardCheck className="w-3 h-3" />
            {isTelugu ? '8 వారాల ప్రయాణం' : '8-Week Journey'}
          </div>
          <h2 className="section-title mb-4">
            {isTelugu ? 'కార్యకలాప సమయ రేఖ' : 'Project Activities Timeline'}
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {isTelugu
              ? '8 వారాలు, 48 రోజులు, 60+ మంది సమాజ సభ్యులను చేరుకున్నాం'
              : 'Eight weeks of structured community engagement, awareness sessions, and capacity building activities'}
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-0.5"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(0,212,255,0.3), transparent)' }} />

          <div className="space-y-6">
            {weeks.map((week, i) => {
              const Icon = week.icon;
              const isLeft = i % 2 === 0;
              const isOpen = expanded === i;
              return (
                <div key={i} className={`md:flex items-start gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className="md:w-[calc(50%-2rem)] flex-shrink-0">
                    <div
                      className={`glass-card border ${week.borderColor} cursor-pointer transition-all duration-300 hover:shadow-lg`}
                      onClick={() => setExpanded(isOpen ? null : i)}
                    >
                      <div className="p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 rounded-lg ${week.bgColor} border ${week.borderColor} flex items-center justify-center shrink-0`}>
                            <Icon className={`w-5 h-5 ${week.color}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className={`text-xs font-bold ${week.color}`}>WEEK {week.week}</span>
                              <span className="text-xs text-cyber-textDim">{week.date}</span>
                            </div>
                            <div className="text-base font-bold text-cyber-text">{week.title}</div>
                          </div>
                          <ChevronDown className={`w-4 h-4 text-cyber-textMuted transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                        </div>

                        <div className={`text-xs px-3 py-2 rounded-lg ${week.bgColor} border ${week.borderColor}`}>
                          <span className={`font-semibold ${week.color}`}>Outcome: </span>
                          <span className="text-cyber-textMuted">{week.outcome}</span>
                        </div>
                      </div>

                      {/* Expanded */}
                      {isOpen && (
                        <div className="px-5 pb-5 border-t border-cyber-border/30">
                          <div className="pt-4 space-y-2">
                            {week.activities.map((activity, j) => (
                              <div key={j} className="flex items-start gap-2.5">
                                <CheckCircle className={`w-4 h-4 ${week.color} mt-0.5 shrink-0`} />
                                <span className="text-sm text-cyber-textMuted">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex items-start justify-center w-8 pt-5 shrink-0">
                    <div className={`w-4 h-4 rounded-full border-2 ${week.borderColor} bg-cyber-bg`}
                      style={{ boxShadow: `0 0 8px currentColor` }} />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
