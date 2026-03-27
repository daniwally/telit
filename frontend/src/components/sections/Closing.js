import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Closing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="closing"
      data-testid="closing-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030508] via-[#0A2540]/20 to-[#030508]" />

      <div ref={ref} className="relative z-10 section-container text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="font-['Clash_Display'] text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-tight">
            Websites talk.
          </h2>
          <h2 className="font-['Clash_Display'] text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
            <span className="text-gradient-blue">Systems grow.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[#8B9BB4] text-base md:text-lg mt-10 font-light max-w-lg mx-auto"
        >
          Ready to transform Telit Cinterion's digital ecosystem into three independent growth platforms?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            data-testid="closing-start-btn"
            className="px-10 py-4 bg-[#0052FF] text-white text-sm font-medium tracking-wide hover:bg-[#0040CC] transition-colors duration-300"
          >
            Start the Conversation
          </button>
          <button
            data-testid="closing-download-btn"
            className="px-10 py-4 border border-[#1A2433] text-[#8B9BB4] text-sm font-medium tracking-wide hover:border-white hover:text-white transition-all duration-300"
          >
            Download Proposal
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-24 pt-8 border-t border-[#1A2433]"
        >
          <p className="text-[#8B9BB4] text-xs tracking-wider">
            WTF &mdash; Strategy, Design & Systems for Telit Cinterion &mdash; March 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}
