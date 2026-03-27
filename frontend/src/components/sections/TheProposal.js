import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const pillars = [
  {
    id: 'connectivity',
    title: 'Connectivity',
    subtitle: 'NExT IoT SIM / eSIM',
    desc: 'Global IoT connectivity with dedicated positioning against KORE, Eseye, and carrier MVNOs. Own narrative for mission-critical deployments.',
    items: ['Global SIM & eSIM', 'Connectivity Management', 'Network Security', 'Coverage Intelligence'],
    accent: '#0052FF',
  },
  {
    id: 'platform',
    title: 'Platform',
    subtitle: 'deviceWISE IoT',
    desc: 'Industrial IoT platform competing head-to-head with Kepware, Ignition, and AVEVA. 30+ years of edge intelligence.',
    items: ['Edge Orchestration', 'AI & Visual Inspection', 'SCADA & HMI', '400+ Device Drivers'],
    accent: '#00C853',
  },
  {
    id: 'modules',
    title: 'Modules Hub',
    subtitle: 'Telit.com Repositioned',
    desc: 'The existing telit.com becomes a focused, powerful modules destination. Hardware-first, engineer-centric.',
    items: ['5G & LTE Modules', 'LPWA Solutions', 'Smart Modules', 'Certification Hub'],
    accent: '#FFB300',
  },
];

export default function TheProposal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="proposal"
      data-testid="proposal-section"
      className="relative py-24 md:py-40"
    >
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-[#0052FF] text-xs tracking-[0.3em] uppercase font-medium">
            04 &mdash; The Proposal
          </span>
          <h2 className="font-['Clash_Display'] text-3xl md:text-4xl lg:text-5xl font-semibold text-white mt-4 tracking-tight">
            Three platforms. One ecosystem.
          </h2>
          <p className="text-[#8B9BB4] text-base md:text-lg mt-4 font-light max-w-2xl mx-auto">
            Each visually distinct, strategically independent, and built to dominate its market.
          </p>
        </motion.div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.id}
              data-testid={`pillar-${pillar.id}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 + 0.2 }}
              className="relative bg-[#0B111A] border border-[#1A2433] p-8 md:p-10 min-h-[480px] flex flex-col group hover:border-opacity-50 transition-all duration-500"
              style={{ '--pillar-accent': pillar.accent }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ background: pillar.accent }}
              />

              <div className="flex-1">
                <div
                  className="w-2 h-2 rounded-full mb-6"
                  style={{ background: pillar.accent }}
                />
                <h3 className="font-['Clash_Display'] text-2xl md:text-3xl font-semibold text-white tracking-tight">
                  {pillar.title}
                </h3>
                <p
                  className="text-xs tracking-[0.2em] uppercase mt-2 font-medium"
                  style={{ color: pillar.accent }}
                >
                  {pillar.subtitle}
                </p>
                <p className="text-[#8B9BB4] text-sm md:text-base mt-5 font-light leading-relaxed">
                  {pillar.desc}
                </p>

                <div className="mt-8 space-y-3">
                  {pillar.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: pillar.accent }}
                      />
                      <span className="text-[#8B9BB4] text-sm font-light">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#1A2433]">
                <span className="text-[#8B9BB4] text-xs tracking-wider uppercase font-medium group-hover:text-white transition-colors">
                  Standalone Digital Platform &rarr;
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connection line */}
        <div className="hidden lg:flex items-center justify-center mt-12">
          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-[#1A2433]" />
            <span className="text-[#8B9BB4] text-xs tracking-wider uppercase">Connected Ecosystem</span>
            <div className="h-px w-16 bg-[#1A2433]" />
          </div>
        </div>
      </div>
    </section>
  );
}
