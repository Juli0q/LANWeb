/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'overprime': "url('/image/bg-img1.jpg')",
        'apex': "url('/image/bg-img2.jpg')",
        'dbd': "url('/image/bg-img3.jpg')",
        'wwz': "url('/image/bg-img4.jpg')",
        'titanfall': "url('/image/bg-img5.jpg')",
      },
    },
  },
  plugins: [],
}
