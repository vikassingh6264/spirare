import { motion } from 'framer-motion';

const clients = [
  '/our-clients/client-1.png',
  '/our-clients/client-2.png',
  '/our-clients/client-3.png',
  '/our-clients/client-4.png',
  '/our-clients/client-5.png',
  '/our-clients/client-6.png',
  '/our-clients/client-7.png',
  '/our-clients/client-8.png',
  '/our-clients/client-9.png',
];

const OurClients = () => {
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-20 bg-white overflow-hidden border-y border-slate-100">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center space-y-2">
          <h2 className="text-sm font-bold tracking-[0.2em] text-cyan-600 uppercase">Trusted By Industry Leaders</h2>
          <div className="h-1 w-12 bg-cyan-500 mx-auto" />
        </div>
      </div>
      <div className="relative flex overflow-x-hidden">
        <motion.div
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap items-center gap-12 md:gap-24 px-12"
        >
          {duplicatedClients.map((src, index) => (
            <div
              key={index}
              className="w-40 md:w-56 h-24 flex items-center justify-center transition-all duration-500"
            >
              <img
                src={src}
                alt={`Client logo ${index + 1}`}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurClients;
