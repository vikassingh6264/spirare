import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, ChevronDown, ArrowRight,
  Zap, Wind, Droplets, Fan, Gauge, Box, Thermometer, GitFork, ShieldAlert,
  Wrench, Package, ClipboardCheck
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const productDropdown = [
  { name: 'Hydrogen Gas System', icon: <Zap size={18} /> },
  { name: 'Nitrogen Gas System', icon: <Wind size={18} /> },
  { name: 'Oxygen Gas System', icon: <Droplets size={18} /> },
  { name: 'Air Dryers / Purifiers', icon: <Fan size={18} /> },
  { name: 'CIRCOR Instrumentation', icon: <Gauge size={18} /> },
  { name: 'Cylinder Cascades', icon: <Box size={18} /> },
  { name: 'Vaporiser', icon: <Thermometer size={18} /> },
  { name: 'Manifold Stations', icon: <GitFork size={18} /> },
  { name: 'PRV Stations', icon: <ShieldAlert size={18} /> },
];

const serviceDropdown = [
  { name: 'Service', icon: <Wrench size={18} />, desc: 'Installation, commissioning & technical support' },
  { name: 'Spares', icon: <Package size={18} />, desc: 'Critical spare parts & component supply' },
  { name: 'AMC', icon: <ClipboardCheck size={18} />, desc: 'Annual maintenance contracts & support' },
];

