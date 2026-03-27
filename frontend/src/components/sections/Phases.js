import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const phases = [
  {
    num: '01',
    title: 'Strategy',
    duration: 'Weeks 1-4',
    items: [
      'Audience research & persona mapping',
      'Competitive analysis & positioning',
      'Messaging frameworks per platform',
      'Information architecture & sitemaps',
    ],
  },
  {
    num: '02',
    title: 'Design',
    duration: 'Weeks 5-10',
    items: [
      'Visual identity per platform',
      'UX wireframes & prototypes',
      'Component design system',
      'Content strategy & copywriting',
    ],
  },
  {
    num: '03',
    title: 'Build',
    duration: 'Weeks 11-18',
    items: [
      'Front-end development & CMS',
      'Conversion funnels & landing pages',
      'SEO infrastructure & analytics',
      'Integration & QA testing',
    ],
  },
  {
    num: '04',
    title: 'Growth',
    duration: 'Ongoing',
    items: [
      'Content engine activation',
      'Performance optimization',
      'A/B testing & iteration',
      'Growth roadmap execution',
    ],
  },
];

export default function Phases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="phases"
      data-testid="phases-section"
      className="relative py-24 md:py-40"
    >
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="text-[#0052FF] text-xs tracking-[0.3em] uppercase font-medium">
            08 &mdash; Phases
          </span>
          <h2 className="font-['Inter'] text-3xl md:text-4xl font-semibold text-white mt-4 tracking-tight">
            From strategy to scale.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-[#1A2433]">
            <motion.div
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : {}}
              transition={{ duration: 2, delay: 0.3 }}
              className="w-full bg-gradient-to-b from-[#0052FF] to-[#0052FF]/10"
            />
          </div>

          <div className="space-y-12 md:space-y-16">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.num}
                data-testid={`phase-${phase.num}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 + 0.3 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Node */}
                <div className="absolute left-2 md:left-6 top-1 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#030508] border-2 border-[#0052FF] z-10">
                  <div className="absolute inset-1 rounded-full bg-[#0052FF]" />
                </div>

                <div className="bg-[#0B111A] border border-[#1A2433] p-8 md:p-10 hover:border-[#0052FF]/20 transition-colors duration-500">
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="font-['Inter'] text-3xl md:text-4xl font-semibold text-white tracking-tight">
                      {phase.title}
                    </span>
                    <span className="text-[#0052FF] text-xs tracking-wider font-mono">
                      {phase.duration}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                    {phase.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div className="w-1 h-1 rounded-full bg-[#0052FF] mt-2 flex-shrink-0" />
                        <span className="text-[#8B9BB4] text-sm font-light">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
