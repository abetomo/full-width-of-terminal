'use strict'

process.stdout.columns = 5
const getStringFullWidthOfTerminal = require('../').getStringFullWidthOfTerminal

/* global describe, test, expect */
describe('getStringFullWidthOfTerminal()', () => {
  test('When the argument is one character', () => {
    expect(getStringFullWidthOfTerminal('=')).toBe('=====')
  })

  test('When the argument is more than one character', () => {
    expect(getStringFullWidthOfTerminal('hoge')).toBe('hogeh')
  })
})
