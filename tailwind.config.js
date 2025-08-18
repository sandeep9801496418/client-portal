module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#080808", // custom dark background
        "light-bg": "#ffffff", // custom light background
        'primary': '#00BEEC', // primary text color
      },
      // colors: {
      //   'primary': '#00BEEC',
      //   'secondary': '#007D95',
      //   'dark-bg': '#080808',
      //   'light-bg': '#F9FAFB',
      //   'text-primary': '#1F2937',
      //   'text-secondary': '#4B5563',
      //   'border-color': '#E5E7EB',
      // },
    },
  },
  plugins: [],
}