const Person = require('./Person')
const Luggage = require('./Luggage')
const chance = require('../controllers/chance')

class Passenger extends Person {
  constructor (name, lastname, personWeight, noFlyList) {
    super(name, lastname, personWeight)
    this.noFlyList = noFlyList(30)
    this.luggage = new Luggage(chance)
  }
}

module.exports = Passenger
