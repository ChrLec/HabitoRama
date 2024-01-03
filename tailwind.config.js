const { backgroundColor } = require('tailwindcss/defaultTheme')

module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
  ],
  content: [ // For more info, See: https://tailwindcss.com/docs/optimizing-for-production
    './app/**/*.html*.erb',
    './app/**/*.pdf.erb',
    './app/helpers/**/*.rb',
    './app/**/*_component.rb',
    './app/**/*_serializer.rb',
    './app/javascript/**/*_controller.js'
  ],
  purge: {
    safelist: ['line-through', 'h-full', 'text-pink-400', 'text-teal-300', 'bg-pink-100']
  },
  theme: {
    fontFamily: {
      sans: ['Raleway', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      white: "#ffffff",
      black: "#222222",
      yellow: {
        100: "#fffbeb",
        200: "#ffeeb8",
        400: "#ffca2b",
        500: "#f7af00",
        600: "#89470a",
        base: "#ffde5e"
      },
      purple: {
        100: "#f6f4f8",
        300: "#c1b2d7",
        400: "#987cc0",
        500: "#785496",
        600: "#533762",
        base: "#e4e0ea"
      },
      teal: {
        100: "#e8f3e5",
        200: "#aed8b7",
        300: "#61ad7b",
        500: "#205337",
        600: "#1e422d",
        base: "#3c7e5a"
      },
      indigo: {
        100: "#ebf4ff",
        200: "#c3d9fe",
        300: "#7f9df5",
        400: "#5a66d8",
        500: "#3c41ae",
        600: "#3d376d"
      },
      pink: {
        100: "#fff4f5",
        200: "#fadadc",
        400: "#da586f",
        500: "#c53358",
        600: "#941838",
        base: "#e39194"
      },
      beige: {
        100: "#fbf2e5",
        300: "#dfc4a7",
        400: "#cda989",
        500: "#b48869",
        600: "#6f4439",
        base: "#f2e3ce"
      },
      gray: {
        100: "#f8fafc",
        200: "#edf2f7",
        300: "#e1e7ef",
        400: "#ccd6e0",
        500: "#a0aec0",
        600: "#728197",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a212d"
      },
      green: {
        100: "#e8f6ed",
        200: "#b9e3c9",
        300: "#5cbf80",
        400: "#16a34a",
        500: "#12823b",
        600: "#0b5225"
      },
      blue: {
        100: "#d1e8fa",
        200: "#add7f5",
        300: "#63b3ed",
        400: "#1884d2",
        500: "#1367a4",
        600: "#0e4a76"
      },
      orange: {
        100: "#ffe3c2",
        200: "#ffd19c",
        300: "#ffa030",
        400: "#fb923c",
        500: "#c05621",
        600: "#7b341e"
      },

      red: {
        100: "#fee7e7",
        200: "#feb2b2",
        300: "#fc8181",
        400: "#e53e3e",
        500: "#c53030",
        600: "#742a2a"
      }
    },
    extend: {
      borderWidth: {
        '3': '3px',
        '6': '6px'
      },
      boxShadow: {
        '1': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        '2': '0 1px 2px 0 rgba(0, 0, 0, 0.06), 0 1px 3px 0 rgba(0, 0, 0, 0.1)',
        '3': '0 4px 6px -2px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)',
        '4': '0 4px 6px 0 rgba(0, 0, 0, 0.05), 0 10px 15px 0 rgba(0, 0, 0, 0.1)',
        '5': '0 -1px 2px 0 rgba(0, 0, 0, 0.06), 0 -1px 3px 0 rgba(0, 0, 0, 0.1)',
      },
      fontSize: {
        'xxs': '.625rem',
        'xxl': '2rem'
      },
      letterSpacing: {
        widerer: '0.08em'
      },
      keyframes: {
        'fadein-fadeout': {
          '0%': { opacity: '0' },
          '10%': { opacity: '1' },
          '40%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '0' }
        },
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeout: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'upward-scroll': {
          '100%': { transform: 'translateY(-250%)' },
        }
      },
      margin: {
        '4.5': '1.125rem',
        '39.5': '9.875rem',
        '-border-3': '-3px'
      },
      minWidth: {
        '52': '13rem',
      },
      scale: {
        '99': '.99'
      },
      spacing: {
        '10.5': '2.625rem',
        '15': '3.75rem',
        '18': '4.5rem',
        '26.25': '6.563rem',
        '27.5': '6.875rem',
        '30': '7.5rem',
        '66': '16.5rem',
        '88': '22rem',
        '92': '23rem',
        '106': '26.5rem',
        '108': '27rem'
      },
      zIndex: {
        '-10': '-10'
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem'
      }
    }
  }
}
