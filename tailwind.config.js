module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bodyColor': '#F5E6E8',
      'textColor': '#1F2232',
      'headerColor': '#87B6A7',
    },
    extend: {
        animation: {
            bounce200: 'bounce 1s infinite 200ms',
            bounce400: 'bounce 1s infinite 400ms',
            bounce600: 'bounce 1s infinite 600ms',
            bounce800: 'bounce 1s infinite 800ms',
        },
    },
  },
  plugins: [],
}
