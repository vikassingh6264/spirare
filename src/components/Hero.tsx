import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDES = [
  {
    src: '/hero_slide_2.png',
    title: 'Hydrogen Generation',
    subtitle: 'High Pressure Bipolar Technology',
    description: 'Advanced on-site hydrogen generation solutions partnering with PERIC for complete industrial plants. Our high-pressure bipolar electrolysis technology delivers exceptional efficiency and reliability, enabling seamless integration into existing infrastructure while reducing operational costs and carbon footprint.',
    accentColor: 'from-cyan-400/30',
    shadowColor: 'rgba(6, 182, 212, 0.4)'
  },
  {
    src: '/hero_slide_3.png',
    title: 'Gas Purification',
    subtitle: 'Purity Without Compromise',
    description: 'Expertly designed Sealed Unipolar Electrolytic Cells and advanced air dryers for critical applications. Achieve up to 99.9999% purity levels with our precision-engineered systems, ideal for pharmaceutical, semiconductor, and laboratory environments where contamination is not an option.',
    accentColor: 'from-blue-400/30',
    shadowColor: 'rgba(59, 130, 246, 0.4)'
  },
  {
    src: '/hero_slide_4.png',
    title: 'Industrial Solutions',
    subtitle: 'Sustainable Energy Systems',
    description: 'Empowering heavy industries with reliable, sustainable, and high-purity gas production systems. From steel manufacturing to chemical processing, our turnkey solutions deliver consistent performance, lower energy consumption, and measurable environmental benefits for large-scale operations worldwide.',
    accentColor: 'from-sky-400/30',
    shadowColor: 'rgba(14, 165, 233, 0.4)'
  }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 1.1
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.6 },
      scale: { duration: 0.8 }
    }
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 }
    }
  })
};

const textVariants = {
  enter: { opacity: 0, y: 30 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 }
};

const Hero = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const currentSlide = (page % SLIDES.length + SLIDES.length) % SLIDES.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);

    return () => clearInterval(timer);
  }, [page]);

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants as any}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${SLIDES[currentSlide].src})` }}
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br transition-colors duration-1000 ${SLIDES[currentSlide].accentColor} to-white/40 opacity-90`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial="enter"
              animate="center"
              exit="exit"
              variants={textVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-brand-blue/5 backdrop-blur-md border border-brand-blue/10">
                <span className="text-brand-blue text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                  {SLIDES[currentSlide].subtitle}
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-brand-navy mb-8 leading-[0.9]">
                {SLIDES[currentSlide].title.split(' ').map((word, i) => (
                  <span key={i} className={i === 1 ? "block text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-[#0052BF]" : "block"}>
                    {word}
                  </span>
                ))}
              </h1>
              <p className="text-lg md:text-xl text-brand-muted max-w-2xl leading-relaxed mb-10 font-medium">
                {SLIDES[currentSlide].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="absolute bottom-12 left-6 md:left-12 z-30 flex items-center gap-6">
        <div className="flex gap-2">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const direction = index > currentSlide ? 1 : -1;
                setPage([index, direction]);
              }}
              className="group relative h-12 w-1.5 bg-brand-blue/10 overflow-hidden rounded-full"
            >
              <motion.div
                className="absolute top-0 left-0 w-full bg-brand-blue"
                initial={false}
                animate={{ height: index === currentSlide ? '100%' : '0%' }}
                transition={{ duration: 0.5 }}
              />
            </button>
          ))}
        </div>
        <div className="flex flex-col">
          <span className="text-brand-navy text-sm font-bold tracking-tighter">0{currentSlide + 1}</span>
          <span className="text-brand-muted text-[10px] font-bold tracking-widest uppercase">/ 0{SLIDES.length}</span>
        </div>
      </div>
      <div
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] transition-colors duration-1000 opacity-20"
        style={{ backgroundColor: SLIDES[currentSlide].shadowColor }}
      />
    </section>
  );
};

export default Hero;