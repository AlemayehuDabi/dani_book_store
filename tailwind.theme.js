const { theme } = require('./src/lib/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: theme.fontFamily,
      boxShadow: theme.boxShadow,
      borderRadius: theme.borderRadius,
      transitionProperty: {
        ...theme.transition
      },
      keyframes: {
        ...keyframes
      },
      animation: {
        ...animation
      },
      zIndex: theme.zIndex,
      // Custom container with max-width and padding
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          '2xl': '1440px',
        },
      },
      // Custom spacing scale
      spacing: {
        '4.5': '1.125rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
        '54': '13.5rem',
        '58': '14.5rem',
        '62': '15.5rem',
        '66': '16.5rem',
        '70': '17.5rem',
        '74': '18.5rem',
        '78': '19.5rem',
        '82': '20.5rem',
        '86': '21.5rem',
        '90': '22.5rem',
        '94': '23.5rem',
        '98': '24.5rem',
        '100': '25rem',
        '104': '26rem',
        '108': '27rem',
        '112': '28rem',
        '116': '29rem',
        '120': '30rem',
        '124': '31rem',
        '128': '32rem',
        '132': '33rem',
        '136': '34rem',
        '140': '35rem',
        '144': '36rem',
      },
      // Custom max-width scale
      maxWidth: (theme) => ({
        ...theme('spacing'),
        'screen-2xl': '1440px',
      }),
      // Custom min-width scale
      minWidth: (theme) => ({
        ...theme('spacing'),
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      }),
      // Custom max-height scale
      maxHeight: (theme) => ({
        ...theme('spacing'),
        'none': 'none',
        'full': '100%',
        'screen': '100vh',
        'min': 'min-content',
        'max': 'max-content',
        'fit': 'fit-content',
      }),
      // Custom min-height scale
      minHeight: (theme) => ({
        ...theme('spacing'),
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        'screen': '100vh',
      }),
      // Custom line-height
      lineHeight: {
        '3.5': '0.875rem',
      },
      // Custom letter spacing
      letterSpacing: {
        'tightest': '-0.06em',
        'tight': '-0.03em',
        'normal': '0',
        'wide': '0.03em',
        'wider': '0.06em',
        'widest': '0.1em',
      },
      // Custom opacity
      opacity: {
        '15': '0.15',
        '35': '0.35',
        '65': '0.65',
        '85': '0.85',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    // Custom plugin for scrollbar styling
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-thin': {
          'scrollbar-width': 'thin',
          'scrollbar-color': 'var(--color-primary-500) var(--color-bg-muted)',
        },
        '.scrollbar-thin::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '.scrollbar-thin::-webkit-scrollbar-track': {
          background: 'var(--color-bg-muted)',
          borderRadius: '4px',
        },
        '.scrollbar-thin::-webkit-scrollbar-thumb': {
          backgroundColor: 'var(--color-primary-500)',
          borderRadius: '4px',
          '&:hover': {
            backgroundColor: 'var(--color-primary-600)',
          },
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
