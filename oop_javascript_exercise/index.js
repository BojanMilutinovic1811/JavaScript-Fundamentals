const Flight = require('./models/Flight')
const createFlyList = require('./controllers/createFlyList')

// createFlyList takes two arguments, first argument is a number of passengers, second argument is a number of pilots, and returns combined array of passengers and pilots
const barcelonaFlyList = createFlyList(20, 2)

// Flight class takes two arguments, name of the flight and list of passengers
const flightBarcelona = new Flight('Barcelona', barcelonaFlyList)

// method flightInfo contains all the neccessary information required in task(list of passengers with luggage, lost luggage weight, list of passengers whose luggage is lost)
flightBarcelona.flightInfo()
