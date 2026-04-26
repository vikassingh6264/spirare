import { motion } from 'framer-motion';

const STATS = [
  {
    label: 'YEARS OF EXPERIENCE',
    value: '25+',
    description: 'Pioneering energy solutions since 1999.'
  },
  {
    label: 'GLOBAL CLIENTS',
    value: '500+',
    description: 'Trusted by industry leaders worldwide.'
  },
  {
    label: 'PROJECTS COMPLETED',
    value: '1200+',
    description: 'Delivering excellence in every installation.'
  },
  {
    label: 'COUNTRIES SERVED',
    value: '40+',
    description: 'Extending our reach across 5 continents.'
  }
];

const StatsSection = () => {
  return (
    <section className="relative py-10 bg-white overflow-hidden">
      <div className="container mx-auto p-6 bg-[#B8733315]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative group flex align-center justify-center"
            >
              <div className="flex flex-col space-y-2">
                <span className="text-5xl md:text-6xl font-black tracking-tighter text-[#B87333]">
                  {stat.value}
                </span>
                <span className="text-brand-navy font-bold text-xs tracking-[0.2em] uppercase">
                  {stat.label}
                </span>
                <div className="h-0.5 w-12 bg-[#B87333]/30 group-hover:w-20 transition-all duration-500" />
                <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
                  {stat.description}
                </p>
              </div>
              <div className="absolute -right-4 -top-4 text-9xl font-black text-slate-50 opacity-[0.03] select-none pointer-events-none">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
};

export default StatsSection;
