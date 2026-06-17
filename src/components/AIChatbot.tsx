import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, Bot, User, X, Minimize2, ChevronRight } from 'lucide-react';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  text: string;
}

const quickActions = [
  'What is phishing?',
  'How do I report cybercrime?',
  'Is this message a scam?',
  'How to secure UPI?',
  'What is OTP fraud?',
];

function getResponse(input: string): string {
  const q = input.toLowerCase();

  if (q.includes('phishing') || q.includes('fake email') || q.includes('fake link')) {
    return 'Phishing is when criminals send fake emails or messages pretending to be banks, government, or companies to steal your personal information.\n\n🚨 Warning Signs:\n• Urgent language like "Account will be closed!"\n• Fake domains like "sbi-bank.net" instead of "sbi.co.in"\n• Requests for OTP, password, or PIN via email\n\n✅ What to do: Never click suspicious links. Always type the official website URL directly in your browser. Report to cybercrime.gov.in.';
  }

  if (q.includes('otp') || q.includes('one time password')) {
    return 'OTP (One-Time Password) Fraud is one of the most common scams in India.\n\n🔴 Golden Rule: NEVER share your OTP with ANYONE — not even someone claiming to be from your bank.\n\n• Banks NEVER ask for OTP over the phone or SMS\n• Government agencies NEVER need your OTP\n• If you receive a call asking for OTP, hang up immediately\n\n📞 Call 1930 if you have been defrauded.';
  }

  if (q.includes('upi') || q.includes('payment') || q.includes('gpay') || q.includes('phonepe') || q.includes('paytm')) {
    return 'UPI Safety Tips:\n\n✅ Always Do:\n• Verify recipient\'s UPI ID before paying\n• Enable transaction limits on your UPI app\n• Use a strong UPI PIN (not birthday or 1234)\n\n❌ Never Do:\n• Enter your PIN to RECEIVE money (you only enter PIN to SEND)\n• Scan QR codes from unknown sources\n• Share your UPI PIN with anyone\n\n🚨 If you scan a QR code and are asked to enter PIN — that will DEDUCT money!';
  }

  if (q.includes('report') || q.includes('complaint') || q.includes('cybercrime') || q.includes('scammed') || q.includes('fraud')) {
    return 'How to Report Cybercrime in India:\n\n📞 Call 1930 — Available 24×7 (for financial fraud, call immediately!)\n\n🌐 Online: cybercrime.gov.in\n1. Click "Report Cybercrime"\n2. Select the type of crime\n3. Fill in all details\n4. Upload evidence\n5. Submit and note your complaint number\n\n⚡ Speed is critical for financial fraud — the faster you report, the higher the chance of account freeze.';
  }

  if (q.includes('password') || q.includes('strong password') || q.includes('2fa') || q.includes('two factor')) {
    return 'Password Security Best Practices:\n\n🔐 Strong Password Rules:\n• Minimum 12 characters\n• Mix of UPPERCASE, lowercase, numbers, and symbols\n• Never use birthdates, names, or "1234"\n• Use a different password for each account\n\n🛡️ Two-Factor Authentication (2FA):\n• Enable 2FA on all banking and social media apps\n• Even if your password is stolen, 2FA blocks attackers\n• Use authenticator apps (not SMS) for best security';
  }

  if (q.includes('social media') || q.includes('facebook') || q.includes('instagram') || q.includes('whatsapp')) {
    return 'Social Media Safety:\n\n🔒 Privacy Settings:\n• Set your profile to "Friends Only" or "Private"\n• Disable location sharing in posts\n• Never share Aadhaar, PAN, or bank details online\n\n⚠️ Watch Out For:\n• Fake profiles impersonating friends\n• Messages asking for urgent money transfers\n• Links claiming prizes or government benefits\n\n✅ Golden Rule: If in doubt, call your friend directly to verify before taking any action.';
  }

  if (q.includes('scam') || q.includes('identify') || q.includes('check') || q.includes('verify')) {
    return 'How to Identify a Scam:\n\n🚨 Common Scam Signals:\n1. Too good to be true offers (prize, lottery, huge salary)\n2. Urgent pressure — "act within 24 hours"\n3. Requests for upfront fees or registration money\n4. Poor grammar and suspicious links\n5. Asks for personal info (Aadhaar, OTP, bank PIN)\n\n✅ Verification Steps:\n• Never click links in suspicious messages\n• Search the company name + "scam" online\n• Call official numbers from the official website only\n• When in doubt, report to 1930';
  }

  if (q.includes('fake news') || q.includes('misinformation') || q.includes('forward') || q.includes('whatsapp forward')) {
    return 'Fake News Detection:\n\n🔍 How to Verify:\n1. Check if major news outlets (NDTV, Hindu, etc.) are reporting it\n2. Use fact-check sites: boomlive.in, factcheck.in, altnews.in\n3. Use Google Reverse Image Search for suspicious photos\n4. Look for a date and credible author\n\n❌ Stop Fake News:\n• Do NOT forward content without verifying\n• Report fake news to WhatsApp/Facebook\n• Educate family members about verification';
  }

  if (q.includes('cyberbullying') || q.includes('harass') || q.includes('bully')) {
    return 'Cyberbullying Support:\n\n💙 If you or someone you know is being cyberbullied:\n\n1. Block the bully on all platforms\n2. Take screenshots as evidence (before blocking)\n3. Report to the platform (Instagram, WhatsApp, etc.)\n4. Tell a trusted adult — teacher, parent, or counsellor\n5. Call Childline 1098 or report to cybercrime.gov.in\n\nRemember: Cyberbullying is a crime. You are not alone. Help is available.';
  }

  if (q.includes('aadhaar') || q.includes('identity') || q.includes('pan') || q.includes('kyc')) {
    return 'Protecting Your Identity (Aadhaar/PAN):\n\n🛡️ Aadhaar Safety:\n• Use Masked Aadhaar for general ID purposes\n• Lock your Aadhaar biometric at uidai.gov.in\n• Never share Aadhaar photo via WhatsApp to unknown people\n\n⚠️ Red Flags:\n• Anyone asking for your Aadhaar to "verify" an account\n• KYC update requests via SMS or WhatsApp links\n• Strangers requesting your PAN for "job processing"\n\nAll KYC must be done at official bank branches or verified digital portals only.';
  }

  if (q.includes('job') || q.includes('work from home') || q.includes('earn') || q.includes('telegram')) {
    return 'Job Scam Warning:\n\n❌ Red Flags of Fake Job Offers:\n• "Earn ₹10,000/day working from home — no experience needed"\n• Requires registration fee before employment\n• Telegram groups promising money for likes/tasks\n• Asks for Aadhaar/PAN before any interview\n\n✅ How to Verify:\n• Check company registration at mca.gov.in\n• Never pay to get a job — legitimate employers pay YOU\n• Search company name + "scam" before applying\n• Jobs with HR number ending in random digits are usually fake';
  }

  if (q.includes('hello') || q.includes('hi') || q.includes('help') || q.includes('namaste')) {
    return 'Namaste! 🙏 I\'m your Cyber Safety Assistant.\n\nI can help you with:\n• Understanding cyber threats (phishing, OTP fraud, UPI scams)\n• How to secure your devices and accounts\n• Reporting cybercrime (Helpline: 1930)\n• Identifying scam messages\n• Social media safety\n\nAsk me anything about staying safe online!';
  }

  return 'I can help you with cyber safety questions. Here are some topics I can help with:\n\n• Phishing & fake messages detection\n• OTP and UPI fraud prevention\n• Cybercrime reporting (Helpline: 1930)\n• Password & 2FA security\n• Social media safety\n• Fake job offer identification\n• Cyberbullying support\n\nPlease ask a specific question about any of these topics!';
}

