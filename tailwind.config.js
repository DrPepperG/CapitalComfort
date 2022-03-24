/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

    theme: {
        extend: {
            colors: {
                'cc-black': {
                    lighter: '#2F2F2F',
                    DEFAULT: '#171717',
                },
                'cc-white': '#E0E0E2',
                'cc-blue': '#4273ff',
                'cc-yellow': '#ffc600',
                'cc-orange': '#E37734',
            },
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    variants: {
        extend: {
            opacity: ["responsive", "hover", "focus", "disabled"],
        }
    },
};
