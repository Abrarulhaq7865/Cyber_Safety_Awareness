import { useState } from 'react';
import { X, ZoomIn, Images, Filter } from 'lucide-react';

const categories = ['All', 'Surveys', 'Awareness Sessions', 'Posters'];

const galleryImages = [
  {
    id: 1,
    category: 'Awareness Sessions',
    title: 'Community Awareness Session in Akkampalle village',
    description: 'First community awareness session with 35+ residents in Akkampalle Village',
    src: '/images/1.jpeg',
    tall: true,
  },
  {
    id: 2,
    category: 'Surveys',
    title: 'Door-to-Door Survey',
    description: 'Conducting baseline digital literacy survey across 50 households',
    src: '/images/2.jpeg',
    tall: false,
  },
  {
    id: 3,
    category: 'Awareness Sessions',
    title: 'UPI Safety Workshop',
    description: 'Live demonstration of safe UPI payment practices and QR code fraud prevention',
    src: '/images/3.jpeg',
    tall: false,
  },
  {
    id: 4,
    category: 'Surveys',
    title: 'Cyberbullying Prevention',
    description: 'Interactive cyber safety session on cyberbullying',
    src: '/images/4.jpeg',
    tall: true,
  },
  {
    id: 5,
    category: 'Awareness Sessions',
    title: 'Cyber Safety Awareness',
    description: 'Telugu-English bilingual awareness poster displayed across the village',
    src: '/images/5.jpeg',
    tall: false,
  },
  {
    id: 6,
    category: 'Surveys',
    title: 'Cyber Safety Campaign',
    description: 'Teaching people about privacy auditor settings and responsible apps use',
    src: '/images/6.jpeg',
    tall: false,
  },
  {
    id: 7,
    category: 'Awareness Sessions',
    title: "Women's SHG Digital Safety",
    description: "Dedicated OTP security session for women's self-help groups",
    src: '/images/7.jpeg',
    tall: true,
  },
  {
    id: 8,
    category: 'Surveys',
    title: 'Parent Awareness Session',
    description: 'Training parents on parental controls and monitoring children online',
    src: '/images/8.jpeg',
    tall: false,
  },
  {
    id: 9,
    category: 'Awareness Sessions',
    title: 'Community Mapping',
    description: 'Meeting with people and explaining about Cyber Threats',
    src: '/images/9.jpeg',
    tall: false,
  },
   {
    id: 10,
    category: 'Posters',
    title: 'Cyber Safety Awareness Poster',
    description: 'Displayed CSP Poster across the village ',
    src: '/images/10.webp',
    tall: false,
  },
];

interface GalleryProps {
  isTelugu: boolean;
}

export default function Gallery({ isTelugu }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightbox, setLightbox] = useState<typeof galleryImages[0] | null>(null);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="cyber-badge mb-4 mx-auto w-fit">
            <Images className="w-3 h-3" />
            {isTelugu ? 'ప్రాజెక్ట్ గ్యాలరీ' : 'Project Gallery'}
          </div>
          <h2 className="section-title mb-4">
            {isTelugu ? 'క్షేత్ర కార్యకలాపాలు' : 'Field Activities'}
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {isTelugu
              ? 'అక్కంపల్లి గ్రామంలో నిర్వహించిన అవేర్‌నెస్ కార్యక్రమాల ఫోటోలు'
              : 'Visual documentation of awareness sessions, workshops, and community activities conducted in Akkampalle Village'}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-cyber-primary text-cyber-bg shadow-cyber-sm'
                  : 'bg-cyber-card/80 text-cyber-textMuted border border-cyber-border/50 hover:border-cyber-primary/30 hover:text-cyber-text'
              }`}
            >
              {cat === 'All' && <Filter className="w-3.5 h-3.5" />}
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((img) => (
            <div
              key={img.id}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl border border-cyber-border/40 hover:border-cyber-primary/40 transition-all duration-300"
              onClick={() => setLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.title}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${img.tall ? 'h-64' : 'h-44'}`}
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <div className="text-xs font-bold text-cyber-primary mb-1">{img.category}</div>
                <div className="text-sm font-semibold text-white">{img.title}</div>
                <ZoomIn className="absolute top-3 right-3 w-5 h-5 text-cyber-primary" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <div
              className="relative max-w-4xl w-full glass-card overflow-hidden animate-fade-in"
              onClick={e => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.title} className="w-full max-h-[70vh] object-contain" />
              <div className="p-5">
                <div className="cyber-badge mb-2">{lightbox.category}</div>
                <h3 className="text-lg font-bold text-cyber-text mb-1">{lightbox.title}</h3>
                <p className="text-sm text-cyber-textMuted">{lightbox.description}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-cyber-bg/80 border border-cyber-border flex items-center justify-center text-cyber-textMuted hover:text-cyber-text transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
