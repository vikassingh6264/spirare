import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Zap, Wind, Droplets, Fan, Gauge, Box, Thermometer, GitFork, ShieldAlert, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  {
    name: 'Hydrogen Gas System',
    icon: Zap,
    img: '/products/hydrogen.png',
    tag: 'Electrolyser Based',
    color: 'from-cyan-100/50 to-cyan-50/50',
    border: 'border-cyan-200/50',
    iconColor: 'text-cyan-400',
    glow: 'rgba(6,182,212,0.15)',
    description: 'On-site hydrogen generation using high-pressure bipolar electrolysis for ultra-pure H₂ supply.',
  },
  {
    name: 'Nitrogen Gas System',
    icon: Wind,
    img: '/products/nitrogen.png',
    tag: 'PSA / Membrane',
    color: 'from-blue-100/50 to-blue-50/50',
    border: 'border-blue-200/50',
    iconColor: 'text-blue-400',
    glow: 'rgba(59,130,246,0.15)',
    description: 'Cost-effective nitrogen generation tailored for inerting, blanketing, and process applications.',
  },
  {
    name: 'Oxygen Gas System',
    icon: Droplets,
    img: null,
    tag: 'VPSA / PSA',
    color: 'from-sky-100/50 to-sky-50/50',
    border: 'border-sky-200/50',
    iconColor: 'text-sky-400',
    glow: 'rgba(14,165,233,0.15)',
    description: 'High-purity oxygen systems for medical, industrial combustion, and water treatment processes.',
  },
  {
    name: 'Air Dryers / Purifiers',
    icon: Fan,
    img: '/products/air_dryer.png',
    tag: 'Desiccant / Refrigerant',
    color: 'from-teal-100/50 to-teal-50/50',
    border: 'border-teal-200/50',
    iconColor: 'text-teal-400',
    glow: 'rgba(20,184,166,0.15)',
    description: 'Precision air drying and purification solutions for contamination-free compressed air networks.',
  },
  {
    name: 'CIRCOR Instrumentation',
    icon: Gauge,
    img: null,
    tag: 'Precision Control',
    color: 'from-amber-100/50 to-amber-50/50',
    border: 'border-amber-200/50',
    iconColor: 'text-amber-400',
    glow: 'rgba(245,158,11,0.15)',
    description: 'World-class CIRCOR flow control and instrumentation for critical process environments.',
  },
  {
    name: 'Cylinder Cascades',
    icon: Box,
    img: '/products/cylinder_cascade.png',
    tag: 'High Pressure Storage',
    color: 'from-violet-100/50 to-violet-50/50',
    border: 'border-violet-200/50',
    iconColor: 'text-violet-400',
    glow: 'rgba(139,92,246,0.15)',
    description: 'Safe, modular high-pressure cylinder cascade systems for bulk gas storage and distribution.',
  },
  {
    name: 'Vaporiser',
    icon: Thermometer,
    img: null,
    tag: 'Cryogenic / Ambient',
    color: 'from-orange-100/50 to-orange-50/50',
    border: 'border-orange-200/50',
    iconColor: 'text-orange-400',
    glow: 'rgba(249,115,22,0.15)',
    description: 'Ambient and electrically heated vaporisers for efficient liquid-to-gas conversion on demand.',
  },
  {
    name: 'Manifold Stations',
    icon: GitFork,
    img: null,
    tag: 'Fully Automatic',
    color: 'from-rose-100/50 to-rose-50/50',
    border: 'border-rose-200/50',
    iconColor: 'text-rose-400',
    glow: 'rgba(244,63,94,0.15)',
    description: 'Automatic changeover manifold stations ensuring uninterrupted gas supply for critical operations.',
  },
  {
    name: 'PRV Stations',
    icon: ShieldAlert,
    img: null,
    tag: 'Safety Certified',
    color: 'from-red-100/50 to-red-50/50',
    border: 'border-red-200/50',
    iconColor: 'text-red-400',
    glow: 'rgba(239,68,68,0.15)',
    description: 'Pressure reducing and relief valve stations engineered for precise, safe downstream pressure control.',
  },
];

const ProductCard = ({ product, index }: { product: typeof PRODUCTS[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = product.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1, ease: 'easeOut' }}
    >
      <Link to="/products" className="group block h-full">
        <div
          className={`relative h-full rounded-2xl border ${product.border} bg-gradient-to-br ${product.color} backdrop-blur-sm overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
          style={{ boxShadow: `0 0 0 1px transparent` }}
          onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 20px 60px ${product.glow}`)}
          onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 0 1px transparent')}
        >
          {/* Image Area */}
          <div className="relative h-52 overflow-hidden bg-white/50">
            {product.img ? (
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                {/* Decorative background rings */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <div className="w-48 h-48 rounded-full border border-black/5" />
                  <div className="absolute w-36 h-36 rounded-full border border-black/5" />
                  <div className="absolute w-24 h-24 rounded-full border border-black/5" />
                </div>
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: product.glow }}
                >
                  <Icon size={48} className={product.iconColor} strokeWidth={1.2} />
                </div>
              </div>
            )}
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent" />

            {/* Tag Badge */}
            <div className="absolute bottom-3 left-3">
              <span className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-md border ${product.border} ${product.iconColor}`}>
                {product.tag}
              </span>
            </div>

            {/* Arrow on hover */}
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-brand-navy/5 border border-brand-navy/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
              <ArrowRight size={14} className="text-brand-navy" />
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <div className="flex items-start gap-3 mb-3">
              <div className={`mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center shrink-0`} style={{ backgroundColor: product.glow }}>
                <Icon size={15} className={product.iconColor} />
              </div>
              <h3 className="text-brand-navy font-bold text-[15px] leading-tight">
                {product.name}
              </h3>
            </div>
            <p className="text-brand-muted text-xs leading-relaxed line-clamp-3">
              {product.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const OurProducts = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-80px' });

  return (
    <section className="relative py-28 bg-brand-light overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/10 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-[0.04] bg-gradient-radial from-brand-blue to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-brand-blue/5 border border-brand-blue/10">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
            <span className="text-brand-blue text-xs font-bold tracking-[0.2em] uppercase">Product Portfolio</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end gap-6 justify-between">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-brand-navy tracking-tight leading-none mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-[#0052BF]">Products</span>
              </h2>
              <p className="text-brand-muted text-base md:text-lg max-w-xl leading-relaxed">
                Engineered for performance, reliability, and safety — our complete range of industrial gas systems and equipment.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand-blue/15 text-brand-navy text-sm font-bold tracking-wide hover:bg-brand-blue/5 transition-all shrink-0 group"
            >
              View All Products
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
