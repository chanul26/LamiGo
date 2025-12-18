/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-scale': 'fadeInScale 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'blur-to-focus': 'blurToFocus 1.0s cubic-bezier(0.86, 0, 0.07, 1) forwards',
        'stagger-in': 'staggerIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        blurToFocus: {
          '0%': { opacity: '0', filter: 'blur(10px)' },
          '100%': { opacity: '1', filter: 'blur(0px)' },
        },
        staggerIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionTimingFunction: {
        'apple-smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'apple-subtle': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'apple-dramatic': 'cubic-bezier(0.86, 0, 0.07, 1)',
      },
    },
  },
  plugins: [],
};
