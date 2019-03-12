class Person {
  constructor (name, lastname, personWeight) {
    this.name = name()
    this.lastname = lastname()
    this.personWeight = personWeight()
  }
}

module.exports = Person
