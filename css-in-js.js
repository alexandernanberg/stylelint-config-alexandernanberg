module.exports = {
  extends: [
    require.resolve('./index'),
    'stylelint-config-styled-components',
    'stylelint-config-prettier',
  ],
  processors: ['stylelint-processor-styled-components'],
}
