import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDES = [
  {
    src: '/hero/product_1.png',
    title: 'Designed for efficiency.',
  },
  {
    src: '/hero/product_2_v3.png',
    title: 'Built for precision',
  },
  {
    src: '/hero/product_3.png',
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
      <div className="absolute bottom-28 left-0 z-20 w-fit max-w-[95%] rounded-r-xl h-auto min-h-[140px] bg-[#F5F5F5]/40 backdrop-blur-sm p-8 md:px-12 md:py-8 shadow-2xl flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial="enter"
            animate="center"
            exit="exit"
            variants={textVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-3xl md:text-4xl font-semibold tracking-wider text-brand-navy leading-[1.1] md:whitespace-nowrap">
              {SLIDES[currentSlide].title.split('. ').map((part, i) => (
                <span key={i} className="block text-brand-blue uppercase">
                  {part}
                </span>
              ))}
            </h1>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;