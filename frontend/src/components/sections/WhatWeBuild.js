import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const blocks = [
  {
    title: 'Core System',
    desc: 'UX research, visual design, front-end development, and CMS architecture built for scale.',
    label: 'Design & Dev',
  },
  {
    title: 'Growth Infrastructure',
    desc: 'SEO strategy, content engine, resource libraries, and organic acquisition channels.',
    label: 'Content & SEO',
  },
  {
    title: 'Conversion Layer',
    desc: 'Dedicated funnels, smart CTAs, landing pages, and lead qualification systems.',
    label: 'Funnels & CTAs',
  },
  {
    title: 'Strategic Narrative',
    desc: 'Positioning, messaging frameworks, competitive differentiation, and brand voice per platform.',
    label: 'Positioning',
  },
];

export default function WhatWeBuild() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="build"
      data-testid="build-section"
      className="relative py-24 md:py-40"
    >
      <div className="section-divider" />

      <div className="section-container py-24 md:py-32" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#0052FF] text-xs tracking-[0.3em] uppercase font-medium">
                05 &mdash; What We Build
              </span>
              <h2 className="font-['Clash_Display'] text-3xl md:text-4xl lg:text-5xl font-semibold text-white mt-4 tracking-tight leading-tight">
                We don't build websites.
                <br />
                <span className="text-[#8B9BB4]">We build systems.</span>
              </h2>
              <p className="text-[#8B9BB4] text-sm md:text-base mt-6 font-light leading-relaxed max-w-md">
                Each platform gets a full digital ecosystem. Not a redesign. A growth machine with its own engine.
              </p>
            </motion.div>
          </div>

          {/* Right - Blocks */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {blocks.map((block, i) => (
              <motion.div
                key={i}
                data-testid={`build-block-${i}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.2 }}
                className="bg-[#0B111A] border border-[#1A2433] p-8 group hover:border-[#0052FF]/30 transition-colors duration-500"
              >
                <span className="text-[#0052FF] text-[10px] tracking-[0.25em] uppercase font-mono">
                  {block.label}
                </span>
                <h3 className="font-['Clash_Display'] text-lg md:text-xl font-semibold text-white mt-3 tracking-tight">
                  {block.title}
                </h3>
                <p className="text-[#8B9BB4] text-sm mt-3 font-light leading-relaxed">
                  {block.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
