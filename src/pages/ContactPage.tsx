import { motion, useReducedMotion } from 'framer-motion';
import { Mail, Phone, Send, User, Clock, MessageSquare, Building2, Factory, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { useState, useMemo, useCallback, memo } from 'react';

interface Office {
  type: string;
  icon: React.ReactNode;
  addr: string;
  phone: string;
  email: string;
  color: string;
  mapQuery: string;
}

interface ManagementContact {
  name: string;
  role: string;
  phone: string;
  email: string;
}

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
}

const offices: Office[] = [
  {
    type: 'Corporate Office',
    icon: <Building2 size={28} strokeWidth={1.5} />,
    addr: '605 Rohit House, 3 Tolstoy Marg, Connaught Place, New Delhi – 110001',
    phone: '+91 11 43671946',
    email: 'info@spirare.co.in',
    color: 'from-brand-blue to-blue-400',
    mapQuery: 'Rohit+House+Tolstoy+Marg+Connaught+Place+New+Delhi',
  },
  {
    type: 'Branch Office',
    icon: <Globe size={28} strokeWidth={1.5} />,
    addr: 'G-21, Greenwood City, Sector-40, Opposite Community Centre, Gurgaon – 122002',
    phone: '+91 124 4049121',
    email: 'sales@spirare.co.in',
    color: 'from-sky-500 to-blue-400',
    mapQuery: 'Greenwood+City+Sector+40+Gurgaon',
  },
  {
    type: 'Manufacturing Works',
    icon: <Factory size={28} strokeWidth={1.5} />,
    addr: 'C-83, Sector 88, Phase-II, Noida – 201305 (U.P.)',
    phone: '+91 120 4049121',
    email: 'works@spirare.co.in',
    color: 'from-blue-600 to-brand-blue',
    mapQuery: 'Sector+88+Phase+II+Noida',
  }
];

const management: ManagementContact[] = [
  { name: 'Mr. Suhas Bhasin', role: 'Executive Director', phone: '+91 9811308590', email: 'suhas@spirare.co.in' },
  { name: 'Mr. Avnish Vats', role: 'Director', phone: '+91 9958944519', email: 'avnish@spirare.co.in' },
];

const useScrollReveal = (delay: number = 0) => {
  const prefersReducedMotion = useReducedMotion();
  return {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, delay: prefersReducedMotion ? 0 : delay },
  };
};

