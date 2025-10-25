/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'insulin-blue': '#3B82F6',
        'glucose-green': '#10B981',
        'warning-orange': '#F59E0B',
        'danger-red': '#EF4444',
      }
    },
  },
  plugins: [],
}
