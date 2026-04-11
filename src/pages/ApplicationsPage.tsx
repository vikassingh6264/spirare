import { motion } from 'framer-motion';
import { Construction, Zap, Flame, Cpu, Pill, Coffee } from 'lucide-react';

const apps = [
  { industry: 'Steel', icon: <Construction />, items: ['Bell type annealing', 'Continuous annealing', 'Galvanizing lines'], desc: 'High purity hydrogen and nitrogen are critical for preventing oxidation and ensuring surface quality.' },
  { industry: 'Glass', icon: <Flame />, items: ['Float Glass production'], desc: 'Creating a protective atmosphere to ensure the perfect finish for modern architectural glass.' },
  { industry: 'Power', icon: <Zap />, items: ['Generator cooling'], desc: 'Using ultra-pure hydrogen for efficient cooling of large scale turbine generators.' },
  { industry: 'Electronics', icon: <Cpu />, items: ['Semiconductor manufacturing'], desc: 'Inert atmospheres and high purity gases for micro-electronic fabrication.' },
  { industry: 'Pharmaceuticals', icon: <Pill />, items: ['Synthesis and processing'], desc: 'Nitrogen blanketing and oxygen-free environments for sensitive medicine production.' },
  { industry: 'Food & Oil', icon: <Coffee />, items: ['Hydrogenation of oils/fats'], desc: 'On-site gas generation for processing industrial food products and edible oils.' }
];

const ApplicationsPage = () => {
  return (
    <div className="pt-32 pb-24 space-y-24 bg-white">
       <section className="container mx-auto px-6">
          <div className="max-w-3xl space-y-6">
             <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900">INDUSTRIAL <br /><span className="blue-gradient">APPLICATIONS</span></h1>
             <p className="text-slate-500 text-lg font-medium">
                Spirare gas generation systems are the backbone of diverse industrial sectors, 
                providing the precision and reliability required for critical manufacturing processes.
             </p>
          </div>
       </section>

       <section className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app: any, i: number) => (
            <motion.div
              key={app.industry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-3xl border-slate-200 hover:border-brand-blue/30 transition-all group shadow-sm hover:shadow-xl hover:shadow-brand-blue/5"
            >
              <div className="w-14 h-14 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-brand-blue mb-8 group-hover:bg-brand-blue group-hover:text-white transition-all">
                 {app.icon}
              </div>
              <h3 className="text-3xl font-bold mb-4 text-slate-900">{app.industry}</h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">{app.desc}</p>
              
              <div className="space-y-3">
                 <div className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em]">Key Processes</div>
                 {app.items.map((item: string) => (
                   <div key={item} className="text-xs font-bold text-slate-700 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue/40" />
                      {item}
                   </div>
                 ))}
              </div>
            </motion.div>
          ))}
       </section>

       {/* Secondary Industries */}
       <section className="py-24 bg-[#F8FAFC]">
          <div className="container mx-auto px-6 text-center space-y-8">
             <h2 className="text-2xl font-bold text-slate-400 uppercase tracking-widest">Also Serving Industries</h2>
             <div className="flex flex-wrap justify-center gap-6 text-sm font-black uppercase tracking-widest text-slate-600">
                <span>Petrochemical</span> • <span>Aerospace</span> • <span>Fuel Cells</span> • <span>Optical Fibre</span>
             </div>
          </div>
       </section>
    </div>
  );
};

export default ApplicationsPage;
