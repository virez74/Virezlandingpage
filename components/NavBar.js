import { useState } from 'react';

export default function NavBar({ onLogoClick }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-cyberpunk-dark/95 backdrop-blur flex items-center justify-between px-2 sm:px-8 py-2 sm:py-3">
      <div className="flex items-center">
        <button
          onClick={onLogoClick}
          className="focus:outline-none group rounded-full p-1 bg-cyberpunk-dark border-2 border-cyberpunk-cyan shadow-neon mr-2 sm:mr-3"
          aria-label="Scroll to top"
        >
          <img
            src="/images/virez_logo.png"
            alt="Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 min-w-[2.5rem] min-h-[2.5rem] sm:min-w-[3.5rem] sm:min-h-[3.5rem] max-w-[3.5rem] max-h-[3.5rem] rounded-full object-contain group-hover:scale-110 transition-transform"
          />
        </button>
        <span className="ml-2 text-modern-purple font-cyber text-xl sm:text-2xl tracking-widest font-bold select-none hidden sm:inline">VIREZ</span>
      </div>
      <ul className="flex flex-row gap-2 sm:gap-8 font-cyber text-cyberpunk-yellow text-base sm:text-lg uppercase ml-2 flex-shrink-0">
        <li><a href="#about" className="hover:text-cyberpunk-pink transition-colors px-2 py-2 sm:px-4 sm:py-2 block text-center whitespace-nowrap no-underline border-0">About</a></li>
        <li><a href="#projects" className="hover:text-cyberpunk-pink transition-colors px-2 py-2 sm:px-4 sm:py-2 block text-center whitespace-nowrap no-underline border-0">Findings</a></li>
        <li><a href="#contact" className="hover:text-cyberpunk-pink transition-colors px-2 py-2 sm:px-4 sm:py-2 block text-center whitespace-nowrap no-underline border-0">Contact</a></li>
      </ul>
    </nav>
  );
}
