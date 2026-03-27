import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/i18n';

export default function Navigation() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: t.nav.shift, id: 'shift' },
    { label: t.nav.problem, id: 'problem' },
    { label: t.nav.opportunity, id: 'opportunity' },
    { label: t.nav.proposal, id: 'proposal' },
    { label: t.nav.phases, id: 'phases' },
    { label: t.nav.model, id: 'model' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <motion.nav
      data-testid="main-navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#030508]/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <button
          data-testid="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="hover:opacity-70 transition-opacity"
        >
          <img
            src="https://customer-assets.emergentagent.com/job_three-markets-one/artifacts/0c2kopd2_logo-wtf.png"
            alt="WTF Brief Destroyers"
            className="h-auto w-[182px] md:w-[234px] object-contain"
          />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              data-testid={`nav-${item.id}`}
              onClick={() => scrollTo(item.id)}
              className="text-[#8B9BB4] text-sm font-light tracking-wide hover:text-white transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}

          {/* Language Selector */}
          <div data-testid="lang-selector" className="flex items-center border border-[#1A2433] overflow-hidden">
            <button
              data-testid="lang-en"
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-all duration-300 ${
                lang === 'en'
                  ? 'bg-white text-black'
                  : 'text-[#8B9BB4] hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              data-testid="lang-es"
              onClick={() => setLang('es')}
              className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-all duration-300 ${
                lang === 'es'
                  ? 'bg-white text-black'
                  : 'text-[#8B9BB4] hover:text-white'
              }`}
            >
              ES
            </button>
          </div>

          <button
            data-testid="nav-contact-btn"
            onClick={() => scrollTo('closing')}
            className="text-sm px-5 py-2 border border-[#1A2433] text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            {t.nav.talk}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white w-8 h-8 flex flex-col justify-center items-center gap-1.5"
        >
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#030508]/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="section-container py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  data-testid={`nav-mobile-${item.id}`}
                  onClick={() => scrollTo(item.id)}
                  className="text-[#8B9BB4] text-left text-base hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
              {/* Mobile Lang Selector */}
              <div className="flex items-center gap-2 pt-2 border-t border-[#1A2433]">
                <button
                  data-testid="lang-mobile-en"
                  onClick={() => setLang('en')}
                  className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-all duration-300 border ${
                    lang === 'en' ? 'bg-white text-black border-white' : 'text-[#8B9BB4] border-[#1A2433]'
                  }`}
                >
                  EN
                </button>
                <button
                  data-testid="lang-mobile-es"
                  onClick={() => setLang('es')}
                  className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-all duration-300 border ${
                    lang === 'es' ? 'bg-white text-black border-white' : 'text-[#8B9BB4] border-[#1A2433]'
                  }`}
                >
                  ES
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
