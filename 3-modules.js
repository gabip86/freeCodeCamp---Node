// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

// other way to access john and peter

// const { john, peter } = require('./4-names')
// const sayHi = require('./5-utils')

// sayHi('susan')
// sayHi(john)
// sayHi(peter)
