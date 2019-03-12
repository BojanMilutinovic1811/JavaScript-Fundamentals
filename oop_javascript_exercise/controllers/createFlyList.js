const Passenger = require('../models/Passenger')
const Pilot = require('../models/Pilot')
const chance = require('../controllers/chance')
const personWeight = require('../controllers/personWeight')

const faker = require('faker') // used for creating fake names of passengers and pilots

function createFlyList (numberOfPassengers, numberOfPilots) {
  let passengersList = []
  for (let i = 0; i < numberOfPassengers; i++) {
    const passenger = new Passenger(
      faker.name.firstName,
      faker.name.lastName,
      personWeight,
      chance
    )
    if (passenger.noFlyList !== true) {
      passengersList.push(passenger)
    }
  }
  let pilotsList = []
  for (let i = 0; i < numberOfPilots; i++) {
    const pilot = new Pilot(
      faker.name.firstName,
      faker.name.lastName,
      personWeight,
      chance
    )
    if (pilot.noLicence !== true) {
      pilotsList.push(pilot)
    } else {
      console.log(
        `Pilot ${pilot.name} ${
          pilot.lastname
        } needs to go to jail because of attempt to fly without a licence!`
      )
    }
  }
  const flyList = [...passengersList, ...pilotsList]
  return flyList
}

module.exports = createFlyList
