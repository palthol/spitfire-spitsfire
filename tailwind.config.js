/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%',
        '1': '1 1 0%',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};