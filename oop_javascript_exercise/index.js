const Flight = require('./models/Flight')
const createFlyList = require('./controllers/createFlyList')

// CreateFlyList function takes two arguments, first argument is a number of passengers, second argument is a number of pilots. It returns combined array of passengers and pilots.
const barcelonaFlyList = createFlyList(10, 2)
const romeFlyList = createFlyList(15, 2)
const belgradeFlyList = createFlyList(20, 3)

// Flight class takes two arguments, name of the flight and list of passengers which is created by createFlyList function;
const flightBarcelona = new Flight('Barcelona', barcelonaFlyList)
const flightRome = new Flight('Rome', romeFlyList)
const flightBelgrade = new Flight('Belgrade', belgradeFlyList)

// Method flightInfo contains all the neccessary information required in task (list of passengers with luggage, lost luggage weight, list of passengers whose luggage is lost). To create a file with those information use 'print' variable as the argument of flightInfo method, otherwise it will just show the information in console.
const print = 'print'
flightBarcelona.flightInfo(print)
flightRome.flightInfo(print)
flightBelgrade.flightInfo(print)
