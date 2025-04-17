/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'modern-bg': '#181829',
        'modern-surface': '#232347',
        'modern-card': '#232347',
        'modern-text': '#E7E7F6',
        'modern-muted': '#A7A7C7',
        'modern-purple': '#A259FF',
        'modern-purple-dark': '#6C2BD7',
        'modern-accent': '#A259FF',
        'modern-accent-dark': '#6C2BD7',
        'modern-border': '#28284C',
        'modern-btn': '#232347',
        'modern-btn-hover': '#A259FF',
        'modern-btn-text': '#E7E7F6',
      },
      fontFamily: {
        'sans': ['Poppins', 'Noto Sans JP', 'Zen Kaku Gothic New', 'Orbitron', 'sans-serif'],
        'cyber': ['Orbitron', 'Poppins', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'modern': '0 4px 32px 0 rgba(162,89,255,0.15)',
        'modern-hover': '0 8px 40px 0 rgba(162,89,255,0.22)',
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color, text-decoration-color, fill, stroke',
      },
    },
  },
  plugins: [],
};
