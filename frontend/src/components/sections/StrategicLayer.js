import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLang } from '@/i18n';

export default function StrategicLayer() {
  const { t } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="strategic" data-testid="strategic-section" className="relative py-24 md:py-40">
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-16 md:mb-20">
          <span className="text-[#0052FF] text-xs tracking-[0.3em] uppercase font-medium">{t.strategic.label}</span>
          <h2 className="font-['Inter'] text-3xl md:text-4xl font-semibold text-white mt-4 tracking-tight max-w-2xl">{t.strategic.title}</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#1A2433]">
          {t.strategic.items.map((item, i) => (
            <motion.div key={i} data-testid={`strategic-item-${i}`} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: i * 0.08 + 0.2 }}
              className="border-b border-r border-[#1A2433] p-8 md:p-10 group hover:bg-[#0B111A]/50 transition-colors duration-500">
              <span className="text-[#8B9BB4] text-xs font-mono">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-['Inter'] text-lg md:text-xl font-semibold text-white mt-4 tracking-tight">{item.title}</h3>
              <p className="text-[#8B9BB4] text-sm mt-3 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
