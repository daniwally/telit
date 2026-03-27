import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { label: 'Think', desc: 'Research, strategy, positioning' },
  { label: 'Build', desc: 'Design, develop, integrate' },
  { label: 'Move', desc: 'Launch, deploy, iterate' },
  { label: 'Learn', desc: 'Measure, optimize, refine' },
  { label: 'Scale', desc: 'Grow, expand, compound' },
];

export default function HowWeWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="howwework"
      data-testid="howwework-section"
      className="relative py-24 md:py-40"
    >
      <div className="section-divider" />

      <div className="section-container py-24 md:py-32" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-[#0052FF] text-xs tracking-[0.3em] uppercase font-medium">
            07 &mdash; How We Work
          </span>
          <h2 className="font-['Clash_Display'] text-3xl md:text-4xl font-semibold text-white mt-4 tracking-tight">
            The Loop.
          </h2>
          <p className="text-[#8B9BB4] text-base md:text-lg mt-4 font-light max-w-xl mx-auto">
            One team per platform. One objective per cell.
          </p>
        </motion.div>

        {/* Loop Diagram - SVG Circle */}
        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]"
          >
            {/* Outer ring */}
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full"
            >
              <circle
                cx="200"
                cy="200"
                r="170"
                fill="none"
                stroke="#1A2433"
                strokeWidth="1"
              />
              {/* Animated arc */}
              <motion.circle
                cx="200"
                cy="200"
                r="170"
                fill="none"
                stroke="#0052FF"
                strokeWidth="1.5"
                strokeDasharray="1068"
                initial={{ strokeDashoffset: 1068 }}
                animate={isInView ? { strokeDashoffset: 0 } : {}}
                transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
                strokeLinecap="round"
              />
              {/* Arrow at the end */}
              <motion.path
                d="M 200 30 L 210 40 L 200 35 L 190 40 Z"
                fill="#0052FF"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 2.5 }}
              />
            </svg>

            {/* Center text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="font-['Clash_Display'] text-lg md:text-xl font-semibold text-white">
                  Continuous
                </span>
                <br />
                <span className="text-[#0052FF] text-xs tracking-[0.2em] uppercase">
                  Growth Loop
                </span>
              </div>
            </div>

            {/* Nodes positioned around the circle */}
            {steps.map((step, i) => {
              const angle = (i / steps.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 50;
              const x = 50 + radius * Math.cos(angle);
              const y = 50 + radius * Math.sin(angle);

              return (
                <motion.div
                  key={step.label}
                  data-testid={`loop-step-${step.label.toLowerCase()}`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
                  className="absolute loop-node"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0B111A] border border-[#0052FF]/40 flex items-center justify-center">
                      <span className="font-['Clash_Display'] text-xs md:text-sm font-semibold text-white">
                        {step.label.charAt(0)}
                      </span>
                    </div>
                    <span className="font-['Clash_Display'] text-xs md:text-sm font-semibold text-white mt-2 whitespace-nowrap">
                      {step.label}
                    </span>
                    <span className="text-[#8B9BB4] text-[10px] md:text-xs mt-0.5 whitespace-nowrap hidden md:block">
                      {step.desc}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
