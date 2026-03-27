import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';
import { useLang } from '@/i18n';

export default function Closing() {
  const { t } = useLang();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const element = document.getElementById('hero')?.closest('[data-testid="home-page"]');
      if (!element) return;
      const opt = {
        margin: 0,
        filename: 'Telit-Cinterion-Proposal-WTF.pdf',
        image: { type: 'jpeg', quality: 0.85 },
        html2canvas: { scale: 1.5, useCORS: true, logging: false, scrollY: 0 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
      };
      await html2pdf().set(opt).from(element).save();
    } catch (err) {
      console.error('PDF generation failed:', err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <section id="closing" data-testid="closing-section" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030508] via-[#0A2540]/20 to-[#030508]" />
      <div ref={ref} className="relative z-10 section-container text-center max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="space-y-4">
          <h2 className="font-['Inter'] text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight leading-tight">{t.closing.h1}</h2>
          <h2 className="font-['Inter'] text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight"><span className="text-gradient-blue">{t.closing.h2}</span></h2>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[#8B9BB4] text-base md:text-lg mt-10 font-light max-w-lg mx-auto">{t.closing.desc}</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button data-testid="closing-download-btn" onClick={handleDownload} disabled={downloading}
            className="px-10 py-4 bg-[#0052FF] text-white text-sm font-medium tracking-wide hover:bg-[#0040CC] transition-colors duration-300 disabled:opacity-50">
            {downloading ? t.closing.cta2_loading : t.closing.cta2}
          </button>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 1 }} className="mt-24 pt-8 border-t border-[#1A2433]">
          <img src="https://customer-assets.emergentagent.com/job_three-markets-one/artifacts/0c2kopd2_logo-wtf.png" alt="WTF Brief Destroyers" className="h-10 mx-auto mb-4" />
          <p className="text-[#8B9BB4] text-xs tracking-wider">{t.closing.footer}</p>
        </motion.div>
      </div>
    </section>
  );
}
