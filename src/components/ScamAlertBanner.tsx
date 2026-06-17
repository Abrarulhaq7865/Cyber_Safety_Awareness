import { useState } from 'react';
import { AlertTriangle, X, ExternalLink } from 'lucide-react';

const alerts = [
  'ALERT: New UPI fraud targeting rural communities — Never share your OTP or UPI PIN with anyone!',
  'WARNING: Fake job offers via Telegram are rising — Verify before paying any registration fee!',
  'SCAM ALERT: Fake customer care numbers circulating on WhatsApp — Only use official bank numbers!',
  'CAUTION: AI-generated voice scams can mimic family members — Always verify unusual money requests!',
];

export default function ScamAlertBanner() {
  const [visible, setVisible] = useState(true);
  const [alertIndex] = useState(Math.floor(Math.random() * alerts.length));

  if (!visible) return null;

  return (
    <div className="bg-cyber-error/10 border-b border-cyber-error/30 relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-3">
        <div className="flex items-center gap-2 text-cyber-error shrink-0">
          <AlertTriangle className="w-4 h-4 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider hidden sm:block">Scam Alert</span>
        </div>
        <div className="flex-1 overflow-hidden">
          <p className="text-xs text-cyber-warning truncate">{alerts[alertIndex]}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="https://cybercrime.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-cyber-primary hover:underline flex items-center gap-1"
          >
            Report <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={() => setVisible(false)}
            className="text-cyber-textDim hover:text-cyber-text transition-colors"
            aria-label="Close alert"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
