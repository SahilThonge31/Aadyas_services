/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // THIS IS KEY: It enables 'dark' classes
  darkMode: 'class',
  theme: {
    extend: {
      // This is where we map our CSS variables
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        'primary-dark': 'rgb(var(--color-primary-dark) / <alpha-value>)',
        'primary-light': 'rgb(var(--color-primary-light) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        'secondary-dark': 'rgb(var(--color-secondary-dark) / <alpha-value>)',
        'secondary-light': 'rgb(var(--color-secondary-light) / <alpha-value>)',
        neutral: 'rgb(var(--color-neutral) / <alpha-value>)',

        background: 'rgb(var(--color-background) / <alpha-value>)',
        'background-soft': 'rgb(var(--color-background-soft) / <alpha-value>)',
        card: 'rgb(var(--color-card) / <alpha-value>)',

        'text-primary': 'rgb(var(--color-text-primary) / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
        border: 'rgb(var(--color-border) / <alpha-value>)',
      },
      fontFamily: {
        // Your fonts are already in index.css, but this is good practice
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}