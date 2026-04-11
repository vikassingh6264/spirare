import { motion } from 'framer-motion';

const industries = [
  {
    title: 'Pharmaceutical',
    description: 'Ultra-pure hydrogen for chemical synthesis and laboratory applications.',
    image: '/industries/pharma.png',
  },
  {
    title: 'Steel Industry',
    description: 'Reducing agents and protective atmospheres for high-quality steel production.',
    image: '/industries/steel.png',
  },
  {
    title: 'Electronics',
    description: 'Precise gas generation for semiconductor fabrication and clean-room processes.',
    image: '/industries/electronics.png',
  },
  {
    title: 'Power Generation',
    description: 'Generator cooling and high-pressure hydrogen for energy infrastructure.',
    image: '/industries/power.png',
  },
  {
    title: 'Food Packaging',
    description: 'High-purity gases for modified atmosphere packaging (MAP) and preservation.',
    image: '/industries/food_packaging.png',
  },
  {
    title: 'Petrochemical',
    description: 'On-site hydrogen for refining, desulfurization, and chemical processing.',
  },
];

const IndustriesServed = () => {
  return (
    <section className="py-24 bg-brand-dark text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
          <div className="space-y-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-12 bg-cyan-500" />
              <span className="text-cyan-400 text-sm font-bold tracking-[0.2em] uppercase">
                Applications
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              INDUSTRIES WE <span className="text-cyan-500">SERVE</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="text-gray-400 text-lg leading-relaxed">
              Spirare Energy provides ultra-pure hydrogen on-site for a variety of
              industrial and advanced technology applications, ensuring reliability
              across diverse sectors.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[400px] overflow-hidden rounded-3xl border border-white/10"
            >
              {/* Image Background */}
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
                <img
                  src={industry.image || '/industries/petrochemical.png'}
                  alt={industry.title}
                  className="w-full h-full object-cover brightness-50 group-hover:brightness-[0.4] transition-all"
                />
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end gap-4">
                <div className="h-1 w-12 bg-cyan-500 transition-all duration-300 group-hover:w-24" />
                <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-gray-300 text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {industry.description}
                </p>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity duration-1000 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transform transition-transform" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
