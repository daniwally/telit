import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLang } from '@/i18n';

const accents = ['#0052FF', '#00C853', '#FFB300'];

export default function TheProposal() {
  const { t } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="proposal" data-testid="proposal-section" className="relative py-24 md:py-40">
      <div className="section-container" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16 md:mb-24">
          <span className="text-[#0052FF] text-xs tracking-[0.3em] uppercase font-medium">{t.proposal.label}</span>
          <h2 className="font-['Inter'] text-3xl md:text-4xl lg:text-5xl font-semibold text-white mt-4 tracking-tight">{t.proposal.title}</h2>
          <p className="text-[#8B9BB4] text-base md:text-lg mt-4 font-light max-w-2xl mx-auto">{t.proposal.desc}</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {t.proposal.pillars.map((pillar, i) => (
            <motion.div key={i} data-testid={`pillar-${['connectivity','platform','modules'][i]}`}
              initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: i * 0.15 + 0.2 }}
              className="relative bg-[#0B111A] border border-[#1A2433] p-8 md:p-10 min-h-[480px] flex flex-col group hover:border-opacity-50 transition-all duration-500">
              <div className="absolute top-0 left-0 right-0 h-px opacity-60 group-hover:opacity-100 transition-opacity" style={{ background: accents[i] }} />
              <div className="flex-1">
                <div className="w-2 h-2 rounded-full mb-6" style={{ background: accents[i] }} />
                <h3 className="font-['Inter'] text-2xl md:text-3xl font-semibold text-white tracking-tight">{pillar.title}</h3>
                <p className="text-xs tracking-[0.2em] uppercase mt-2 font-medium" style={{ color: accents[i] }}>{pillar.subtitle}</p>
                <p className="text-[#8B9BB4] text-sm md:text-base mt-5 font-light leading-relaxed">{pillar.desc}</p>
                <div className="mt-8 space-y-3">
                  {pillar.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: accents[i] }} />
                      <span className="text-[#8B9BB4] text-sm font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-[#1A2433]">
                <span className="text-[#8B9BB4] text-xs tracking-wider uppercase font-medium group-hover:text-white transition-colors">{pillar.footer} &rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="hidden lg:flex items-center justify-center mt-12">
          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-[#1A2433]" />
            <span className="text-[#8B9BB4] text-xs tracking-wider uppercase">{t.proposal.connected}</span>
            <div className="h-px w-16 bg-[#1A2433]" />
          </div>
        </div>
      </div>
    </section>
  );
}
