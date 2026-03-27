import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const statements = [
  { text: 'Everything lives together.', delay: 0 },
  { text: 'Nothing competes properly.', delay: 0.15 },
  { text: 'Different businesses. Same voice. Same problem.', delay: 0.3 },
];

export default function TheShift() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="shift"
      data-testid="shift-section"
      className="relative py-24 md:py-40"
    >
      <div className="section-divider" />

      <div ref={ref} className="section-container py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left - Sticky Header */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-32"
            >
              <span className="text-[#0052FF] text-xs tracking-[0.3em] uppercase font-medium">
                01 &mdash; The Shift
              </span>
              <h2 className="font-['Clash_Display'] text-3xl md:text-4xl font-semibold text-white mt-4 tracking-tight">
                The current state.
              </h2>
              <p className="text-[#8B9BB4] text-sm md:text-base mt-4 font-light leading-relaxed max-w-sm">
                Telit Cinterion operates a single website for all four business lines. Modules, Connectivity, Platform, and Solutions. Each fighting for attention.
              </p>
            </motion.div>
          </div>

          {/* Right - Scrolling Statements */}
          <div className="lg:col-span-8 flex flex-col gap-16 md:gap-24">
            {statements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: item.delay + 0.3 }}
              >
                <p className="font-['Clash_Display'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
                  {item.text}
                </p>
                {i < statements.length - 1 && (
                  <div className="mt-12 md:mt-16 h-px bg-[#1A2433]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
