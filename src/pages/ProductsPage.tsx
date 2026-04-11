import { motion } from 'framer-motion';
import { Settings, Zap, Wind } from 'lucide-react';

const categories = [
  {
    name: 'Hydrogen Gas Systems',
    icon: <Zap size={24} />,
    items: [
      { 
        title: 'Sealed Unipolar Cells', 
        desc: 'Stuart Type technology providing ultra-pure hydrogen gas on-site through advanced electrolytic processes.',
        specs: ['Purity: 99.999%', 'On-site generation', 'Automated operation']
      },
      { 
        title: 'High Pressure Bipolar', 
        desc: 'Bipolar electrolysers operating at pressures up to 32 Bar, engineered for high-volume industrial demand.',
        specs: ['Up to 32 Bar pressure', 'Technical tie-up: PERIC', 'High Efficiency']
      },
      { 
        title: 'COG Hydrogen Recovery', 
        desc: 'Extraction specialist technology for recovering high-purity hydrogen from Coke Oven Gas.',
        specs: ['Industrial Resource Recovery', 'Scalable capacity', 'Environmental focus']
      },
      { 
        title: 'Methanol Cracking', 
        desc: 'Hydrogen generation through methanolysis, ideal for facilities without stable electrolysis inputs.',
        specs: ['Safe Cracking process', 'Rapid startup', 'Low footprint']
      }
    ]
  },
  {
    name: 'PSA Gas Systems',
    icon: <Wind size={24} />,
    items: [
      { 
        title: 'Nitrogen Generation (PSA)', 
        desc: 'Pressure Swing Adsorption based technology for reliable industrial nitrogen supply.',
        specs: ['Models: SE-MS, SE-DX', 'High Purity', 'Automatic PLC']
      },
      { 
        title: 'Oxygen Generation (PSA)', 
        desc: 'On-site oxygen production for steel, glass, and pharmaceutical applications.',
        specs: ['High Efficiency', 'Continuous output', 'Low maintenance']
      }
    ]
  },
  {
    name: 'Ancillary Equipment',
    icon: <Settings size={24} />,
    items: [
      { title: 'Air Dryers & Purifiers', desc: 'Removal of moisture and oil for clean industrial process air.' },
      { title: 'Cylinder Cascades', desc: 'Safe and high-capacity storage for generated gases.' },
      { title: 'Vaporisers', desc: 'Ambient and steam heated units for rapid gasification.' },
      { title: 'Manifold & PRV Stations', desc: 'Precision control and regulation systems for plant-wide gas distribution.' }
    ]
  }
];

const ProductsPage = () => {
  return (
    <div className="pt-32 pb-24 space-y-32 bg-white">
       <section className="container mx-auto px-6">
          <div className="max-w-3xl space-y-6">
             <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900">PRODUCT <br /><span className="blue-gradient">PORTFOLIO</span></h1>
             <p className="text-slate-500 text-lg font-medium leading-relaxed">
                Engineering excellence in on-site gas generation. From electrolytic cells to advanced purification, 
                our systems are built for the most demanding industrial requirements.
             </p>
          </div>
       </section>

       {categories.map((cat, i) => (
         <section key={cat.name} className={`py-24 ${i % 2 !== 0 ? 'bg-[#F8FAFC]' : ''}`}>
           <div className="container mx-auto px-6 space-y-16">
              <div className="flex items-center gap-4 border-b border-slate-200 pb-6">
                 <div className="text-brand-blue">{cat.icon}</div>
                 <h2 className="text-3xl font-bold tracking-tight text-slate-900">{cat.name}</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                 {cat.items.map((item: any) => (
                   <motion.div
                     key={item.title}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className="glass p-8 rounded-3xl border-slate-200 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-brand-blue/5 transition-all group"
                   >
                     <div className="space-y-4">
                        <h3 className="text-2xl font-bold group-hover:text-brand-blue transition-colors text-slate-900">{item.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
                        
                        {item.specs && (
                           <div className="flex flex-wrap gap-2 pt-4">
                              {item.specs.map((s: string) => (
                                <span key={s} className="px-3 py-1 bg-brand-blue/5 border border-brand-blue/10 rounded-full text-[10px] font-bold text-brand-blue tracking-widest uppercase">
                                   {s}
                                </span>
                              ))}
                           </div>
                        )}
                     </div>
                     <button className="mt-8 text-xs font-bold text-slate-400 hover:text-brand-blue transition-colors tracking-[0.2em] uppercase">
                        View Technical Docs
                     </button>
                   </motion.div>
                 ))}
              </div>
           </div>
         </section>
       ))}
    </div>
  );
};

export default ProductsPage;
