import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, CheckCircle2 } from 'lucide-react';
import TeamSection from '../components/TeamSection';

const AboutPage = () => {
  return (
    <div className="bg-white overflow-hidden">
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/about_hero.png"
            alt="About Spirare"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/60 to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-6"
          >
            <div className="flex items-center gap-2 text-cyan-500 font-bold tracking-widest uppercase text-sm">
              <span className="w-8 h-px bg-cyan-500" />
              Company Overview
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white uppercase leading-tight">
              ADVANCING <br />
              <span className="text-cyan-500">INDUSTRIAL</span> ENergy
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
              A leading global provider of on-site gas generation systems, delivering
              precision engineering and high-pressure solutions for the world's most
              demanding industries.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand-blue/10 blur-3xl rounded-full" />
            <img
              src="/about_company.png"
              alt="Technology"
              className="rounded-3xl shadow-2xl relative z-10 border border-slate-200"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-brand-blue rounded-3xl -z-10 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight uppercase">
                About <br />
                <span className="blue-gradient">Spirare Energy</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Spirare Energy is a global engineering leader and an **ISO 9001:2015 & OHSAS 18000:2007** certified company, specialising in turnkey gas generation, process sampling, and high-integrity instrumentation solutions.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                We offer complete **DSITC (Design, Supply, Installation, Testing & Commissioning)** services for:
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Hydrogen Generation Plants (Electrolysis-based, up to 40,000 Nm³/hr)",
                "PSA Nitrogen & Oxygen Plants",
                "Flopressure™ Closed Loop Sampling Systems for gases, liquids, flare gases, crude oil, slurries - with automation-ready options"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <CheckCircle2 className="text-cyan-600 mt-1 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-slate-500 leading-relaxed font-medium pt-4 bg-slate-50 p-6 rounded-2xl border-l-4 border-brand-blue">
              With **15+ years of expertise**, Spirare has delivered **100+ hydrogen plants** and **2,000+ sampling systems** across oil & gas, power, petrochemical, chemical, and steel sectors - ensuring safety, reliability, and precision in every installation. Spirare is also a key distributor of world-class instrumentation brands, offering one of the industry's widest portfolios of valves, regulators, fittings, and instrumentation hook-up products.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">

            <div className="space-y-24">
              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-8 group"
              >
                <div className="shrink-0">
                  <div className="w-20 h-20 rounded-full border-2 border-amber-100 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                    <Target size={36} strokeWidth={1} />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl font-light text-slate-800 uppercase tracking-tight">Our Mission</h3>
                  <p className="text-slate-600 leading-relaxed text-lg font-medium">
                    Spirare is committed to provide value and satisfaction to its customers through continuous improvement in technology, process and services.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex gap-8 group"
              >
                <div className="shrink-0">
                  <div className="w-20 h-20 rounded-full border-2 border-amber-100 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                    <Eye size={36} strokeWidth={1} />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl font-light text-slate-800 uppercase tracking-tight">Our Vision</h3>
                  <p className="text-slate-500 leading-relaxed text-sm">
                    Spirare's vision is to become global industry leader by delivering superior service to our customers around the world in On-site Gas Generation Systems and manual sampling systems by setting industry standards for excellence in the products we provide through our flexibility, innovation and commitment and also by providing innovative supply solutions to enhance our customers' operations.
                  </p>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-8 group"
            >
              <div className="shrink-0">
                <div className="w-20 h-20 rounded-full border-2 border-amber-100 flex items-center justify-center text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500">
                  <ShieldCheck size={36} strokeWidth={1} />
                </div>
              </div>
              <div className="space-y-10">
                <h3 className="text-4xl font-light text-slate-800 uppercase tracking-tight">Our Values</h3>

                <div className="space-y-10">
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                      <span className="w-2 h-2 bg-amber-500 rounded-full shrink-0" />
                      Integrity
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-slate-100 pl-6 ml-1">
                      Honouring commitments made to our customers and vendors in our daily activities. Creating an environment where personal responsibility is achieved in all aspects of the business through fairness and respect.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                      <span className="w-2 h-2 bg-amber-500 rounded-full shrink-0" />
                      Quality
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-slate-100 pl-6 ml-1">
                      Strive for continuous quality improvements with every part we produce. We are committed to providing superior service with the highest quality of sales, service, and workmanship. Integrating our manufacturing practices to meet our customer's demands in a timely, cost-efficient manner.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                      <span className="w-2 h-2 bg-amber-500 rounded-full shrink-0" />
                      Customer Satisfaction
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-slate-100 pl-6 ml-1">
                      Being proactive, innovative, and flexible in creating processes and plans to meet or exceed customer expectations. Understanding our customer's requirements and delivering it continuously.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <TeamSection />
    </div>
  );
};

export default AboutPage;
