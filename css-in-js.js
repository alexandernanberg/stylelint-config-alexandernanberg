module.exports = {
  extends: [
    require.resolve('./index'),
    'stylelint-config-styled-components',
    'stylelint-config-prettier',
  ],
  processors: ['stylelint-processor-styled-components'],
  rules: {
    'selector-type-no-unknown': null,
    'declaration-empty-line-before': null,
  },
}
