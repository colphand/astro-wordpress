/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontFamily: {
            'display': ['Degular Display', 'ui-sans-serif', 'system-ui']
        },
        extend: {},
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
