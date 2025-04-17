import { motion } from 'framer-motion';

export default function Hero({ onExploreClick }) {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[70vh] py-16 px-4 overflow-hidden"
      style={{ backgroundColor: '#181829' }}
    >
      {/* No blur banner hero-bg.jpeg background */}
      <img
        src="/images/hero-bg.jpeg"
        alt="Japanese Cyberpunk Theme Banner"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-100 pointer-events-none select-none"
      />
      {/* Overlay for text visibility */}
      <div className="absolute inset-0 w-full h-full z-10" style={{ background: 'linear-gradient(180deg, rgba(24,24,41,0.84) 0%, rgba(24,24,41,0.66) 50%, rgba(24,24,41,0.84) 100%)' }}></div>
      {/* Bilingual heading with glitch effect */}
      <motion.h1
        className="text-4xl md:text-6xl font-cyber text-white glitch text-center mb-2 drop-shadow-neon z-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, type: 'spring' }}
      >
        Jegan / Virez <span className="jp-text text-2xl md:text-4xl ml-2 text-modern-purple">ポートフォリオ</span>
      </motion.h1>
      {/* Tagline */}
      <motion.p
        className="mt-2 mb-8 text-lg md:text-xl font-poppins text-white text-center max-w-2xl z-20 drop-shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
      >
       ▄︻デ══━一💥 
      </motion.p>
      {/* Bamboo divider */}
      {/* Explore Button */}
      <motion.button
        onClick={onExploreClick}
        className="modern-btn px-8 py-3 rounded-2xl font-cyber text-lg uppercase tracking-widest shadow-modern border-2 border-modern-purple hover:border-modern-accent transition-all duration-300 z-20"
        whileHover={{ scale: 1.08, boxShadow: '0 0 24px #A259FF' }}
      >
        Explore My Findings
      </motion.button>
    </section>
  );
}
