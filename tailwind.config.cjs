/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                'display': ['Degular Display', 'ui-sans-serif', 'system-ui']
            },
            colors: {
                'cm': {
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
                },
            },
        },
    },
    plugins: [
        // require('daisyui'),
        require('@tailwindcss/typography'),
    ],
    // daisyui: {
    //     themes: [
    //         {
    //             mytheme: {
    //                 primary: '#d94948',
    //                 secondary: '#4959ed',
    //                 accent: '#38077c',
    //                 neutral: '#1F2228',
    //                 'base-100': '#1f2937',
    //                 info: '#5eead4',
    //                 success: '#126E52',
    //                 warning: '#C49B08',
    //                 error: '#FA1E29',
    //             },
    //         },
    //     ],
    // },
};
