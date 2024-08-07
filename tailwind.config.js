const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'selector',
    content: [
        `./src/pages/**/*.{js,jsx,ts,tsx}`,
        `./src/components/**/*.{js,jsx,ts,tsx}`,
    ],
    theme: {
        screens: {
            xs: '375px',
            ...defaultTheme.screens,
        },
        extend: {
            keyframes: {
                fadeInBottom: {
                    '0%': {
                        opacity: 0,
                        transform: 'translateY(50px)',
                    },
                    '100%': {
                        opacity: 1,
                        transform: 'translateY(0)',
                    },
                },
            },
            animation: {
                fadeInBottom: 'fadeInBottom 3s ease-in-out',
            },
            fontFamily: {
                sans: ['Urbanist'],
                serif: ['Merriweather'],
                mono: ['Roboto Mono'],
                display: ['Urbanist'],
            },
        },
    },
    plugins: [],
};
