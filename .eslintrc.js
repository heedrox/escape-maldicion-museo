module.exports = {
  env: {
    es6: true,
    node: true,
    "jest/globals": true
  },
  extends: [
    'airbnb-base',
    "plugin:jest/recommended",
    "plugin:jest/style"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    "max-len": ["error", { "code": 120 }],
  },
  "plugins": ["jest"]
};