const AnimatedSection = memo(({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const reveal = useScrollReveal(delay);
  return (
    <motion.div {...reveal} className={className}>
      {children}
    </motion.div>
  );
});

AnimatedSection.displayName = 'AnimatedSection';

const ContactCard = memo(({ item, index }: { item: typeof contactMethods[0]; index: number }) => {
  const reveal = useScrollReveal(index * 0.1);
  const isExternal = item.href.startsWith('http');

  return (
    <motion.a
      {...reveal}
      href={item.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative p-6 rounded-2xl bg-white border border-brand-blue/20 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue mb-4 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
        {item.icon}
      </div>
      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
      <div className="font-bold text-slate-900 text-lg">{item.value}</div>
      <div className="text-xs text-slate-400 mt-1 font-medium">{item.desc}</div>
    </motion.a>
  );
});

ContactCard.displayName = 'ContactCard';

const OfficeCard = memo(({ office, isActive, onClick, index }: {
  office: Office;
  isActive: boolean;
  onClick: () => void;
  index: number;
}) => {
  const reveal = useScrollReveal(index * 0.1);

  return (
    <motion.div
      {...reveal}
      onClick={onClick}
      className={`relative p-6 md:p-8 rounded-2xl border cursor-pointer transition-all duration-300 group
        ${isActive
          ? 'bg-white border-brand-blue/20 shadow-xl shadow-brand-blue/5 ring-1 ring-brand-blue/10'
          : 'bg-white/60 border-slate-200 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50'
        }`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      {isActive && (
        <motion.div
          layoutId="activeOffice"
          className="absolute left-0 top-6 bottom-6 w-1 bg-brand-blue rounded-full"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
      <div className="flex gap-5">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${office.color} flex items-center justify-center text-white shrink-0 shadow-lg transition-transform group-hover:scale-105`}>
          {office.icon}
        </div>
        <div className="flex-1 space-y-2">
          <h3 className="text-sm font-bold text-brand-blue uppercase tracking-widest">{office.type}</h3>
          <p className="text-slate-800 font-semibold leading-relaxed">{office.addr}</p>
          <div className="pt-1 flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-500 font-medium">
            <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 transition-colors hover:text-brand-blue">
              <Phone size={13} /> {office.phone}
            </a>
            <a href={`mailto:${office.email}`} className="flex items-center gap-2 transition-colors hover:text-brand-blue">
              <Mail size={13} /> {office.email}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

OfficeCard.displayName = 'OfficeCard';

const ContactForm = memo(({ onSubmit }: { onSubmit: (data: FormData) => Promise<void> }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '', company: '', email: '', phone: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.company.trim()) newErrors.company = 'Company Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      setSubmitted(true);
      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="py-16 flex flex-col items-center text-center space-y-4"
      >
        <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-emerald-500" />
        </div>
        <h4 className="text-2xl font-bold text-slate-900">Thank You!</h4>
        <p className="text-slate-500 font-medium">Your inquiry has been submitted. We'll be in touch within 24 hours.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Full Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={e => handleChange('name', e.target.value)}
            className={`w-full bg-slate-50 border rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all text-slate-900 placeholder:text-slate-300 text-sm
              ${errors.name ? 'border-red-300 bg-red-50/30' : 'border-slate-200'}`}
            placeholder="John Doe"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && <p id="name-error" className="text-xs text-red-500 ml-1">{errors.name}</p>}
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Company</label>
          <input
            type="text"
            value={formData.company}
            onChange={e => handleChange('company', e.target.value)}
            className={`w-full bg-slate-50 border rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all text-slate-900 placeholder:text-slate-300 text-sm
              ${errors.company ? 'border-red-300 bg-red-50/30' : 'border-slate-200'}`}
            placeholder="Acme Corp"
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
          />
          {errors.company && <p id="company-error" className="text-xs text-red-500 ml-1">{errors.company}</p>}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Work Email *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={e => handleChange('email', e.target.value)}
            className={`w-full bg-slate-50 border rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all text-slate-900 placeholder:text-slate-300 text-sm
              ${errors.email ? 'border-red-300 bg-red-50/30' : 'border-slate-200'}`}
            placeholder="john@acme.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && <p id="email-error" className="text-xs text-red-500 ml-1">{errors.email}</p>}
        </div>
        <div className="space-y-1.5">
          <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={e => handleChange('phone', e.target.value)}
            className={`w-full bg-slate-50 border rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all text-slate-900 placeholder:text-slate-300 text-sm
              ${errors.phone ? 'border-red-300 bg-red-50/30' : 'border-slate-200'}`}
            placeholder="+91 98XXXXXXXX"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && <p id="phone-error" className="text-xs text-red-500 ml-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">Requirements *</label>
        <textarea
          rows={5}
          required
          value={formData.message}
          onChange={e => handleChange('message', e.target.value)}
          className={`w-full bg-slate-50 border rounded-xl px-4 py-3.5 focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue outline-none transition-all text-slate-900 placeholder:text-slate-300 resize-none text-sm
            ${errors.message ? 'border-red-300 bg-red-50/30' : 'border-slate-200'}`}
          placeholder="Describe your project requirements, gas type, capacity, timeline..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && <p id="message-error" className="text-xs text-red-500 ml-1">{errors.message}</p>}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className={`w-full py-4 bg-brand-blue text-white font-bold rounded-xl flex items-center justify-center gap-2.5 shadow-lg shadow-brand-blue/20 transition-all text-sm uppercase tracking-wider
          ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-xl hover:bg-[#004099]'}`}
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            SENDING...
          </>
        ) : (
          <>
            SEND INQUIRY
            <Send size={16} />
          </>
        )}
      </motion.button>
    </form>
  );
});

ContactForm.displayName = 'ContactForm';

const MapView = memo(({ office }: { office: Office }) => {
  const mapSrc = useMemo(() =>
    `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${office.mapQuery}`,
    [office.mapQuery]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg h-96"
    >
      <iframe
        title={`${office.type} Location`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={mapSrc}
      />
    </motion.div>
  );
});

MapView.displayName = 'MapView';

const contactMethods = [
  { icon: <Phone size={22} />, label: 'Call Us', value: '+91 11 43671946', href: 'tel:+911143671946', desc: 'Mon – Sat, 9 AM – 6 PM IST' },
  { icon: <Mail size={22} />, label: 'Email Us', value: 'info@spirare.co.in', href: 'mailto:info@spirare.co.in', desc: 'We reply within 24 hours' },
  { icon: <MessageSquare size={22} />, label: 'WhatsApp', value: '+91 9811308590', href: 'https://wa.me/919811308590', desc: 'Instant support available' },
  { icon: <Clock size={22} />, label: 'Office Hours', value: 'Mon – Sat', href: '#', desc: '9:00 AM – 6:00 PM IST' },
];

const ContactPage = () => {
  const [activeOffice, setActiveOffice] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const handleFormSubmit = useCallback(async (data: FormData) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error('Submission failed');
  }, []);

  const heroAnimation = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <div className="bg-white overflow-hidden">
      <section className="relative h-[90vh] min-h-[520px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-brand-light" />
          <div className="absolute inset-0 opacity-[0.05] bg-grid-pattern" />
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...heroAnimation} className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2 text-brand-blue font-bold tracking-widest uppercase text-sm">
              <span className="w-8 h-px bg-brand-blue" />
              Contact Us
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-brand-navy uppercase leading-tight">
              LET'S BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-400">TOGETHER</span>
            </h1>
            <p className="text-brand-muted text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
              Connect with our expert engineering teams across New Delhi, Gurgaon, and Noida.
              We are available for technical support, project inquiries, and consultation.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-white/40" />
      </section>

      <section className="py-16 container mx-auto px-6 -mt-20 relative z-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((item, idx) => (
            <ContactCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </section>

      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-3 space-y-10">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 uppercase leading-tight">
                  OUR <span className="blue-gradient">LOCATIONS</span>
                </h2>
                <p className="text-slate-500 mt-4 text-lg font-medium max-w-xl">
                  Visit us at any of our three offices across the National Capital Region.
                </p>
              </AnimatedSection>

              <div className="space-y-5">
                {offices.map((office, i) => (
                  <OfficeCard
                    key={office.type}
                    office={office}
                    isActive={activeOffice === i}
                    onClick={() => setActiveOffice(i)}
                    index={i}
                  />
                ))}
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-2">
              <div className="sticky top-32 space-y-8">
                <div className="relative">
                  <div className="absolute -inset-4 bg-brand-blue/5 blur-3xl rounded-full opacity-60" />
                  <div className="relative bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 shadow-2xl shadow-slate-200/50">
                    <div className="mb-8">
                      <h3 className="text-3xl font-bold text-slate-900">
                        SEND AN <span className="blue-gradient">INQUIRY</span>
                      </h3>
                      <p className="text-slate-400 text-sm mt-2 font-medium">
                        Fill in the form below and our team will get back to you within 24 hours.
                      </p>
                    </div>
                    <ContactForm onSubmit={handleFormSubmit} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-6">
        <MapView office={offices[activeOffice]} />
      </div>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-blue via-blue-700 to-blue-800 p-12 md:p-16 text-center shadow-2xl"
          >
            <div className="absolute inset-0 opacity-10 bg-dots-pattern" />
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
                Ready to Optimize Your <span className="text-blue-100">Gas Systems?</span>
              </h3>
              <p className="text-blue-200 text-lg font-medium">
                Get a personalized consultation on on-site hydrogen, nitrogen, and oxygen generation from our expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <a
                  href="tel:+911143671946"
                  className="px-8 py-4 bg-white text-brand-blue font-bold rounded-xl hover:bg-blue-50 transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2 group"
                >
                  <Phone size={18} className="group-hover:scale-110 transition-transform" /> Call Now
                </a>
                <a
                  href="https://wa.me/919811308590"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white/10 text-white border border-white/20 font-bold rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2 group"
                >
                  <MessageSquare size={18} className="group-hover:scale-110 transition-transform" /> WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Leadership Team Section */}
      <section className="py-24 bg-brand-light relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-grid-pattern" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[150px]" />

        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection className="text-center mb-16 space-y-4">
            <div className="flex items-center justify-center gap-2 text-brand-blue font-bold tracking-widest uppercase text-sm">
              <span className="w-8 h-px bg-brand-blue" />
              Key Contacts
              <span className="w-8 h-px bg-brand-blue" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-brand-navy uppercase">
              LEADERSHIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-400">TEAM</span>
            </h2>
            <p className="text-brand-muted text-lg font-medium max-w-xl mx-auto">
              Reach out directly to our leadership for strategic partnerships and enterprise projects.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {management.map((man, i) => (
              <motion.div
                key={man.name}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: prefersReducedMotion ? 0 : i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative p-8 rounded-2xl bg-white border border-brand-blue/10 shadow-lg hover:border-brand-blue/30 transition-all group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-brand-blue/10 group-hover:shadow-brand-blue/20 transition-shadow">
                    <User size={28} strokeWidth={1.5} />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="text-xs font-bold text-brand-blue uppercase tracking-widest">{man.role}</div>
                    <div className="text-xl font-bold text-brand-navy">{man.name}</div>
                    <div className="pt-2 space-y-1.5">
                      <a href={`tel:${man.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-sm text-brand-muted hover:text-brand-blue transition-colors font-medium group/link">
                        <Phone size={13} /> {man.phone}
                        <ArrowRight size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                      <a href={`mailto:${man.email}`} className="flex items-center gap-2 text-sm text-brand-muted hover:text-brand-blue transition-colors font-medium group/link">
                        <Mail size={13} /> {man.email}
                        <ArrowRight size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;