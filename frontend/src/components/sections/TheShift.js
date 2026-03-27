import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLang } from '@/i18n';

export default function TheShift() {
  const { t } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const statements = [
    { text: t.shift.s1, delay: 0 },
    { text: t.shift.s2, delay: 0.15 },
    { text: t.shift.s3, delay: 0.3 },
  ];

  return (
    <section id="shift" data-testid="shift-section" className="relative py-24 md:py-40">
      <div className="section-divider" />
      <div ref={ref} className="section-container py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:sticky lg:top-32"
            >
              <span className="text-[#0052FF] text-xs tracking-[0.3em] uppercase font-medium">
                {t.shift.label}
              </span>
              <h2 className="font-['Inter'] text-3xl md:text-4xl font-semibold text-white mt-4 tracking-tight">
                {t.shift.title}
              </h2>
              <p className="text-[#8B9BB4] text-sm md:text-base mt-4 font-light leading-relaxed max-w-sm">
                {t.shift.desc}
              </p>
            </motion.div>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-16 md:gap-24">
            {statements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: item.delay + 0.3 }}
              >
                <p className="font-['Inter'] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight">
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
