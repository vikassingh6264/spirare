import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Settings, Zap, Award } from 'lucide-react';

const CATEGORIES = [
  {
    id: 'manufacturing',
    title: 'MANUFACTURING EXCELLENCE',
    icon: <Settings size={32} />,
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
    id: 'engineering',
    title: 'ENGINEERING PRECISION',
    icon: <Zap size={32} />,
    points: [
      'Advanced 3D modeling and simulation for optimized designs',
      'Custom engineering solutions tailored to specific industrial needs',
      'Continuous R&D to integrate the latest technological advancements',
      'Focus on energy efficiency and system performance',
      'In-house design team with decades of industry expertise'
    ]
  },
  {
    id: 'quality',
    title: 'QUALITY ASSURANCE',
    icon: <Shield size={32} />,
    points: [
      'ISO 9001:2015 certified quality management systems',
      'Comprehensive non-destructive testing (NDT) capabilities',
      'Third-party inspection coordination for global standards',
      'Strict adherence to international safety regulations',
      'Digitalized quality records for instant accessibility'
    ]
  },
  {
    id: 'service',
    title: 'OPERATIONAL RELIABILITY',
    icon: <Award size={32} />,
    points: [
      '24/7 technical support and on-site maintenance services',
      'Rapid response for spare parts and emergency repairs',
      'Global logistics network for timely delivery',
      'Comprehensive operator training and documentation',
      'Long-term maintenance contracts for system longevity'
    ]
  }
];

const ExcellenceSection = () => {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0].id);

  const activeCategory = CATEGORIES.find(c => c.id === activeTab) || CATEGORIES[0];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="h-px w-12 bg-brand-blue" />
              <span className="text-brand-blue font-bold tracking-[0.2em] uppercase text-sm">
                Our Standards
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-brand-navy tracking-tight">
              COMMITTED TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-700">EXCELLENCE</span>
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-12 items-stretch min-h-[500px]">
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
              {CATEGORIES.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`relative flex items-center gap-6 p-6 rounded-2xl text-left transition-all duration-300 border ${activeTab === category.id
                    ? 'bg-white shadow-md border-slate-200 scale-102 z-10'
                    : 'bg-white/60 border border-gray-200 hover:bg-white'
                    }`}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`p-3 rounded-xl transition-colors ${activeTab === category.id ? 'bg-brand-blue text-white' : 'bg-slate-100 text-slate-400'
                    }`}>
                    {category.icon}
                  </div>
                  <span className={`font-bold tracking-tight text-lg transition-colors ${activeTab === category.id ? 'text-brand-navy' : 'text-slate-400'
                    }`}>
                    {category.title}
                  </span>
                  {activeTab === category.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute right-6 text-brand-blue"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-brand-blue shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </div>
            <div className="w-full lg:w-2/3 flex">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50 flex flex-col border border-slate-100 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-12 opacity-50 pointer-events-none text-brand-blue">
                    {activeCategory.icon}
                  </div>
                  <h3 className="text-2xl font-black text-brand-navy mb-8 tracking-wide">
                    {activeCategory.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {activeCategory.points.map((point, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 + 0.2 }}
                        className="flex gap-4 group"
                      >
                        <div className="mt-1.5 shrink-0">
                          <div className="w-2 h-2 rounded-full bg-brand-blue/70 group-hover:bg-brand-blue transition-colors duration-300" />
                        </div>
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                          {point}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-auto pt-8 flex items-center justify-between border-t border-slate-50">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-300">
                      Standard Compliance: IS / ISO / ASME
                    </span>
                    <div className="flex gap-2">
                      <div className="w-8 h-1 bg-brand-blue" />
                      <div className="w-4 h-1 bg-slate-100" />
                      <div className="w-4 h-1 bg-slate-100" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
