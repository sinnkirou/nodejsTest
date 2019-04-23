module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: "airbnb-base",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    "no-console": 0,
    "func-names": 0,
    "no-array-constructor": 0,
    "consistent-return": 0,
    "prefer-arrow-callback": 0
  }
};