interface AIChatbotProps {
  isTelugu: boolean;
}

export default function AIChatbot({ isTelugu }: AIChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: 'assistant', text: 'Namaste! I\'m your Cyber Safety Assistant. How can I help you stay safe online today? You can ask me about phishing, OTP fraud, UPI safety, cybercrime reporting, and much more!' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), role: 'user', text: text.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      const response = getResponse(text);
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'assistant', text: response }]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-cyber-primary text-cyber-bg flex items-center justify-center shadow-cyber hover:scale-110 transition-transform"
          aria-label="Open AI Chatbot"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`fixed right-6 z-50 w-80 sm:w-96 glass-card border border-cyber-primary/30 flex flex-col transition-all duration-300 ${
            isMinimized ? 'bottom-6 h-14' : 'bottom-6 h-[500px]'
          }`}
          style={{ boxShadow: '0 0 30px rgba(0, 212, 255, 0.2)' }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-cyber-border/50 shrink-0">
            <div className="w-8 h-8 rounded-full bg-cyber-primary/20 border border-cyber-primary/40 flex items-center justify-center">
              <Bot className="w-4 h-4 text-cyber-primary" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-bold text-cyber-text">CyberSafe Assistant</div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-accent animate-pulse" />
                <span className="text-xs text-cyber-accent">Online</span>
              </div>
            </div>
            <button onClick={() => setIsMinimized(!isMinimized)} className="text-cyber-textDim hover:text-cyber-text transition-colors">
              <Minimize2 className="w-4 h-4" />
            </button>
            <button onClick={() => setIsOpen(false)} className="text-cyber-textDim hover:text-cyber-text transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                      msg.role === 'assistant' ? 'bg-cyber-primary/20 border border-cyber-primary/40' : 'bg-cyber-secondary/20 border border-cyber-secondary/40'
                    }`}>
                      {msg.role === 'assistant' ? <Bot className="w-3.5 h-3.5 text-cyber-primary" /> : <User className="w-3.5 h-3.5 text-cyber-secondary" />}
                    </div>
                    <div className={`max-w-[75%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed whitespace-pre-line ${
                      msg.role === 'assistant'
                        ? 'bg-cyber-card border border-cyber-border/40 text-cyber-textMuted rounded-tl-sm'
                        : 'bg-cyber-primary/10 border border-cyber-primary/30 text-cyber-text rounded-tr-sm'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-cyber-primary/20 border border-cyber-primary/40 flex items-center justify-center shrink-0">
                      <Bot className="w-3.5 h-3.5 text-cyber-primary" />
                    </div>
                    <div className="bg-cyber-card border border-cyber-border/40 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
                      {[0, 1, 2].map(i => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-cyber-primary/60 animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                      ))}
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Quick Actions */}
              <div className="px-4 py-2 border-t border-cyber-border/30">
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
                  {quickActions.slice(0, 3).map((action, i) => (
                    <button
                      key={i}
                      onClick={() => sendMessage(action)}
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs text-cyber-primary bg-cyber-primary/5 border border-cyber-primary/20 hover:bg-cyber-primary/10 transition-colors shrink-0"
                    >
                      <ChevronRight className="w-3 h-3" />
                      {action}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-3 border-t border-cyber-border/30 flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
                  placeholder="Ask about cyber safety..."
                  className="flex-1 bg-cyber-bg border border-cyber-border/50 rounded-lg px-3 py-2 text-xs text-cyber-text placeholder:text-cyber-textDim focus:outline-none focus:border-cyber-primary/50"
                />
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || isTyping}
                  className="w-9 h-9 rounded-lg bg-cyber-primary/10 border border-cyber-primary/30 flex items-center justify-center text-cyber-primary hover:bg-cyber-primary/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
