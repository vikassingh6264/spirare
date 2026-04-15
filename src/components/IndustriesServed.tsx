import { motion } from 'framer-motion';
import { useState } from 'react';

const industries = [
  {
    title: 'Pharmaceutical',
    description: 'Ultra-pure hydrogen for chemical synthesis and laboratory applications. Meets strict regulatory standards for API manufacturing and research facilities.',
    image: '/industries/pharma.png',
    fallbackImage: 'https://images.unsplash.com/photo-1532188318464-7c364601b1df?w=600&h=400&fit=crop'
  },
  {
    title: 'Steel Industry',
    description: 'Reducing agents and protective atmospheres for high-quality steel production. Enables green steel manufacturing with hydrogen-based direct reduction.',
    image: '/industries/steel.png',
    fallbackImage: 'https://images.unsplash.com/photo-1562059390-a761a084768e?w=600&h=400&fit=crop'
  },
  {
    title: 'Electronics',
    description: 'Precise gas generation for semiconductor fabrication and clean-room processes. Essential for epitaxy, annealing, and surface treatment.',
    image: '/industries/electronics.png',
    fallbackImage: 'https://images.unsplash.com/photo-1581092335871-4e9e18f6e203?w=600&h=400&fit=crop'
  },
  {
    title: 'Power Generation',
    description: 'Generator cooling and high-pressure hydrogen for energy infrastructure. Supports hydrogen turbines and fuel cell integration.',
    image: '/industries/power.png',
    fallbackImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop'
  },
  {
    title: 'Petrochemical',
    description: 'On-site hydrogen for refining, desulfurization, and chemical processing. Reduces transportation risks and ensures continuous supply.',
    image: '/industries/petrochemical.png',
    fallbackImage: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop'
  },
];

const IndustriesServed = () => {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (title: string) => {
    setImageErrors(prev => ({ ...prev, [title]: true }));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="space-y-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-12 bg-gradient-to-r from-brand-blue to-transparent" />
              <span className="text-brand-blue text-sm font-bold tracking-[0.2em] uppercase">
                Applications
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-navy"
            >
              INDUSTRIES WE{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-[#0052BF]">
                SERVE
              </span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-xl lg:text-right"
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              Spirare Energy provides ultra-pure hydrogen on-site for a variety of
              industrial and advanced technology applications, ensuring reliability
              across diverse sectors.
            </p>
          </motion.div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative h-80 md:h-72 overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0 transition-transform duration-700 ease-out group-hover:scale-110">
                <img
                  src={imageErrors[industry.title] ? industry.fallbackImage : industry.image}
                  alt={industry.title}
                  className="w-full h-full object-cover"
                  onError={() => handleImageError(industry.title)}
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end gap-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="h-0.5 bg-brand-blue transition-all duration-300 group-hover:w-20"
                />

                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-brand-blue transition-colors duration-300">
                  {industry.title}
                </h3>

                <p className="text-gray-200 text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75 leading-relaxed">
                  {industry.description}
                </p>
              </div>
              <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;