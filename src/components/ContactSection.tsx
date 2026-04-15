import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-brand-light">
      {/* Background Image with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <img
          src="/contact_bg.png"
          alt="Contact Background"
          className="w-full h-full object-cover opacity-10 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-light/80 via-white/70 to-brand-light/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-block px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold tracking-widest uppercase"
              >
                Get in touch
              </motion.div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-brand-navy leading-tight">
                READY TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-[#0052BF]">OPTIMIZE</span> <br />
                YOUR GAS SYSTEMS?
              </h2>
              <p className="text-brand-muted text-lg max-w-lg leading-relaxed">
                Connect with our expert engineering team for a personalized consultation
                on on-site hydrogen, nitrogen, and oxygen generation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: <Mail size={24} />, label: 'Email Us', value: 'info@spirare.co.in', href: 'mailto:info@spirare.co.in' },
                { icon: <Phone size={24} />, label: 'Call Us', value: '+91 11 43671946', href: 'tel:+911143671946' },
                { icon: <MessageSquare size={24} />, label: 'WhatsApp', value: '+91 9811308590', href: 'https://wa.me/919811308590' },
                { icon: <MapPin size={24} />, label: 'Visit Office', value: 'New Delhi, India', href: '#' },
              ].map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-white/50 border border-brand-blue/10 hover:border-brand-blue/30 hover:bg-white transition-all group shadow-sm hover:shadow-md"
                >
                  <div className="text-brand-blue mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div className="text-xs font-bold text-brand-muted uppercase tracking-widest mb-1">{item.label}</div>
                  <div className="text-brand-navy font-bold">{item.value}</div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative Glow */}
            <div className="absolute -inset-4 bg-brand-blue/10 blur-3xl rounded-full opacity-50" />

            <div className="relative p-8 md:p-12 rounded-[2.5rem] border border-white shadow-xl backdrop-blur-2xl bg-white/70">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-muted uppercase tracking-widest ml-1">First Name</label>
                    <input
                      type="text"
                      className="w-full bg-white border border-brand-blue/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-brand-navy placeholder:text-gray-400"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-muted uppercase tracking-widest ml-1">Last Name</label>
                    <input
                      type="text"
                      className="w-full bg-white border border-brand-blue/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-brand-navy placeholder:text-gray-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-muted uppercase tracking-widest ml-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-white border border-brand-blue/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-brand-navy placeholder:text-gray-400"
                    placeholder="john@spirare.co.in"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-muted uppercase tracking-widest ml-1">Industrial requirement</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white border border-brand-blue/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all text-brand-navy placeholder:text-gray-400 resize-none"
                    placeholder="Tell us about your gas requirements..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-gradient-to-r from-brand-blue to-[#0052BF] text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-brand-blue/20 transition-all text-lg"
                >
                  SEND INQUIRY
                  <Send size={20} className="animate-pulse" />
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
