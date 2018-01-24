// @flow

'use strict'

const columns = require('./columns').getColumns()

exports.getStringFullWidthOfTerminal = (str: string): string => {
  return new Array(columns + 1).join(str).substr(0, columns)
}
