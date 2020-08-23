module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": [2],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
