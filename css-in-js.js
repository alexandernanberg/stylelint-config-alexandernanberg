/**
 * @type {import('stylelint').Config}
 */
module.exports = {
  extends: [require.resolve('./index')],
  customSyntax: 'postcss-styled-syntax',
  rules: {},
}
