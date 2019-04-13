const Passenger = require('./Passenger')
const fs = require('fs')

class Flight {
  constructor (flightName, flyList) {
    this.name = flightName
    this.flyList = flyList
  }

  flightInfo (option) {
    let listOfPassengers = ''
    let passengersCounter = 1
    let passengersWithLostLuggage = []
    let lostLuggageWeight = 0

    this.flyList.forEach(person => {
      if (person instanceof Passenger) {
        listOfPassengers += `${passengersCounter}. ${person.name} ${
          person.lastname
        } with ${person.luggage.luggageType} luggage(${
          person.luggage.luggageWeight
        }kg)\n`
        passengersCounter++
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

    const report = `* List of passengers on flight to ${
      this.name
    }:\n\n${listOfPassengers} 
    \n* Total weight of lost 'heavy' luggage is: ${lostLuggageWeight}kg 
    \n* List of passengers whose heavy luggage is lost: ${passengersWithLostLuggage}`

    if (option === 'print') {
      fs.writeFileSync(`${this.name}.txt`, report)
    } else {
      console.log(report)
    }
  }
}

module.exports = Flight
