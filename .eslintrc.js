module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:react/recommended",
        "prettier",
        "prettier/react",
        "prettier/standard",
    ],
    plugins: ["react", "prettier", "standard", "import"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
            legacyDecorators: true,
            jsx: true,
        },
    },
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    rules: {
        "prettier/prettier": "error",
        "react/jsx-key": "warn",
        "react/prop-types": "off",
        "react/display-name": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "error",
    },
    overrides: [
        {
            files: ["*.ts, *.tsx"],
            extends: [
                "eslint:recommended",
                "plugin:import/errors",
                "plugin:import/warnings",
                "plugin:react/recommended",
                "plugin:import/typescript",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended",
                "prettier",
                "prettier/react",
                "prettier/standard",
                "prettier/@typescript-eslint",
            ],
            plugins: ["@typescript-eslint", "react", "prettier", "standard"],
            rules: {
                "prettier/prettier": "error",
                "@typescript-eslint/no-var-requires": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
            },
        },
    ],
    settings: {
        "import/extensions": [".ts", ".tsx"],
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
            node: {
                paths: ["src"],
                extensions: [".ts", ".tsx"],
            },
            typescript: {
                alwaysTryTypes: true,
            },
        },
        react: {
            version: "detect",
        },
    },
    root: true,
};
