module.exports = {
    parserOptions: {
      parser: 'babel-eslint'
    },
    env: {
      browser: true,
    },
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    extends: ['plugin:vue/essential', 'airbnb-base'],
    // required to lint *.vue files
    plugins: [
      'vue',
      'import'
    ],
    settings: {
      'import/resolver': {
        "node": {
          "extensions": [
            ".js",
            ".jsx"
          ]
        }
      }
    },
    rules: {
      'import/no-unresolved': 0,
      'import/named': 2,
      'import/namespace': 2,
      'import/default': 2,
      'import/export': 2,
      'max-len': ["error", { "code": 150 }],
      'no-underscore-dangle': ["error", {"allow": ["_id"]}],
      'linebreak-style': ["error", "unix"]
    },
    
  }