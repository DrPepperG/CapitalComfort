module.exports = {
    root: true,

    env: {
        node: true
    },

    parserOptions: {
        ecmaVersion: 2020,
        parser: "@typescript-eslint/parser"
    },

    rules: {
        'linebreak-style': 'off',
        'no-unused-vars': ['warn', { args: 'none' }],
        'no-plusplus': 'off',
        'max-len': ['error', { code: 120, ignoreStrings: true, ignoreUrls: true }],
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-unused-expressions': ['error', { allowTernary: true }],
    },

    extends: [
        "plugin:vue/essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "@vue/typescript"
    ]
};
