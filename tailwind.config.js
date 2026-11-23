/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0066cc',
          navy: '#0a1128',
          dark: '#0f172a',
          light: '#f8fafc',
          accent: '#2563eb'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
