/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                'display': ['Degular Display', 'ui-sans-serif', 'system-ui']
            },
            colors: {
                'cmky': {
                   50: '#ECFDF3',
                  100: '#D1FADF',
                  200: '#A6F4C5',
                  300: '#6DE8A6',
                  400: '#45D88E',
                  500: '#0FBA69',
                  600: '#049755',
                  700: '#037947',
                  800: '#056039',
                  900: '#054F31',
                  950: '#022C1C',
                },
            },
            boxShadow: {
                'hard': '4px 4px 0px 0px black', 
            }
        },
    },
    plugins: [
        require('daisyui'),
        require('@tailwindcss/typography'),
    ],
    daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
