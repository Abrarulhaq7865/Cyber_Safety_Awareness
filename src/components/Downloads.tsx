import { Download, FileText, Image, BookOpen, Shield, ExternalLink } from 'lucide-react';

const resources = [
  {
    title: 'CSP Project Report',
    description: 'Complete Community Service Project report on Cyber Safety Awareness in Akkampalle Village',
    type: 'PDF',
    icon: FileText,
    color: 'text-cyber-error',
    bg: 'bg-cyber-error/5',
    border: 'border-cyber-error/30',
    size: '2.4 MB',
    href: '/src/data/reports/abrar.pdf',
    isFile: true,
  },
  {
    title: 'Top 10 Cyber Safety Tips',
    description: 'Telugu-English bilingual poster with the 10 most important cyber safety practices',
    type: 'Poster',
    icon: Image,
    color: 'text-cyber-primary',
    bg: 'bg-cyber-primary/5',
    border: 'border-cyber-primary/30',
    size: '1.1 MB',
    href: '/images/top-10-cyber-safety-tips.pdf',
    isFile: true,
  },
  {
    title: 'Safe UPI Practices Guide',
    description: 'A comprehensive guide to safe UPI transactions, QR code safety, and avoiding UPI scams',
    type: 'Guide',
    icon: BookOpen,
    color: 'text-cyber-accent',
    bg: 'bg-cyber-accent/5',
    border: 'border-cyber-accent/30',
    size: '890 KB',
    href: '/images/safe-upi-practices-guide.pdf',
    isFile: true,
  },
  {
    title: 'Cybercrime Helpline Reference Card',
    description: 'Quick reference card with Helpline 1930, cybercrime.gov.in, and reporting steps',
    type: 'Reference',
    icon: Shield,
    color: 'text-cyber-warning',
    bg: 'bg-cyber-warning/5',
    border: 'border-cyber-warning/30',
    size: '320 KB',
    href: '/images/cybercrime-helpline-reference.pdf',
    isFile: true,
  },
  {
    title: 'Digital Literacy Brochure',
    description: 'Complete bilingual brochure covering digital safety basics, social media, and smartphone security',
    type: 'Brochure',
    icon: FileText,
    color: 'text-cyber-secondary',
    bg: 'bg-cyber-secondary/5',
    border: 'border-cyber-secondary/30',
    size: '1.8 MB',
    href: '/images/digital-literacy-brochure.pdf',
    isFile: true,
  },
  {
    title: 'Phishing Detection Infographic',
    description: 'Visual guide to identifying phishing emails, fake SMS messages, and fraudulent websites',
    type: 'Infographic',
    icon: Image,
    color: 'text-cyber-purple',
    bg: 'bg-cyber-purple/5',
    border: 'border-cyber-purple/30',
    size: '650 KB',
    href: '/images/phishing-detection-infographic.pdf',
    isFile: true,
  },
];

const externalResources = [
  { name: 'National Cybercrime Portal', url: 'https://cybercrime.gov.in', desc: 'Official government reporting portal' },
  { name: 'CERT-In', url: 'https://cert-in.org.in', desc: 'Computer Emergency Response Team India' },
  { name: 'MHA Cyber Safety', url: 'https://www.mha.gov.in', desc: 'Ministry of Home Affairs cyber resources' },
  { name: 'RBI Safe Banking', url: 'https://www.rbi.org.in', desc: 'Reserve Bank of India fraud alerts' },
];

interface DownloadsProps {
  isTelugu: boolean;
}

export default function Downloads({ isTelugu }: DownloadsProps) {
  return (
    <section id="downloads" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="cyber-badge mb-4 mx-auto w-fit">
            <Download className="w-3 h-3" />
            {isTelugu ? 'డౌన్‌లోడ్స్' : 'Downloads'}
          </div>
          <h2 className="section-title mb-4">
            {isTelugu ? 'వనరులు & పోస్టర్‌లు' : 'Resources & Materials'}
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {isTelugu
              ? 'ఉచిత అవేర్‌నెస్ పోస్టర్లు, గైడ్లు మరియు ప్రాజెక్ట్ రిపోర్టు డౌన్‌లోడ్ చేసుకోండి'
              : 'Download free awareness posters, safety guides, and project documentation to share with your community'}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {resources.map((resource, i) => {
            const Icon = resource.icon;
            return (
              <div
                key={i}
                className={`glass-card-hover p-5 border ${resource.border}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl ${resource.bg} border ${resource.border} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-6 h-6 ${resource.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${resource.bg} ${resource.color}`}>
                        {resource.type}
                      </span>
                      <span className="text-xs text-cyber-textDim">{resource.size}</span>
                    </div>
                    <h3 className="text-sm font-bold text-cyber-text">{resource.title}</h3>
                  </div>
                </div>

                <p className="text-xs text-cyber-textMuted leading-relaxed mb-4">{resource.description}</p>

                <a
                  href={resource.href}
                  download={resource.isFile}
                  target={resource.isFile ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold ${resource.bg} border ${resource.border} ${resource.color} hover:opacity-80 transition-opacity`}
                >
                  <Download className="w-4 h-4" />
                  {resource.isFile ? 'Download PDF' : 'Download Free'}
                </a>
              </div>
            );
          })}
        </div>

        {/* External Resources */}
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold text-cyber-text mb-5 flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-cyber-primary" />
            Official Government Resources
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {externalResources.map((res, i) => (
              <a
                key={i}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col p-4 rounded-xl bg-cyber-bg/50 border border-cyber-border/40 hover:border-cyber-primary/40 hover:bg-cyber-primary/5 transition-all group"
              >
                <div className="text-sm font-semibold text-cyber-text group-hover:text-cyber-primary transition-colors mb-1">{res.name}</div>
                <div className="text-xs text-cyber-textMuted">{res.desc}</div>
                <div className="flex items-center gap-1 mt-2 text-xs text-cyber-primary">
                  Visit <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
