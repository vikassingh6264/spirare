import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDES = [
  {
    src: '/hero_slide_2.png',
    title: 'Designed for efficiency. Built for the future.',
  },
  {
    src: '/hero_slide_3.png',
    title: 'Built for precision. Proven for safety. Trusted everywhere',
  },
  {
    src: '/hero_slide_4.png',
    title: 'State of the art smart sample conditioning',
  }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.6 }
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
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-black">
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
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="relative z-20 w-full max-w-8xl mx-auto px-6 md:px-12">
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
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white mb-8 leading-[0.9]">
                {SLIDES[currentSlide].title.split('. ').map((part, i) => (
                  <span key={i} className="block mb-2">
                    {part}
                  </span>
                ))}
              </h1>
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
              className="group relative h-12 w-1.5 bg-white/20 overflow-hidden rounded-full"
            >
              <motion.div
                className="absolute top-0 left-0 w-full bg-white"
                initial={false}
                animate={{ height: index === currentSlide ? '100%' : '0%' }}
                transition={{ duration: 0.5 }}
              />
            </button>
          ))}
        </div>
        <div className="flex flex-col">
          <span className="text-white text-sm font-bold tracking-tighter">0{currentSlide + 1}</span>
          <span className="text-white/40 text-[10px] font-bold tracking-widest uppercase">/ 0{SLIDES.length}</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;