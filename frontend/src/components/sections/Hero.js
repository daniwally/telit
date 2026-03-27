import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay"
    >
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1763386599810-e31937993312?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMHNsZWVrJTIwZGFyayUyMGJhY2tncm91bmR8ZW58MHx8fHwxNzc0NjE1ODEzfDA&ixlib=rb-4.1.0&q=85')`,
          }}
        />
        <div className="absolute inset-0 bg-[#030508]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030508]" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 section-container text-center max-w-5xl mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[#0052FF] text-sm md:text-base tracking-[0.3em] uppercase font-light mb-8"
        >
          Telit Cinterion &mdash; Digital Transformation
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="font-['Clash_Display'] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white tracking-tight leading-[1.05]"
        >
          One website can't win
          <br />
          <span className="text-gradient-blue">three markets.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 text-[#8B9BB4] text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed"
        >
          Time to build platforms, not pages.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          <button
            data-testid="hero-explore-btn"
            onClick={() => document.getElementById('shift')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-[#0052FF] text-white text-sm font-medium tracking-wide hover:bg-[#0040CC] transition-colors duration-300"
          >
            Explore the Proposal
          </button>
          <button
            data-testid="hero-contact-btn"
            onClick={() => document.getElementById('closing')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border border-[#1A2433] text-[#8B9BB4] text-sm font-medium tracking-wide hover:border-white hover:text-white transition-all duration-300"
          >
            Get in Touch
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-12 bg-gradient-to-b from-[#0052FF] to-transparent mx-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
