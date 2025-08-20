module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3a86ff',
        secondary: '#8338ec',
      },
      gradient: {
        'blue-purple': 'linear-gradient(135deg, #3a86ff, #8338ec)',
      },
      boxShadow: {
        'soft': '0 10px 25px rgba(58, 134, 255, 0.2)',
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}