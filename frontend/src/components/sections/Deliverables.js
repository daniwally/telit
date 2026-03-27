import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const deliverables = [
  { item: '2 Full Standalone Platforms', detail: 'Connectivity + Platform (deviceWISE)', category: 'Core' },
  { item: 'Modules Hub Repositioning', detail: 'Telit.com refocused as hardware destination', category: 'Core' },
  { item: 'Conversion System', detail: 'Dedicated funnels, CTAs, landing pages per platform', category: 'Growth' },
  { item: 'Content Engine', detail: 'Blog, resources, case studies, thought leadership', category: 'Growth' },
  { item: 'Messaging System', detail: 'Positioning frameworks, brand voice, competitive copy', category: 'Strategy' },
  { item: 'Growth Roadmap', detail: 'SEO, content calendar, performance benchmarks', category: 'Strategy' },
];

export default function Deliverables() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="deliverables"
      data-testid="deliverables-section"
      className="relative py-24 md:py-40"
    >
      <div className="section-divider" />

      <div className="section-container py-24 md:py-32" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="text-[#0052FF] text-xs tracking-[0.3em] uppercase font-medium">
            09 &mdash; Deliverables
          </span>
          <h2 className="font-['Inter'] text-3xl md:text-4xl font-semibold text-white mt-4 tracking-tight">
            What you get.
          </h2>
        </motion.div>

        {/* Table */}
        <div className="border border-[#1A2433]">
          {/* Header */}
          <div className="hidden md:grid grid-cols-12 gap-0 border-b border-[#1A2433] bg-[#0B111A]/50">
            <div className="col-span-5 p-4 md:p-6">
              <span className="text-[#8B9BB4] text-xs tracking-wider uppercase font-medium">
                Deliverable
              </span>
            </div>
            <div className="col-span-5 p-4 md:p-6">
              <span className="text-[#8B9BB4] text-xs tracking-wider uppercase font-medium">
                Detail
              </span>
            </div>
            <div className="col-span-2 p-4 md:p-6">
              <span className="text-[#8B9BB4] text-xs tracking-wider uppercase font-medium">
                Category
              </span>
            </div>
          </div>

          {/* Rows */}
          {deliverables.map((row, i) => (
            <motion.div
              key={i}
              data-testid={`deliverable-${i}`}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 + 0.2 }}
              className={`grid grid-cols-1 md:grid-cols-12 gap-0 ${
                i < deliverables.length - 1 ? 'border-b border-[#1A2433]' : ''
              } hover:bg-[#0B111A]/50 transition-colors duration-300`}
            >
              <div className="col-span-5 p-4 md:p-6">
                <span className="text-white text-sm md:text-base font-medium">
                  {row.item}
                </span>
              </div>
              <div className="col-span-5 p-4 md:p-6 md:border-l border-[#1A2433]">
                <span className="text-[#8B9BB4] text-sm font-light">
                  {row.detail}
                </span>
              </div>
              <div className="col-span-2 p-4 md:p-6 md:border-l border-[#1A2433]">
                <span className="text-[#0052FF] text-xs tracking-wider uppercase font-mono">
                  {row.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
