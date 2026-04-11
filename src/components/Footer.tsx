import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const productLinks = [
    ['Hydrogen Gas System', 'Oxygen Gas System', 'CIRCOR Instrumentation', 'Vaporiser', 'PRV Stations'],
    ['Nitrogen Gas System', 'Air Dryers / Purifiers', 'Cylinder Cascades', 'Manifold Stations']
  ];

  return (
    <footer className="w-full">
      <div className="bg-brand-blue text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center font-bold text-brand-dark text-2xl border-2 border-white">
                    S
                  </div>
                  <span className="text-2xl font-bold tracking-tighter text-white">Spirare Energy</span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Spirare Energy is a leading global provider of on-site gas generation systems manufacturing Sealed Unipolar Electrolytic Cells and High Pressure Bipolar Technology.
                </p>
                <div className="flex gap-4 pt-4">
                  {[
                    {
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                        </svg>
                      ),
                      href: '#'
                    },
                    {
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      ),
                      href: '#'
                    },
                    {
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                        </svg>
                      ),
                      href: '#'
                    },
                    {
                      icon: (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      ),
                      href: '#'
                    },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, backgroundColor: '#003882', color: '#fff' }}
                      className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-400 transition-all cursor-pointer"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h2 className="text-xl font-bold uppercase tracking-wider relative inline-block">
                  Product Range
                  <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-red-600"></span>
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {productLinks.map((column, colIdx) => (
                  <ul key={colIdx} className="space-y-4">
                    {column.map((link) => (
                      <li key={link} className="flex items-center gap-2 group cursor-pointer">
                        <ChevronRight size={14} className="text-gray-300 group-hover:text-red-600 transition-colors" />
                        <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{link}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="space-y-2">
                <h2 className="text-xl font-bold uppercase tracking-wider relative inline-block text-white">
                  Quick Links
                  <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-red-600"></span>
                </h2>
              </div>
              <ul className="space-y-4">
                {[
                  { name: 'Home', href: '/' },
                  { name: 'About', href: '/about' },
                  { name: 'Products', href: '/products' },
                  { name: 'Services', href: '/services' },
                  { name: 'Contact', href: '/contact' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight size={14} className="group-hover:text-red-600 transition-colors" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-4 text-center">
        <div className="container mx-auto px-6 space-y-1">
          <p className="text-brand-dark font-medium text-sm">
            Copyright ©2016 Spirare Energy Pvt. Ltd. All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
