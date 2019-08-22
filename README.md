# full-width-of-terminal

[![npm version](https://badge.fury.io/js/full-width-of-terminal.svg)](https://badge.fury.io/js/full-width-of-terminal)

The string is displayed on the full width of the terminal.

## Install
```
% npm install full-width-of-terminal
```

## Usage
```javascript
const getStringFullWidthOfTerminal =
  require('full-width-of-terminal').getStringFullWidthOfTerminal

// '=' is displayed across the width of the terminal
console.log(getStringFullWidthOfTerminal('='))

// By default, '-' is displayed.
console.log(getStringFullWidthOfTerminal())
```
