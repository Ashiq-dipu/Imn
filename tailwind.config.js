/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        soci: {
          bg: '#FFFFFF',
          cream: '#F1F5F9',
          card: '#FFFFFF',
          coral: '#0094EF',
          cyan: '#0094EF',
          dark: '#111111',
          text: '#1A1918',
          muted: '#787571',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Red Hat Display"', 'sans-serif'],
        heading: ['"Red Hat Display"', 'sans-serif'],
        condensed: ['"Red Hat Display"', 'sans-serif'],
        mono: ['Space Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-vertical-fast': 'marqueeVertical 25s linear infinite',
        'marquee-vertical': 'marqueeVertical 36s linear infinite',
        'marquee-vertical-slow': 'marqueeVertical 40s linear infinite',
        'marquee-vertical-up': 'marqueeVerticalUp 32s linear infinite',
        'marquee-vertical-up-fast': 'marqueeVerticalUp 26s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeVertical: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        marqueeVerticalUp: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      }
    },
  },
  plugins: [],
};
