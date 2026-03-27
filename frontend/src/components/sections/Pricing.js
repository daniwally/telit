import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLang } from '@/i18n';

const accents = ['#0052FF', '#00C853', '#FFB300'];

export default function Pricing() {
  const { t } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="pricing" data-testid="pricing-section" className="relative py-24 md:py-40">
      <div className="section-divider" />
      <div className="section-container py-24 md:py-32" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-[#0052FF] text-xs tracking-[0.3em] uppercase font-medium">
            {t.pricing.label}
          </span>
          <h2 className="font-['Inter'] text-3xl md:text-4xl lg:text-5xl font-semibold text-white mt-4 tracking-tight">
            {t.pricing.title}
          </h2>
          <p className="text-[#8B9BB4] text-base md:text-lg mt-4 font-light max-w-2xl mx-auto">
            {t.pricing.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {t.pricing.plans.map((plan, i) => (
            <motion.div
              key={i}
              data-testid={`pricing-plan-${i}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 + 0.2 }}
              className={`relative bg-[#0B111A] border p-8 md:p-10 flex flex-col ${
                plan.badge ? 'border-[#00C853]/30' : 'border-[#1A2433]'
              } hover:border-opacity-60 transition-all duration-500`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-8">
                  <span className="bg-[#00C853] text-black text-[10px] tracking-[0.2em] uppercase font-semibold px-3 py-1">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="w-2 h-2 rounded-full mb-6" style={{ background: accents[i] }} />

              <h3 className="font-['Inter'] text-xl font-semibold text-white tracking-tight">
                {plan.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-[#8B9BB4] text-sm">$</span>
                <span className="font-['Inter'] text-4xl md:text-5xl font-bold text-white tracking-tight">
                  {plan.price}
                </span>
                <span className="text-[#8B9BB4] text-sm ml-1">{plan.period}</span>
              </div>

              <p className="text-[#8B9BB4] text-sm mt-4 font-light leading-relaxed">
                {plan.desc}
              </p>

              <div className="mt-8 pt-6 border-t border-[#1A2433] flex-1">
                <span className="text-white text-xs tracking-wider uppercase font-medium">
                  {plan.includes}
                </span>
                <div className="mt-4 space-y-3">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div
                        className="w-1 h-1 rounded-full flex-shrink-0 mt-2"
                        style={{ background: accents[i] }}
                      />
                      <span className="text-[#8B9BB4] text-sm font-light">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                data-testid={`pricing-cta-${i}`}
                className={`mt-8 w-full py-3 text-sm font-medium tracking-wide transition-all duration-300 ${
                  plan.badge
                    ? 'bg-[#00C853] text-black hover:bg-[#00B848]'
                    : 'border border-[#1A2433] text-[#8B9BB4] hover:border-white hover:text-white'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center text-[#8B9BB4] text-xs mt-8 font-light tracking-wide"
        >
          {t.pricing.note}
        </motion.p>
      </div>
    </section>
  );
}
