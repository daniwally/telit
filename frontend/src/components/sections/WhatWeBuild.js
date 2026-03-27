import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLang } from '@/i18n';

export default function WhatWeBuild() {
  const { t } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="build" data-testid="build-section" className="relative py-24 md:py-40">
      <div className="section-divider" />
      <div className="section-container py-24 md:py-32" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
              <span className="text-[#0052FF] text-xs tracking-[0.3em] uppercase font-medium">{t.build.label}</span>
              <h2 className="font-['Inter'] text-3xl md:text-4xl lg:text-5xl font-semibold text-white mt-4 tracking-tight leading-tight">
                {t.build.h1_1}<br /><span className="text-[#8B9BB4]">{t.build.h1_2}</span>
              </h2>
              <p className="text-[#8B9BB4] text-sm md:text-base mt-6 font-light leading-relaxed max-w-md">{t.build.desc}</p>
            </motion.div>
            {/* Section Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 overflow-hidden border border-[#1A2433]"
            >
              <img
                src="https://images.unsplash.com/photo-1761912149936-8f662fc2a13e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2ODl8MHwxfHNlYXJjaHwyfHxkYXJrJTIwdGVjaG5vbG9neSUyMGRpZ2l0YWwlMjBlY29zeXN0ZW0lMjBhYnN0cmFjdHxlbnwwfHx8fDE3NzQ2MjE3ODd8MA&ixlib=rb-4.1.0&q=85"
                alt="Digital ecosystem"
                className="w-full h-[240px] md:h-[280px] object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {t.build.blocks.map((block, i) => (
              <motion.div key={i} data-testid={`build-block-${i}`} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                className="bg-[#0B111A] border border-[#1A2433] p-8 group hover:border-[#0052FF]/30 transition-colors duration-500">
                <span className="text-[#0052FF] text-[10px] tracking-[0.25em] uppercase font-mono">{block.label}</span>
                <h3 className="font-['Inter'] text-lg md:text-xl font-semibold text-white mt-3 tracking-tight">{block.title}</h3>
                <p className="text-[#8B9BB4] text-sm mt-3 font-light leading-relaxed">{block.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
