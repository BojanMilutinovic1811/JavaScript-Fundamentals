const Person = require('./Person')

class Pilot extends Person {
  constructor (name, lastname, personWeight, noLicence) {
    super(name, lastname, personWeight)
    this.noLicence = noLicence(5)
  }
}
module.exports = Pilot
