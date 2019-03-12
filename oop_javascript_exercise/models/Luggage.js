class Luggage {
  constructor (chance) {
    this.luggageWeight = Math.ceil(Math.random() * 5)
    if (this.luggageWeight < 2) {
      this.luggageType = 'light'
      this.luggageLost = chance(10)
    } else {
      this.luggageType = 'heavy'
      this.luggageLost = chance(30)
    }
  }
}

module.exports = Luggage
