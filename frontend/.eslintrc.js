module.exports = {
    env: {
        node: true,
        es2021: true,
    },
    extends: ["airbnb-base", "prettier", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 13,
        sourceType: "module",
        project: "./tsconfig.json",
        tsconfigRootDir: "./",
    },
    plugins: ["@typescript-eslint", "prettier", "import"],
    rules: {
        "prettier/prettier": 2, // Means error
        "import/extensions": [0, "never"],
        "no-use-before-define": 0,
        "import/prefer-default-export": 0,
    },
    settings: {
        "import/resolver": {
            typescript: {},
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
        },
    ],
};
