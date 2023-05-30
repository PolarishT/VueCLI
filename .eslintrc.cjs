/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/attribute-hyphenation': 0,
    // 缩进为 2
    indent: ['error', 2],
    // 允许 console.log() 等语句
    'no-console': 'off',
    // 允许使用 debugger 进行调试
    'no-debugger': 'off',
    // 使用 ESLint+Prettier 规范代码风格
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        singleQuote: true,
        semi: true,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: 'avoid',
        requirePragma: false,
        proseWrap: 'preserve'
      }
    ]
  }
}
