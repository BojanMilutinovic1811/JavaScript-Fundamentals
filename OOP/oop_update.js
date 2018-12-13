(function () {

    
    const passengersList = [];  //passengers who are allowed to enter the plane
    const noFlyPassengers = [];  //no fly list of passengers
    const jail = [];    //jail for pilots without the licence  
    const lostBaggage = []; //information about lost baggage

    //function for random chances used for passengers 'no fly' and pilots licence
    function chance(someNum) {
        let randomNum = Math.ceil(Math.random()*100)
        let chance;
        if(randomNum <= someNum) {
            chance = true
        } else {
            chance = false
        } 
        return chance
    }

    //function for losing baggage on flight
    function loadBaggage(baggage, chance) {
        baggage.forEach(passenger => {
            if (Math.ceil(Math.random() * 100) > chance) {
                passenger.baggage.lost = false;
            } else {
                passenger.baggage.lost = true;
                lostBaggage.push(passenger)
            }
        })
    }

    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.weight = Math.ceil(Math.random() * 80 + 20);
        }
        personInfo() {
            return `${this.firstName} ${this.lastName}`
        }
    }

    class Passenger extends Person {
        constructor(firstName, lastName) {
            super(firstName, lastName)
            this.noFly = chance(30)
        }

        passengerInfo() {
            return `Name: ${this.personInfo()}\nBaggage details: ${this.baggage.weight}kg`
        }
    }

    class Baggage {
        constructor() {
            this.weight = Math.ceil(Math.random()*5);
            this.type = (function (baggage) {
                if (baggage <= 2) {
                    return 'light'
                } else {
                    return 'heavy'
                }
            })(this.weight);
            this.lost = false;
        }
    }

    class Pilot extends Person {
        constructor(firstName, lastName) {
            super(firstName, lastName)
            this.licence = chance(95)
        }
    }

    
    class Flight {
        constructor(name, passengersList, capacity) {

            this.name = name;
            this.capacity = capacity;
            this.passengersList = passengersList; 
            //kao i da Flight objekat moze da ima svoju addPassengerWithBaggage metodu

            //AZ: sve nadalje ima smisla izmestiti izvan konstruktora i podrzati kroz funkcije

        }
            addPassengersWithBaggage() {
                let totalPassengersWeight = 0;
                this.passengersList.forEach(passenger => totalPassengersWeight += passenger.weight)
    
                //AZ: proveru da li je neki objekat instance neke klase mozemo vrsiti sa isinstanceof
                const pilots = passengersList.filter(passenger => passenger.hasOwnProperty('licence'));
                const passengers = passengersList.filter(passenger => passenger.hasOwnProperty('noFly'));
    
                //AZ: ovo usaglasiti sa izmenama koje su predlozene da se i prtljag modeluje kao objekat
                let totalBaggageWeight = 0;
                passengers.forEach(passenger => totalBaggageWeight += passenger.baggage.weight);
                if (this.capacity < (totalPassengersWeight + totalBaggageWeight)) {
                    console.log('Caution!!! Capacity limit is passed, we can not fly!')
                }
    
                const lightBaggage = passengers.filter(passenger => passenger.baggage.type === 'light');
                const heavyBaggage = passengers.filter(passenger => passenger.baggage.type === 'heavy');
                
                let passengersInfo = '';
                passengers.forEach(passenger => passengersInfo += `${passenger.passengerInfo()},\n\n`);
                console.log(`List of passengers on flight ${this.name} and their info: \n${passengersInfo}`);
    
                loadBaggage(heavyBaggage, 30);
                loadBaggage(lightBaggage, 10);
    
                let lostBaggageTotalWeight = 0;
                lostBaggage.forEach(baggage => lostBaggageTotalWeight += baggage.baggage.weight)
                let passengersMissingHeavyBaggage = '';
                lostBaggage.forEach(baggage => {
                    if (baggage.type === 'heavy') {
                        passengersMissingHeavyBaggage += `${baggage.personInfo()}\n`
                    }
                })
                console.log(`There is ${lostBaggageTotalWeight}kg of baggage missing on flight ${this.name}.\nHere is the list of passengers who have lost their heavy baggage: \n${passengersMissingHeavyBaggage}`);
    
            }
        }

    const passenger1 = new Passenger('Bojan', 'Milutinovic');
    const passenger2 = new Passenger('Bob', 'Rok');
    const passenger3 = new Passenger('Zagor', 'Tenej');
    const passenger4 = new Passenger('Ciko', 'Rodrigez');
    const passenger5 = new Passenger('Blek', 'Stena');
    const passenger6 = new Passenger('Kapetan', 'Miki');
    const passenger7 = new Passenger('Dilan', 'Dog');
    const passenger8 = new Passenger('Zalosna', 'Sova');
    const passenger9 = new Passenger('Teks', 'Viler');
    const passenger10 = new Passenger('Alan', 'Ford');
    const pilot1 = new Pilot('Martin', 'Misterija');
    const pilot2 = new Pilot('Mister', 'No');


    function passengersListFill(passenger) {

        //AZ: ovde je isto predlog da se koristi isinstanceof 
        if (passenger.hasOwnProperty('noFly') && passenger.noFly) {
            noFlyPassengers.push(passenger)
        } else if (passenger.hasOwnProperty('noFly') && !passenger.noFly) {
            const baggage = new Baggage();
            passenger.baggage = baggage; 
            passengersList.push(passenger)
        }

        if (passenger.hasOwnProperty('licence') && passenger.licence) {
            passengersList.push(passenger)
        } else if (passenger.hasOwnProperty('licence') && !passenger.licence) {
            jail.push(passenger)
            console.log(`Pilot ${passenger.personInfo()} is going to jail!`)
        }
    }



    passengersListFill(passenger1);
    passengersListFill(passenger2);
    passengersListFill(passenger3);
    passengersListFill(passenger4);
    passengersListFill(passenger5);
    passengersListFill(passenger6);
    passengersListFill(passenger7);
    passengersListFill(passenger8);
    passengersListFill(passenger9);
    passengersListFill(passenger10);
    passengersListFill(pilot1);
    passengersListFill(pilot2);

    const flight1 = new Flight('Belgrade - Paris', passengersList);
    flight1.addPassengersWithBaggage()


    // zbog prijavljivanja gresaka, deo koji se odnosi na kreiranje putnika i 
    // kreiranje liste putnika modifikovati tako da passengersListFill vrati true/false;
    // na osnovu povratne vrednosti moze se izbaciti izuzetak
    // progledaj u MDN-u try-catch blok i Exception klase
    
})()