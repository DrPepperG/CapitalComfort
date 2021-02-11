const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: {
        mode: 'all',
        content: ['./public/**/*.html', './src/**/*.vue'],
    },

    theme: {
        extend: {
            colors: {
                'cc-black': '#363636',
                'cc-blue': '#4273ff',
                'cc-yellow': '#ffc600',
            },
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    variants: {
        opacity: ['responsive', 'hover', 'focus', 'disabled'],
    },

    plugins: [
        //
    ],
};
