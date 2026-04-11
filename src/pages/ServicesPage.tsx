import { motion } from 'framer-motion';
import { PenTool, Hammer, Play, HeartPulse, Settings2, ShieldCheck } from 'lucide-react';

const services = [
  { 
    title: 'Consultancy & Design', 
    icon: <PenTool />, 
    desc: 'Expert engineering consultancy to design the optimal gas generation plant for your specific facility requirements.' 
  },
  { 
    title: 'Manufacturing & Assembly', 
    icon: <Hammer />, 
    desc: 'State-of-the-art manufacturing of gas skids and control units in our Noida works facility.' 
  },
  { 
    title: 'Installation & Start-up', 
    icon: <Play />, 
    desc: 'On-site installation and commissioning by our experienced engineering teams to ensure rapid ramp-up.' 
  },
  { 
    title: 'Lifetime Maintenance', 
    icon: <HeartPulse />, 
    desc: 'Continuous support through AMC agreements and on-call technical assistance for maximum plant uptime.' 
  },
  { 
    title: 'Spare Parts Logistics', 
    icon: <Settings2 />, 
    desc: 'Immediate availability of critical spares for all our gas systems to prevent operational downtime.' 
  },
  { 
    title: 'Upgradations', 
    icon: <ShieldCheck />, 
    desc: 'Modernizing existing gas plants with the latest pressure control and purification technologies.' 
  }
];

const ServicesPage = () => {
  return (
    <div className="pt-32 pb-24 space-y-24 bg-white">
       <section className="container mx-auto px-6">
          <div className="max-w-3xl space-y-6">
             <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900">TURNKEY <br /><span className="blue-gradient">SOLUTIONS</span></h1>
             <p className="text-slate-500 text-lg font-medium">
                Spirare Energy provides end-to-end lifecycle support for gas generation plants, 
                from initial concept and design to site commissioning and lifetime maintenance.
             </p>
          </div>
       </section>

       <section className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((item: any, i: number) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6 p-8 glass rounded-3xl border-slate-200 hover:border-brand-blue/30 transition-all shadow-sm hover:shadow-xl hover:shadow-brand-blue/5 group"
            >
              <div className="w-12 h-12 bg-brand-blue text-white rounded-xl flex items-center justify-center shadow-lg shadow-brand-blue/20 group-hover:scale-110 transition-transform">
                 {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
       </section>
    </div>
  );
};

export default ServicesPage;
