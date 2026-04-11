import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IMAGES = [
  {
    src: '/hero_slide_2.png',
    alt: 'Hydrogen generation facility overview'
  },
  {
    src: '/hero_slide_3.png',
    alt: 'Advanced electrolytic cell manufacturing'
  },
  {
    src: '/hero_slide_4.png',
    alt: 'High pressure bipolar technology plant'
  }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 1
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 1
  })
};

const Hero = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const currentSlide = (page % IMAGES.length + IMAGES.length) % IMAGES.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(timer);
  }, [page]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 1.2, ease: [0.4, 0, 0.2, 1] }
            }}
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${IMAGES[currentSlide].src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'grayscale(15%) contrast(1.15) brightness(0.8)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-700/70 via-slate-700/50 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2 md:gap-3">
        {IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (index === currentSlide) return;
              const direction = index > currentSlide ? 1 : -1;
              setPage([index, direction]);
            }}
            className={`
              transition-all duration-300 rounded-full cursor-pointer
              ${currentSlide === index
                ? 'w-10 md:w-12 h-1.5 bg-cyan-500'
                : 'w-6 md:w-8 h-1.5 bg-white/40 hover:bg-white/60'
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20"
          >
            <span className="text-cyan-400 text-xs md:text-sm font-semibold tracking-wide uppercase">
              Innovation in Energy
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6"
          >
            Welcome to{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Spirare Energy
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg lg:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-4"
          >
            Spirare Energy is a leading global provider of on-site gas generation systems,
            manufacturing Sealed Unipolar Electrolytic Cells and partnering with Purification
            Equipment Research Institute of CSIC (PERIC), China for complete Hydrogen Plants
            utilizing High Pressure Bipolar Technology.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;