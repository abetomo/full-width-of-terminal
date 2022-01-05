// @flow

'use strict'

const columns = require('./columns').getColumns()

exports.getStringFullWidthOfTerminal = (str: string = '-'): string => {
  const size = Math.ceil(columns / str.length)
  return str.repeat(size + 1).substr(0, columns)
}
