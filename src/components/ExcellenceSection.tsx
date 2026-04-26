import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, FlaskConical, Factory } from 'lucide-react';

const CATEGORIES = [
  {
    id: 'manufacturing',
    title: 'MANUFACTURING EXCELLENCE',
    icon: <Factory size={40} />,
    color: 'from-brand-blue to-blue-900',
    points: [
      'Precision driven manufacturing with disciplined process control',
      'Controlled fabrication using approved materials and qualified procedures',
      'Skilled workmanship aligned with stringent quality standards',
      'Rigorous inspection and testing at every stage of production',
      'Complete documentation and full material traceability',
      'Designed for long service life and reliable performance in demanding applications'
    ]
  },
  {
    id: 'sampling',
    title: 'MANUAL SAMPLING SYSTEM',
    icon: <FlaskConical size={40} />,
    color: 'from-brand-blue to-blue-900',
    points: [
      'Sampling Is Our DNA: accuracy drives our engineering decisions',
      'Delivering truly representative samples from process tap to laboratory',
      'Engineered for critical industrial applications and harsh environments',
      'Focus on process integrity, workplace safety, and environmental compliance',
      'Standard and custom solutions for liquid, gas, and liquified gas sampling'
    ]
  },
  {
    id: 'hydrogen',
    title: 'ON-SITE H2 GENERATION',
    icon: <Zap size={40} />,
    color: 'from-brand-blue to-blue-900',
    points: [
      'Variable capacity hydrogen plants (Alkaline, PEM, and SOEC)',
      'Complete ecosystem: purification, compression, storage, and dispensers',
      'High reliability fuel cell technology for toughest challenges',
      'Serving Steel, Green Ammonia, Power, and Aerospace industries',
      'Sustainable solutions for the global energy transition'
    ]
  }
];

const ExcellenceSection = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            {/* <div className="h-px w-12 bg-brand-blue" /> */}
            <span className="text-brand-blue font-bold tracking-[0.2em] uppercase text-sm">
              Our Capabilities
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-center text-brand-navy tracking-tight uppercase">
            Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-700">Technology</span> & Expertise
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 items-center min-h-[300px]">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              onMouseEnter={() => setHoveredId(category.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative overflow-hidden transition-all duration-700 ease-in-out cursor-pointer group rounded-3xl ${hoveredId === category.id
                ? 'flex-[4] h-[400px] shadow-2xl'
                : 'flex-1 h-[450px] bg-slate-50'
                }`}
            >
              {/* Background with Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-700 ${category.color} ${hoveredId === category.id ? 'opacity-100' : 'opacity-0'
                }`} />

              {/* Content Wrapper */}
              <div className="relative h-full p-8 flex flex-col">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-8">
                  <div className={`p-4 rounded-2xl transition-all duration-500 ${hoveredId === category.id ? 'bg-white/20 text-white rotate-0' : 'bg-white text-brand-blue shadow-lg group-hover:rotate-0'
                    }`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-xl lg:text-2xl font-black tracking-tight transition-colors duration-500 ${hoveredId === category.id ? 'text-white' : 'text-brand-navy'
                    } ${hoveredId !== category.id && 'lg:[writing-mode:vertical-rl] lg:rotate-180'}`}>
                    {category.title}
                  </h3>
                </div>

                <AnimatePresence>
                  {hoveredId === category.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="mt-4 flex-1"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        {category.points.map((point, index) => (
                          <div key={index} className="flex gap-4 group/item">
                            <div className="mt-1.5 shrink-0">
                              <div className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover/item:bg-white transition-colors" />
                            </div>
                            <p className="text-white/80 text-sm md:text-[13px] leading-relaxed">
                              {point}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
