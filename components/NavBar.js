import { useState } from 'react';

export default function NavBar({ onLogoClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-cyberpunk-dark/90 border-b-2 border-cyberpunk-pink backdrop-blur flex items-center justify-between px-4 sm:px-8 py-3 shadow-neon">
      <div className="flex items-center">
        <button
          onClick={onLogoClick}
          className="focus:outline-none group rounded-full p-1 bg-cyberpunk-dark border-2 border-cyberpunk-cyan shadow-neon mr-3"
          aria-label="Scroll to top"
        >
          <img
            src="/images/virez_logo.png"
            alt="Logo"
            className="w-14 h-14 min-w-[3.5rem] min-h-[3.5rem] max-w-[3.5rem] max-h-[3.5rem] rounded-full object-contain group-hover:scale-110 transition-transform"
          />
        </button>
        <span className="ml-2 text-modern-purple font-cyber text-2xl tracking-widest font-bold select-none hidden sm:inline">VIREZ</span>
      </div>
      {/* Hamburger menu for mobile */}
      <button
        className="sm:hidden flex flex-col justify-center items-center w-10 h-10 ml-auto focus:outline-none group"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span className={`block w-8 h-1 rounded-full bg-cyberpunk-pink transition-all duration-300 mb-1 ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
        <span className={`block w-8 h-1 rounded-full bg-cyberpunk-pink transition-all duration-300 mb-1 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-8 h-1 rounded-full bg-cyberpunk-pink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
      </button>
      {/* Desktop nav */}
      <ul className="hidden sm:flex flex-row gap-4 sm:gap-8 font-cyber text-cyberpunk-yellow text-base uppercase ml-2 flex-shrink-0">
        <li><a href="#about" className="hover:text-cyberpunk-pink transition-colors px-4 py-2 block text-center">About</a></li>
        <li><a href="#projects" className="hover:text-cyberpunk-pink transition-colors px-4 py-2 block text-center">Findings</a></li>
        <li><a href="#contact" className="hover:text-cyberpunk-pink transition-colors px-4 py-2 block text-center">Contact</a></li>
      </ul>
      {/* Mobile menu drawer */}
      {menuOpen && (
        <>
          {/* Translucent background overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40" onClick={() => setMenuOpen(false)}></div>
          <div className="sm:hidden fixed top-[72px] right-2 left-2 bg-cyberpunk-dark/70 border-2 border-cyberpunk-pink rounded-xl shadow-neon p-6 flex flex-col items-center animate-fade-in z-50 backdrop-blur-md">
            <a href="#about" className="w-full py-3 text-center font-cyber text-cyberpunk-yellow text-lg uppercase hover:text-cyberpunk-pink transition-colors" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" className="w-full py-3 text-center font-cyber text-cyberpunk-yellow text-lg uppercase hover:text-cyberpunk-pink transition-colors" onClick={() => setMenuOpen(false)}>Findings</a>
            <a href="#contact" className="w-full py-3 text-center font-cyber text-cyberpunk-yellow text-lg uppercase hover:text-cyberpunk-pink transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </>
      )}
    </nav>
  );
}
