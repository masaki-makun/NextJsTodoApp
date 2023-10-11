/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        dark: '#5c6269',
        'card-dark': '#3d3c3f',
        'input-light': '#eaecef',
        'input-dark': '#302f32',
        'primary-button-light': '#3872ff',
        'primary-button-dark': '#5985ff',
        'shadow-light': '#babbc0',
        'shadow-dark': '#4e5259',
        'gray-700-2': '#3d3c3f',
        'gray-800-2': '#313133',
        'original-gray-100': '#f8f8f9',
      },
      colors: {
        'primary-text-light': '#1f2937',
        'primary-text-dark': '#ffffff',
        'secondary-text-light': '#5a5e63',
        'secondary-text-dark': '#949396',
        'border-light': '#f3f3f3',
        'border-dark': '#4b4a4f',
      },
    },
  },
  plugins: [require('tailwindcss/nesting')],
};
