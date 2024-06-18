/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--primary-color))',
        background: 'rgba(var(--background))',
        component: 'rgba(var(--component))',
        card: 'rgba(var(--card))',
        text: 'rgba(var(--text))'
      }
    }
  },
  plugins: []
}
