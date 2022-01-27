module.exports = {
    "env": {
        'es6': true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/base"
    ],
    "parserOptions": {
        "parser": "babel-eslint",
        "sourceType": 'module',
        "ecmaVersion": 8,
        "ecmaFeatures": {
          'jsx': true
        }
      },
    "plugins": [
        "vue"
    ],
    "rules": {
    },
    "overrides": [
        {
          "files": ['src/components/*.vue'],
          "rules": {
            'vue/multi-word-component-names': 0,
          },
        },
      ],
}
