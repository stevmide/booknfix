/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      customForms: theme => ({
        '.custom-select': {
          '&::after': {
            content: '""',
            display: 'inline-block',
            width: '1em',
            height: '1em',
            fill: 'currentColor',
            verticalAlign: 'middle',
            marginRight: '-1em',
            pointerEvents: 'none', // Ensure the arrow doesn't interfere with interactions
            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 20 20\' fill=\'%23000\'%3E%3Cpath d=\'M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\' /%3E%3C/svg%3E")',
          },
        },
      }),
      colors: {
        'top-blue': '#A6CF98',
        'top-grey': '#737373',
        'mid-blue': '#8db080',
      },     
    },
  },
  plugins: [require('@tailwindcss/forms'),],
}

