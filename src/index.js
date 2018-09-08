// @flow

'use strict'

const columns = require('./columns').getColumns()

exports.getStringFullWidthOfTerminal = (str: string = '-'): string => {
  const size = Math.ceil(columns / str.length)
  return new Array(size + 1).join(str).substr(0, columns)
}
