import { useState } from 'react';
import { Trophy, CheckCircle, XCircle, ArrowRight, RotateCcw, Star, Award } from 'lucide-react';
import { supabase } from '../lib/supabase';

const questions = [
  {
    id: 1,
    category: 'Phishing',
    question: 'You receive an email from "sbi.customer@sbi-secure-alerts.net" asking you to verify your account. What should you do?',
    options: [
      'Click the link and verify your details',
      'Ignore it — SBI emails always come from "@sbi.co.in" not ".net"',
      'Forward it to friends to warn them',
      'Call the number in the email',
    ],
    correct: 1,
    explanation: 'SBI\'s official domain is "sbi.co.in". Any email from a different domain is fake. Never click links in such emails.',
  },
  {
    id: 2,
    category: 'OTP Safety',
    question: 'A caller says he is from your bank and needs your OTP to "prevent account suspension." What do you do?',
    options: [
      'Give the OTP quickly to prevent suspension',
      'Ask for his employee ID first, then give OTP',
      'Hang up immediately — banks never ask for OTP',
      'Give the last 4 digits only',
    ],
    correct: 2,
    explanation: 'No bank, government body, or legitimate company will ever ask for your OTP. Hang up and report to 1930.',
  },
  {
    id: 3,
    category: 'UPI Safety',
    question: 'You want to RECEIVE ₹500 via UPI. The sender says you need to enter your PIN to "confirm receipt." What happens?',
    options: [
      'Money gets credited to your account',
      'This is a test transaction to verify your account',
      'You will LOSE ₹500 — entering PIN sends money, not receives it',
      'Nothing happens — PIN entry is mandatory for all transactions',
    ],
    correct: 2,
    explanation: 'You NEVER enter your UPI PIN to receive money. Entering your PIN authorizes you to SEND money. This is the most common UPI fraud technique.',
  },
  {
    id: 4,
    category: 'Password Security',
    question: 'Which of the following is the STRONGEST password?',
    options: [
      'Ramu@1990',
      'qwerty123',
      'Tr@vel!ng#2024$ecure',
      'password123',
    ],
    correct: 2,
    explanation: '"Tr@vel!ng#2024$ecure" is strong because it has 18+ characters, uppercase, lowercase, numbers, and special symbols. Never use birth years, names, or "password".',
  },
  {
    id: 5,
    category: 'Social Media',
    question: 'Your friend\'s WhatsApp sends you: "I\'m stuck abroad, please transfer ₹10,000 urgently, will return tomorrow." What do you do?',
    options: [
      'Transfer immediately — it\'s a friend in need',
      'Ask 2 more friends to chip in too',
      'Call your friend\'s actual phone number to verify before any action',
      'Send half the amount to be safe',
    ],
    correct: 2,
    explanation: 'WhatsApp accounts can be hacked or cloned. Always call your friend on their regular phone number to verify any urgent money requests.',
  },
  {
    id: 6,
    category: 'Privacy Settings',
    question: 'A new app asks for permission to access your contacts, camera, microphone, AND location just to show the daily weather. You should:',
    options: [
      'Allow all permissions — it\'s probably for better experience',
      'Allow only what is necessary — deny all others',
      'Uninstall — a weather app has no reason for contacts/microphone',
      'B or C are both correct approaches',
    ],
    correct: 3,
    explanation: 'A weather app only needs location access. Any app asking for excessive unrelated permissions is suspicious. Both denying unnecessary permissions and uninstalling the app are valid protective actions.',
  },
  {
    id: 7,
    category: 'Cybercrime Reporting',
    question: 'You\'ve been scammed online and lost ₹15,000. What is the FASTEST action to potentially recover your money?',
    options: [
      'Go to the local police station and file a complaint',
      'Post on social media to warn others',
      'Call 1930 or file on cybercrime.gov.in immediately',
      'Wait and see if the money comes back',
    ],
    correct: 2,
    explanation: 'Call 1930 or file on cybercrime.gov.in IMMEDIATELY. The faster you report, the higher the chance of freezing the fraudster\'s account and recovering funds. Time is critical.',
  },
  {
    id: 8,
    category: 'Safe Browsing',
    question: 'Which website is SAFE to enter your bank details?',
    options: [
      'http://www.sbi.co.in/login',
      'https://www.sbi.co.in/login',
      'https://sbi-netbanking-login.com',
      'http://secure.bank-sbi.net',
    ],
    correct: 1,
    explanation: 'Only "https://www.sbi.co.in" is legitimate. It has HTTPS (secure), the correct domain "sbi.co.in", and the lock icon. Always check the exact URL before entering credentials.',
  },
  {
    id: 9,
    category: 'Fake News',
    question: 'A WhatsApp message claims the government is giving ₹5 lakh to every family. It asks you to click a link and enter your Aadhaar details. You should:',
    options: [
      'Click and enter details — government schemes are legitimate',
      'Share it widely to help others claim the benefit',
      'Verify on official government sites first — this is almost certainly fake',
      'Send it to family members to confirm',
    ],
    correct: 2,
    explanation: 'Government schemes are announced on official websites like pm india.gov.in or myscheme.gov.in. WhatsApp messages asking for Aadhaar details are data collection scams.',
  },
  {
    id: 10,
    category: 'Cyberbullying',
    question: 'A classmate is being harassed through anonymous Instagram messages. What is the BEST immediate action?',
    options: [
      'Reply aggressively to defend them',
      'Block the account and report to Instagram, inform a trusted adult',
      'Create a fake account to expose the bully',
      'Post about it publicly to shame the bully',
    ],
    correct: 1,
    explanation: 'The right steps are: Block the account, Report to Instagram, Save screenshots as evidence, and immediately inform a trusted adult. Do not retaliate as it can make things worse.',
  },
];

