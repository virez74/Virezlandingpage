import { useRef } from 'react';

export default function NavBar({ onLogoClick }) {
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
      <ul className="flex flex-row gap-4 sm:gap-8 font-cyber text-cyberpunk-yellow text-base uppercase ml-2 flex-shrink-0">
        <li><a href="#about" className="hover:text-cyberpunk-pink transition-colors px-4 py-2 block text-center">About</a></li>
        <li><a href="#projects" className="hover:text-cyberpunk-pink transition-colors px-4 py-2 block text-center">Findings</a></li>
        <li><a href="#contact" className="hover:text-cyberpunk-pink transition-colors px-4 py-2 block text-center">Contact</a></li>
      </ul>
    </nav>
  );
}
