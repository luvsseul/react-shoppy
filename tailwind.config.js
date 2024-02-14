/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#877d63',
      },
      height: {
        '50': '40rem',
      },
      backgroundImage: {
        banner: `url('../public/images/banner.jpg')`
      },
    },
  },
  plugins: [],
}

