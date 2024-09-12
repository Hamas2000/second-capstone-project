{import('tailwindcss').Config}
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': 'rgb(229 231 235 / var(--tw-bg-opacity))', // Custom background color
        'custom-text': 'black', // Custom text color
      },
      fontSize: {
        '20px': '20px', // Custom font size
      },
      textAlign: {
        'justify': 'justify', // Justify text alignment
      }
    },
  },
  plugins: [], 
};