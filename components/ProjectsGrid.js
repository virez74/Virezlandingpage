import ProjectCard from './ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const SUBCATEGORIES = [
  { label: 'All', value: 'all', gradient: 'from-modern-purple to-modern-accent' },
  { label: 'Project', value: 'Project', gradient: 'from-modern-purple to-modern-accent' },
  { label: 'Boardgame', value: 'Boardgame', gradient: 'from-modern-purple to-modern-accent' },
  { label: 'Open', value: 'Open', gradient: 'from-modern-purple to-modern-accent' }, // For future items
];

export default function ProjectsGrid({ projects }) {
  const [selected, setSelected] = useState('all');
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const visibleCount = 2; // Show 2 tabs at a time on mobile

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate visible tabs for mobile
  const visibleTabs = isMobile
    ? SUBCATEGORIES.slice(scrollIndex, scrollIndex + visibleCount)
    : SUBCATEGORIES;

  const canScrollLeft = isMobile && scrollIndex > 0;
  const canScrollRight = isMobile && scrollIndex + visibleCount < SUBCATEGORIES.length;

  const handleLeft = () => {
    if (canScrollLeft) setScrollIndex(scrollIndex - 1);
  };
  const handleRight = () => {
    if (canScrollRight) setScrollIndex(scrollIndex + 1);
  };

  const filtered = selected === 'all' ? projects : projects.filter(p => p.category === selected);

  // Fix hydration error: Only render AnimatePresence/motion on client
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="projects" className="py-20 bg-cyberpunk-dark border-t-4 border-cyberpunk-cyan">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-cyber font-bold text-center mb-8 text-cyberpunk-yellow uppercase tracking-widest drop-shadow-neon">
          Findings
        </h2>
        {/* Subcategory Tabs - horizontal scrollable with arrows, touch friendly and even padding, no outer glow */}
        <div className="flex items-center justify-center mb-10 gap-2 relative">
          {isMobile && (
            <button
              onClick={handleLeft}
              disabled={!canScrollLeft}
              className="p-3 rounded-full bg-gradient-to-r from-modern-purple to-modern-accent text-black disabled:opacity-30 active:scale-95 focus:outline-none focus:ring-2 focus:ring-modern-purple"
              aria-label="Scroll left"
              style={{ minWidth: 48, minHeight: 48, touchAction: 'manipulation', boxShadow: 'none' }}
            >
              &#8592;
            </button>
          )}
          <div className="flex overflow-x-auto no-scrollbar gap-4 px-2 w-full max-w-xs sm:max-w-none sm:justify-center">
            {(isMobile ? visibleTabs : SUBCATEGORIES).map(tab => (
              <button
                key={tab.value}
                className={`w-full sm:w-auto px-8 py-4 rounded-xl font-cyber text-base md:text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-modern-purple/60 focus:ring-offset-2 focus:ring-offset-cyberpunk-dark text-black flex items-center justify-center active:scale-95 ${selected === tab.value ? `bg-gradient-to-r ${tab.gradient}` : 'bg-modern-surface hover:bg-modern-purple/20'}`}
                style={{ minWidth: 120, maxWidth: '100%', touchAction: 'manipulation', boxShadow: 'none', textAlign: 'center', WebkitTapHighlightColor: 'transparent' }}
                onClick={() => setSelected(tab.value)}
                aria-pressed={selected === tab.value}
                tabIndex={0}
              >
                <span className="w-full text-center flex items-center justify-center select-none">{tab.label}</span>
              </button>
            ))}
          </div>
          {isMobile && (
            <button
              onClick={handleRight}
              disabled={!canScrollRight}
              className="p-3 rounded-full bg-gradient-to-r from-modern-purple to-modern-accent text-black disabled:opacity-30 active:scale-95 focus:outline-none focus:ring-2 focus:ring-modern-purple"
              aria-label="Scroll right"
              style={{ minWidth: 48, minHeight: 48, touchAction: 'manipulation', boxShadow: 'none' }}
            >
              &#8594;
            </button>
          )}
        </div>
        {isClient && (
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, type: 'spring' }}
            >
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}
        {!isClient && (
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
