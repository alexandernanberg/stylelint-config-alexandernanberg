const fs = require('fs')
const stylelint = require('stylelint')
const config = require('..')

const validCss = fs.readFileSync('./__tests__/css-valid.scss', 'utf-8')
const invalidCss = fs.readFileSync('./__tests__/css-invalid.scss', 'utf-8')

describe.skip('valid css', () => {
  let result
  beforeEach(() => {
    result = stylelint.lint({
      code: validCss,
      customSyntax: 'postcss-scss',
      config,
    })
  })

  it('did not error', () =>
    result.then((data) => {
      if (data.errored) {
        // eslint-disable-next-line no-console
        console.log(data.results[0].warnings)
      }

      return expect(data.errored).toBeFalsy()
    }))
})

describe('invalid css', () => {
  let result

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidCss,
      config,
    })
  })

  it('did error', () =>
    result.then((data) => expect(data.errored).toBeTruthy()))
})
