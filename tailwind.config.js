module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: ['dark'],
      textColor: ['dark'],
      colors: {
        'logo-grey': '#1e2740',  
        'hero-bg': '#f3f7ff',
        'post-bg': '#333',
        'post-text': '#666',
        'hero-bg-dark': '#808080',
      },
    },
  },
  plugins: [],
}
