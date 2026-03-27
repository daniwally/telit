import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function TheOpportunity() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section
      id="opportunity"
      data-testid="opportunity-section"
      ref={ref}
      className="relative py-24 md:py-40 overflow-hidden"
    >
      {/* Background Image */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/4864249/pexels-photo-4864249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
          }}
        />
        <div className="absolute inset-0 bg-[#030508]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030508] via-[#030508]/60 to-transparent" />
      </motion.div>

      <div className="relative z-10 section-container">
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[#0052FF] text-xs tracking-[0.3em] uppercase font-medium block"
          >
            03 &mdash; The Opportunity
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-['Inter'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mt-6 tracking-tight leading-[1.05]"
          >
            Don't split the company.
            <br />
            <span className="text-gradient-blue">Multiply its growth.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 space-y-6"
          >
            <p className="text-[#8B9BB4] text-base md:text-lg font-light leading-relaxed max-w-xl">
              3 independent growth machines. Each with its own narrative, its own funnel, its own audience.
            </p>
            <div className="flex gap-12 mt-8">
              {[
                { num: '3', label: 'Platforms' },
                { num: '3x', label: 'Growth Potential' },
                { num: '1', label: 'Unified Vision' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                >
                  <span className="font-['Inter'] text-3xl md:text-4xl font-semibold text-white">
                    {stat.num}
                  </span>
                  <p className="text-[#8B9BB4] text-xs tracking-wide mt-1 uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