interface CyberSafetyQuizProps {
  isTelugu: boolean;
}

export default function CyberSafetyQuiz({ isTelugu }: CyberSafetyQuizProps) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [finished, setFinished] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [leaderboard, setLeaderboard] = useState<{ name: string; score: number; total: number }[]>([]);

  const q = questions[current];
  const score = answers.filter((a, i) => a === questions[i].correct).length;

  const handleSelect = (idx: number) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);
    const newAnswers = [...answers];
    newAnswers[current] = idx;
    setAnswers(newAnswers);
  };

  const next = () => {
    if (current < questions.length - 1) {
      setCurrent(prev => prev + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setFinished(true);
    }
  };

  const reset = () => {
    setCurrent(0);
    setSelected(null);
    setShowResult(false);
    setAnswers(new Array(questions.length).fill(null));
    setFinished(false);
    setPlayerName('');
    setSubmitted(false);
  };

  const submitScore = async () => {
    if (!playerName.trim()) return;
    try {
      const { data } = await supabase
        .from('quiz_scores')
        .insert({ name: playerName, score, total: questions.length })
        .select();
      if (data) {
        const { data: lb } = await supabase
          .from('quiz_scores')
          .select('name, score, total')
          .order('score', { ascending: false })
          .limit(10);
        if (lb) setLeaderboard(lb);
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    }
  };

  const getScoreLabel = () => {
    const pct = (score / questions.length) * 100;
    if (pct >= 90) return { label: 'Cyber Security Expert!', color: 'text-cyber-accent' };
    if (pct >= 70) return { label: 'Cyber Safety Pro!', color: 'text-cyber-primary' };
    if (pct >= 50) return { label: 'Good Awareness!', color: 'text-cyber-warning' };
    return { label: 'Keep Learning!', color: 'text-cyber-error' };
  };

  if (finished) {
    const { label, color } = getScoreLabel();
    return (
      <section id="quiz" className="py-20 relative">
        <div className="max-w-2xl mx-auto px-4">
          <div className="glass-card p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-cyber-primary/10 border-2 border-cyber-primary/40 flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-10 h-10 text-cyber-primary" />
            </div>
            <h2 className="text-3xl font-bold text-cyber-text mb-2">Quiz Complete!</h2>
            <p className={`text-xl font-bold mb-6 ${color}`}>{label}</p>

            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold neon-text">{score}</div>
                <div className="text-sm text-cyber-textMuted">Correct</div>
              </div>
              <div className="text-3xl text-cyber-textDim">/</div>
              <div className="text-center">
                <div className="text-5xl font-bold text-cyber-textMuted">{questions.length}</div>
                <div className="text-sm text-cyber-textMuted">Total</div>
              </div>
            </div>

            <div className="w-full progress-bar mb-8">
              <div className="progress-fill" style={{ width: `${(score / questions.length) * 100}%` }} />
            </div>

            {!submitted ? (
              <div className="space-y-4 mb-6">
                <p className="text-cyber-textMuted text-sm">Enter your name for the leaderboard</p>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={playerName}
                    onChange={e => setPlayerName(e.target.value)}
                    placeholder="Your name"
                    className="flex-1 bg-cyber-bg border border-cyber-border/50 rounded-lg px-4 py-2.5 text-cyber-text text-sm placeholder:text-cyber-textDim focus:outline-none focus:border-cyber-primary/50"
                  />
                  <button
                    onClick={submitScore}
                    disabled={!playerName.trim()}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Award className="w-4 h-4" />
                    Submit
                  </button>
                </div>
              </div>
            ) : (
              leaderboard.length > 0 && (
                <div className="text-left mb-6">
                  <h3 className="text-sm font-bold text-cyber-text mb-3 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-cyber-warning" /> Leaderboard
                  </h3>
                  <div className="space-y-2">
                    {leaderboard.map((entry, i) => (
                      <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-cyber-bg/50">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i === 0 ? 'bg-yellow-400/20 text-yellow-400' : i === 1 ? 'bg-gray-400/20 text-gray-400' : i === 2 ? 'bg-orange-400/20 text-orange-400' : 'bg-cyber-border text-cyber-textDim'}`}>
                          {i + 1}
                        </div>
                        <span className="flex-1 text-sm text-cyber-text">{entry.name}</span>
                        <span className="text-sm font-bold text-cyber-primary">{entry.score}/{entry.total}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}

            <button onClick={reset} className="btn-outline w-full justify-center">
              <RotateCcw className="w-4 h-4" />
              Retake Quiz
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="py-20 relative">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="cyber-badge mb-4 mx-auto w-fit">
            <Star className="w-3 h-3" />
            {isTelugu ? 'సైబర్ సేఫ్టీ క్విజ్' : 'Cyber Safety Quiz'}
          </div>
          <h2 className="section-title mb-4">
            {isTelugu ? 'మీ జ్ఞానాన్ని పరీక్షించుకోండి' : 'Test Your Knowledge'}
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            {isTelugu
              ? '10 ప్రశ్నలు • స్కోర్ సేవ్ చేసి సర్టిఫికెట్ పొందండి'
              : '10 questions covering phishing, OTP fraud, UPI safety, passwords, and more'}
          </p>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs text-cyber-textMuted">{current + 1}/{questions.length}</span>
          <div className="flex-1 progress-bar">
            <div className="progress-fill" style={{ width: `${((current + 1) / questions.length) * 100}%` }} />
          </div>
          <span className="cyber-badge text-xs">{q.category}</span>
        </div>

        <div className="glass-card p-6">
          <p className="text-lg font-semibold text-cyber-text mb-6 leading-relaxed">{q.question}</p>

          <div className="space-y-3 mb-6">
            {q.options.map((option, i) => {
              let className = 'quiz-option';
              if (showResult) {
                if (i === q.correct) className += ' correct';
                else if (i === selected && i !== q.correct) className += ' incorrect';
                className += ' !cursor-default';
              }
              return (
                <button
                  key={i}
                  className={className}
                  onClick={() => handleSelect(i)}
                  disabled={showResult}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 text-xs font-bold mt-0.5 ${
                      showResult && i === q.correct ? 'border-cyber-accent bg-cyber-accent/20 text-cyber-accent' :
                      showResult && i === selected && i !== q.correct ? 'border-cyber-error bg-cyber-error/20 text-cyber-error' :
                      'border-cyber-border text-cyber-textDim'
                    }`}>
                      {showResult && i === q.correct ? <CheckCircle className="w-4 h-4" /> :
                       showResult && i === selected && i !== q.correct ? <XCircle className="w-4 h-4" /> :
                       String.fromCharCode(65 + i)}
                    </div>
                    <span className="text-sm">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {showResult && (
            <div className={`p-4 rounded-lg mb-4 ${selected === q.correct ? 'bg-cyber-accent/5 border border-cyber-accent/30' : 'bg-cyber-error/5 border border-cyber-error/30'}`}>
              <div className={`flex items-center gap-2 font-bold mb-2 ${selected === q.correct ? 'text-cyber-accent' : 'text-cyber-error'}`}>
                {selected === q.correct ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                {selected === q.correct ? 'Correct!' : 'Incorrect'}
              </div>
              <p className="text-sm text-cyber-textMuted">{q.explanation}</p>
            </div>
          )}

          {showResult && (
            <button onClick={next} className="btn-primary w-full justify-center">
              {current < questions.length - 1 ? (
                <><ArrowRight className="w-4 h-4" />Next Question</>
              ) : (
                <><Trophy className="w-4 h-4" />See Results</>
              )}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
