{import('tailwindcss').Config}
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': 'rgb(229 231 235 / var(--tw-bg-opacity))',
        'custom-text': 'black',
      },
      fontSize: {
        '20px': '20px',
      },
      textAlign: {
        'justify': 'justify',
      }
    },
  },
  plugins: [], 
};