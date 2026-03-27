import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLang } from '@/i18n';

const spans = ['md:col-span-2', 'md:col-span-1', 'md:col-span-1', 'md:col-span-2'];

export default function TheProblem() {
  const { t } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="problem" data-testid="problem-section" className="relative py-24 md:py-40">
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16 md:mb-24">
          <span className="text-[#0052FF] text-xs tracking-[0.3em] uppercase font-medium">{t.problem.label}</span>
          <h2 className="font-['Inter'] text-3xl md:text-4xl lg:text-5xl font-semibold text-white mt-4 tracking-tight max-w-3xl">{t.problem.title}</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {t.problem.cards.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }} data-testid={`problem-card-${i}`}
              className={`${spans[i]} bg-[#0B111A] border border-[#1A2433] p-8 md:p-12 group hover:border-[#0052FF]/30 transition-colors duration-500`}>
              <span className="text-[#0052FF] text-xs font-mono tracking-wider">0{i + 1}</span>
              <h3 className="font-['Inter'] text-xl md:text-2xl font-semibold text-white mt-4 tracking-tight">{item.title}</h3>
              <p className="text-[#8B9BB4] text-sm md:text-base mt-3 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
