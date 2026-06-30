import { useState } from 'react';
import { Search, BookOpen, Clock, ArrowRight, Tag } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'The Rise of AI Voice Scams in India: How to Protect Yourself',
    category: 'AI Scams',
    date: 'June 10, 2026',
    readTime: '5 min',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    excerpt: 'AI-generated voice clones can now replicate anyone\'s voice with just 3 seconds of audio. Here\'s how criminals are using this technology and how you can stay protected.',
    tags: ['AI', 'Voice Clone', 'Fraud'],
    url: 'https://cybercrime.gov.in', // Official National Cyber Crime Reporting Portal for threat advisories
  },
  {
    id: 2,
    title: 'Safe UPI Transactions: A Complete Guide for Rural India',
    category: 'UPI Safety',
    date: 'May 28, 2026',
    readTime: '7 min',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400',
    excerpt: 'UPI fraud cases have increased by 120% in rural areas. This guide covers every aspect of safe digital payments, from QR codes to collect requests.',
    tags: ['UPI', 'Payments', 'Rural'],
    url: 'https://www.npci.org.in/what-we-do/upi/upi-safety-shield', // Official NPCI UPI Safety Shield Hub
  },
  {
    id: 3,
    title: 'Deepfake Technology: Understanding the Threat to Common Citizens',
    category: 'Latest Threats',
    date: 'May 15, 2026',
    readTime: '6 min',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400',
    excerpt: 'Deepfake videos have been used to scam people out of crores of rupees. Understanding how this technology works is your first defense.',
    tags: ['Deepfake', 'AI', 'Video'],
    url: 'https://www.cert-in.org.in', // Indian Computer Emergency Response Team (CERT-In) vulnerability center
  },
  {
    id: 4,
    title: 'Online Privacy in 2026: Essential Steps Every Indian Should Take',
    category: 'Online Privacy',
    date: 'May 5, 2026',
    readTime: '8 min',
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
    excerpt: 'From data brokers to app tracking, your digital privacy is under constant threat. Here are the practical steps to reclaim your privacy without expensive tools.',
    tags: ['Privacy', 'Security', 'Apps'],
    url: 'https://www.isea.gov.in', // Information Security Education and Awareness (ISEA) portal
  },
  {
    id: 5,
    title: 'Digital Literacy for Senior Citizens: A Family Guide',
    category: 'Digital Literacy',
    date: 'April 22, 2026',
    readTime: '6 min',
    image: 'https://images.pexels.com/photos/8363049/pexels-photo-8363049.jpeg?auto=compress&cs=tinysrgb&w=400',
    excerpt: 'Elderly Indians are the most targeted by cyber criminals. This family-friendly guide helps you protect your parents and grandparents from online scams.',
    tags: ['Senior Citizens', 'Family', 'Awareness'],
    url: 'https://isea.gov.in/Senior-Citizens', // Specialized ISEA Senior Citizen security deployment manual
  },
  {
    id: 6,
    title: 'Cybercrime Statistics India 2026: What the Numbers Tell Us',
    category: 'Latest Threats',
    date: 'April 10, 2026',
    readTime: '4 min',
    image: 'https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=400',
    excerpt: 'India reported 1.5 million cybercrime incidents in 2025. Breaking down the data: who is targeted, what scams are growing, and what you can do.',
    tags: ['Statistics', 'India', 'Trends'],
    url: 'https://ncrb.gov.in', // National Crime Records Bureau (NCRB) for official statistics tracking
  },
];

const categories = ['All', 'AI Scams', 'UPI Safety', 'Latest Threats', 'Online Privacy', 'Digital Literacy'];

const categoryColors: Record<string, string> = {
  'AI Scams': 'text-cyber-purple border-cyber-purple/30 bg-cyber-purple/5',
  'UPI Safety': 'text-cyber-accent border-cyber-accent/30 bg-cyber-accent/5',
  'Latest Threats': 'text-cyber-error border-cyber-error/30 bg-cyber-error/5',
  'Online Privacy': 'text-cyber-primary border-cyber-primary/30 bg-cyber-primary/5',
  'Digital Literacy': 'text-cyber-warning border-cyber-warning/30 bg-cyber-warning/5',
};

interface BlogProps {
  isTelugu: boolean;
}

export default function Blog({ isTelugu }: BlogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = articles.filter(a => {
    const matchesSearch = a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = activeCategory === 'All' || a.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blog" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <div className="cyber-badge mb-4 mx-auto w-fit">
            <BookOpen className="w-3 h-3" />
            {isTelugu ? 'సైబర్ అవేర్‌నెస్ బ్లాగ్' : 'Awareness Blog'}
          </div>
          <h2 className="section-title mb-4">
            {isTelugu ? 'డిజిటల్ అవేర్‌నెస్ బ్లాగ్' : 'Digital Awareness Blog'}
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {isTelugu
              ? 'తాజా సైబర్ ముప్పులు, AI స్కాములు మరియు డిజిటల్ సురక్షత వ్యాసాలు'
              : 'Stay updated on the latest cyber threats, AI scams, and digital safety practices'}
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyber-textDim" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-cyber-card border border-cyber-border/50 rounded-lg pl-10 pr-4 py-2.5 text-sm text-cyber-text placeholder:text-cyber-textDim focus:outline-none focus:border-cyber-primary/50"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'bg-cyber-primary/10 border-cyber-primary/40 text-cyber-primary'
                    : 'bg-cyber-card border-cyber-border/40 text-cyber-textMuted hover:border-cyber-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <Search className="w-12 h-12 text-cyber-textDim mx-auto mb-4" />
            <p className="text-cyber-textMuted">No articles found for your search.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => {
              const catColor = categoryColors[article.category] || 'text-cyber-primary border-cyber-primary/30 bg-cyber-primary/5';
              return (
                // Added the 'group' class here to fix the hover transformation on the image container
                <div key={article.id} className="group glass-card-hover overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="relative overflow-hidden h-44">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg/80 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${catColor}`}>
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-cyber-textDim mb-3">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime} read
                        <span>•</span>
                        {article.date}
                      </div>

                      {/* Wrapped the header in an anchor tag so clicking the text also redirects safely */}
                      <a 
                        href={article.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block text-base font-bold text-cyber-text mb-2 leading-snug hover:text-cyber-primary transition-colors cursor-pointer"
                      >
                        {article.title}
                      </a>
                      <p className="text-sm text-cyber-textMuted leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
                    </div>
                  </div>

                  <div className="p-5 pt-0 flex items-center justify-between mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {article.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-cyber-border/30 text-cyber-textDim">
                          <Tag className="w-2.5 h-2.5" />{tag}
                        </span>
                      ))}
                    </div>
                    {/* CHANGED: Swapped static button to an active anchor link pointing to the content website */}
                    <a 
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-cyber-primary hover:gap-2 transition-all font-semibold"
                    >
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
