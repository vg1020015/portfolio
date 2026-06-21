/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Warm near-black / warm paper — not a default slate/zinc palette
        ink: {
          DEFAULT: '#11120F', // page background, dark mode
          surface: '#1A1B16', // card surface, dark mode
          line: '#2A2B23',    // hairline borders, dark mode
        },
        paper: {
          DEFAULT: '#FAF8F3', // page background, light mode
          surface: '#FFFFFF', // card surface, light mode
          line: '#E7E2D6',    // hairline borders, light mode
        },
        // Signature accent: terracotta — nods to "checkout / sale tag" energy
        terracotta: {
          DEFAULT: '#E8542E',
          dim: '#B4421F',
          tint: '#FBD9CC',
        },
        // Secondary accent: gold — nods to "price tag / cart" gold foil
        gold: {
          DEFAULT: '#C9A24B',
          dim: '#9C7A33',
        },
        sage: {
          DEFAULT: '#6E8B6B',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(rgba(27,27,23,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(27,27,23,0.05) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(rgba(250,248,243,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(250,248,243,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(20px, -20px)' },
        },
        blink: {
          '0%, 50%': { opacity: 1 },
          '51%, 100%': { opacity: 0 },
        },
      },
      animation: {
        drift: 'drift 14s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}
