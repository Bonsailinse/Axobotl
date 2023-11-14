module.exports = {
  extends: ["custom/library"],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    "no-console": "off",
  },
};
