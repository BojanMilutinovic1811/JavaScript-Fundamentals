(function(){

    class Person {
        constructor(name,surname) {
            this.name = name;
            this.surname = surname;
        }

        getData() {
            return `${this.name} ${this.surname}`
        }
    }

    class Seat {
        constructor(number = Math.ceil(Math.random()*1000), category = 'e') {
            this.number = number;
            this.category = category.toUpperCase();   
        }

        getData() {
            return `${this.number}, ${this.category}`
        }
    }

    class Passenger {
        constructor(person, seat) {
            this.person = person;
            this.seat = seat;
        }

        getData() {

            const passengerInfo = `${this.seat.getData()}, ${this.person.getData()}`
            return passengerInfo; 
        }

    }

    class Flight {
        constructor(relation, date) {
            this.relation = relation;
            this.date = new Date(date);
            this.listOfPassengers = [];
        }
       
        addPassenger(passenger) {
            this.listOfPassengers.push(passenger)
        }

        getData(){
            const dateString = `${this.date.getDate()}-${this.date.getMonth()+1}-${this.date.getFullYear()}`
            const dateRelation = `${dateString}, ${this.relation}`
            let passengersString = '';
            let counter = 1; 
            this.listOfPassengers.forEach(passenger => {
                passengersString += `${counter++}. ${passenger.seat.getData()}  ${passenger.person.getData()}\n`
            })
            return `${dateRelation} \n${passengersString}`;
        }
    }

    class Airport {
        constructor() {
            this.name = 'Nikola Tesla';
            this.listOfFlights = [];
            this.totalPassengers = 0;
        }

        addFlight(flight) {
            this.listOfFlights.push(flight);
            for (let key in flight) {
                if(flight[key] == 'relation') {
                    console.log('true');
                }
            }
        }

        getData() {
            const initialString = `Airport: ${this.name}, total passengers: `

            return initialString;
        }
    }

    function createFlight(relation, date) {
        return new Flight(relation, date)
    }


    function createPassenger(firstName, lastName, seatNum = Math.ceil(Math.random()*1000), category = 'e') {
        const newPerson = new Person(firstName, lastName);
        const newSeat = new Seat(seatNum, category);
        return new Passenger(newPerson, newSeat);
    }


    const airport1 = new Airport()
    const flight1 = createFlight('Belgrade - New York', 'october 25 2017');
    const flight2 = createFlight('Belgrade - Barcelona', 'november 11 2017');
    const passenger1 = createPassenger('John', 'Snow', 1, 'b');
    const passenger2 = createPassenger('Cerstei', 'Lanister', 2, 'b');
    const passenger3 = createPassenger('Bojan', 'Milutinovic', 14 );
    const passenger4 = createPassenger('Marko', 'Kraljevic');

    flight1.addPassenger(passenger1);
    flight1.addPassenger(passenger2);
    flight2.addPassenger(passenger3);
    flight2.addPassenger(passenger4);

    airport1.addFlight(flight1);
    airport1.addFlight(flight2);
    console.log(airport1.totalPassengers)

    // console.log(airport1.getData());



})();