type DropdownKey = 'products' | 'services' | null;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const handleMouseEnter = (key: DropdownKey) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(key);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3 bg-brand-blue border-b border-white/10 shadow-md' : 'py-5 bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg transition-all duration-300 group-hover:scale-110 ${isScrolled ? 'bg-white text-brand-blue' : 'bg-white/20 text-white border border-white/30'
                }`}
            >
              S
            </div>
            <span className="text-2xl font-bold tracking-tight text-white transition-all duration-300 group-hover:opacity-90">
              Spirare Energy
            </span>
          </motion.div>
        </Link>
        <div className="hidden md:flex items-center gap-0.5">
          {[
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
          ].map((link, i) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                to={link.href}
                className={`relative text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-lg transition-all duration-300 group ${isActive(link.href) ? 'text-white' : 'text-white/80 hover:text-white'
                  }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-white rounded-full transition-all duration-300 ${isActive(link.href) ? 'w-12' : 'w-0 group-hover:w-12'
                    }`}
                />
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="relative"
            onMouseEnter={() => handleMouseEnter('products')}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`relative text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-1.5 group ${isActive('/products') ? 'text-white' : 'text-white/80 hover:text-white'
                }`}
            >
              Products
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${activeDropdown === 'products' ? 'rotate-180' : ''}`}
              />
              <span
                className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-white rounded-full transition-all duration-300 ${isActive('/products') || activeDropdown === 'products' ? 'w-12' : 'w-0 group-hover:w-12'
                  }`}
              />
            </div>

            <AnimatePresence>
              {activeDropdown === 'products' && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                  onMouseEnter={() => handleMouseEnter('products')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                    <div className="p-2">
                      {productDropdown.map((prod) => (
                        <Link
                          key={prod.name}
                          to="/products"
                          className="group/prod flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-all"
                        >
                          <div className="w-8 h-8 rounded-lg bg-brand-blue/5 flex items-center justify-center text-brand-blue shrink-0 group-hover/prod:bg-brand-blue group-hover/prod:text-white transition-all duration-200">
                            {prod.icon}
                          </div>
                          <span className="text-[13px] font-semibold text-slate-700 group-hover/prod:text-brand-blue transition-colors flex-1">
                            {prod.name}
                          </span>
                          <ArrowRight size={13} className="text-slate-300 group-hover/prod:text-brand-blue group-hover/prod:translate-x-0.5 transition-all shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="relative"
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`relative text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-lg transition-all duration-300 flex items-center gap-1.5 group ${isActive('/services') ? 'text-white' : 'text-white/80 hover:text-white'
                }`}
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`}
              />
              <span
                className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-white rounded-full transition-all duration-300 ${isActive('/services') || activeDropdown === 'services' ? 'w-12' : 'w-0 group-hover:w-12'
                  }`}
              />
            </div>

            <AnimatePresence>
              {activeDropdown === 'services' && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                    <div className="p-2">
                      {serviceDropdown.map((svc) => (
                        <Link
                          key={svc.name}
                          to="/services"
                          className="group/svc flex items-center gap-3.5 px-3 py-3 rounded-xl hover:bg-slate-50 transition-all"
                        >
                          <div className="w-10 h-10 rounded-xl bg-brand-blue/5 flex items-center justify-center text-brand-blue shrink-0 group-hover/svc:bg-brand-blue group-hover/svc:text-white transition-all duration-200">
                            {svc.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-[13px] font-bold text-slate-800 group-hover/svc:text-brand-blue transition-colors block">
                              {svc.name}
                            </span>
                            <span className="text-[11px] text-slate-400 leading-snug block">{svc.desc}</span>
                          </div>
                          <ArrowRight size={13} className="text-slate-300 group-hover/svc:text-brand-blue group-hover/svc:translate-x-0.5 transition-all shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
          >
            <Link
              to="/contact"
              className={`relative text-sm font-semibold tracking-widest uppercase px-4 py-2 rounded-lg transition-all duration-300 group ${isActive('/contact') ? 'text-white' : 'text-white/80 hover:text-white'
                }`}
            >
              Contact
              <span
                className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-white rounded-full transition-all duration-300 ${isActive('/contact') ? 'w-12' : 'w-0 group-hover:w-12'
                  }`}
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.40 }}
            className="ml-3"
          >
            <Link
              to="/contact"
              className="relative overflow-hidden inline-flex items-center px-6 py-2.5 bg-white text-brand-blue font-bold rounded-full text-xs tracking-widest uppercase transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95 group"
            >
              <span className="relative z-10">Get a Quote</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-blue/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Link>
          </motion.div>
        </div>

        <button
          className="md:hidden text-white hover:scale-110 transition-transform duration-200 p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">

              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-bold uppercase tracking-widest py-3 px-4 rounded-xl transition-all duration-200 ${isActive(link.href)
                    ? 'text-brand-blue bg-brand-blue/5'
                    : 'text-slate-700 hover:text-brand-blue hover:bg-slate-50'
                    }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Products Accordion */}
              <div>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === 'products' ? null : 'products')}
                  className={`w-full flex items-center justify-between text-sm font-bold uppercase tracking-widest py-3 px-4 rounded-xl transition-all duration-200 ${isActive('/products') || mobileExpanded === 'products'
                    ? 'text-brand-blue bg-brand-blue/5'
                    : 'text-slate-700 hover:bg-slate-50'
                    }`}
                >
                  Products
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${mobileExpanded === 'products' ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileExpanded === 'products' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-2 pt-1 space-y-0.5">
                        {productDropdown.map((prod) => (
                          <Link
                            key={prod.name}
                            to="/products"
                            className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-all"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="w-8 h-8 rounded-lg bg-brand-blue/5 flex items-center justify-center text-brand-blue shrink-0">
                              {prod.icon}
                            </div>
                            <span className="text-sm font-semibold text-slate-700">{prod.name}</span>
                          </Link>
                        ))}
                        <Link
                          to="/products"
                          className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-brand-blue uppercase tracking-wider"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          View All Products <ArrowRight size={12} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === 'services' ? null : 'services')}
                  className={`w-full flex items-center justify-between text-sm font-bold uppercase tracking-widest py-3 px-4 rounded-xl transition-all duration-200 ${isActive('/services') || mobileExpanded === 'services'
                    ? 'text-brand-blue bg-brand-blue/5'
                    : 'text-slate-700 hover:bg-slate-50'
                    }`}
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${mobileExpanded === 'services' ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileExpanded === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pb-2 pt-1 space-y-1">
                        {serviceDropdown.map((svc) => (
                          <Link
                            key={svc.name}
                            to="/services"
                            className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-all"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="w-9 h-9 rounded-lg bg-brand-blue/5 flex items-center justify-center text-brand-blue shrink-0">
                              {svc.icon}
                            </div>
                            <div>
                              <span className="text-sm font-bold text-slate-700 block">{svc.name}</span>
                              <span className="text-[11px] text-slate-400 leading-snug">{svc.desc}</span>
                            </div>
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-brand-blue uppercase tracking-wider"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          View All Services <ArrowRight size={12} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Contact */}
              <Link
                to="/contact"
                className={`text-sm font-bold uppercase tracking-widest py-3 px-4 rounded-xl transition-all duration-200 ${isActive('/contact')
                  ? 'text-brand-blue bg-brand-blue/5'
                  : 'text-slate-700 hover:text-brand-blue hover:bg-slate-50'
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile CTA */}
              <Link
                to="/contact"
                className="relative overflow-hidden w-full py-3.5 mt-2 bg-brand-blue text-white font-bold rounded-xl text-sm text-center uppercase tracking-widest transition-all duration-300 hover:shadow-lg active:scale-[0.98] group block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative z-10">Get a Quote</span>
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;