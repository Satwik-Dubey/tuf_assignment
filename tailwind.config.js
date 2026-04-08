export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        calendar: {
          bg: 'var(--calendar-bg)',
          primary: 'var(--primary)',
          'primary-hover': 'var(--primary-hover)',
          'primary-light': 'var(--primary-light)',
        },
        text: {
          dark: 'var(--text-dark)',
          light: 'var(--text-light)',
        }
      },
      boxShadow: {
        'calendar': 'var(--shadow-calendar)',
      },
      backgroundImage: {
        'wall-texture': 'var(--wall-texture)',
        'hero-gradient': 'linear-gradient(to top, rgba(4, 120, 87, 0.75) 0%, transparent 60%)',
        'notes-lines': 'linear-gradient(transparent, transparent 1.7rem, rgba(148, 163, 184, 0) 1.7rem, rgba(148, 163, 184, 0) 1.8rem)'
      }
    },
  },
  plugins: [],
}
