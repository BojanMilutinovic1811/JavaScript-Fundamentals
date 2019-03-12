const Passenger = require('./Passenger')

class Flight {
  constructor (flightName, flyList) {
    this.name = flightName
    this.flyList = flyList
  }

  flightInfo () {
    let listOfPassengers = []
    let passengersWithLostLuggage = []
    let lostLuggageWeight = 0

    this.flyList.forEach(person => {
      if (person instanceof Passenger) {
        listOfPassengers.push(
          ` ${person.name} ${person.lastname} with ${
            person.luggage.luggageType
          } luggage(${person.luggage.luggageWeight}kg)`
        )
      }
    })

    this.flyList.forEach(person => {
      if (
        person instanceof Passenger &&
        person.luggage.luggageLost === true &&
        person.luggage.luggageType === 'heavy'
      ) {
        lostLuggageWeight += person.luggage.luggageWeight
        passengersWithLostLuggage.push(
          ' ' + person.name + ' ' + person.lastname
        )
      }
    })

    console.log(
      `* List of passengers on flight to ${this.name}: ${listOfPassengers} 
        \n* Total weight of lost 'heavy' luggage is: ${lostLuggageWeight}kg 
        \n* List of passengers whose heavy luggage is lost: ${passengersWithLostLuggage}`
    )
  }
}

module.exports = Flight
