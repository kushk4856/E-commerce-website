/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000',
        secondary: '#38CB89',
        neutral: {
          0: 'var(--neutral-01100)',
          2: 'var(--neutral-02100)',
          3: 'var(--neutral-03100)',
          4: 'var(--neutral-04100)',
          5: 'var(--neutral-05100)',
          6: 'var(--neutral-06100)',
          7: 'var(--neutral-07100)',
        },
      },
      fontFamily: {
        popins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        xs: '420px',
      },
    },
  },
  plugins: [],
};
