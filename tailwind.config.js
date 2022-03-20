/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

    theme: {
        extend: {
            colors: {
                'cc-black': {
                    lighter: '#474747',
                    DEFAULT: '#171717',
                },
                'cc-blue': '#4273ff',
                'cc-yellow': '#ffc600',
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
