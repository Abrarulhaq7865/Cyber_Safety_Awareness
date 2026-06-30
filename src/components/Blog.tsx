import { useState } from 'react';
import { Search, BookOpen, Clock, ArrowRight, Tag, X, ShieldAlert } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: {
      en: 'The Rise of AI Voice Scams in India: How to Protect Yourself',
      te: 'భారతదేశంలో AI వాయిస్ స్కామ్‌ల పెరుగుదల: మిమ్మల్ని మీరు ఎలా రక్షించుకోవాలి'
    },
    category: { en: 'AI Scams', te: 'AI స్కాములు' },
    date: 'June 10, 2026',
    readTime: { en: '5 min', te: '5 నిమిషాలు' },
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    excerpt: {
      en: "AI-generated voice clones can now replicate anyone's voice with just 3 seconds of audio. Here's how criminals are using this technology.",
      te: 'AI-ఉత్పత్తి వాయిస్ క్లోన్లు కేవలం 3 సెకన్ల ఆడియోతో ఎవరి వాయిస్‌నైనా అనుకరించగలవు. నేరస్థులు దీనిని ఎలా వాడుతున్నారో ఇక్కడ చూడండి.'
    },
    // Added full detailed article body content
    content: {
      en: "AI-generated voice cloning technology has reached an alarming level of accuracy. Scammers scrape a target's voice profile from public social media videos or short phone calls. Using basic tools, they generate real-time voice messages claiming to be a family member in an emergency needing urgent digital fund transfers.\n\n🔒 HOW TO PROTECT YOURSELF:\n1. Establish a secret 'Family Passphrase' known only to your inner circle to verify identity during suspicious emergency calls.\n2. Never transfer funds immediately based entirely on a phone call. Hang up and call the family member back directly on their normal mobile connection.",
      te: "AI-వాయిస్ క్లోనింగ్ టెక్నాలజీ భయంకరమైన రీతిలో ఎదుగుతోంది. మోసగాళ్లు సోషల్ మీడియా వీడియోల నుండి మీ వాయిస్‌ని సేకరిస్తున్నారు. కేవలం 3 సెకన్ల ఆడియోతో, మీ బంధువులు ప్రమాదంలో ఉన్నట్లుగా మరియు అత్యవసరంగా డబ్బులు పంపాలంటూ నకిలీ వాయిస్ క్రియేట్ చేసి కాల్స్ చేస్తున్నారు.\n\n🔒 ఎలా రక్షణ పొందాలి:\n1. మీ కుటుంబ సభ్యుల కోసం ఒక రహస్య 'ఫ్యామిలీ పాస్‌వర్డ్' సెట్ చేసుకోండి. ప్రమాదంలో ఉన్నామని కాల్ వస్తే ఆ కోడ్ అడగండి.\n2. ఫోన్ కాల్ నమ్మి వెంటనే డబ్బులు పంపకండి. ఫోన్ కట్ చేసి, మీ కుటుంబ సభ్యుడి సాధారణ నంబర్‌కు నేరుగా కాల్ చేసి నిర్ధారించుకోండి."
    },
    tags: ['AI', 'Voice Clone', 'Fraud'],
  },
  {
    id: 2,
    title: {
      en: 'Safe UPI Transactions: A Complete Guide for Rural India',
      te: 'సురక్షితమైన UPI లావాదేవీలు: గ్రామీణ భారతదేశం కోసం పూర్తి గైడ్'
    },
    category: { en: 'UPI Safety', te: 'UPI భద్రత' },
    date: 'May 28, 2026',
    readTime: { en: '7 min', te: '7 నిమిషాలు' },
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400',
    excerpt: {
      en: 'UPI fraud cases have increased by 120% in rural areas. This guide covers every aspect of safe digital payments.',
      te: 'గ్రామీణ ప్రాంతాల్లో UPI మోసాల కేసులు 120% పెరిగాయి. ఈ గైడ్ డిజిటల్ చెల్లింపుల భద్రతకు సంబంధించిన అన్ని అంశాలను వివరిస్తుంది.'
    },
    content: {
      en: "UPI transaction interfaces are exceptionally safe, but fraudsters manipulate psychology to execute thefts. The most common attack vector is the 'Receive Money Request' scam, where attackers trick victims into typing their secret UPI PIN under the false premise that they are receiving prize funds.\n\n🔒 HOW TO PROTECT YOURSELF:\n1. Remember: A UPI PIN is ONLY required to SEND money, never to receive it.\n2. Treat your UPI QR codes carefully and never scan random public codes sent over WhatsApp to claim dynamic scratch cards.",
      te: "UPI పేమెంట్స్ చాలా సురక్షితమైనవి, కానీ మోసగాళ్లు మన అజ్ఞానాన్ని వాడుకుంటున్నారు. 'డబ్బులు వస్తాయి' అని చెప్పి ఒక లింక్ లేదా రిక్వెస్ట్ పంపి మన చేత UPI PIN ఎంటర్ చేయిస్తారు.\n\n🔒 ఎలా రక్షణ పొందాలి:\n1. గుర్తుంచుకోండి: కేవలం డబ్బులు పంపడానికి మాత్రమే UPI PIN అవసరం, డబ్బులు తీసుకోవడానికి PIN అవసరం లేదు.\n2. వాట్సాప్‌లో వచ్చే నకిలీ స్క్రాచ్ కార్డ్స్ లేదా బహుమతుల QR కోడ్‌లను ఎప్పుడూ స్కాన్ చేయకండి."
    },
    tags: ['UPI', 'Payments', 'Rural'],
  }
];

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
  
  // NEW: State to manage which article is being read in the pop-up modal
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

  const lang = isTelugu ? 'te' : 'en';

  const categories = isTelugu 
    ? ['అన్నీ', 'AI స్కాములు', 'UPI భద్రత', 'తాజా ముప్పులు', 'ఆన్‌లైన్ ప్రైవసీ', 'డిジナల్ అక్షరాస్యత']
    : ['All', 'AI Scams', 'UPI Safety', 'Latest Threats', 'Online Privacy', 'Digital Literacy'];

  const filtered = articles.filter(a => {
    const titleText = a.title[lang].toLowerCase();
    const excerptText = a.excerpt[lang].toLowerCase();
    const search = searchTerm.toLowerCase();

    const matchesSearch = titleText.includes(search) || 
                          excerptText.includes(search) || 
                          a.tags.some(t => t.toLowerCase().includes(search));
    
    const matchesCategory = activeCategory === 'All' || activeCategory === 'అన్నీ' || 
                            a.category.en === activeCategory || a.category.te === activeCategory;
                            
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
              placeholder={isTelugu ? "వ్యాసాలను శోధించండి..." : "Search articles..."}
              aria-label="Search articles"
              className="w-full bg-cyber-card border border-cyber-border/50 rounded-lg pl-10 pr-4 py-2.5 text-sm text-cyber-text placeholder:text-cyber-textDim focus:outline-none focus:border-cyber-primary/50"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1">
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
            <p className="text-cyber-textMuted">
              {isTelugu ? "శోధనకు సరిపడే వ్యాసాలు ఏవీ లేవు." : "No articles found for your search."}
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article) => {
              const catColor = categoryColors[article.category.en] || 'text-cyber-primary border-cyber-primary/30 bg-cyber-primary/5';
              return (
                <div key={article.id} className="group glass-card-hover overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="relative overflow-hidden h-44">
                      <img
                        src={article.image}
                        alt={article.title[lang]}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg/80 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${catColor}`}>
                          {article.category[lang]}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center gap-3 text-xs text-cyber-textDim mb-3">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime[lang]} {isTelugu ? '' : 'read'}
                        <span>•</span>
                        {article.date}
                      </div>

                      {/* NEW: Attached modal activation trigger to title element click */}
                      <h3 
                        onClick={() => setSelectedArticle(article)}
                        className="text-base font-bold text-cyber-text mb-2 leading-snug hover:text-cyber-primary transition-colors cursor-pointer"
                      >
                        {article.title[lang]}
                      </h3>
                      <p className="text-sm text-cyber-textMuted leading-relaxed mb-4 line-clamp-2">
                        {article.excerpt[lang]}
                      </p>
                    </div>
                  </div>

                  {/* Button Wrapper and trigger logic */}
                  <div className="p-5 pt-0 flex items-center justify-between mt-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {article.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-cyber-border/30 text-cyber-textDim">
                          {tag}
                        </span>
                      ))}
                    </div>
                    {/* FIXED: Attached onClick listener to set selected article state active */}
                    <button 
                      onClick={() => setSelectedArticle(article)}
                      className="flex items-center gap-1 text-xs text-cyber-primary hover:gap-2 transition-all font-semibold"
                    >
                      {isTelugu ? 'చదవండి' : 'Read'} <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ========================================================= */}
        {/* NEW COMPONENT PART: PREMIUM MODAL DRAWER POPUP CONTAINER  */}
        {/* ========================================================= */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-cyber-bg/70 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-2xl overflow-hidden bg-cyber-card border border-cyber-border/60 rounded-2xl max-h-[85vh] flex flex-col shadow-2xl">
              
              {/* Header Image Cover */}
              <div className="relative h-48 sm:h-56 w-full shrink-0">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title[lang]} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-card via-cyber-card/40 to-transparent" />
                
                {/* Close Button Trigger */}
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-cyber-bg/60 border border-cyber-border/40 text-cyber-text hover:bg-cyber-primary/20 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Article Body */}
              <div className="p-6 overflow-y-auto flex-1 text-left">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${categoryColors[selectedArticle.category.en]}`}>
                    {selectedArticle.category[lang]}
                  </span>
                  <span className="text-xs text-cyber-textDim">{selectedArticle.date}</span>
                </div>

                <h3 className="text-xl font-bold text-cyber-text mb-4 leading-snug">
                  {selectedArticle.title[lang]}
                </h3>

                {/* Main Text Content */}
                <p className="text-sm text-cyber-textMuted leading-relaxed whitespace-pre-line bg-cyber-bg/30 p-4 rounded-xl border border-cyber-border/20">
                  {selectedArticle.content[lang]}
                </p>
              </div>

              {/* Footer Safety Notice */}
              <div className="p-4 border-t border-cyber-border/30 bg-cyber-bg/40 flex items-center gap-2 text-xs text-cyber-primary shrink-0">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>{isTelugu ? 'సురక్షితంగా ఉండండి • సైబర్ క్రైమ్ హెల్ప్‌లైన్: 1930' : 'Stay Alert • Secure your devices. National Helpline: 1930'}</span>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}
