import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLang } from '@/i18n';

export default function WhyWTF() {
  const { t } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="why" data-testid="why-section" className="relative py-32 md:py-48 overflow-hidden">
      <div className="section-divider" />
      <div className="section-container py-24 md:py-32" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16">
          <span className="text-[#0052FF] text-xs tracking-[0.3em] uppercase font-medium">{t.why.label}</span>
        </motion.div>
        <div className="max-w-4xl space-y-6 md:space-y-8">
          {t.why.lines.map((line, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: i * 0.2 + 0.3, ease: [0.22, 1, 0.36, 1] }}>
              <h2 className="font-['Inter'] text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-none">{line}</h2>
            </motion.div>
          ))}
        </div>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 1 }}
          className="text-[#8B9BB4] text-base md:text-lg mt-12 font-light leading-relaxed max-w-xl">{t.why.desc}</motion.p>
      </div>
    </section>
  );
}
