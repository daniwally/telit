import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLang } from '@/i18n';

const accents = ['#0052FF', '#00C853', '#FFB300'];

export default function BusinessModel() {
  const { t } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="model" data-testid="model-section" className="relative py-24 md:py-40">
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16 md:mb-24">
          <span className="text-[#0052FF] text-xs tracking-[0.3em] uppercase font-medium">{t.model.label}</span>
          <h2 className="font-['Inter'] text-3xl md:text-4xl lg:text-5xl font-semibold text-white mt-4 tracking-tight">{t.model.title}</h2>
          <p className="text-[#8B9BB4] text-base md:text-lg mt-4 font-light max-w-lg mx-auto">{t.model.desc}</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {t.model.options.map((model, i) => (
            <motion.div key={i} data-testid={`model-${model.title.toLowerCase().replace(/\s+/g, '-')}`}
              initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.12 + 0.2 }}
              className={`relative bg-[#0B111A] border p-8 md:p-10 flex flex-col ${i === 1 ? 'border-[#00C853]/30' : 'border-[#1A2433]'} hover:border-opacity-60 transition-all duration-500`}>
              {i === 1 && (
                <div className="absolute -top-3 left-8">
                  <span className="bg-[#00C853] text-black text-[10px] tracking-[0.2em] uppercase font-semibold px-3 py-1">{t.model.recommended}</span>
                </div>
              )}
              <div className="w-2 h-2 rounded-full mb-6" style={{ background: accents[i] }} />
              <h3 className="font-['Inter'] text-2xl font-semibold text-white tracking-tight">{model.title}</h3>
              <p className="text-[#8B9BB4] text-sm mt-3 font-light leading-relaxed flex-1">{model.desc}</p>
              <div className="mt-8 space-y-3">
                {model.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: accents[i] }} />
                    <span className="text-[#8B9BB4] text-sm font-light">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
