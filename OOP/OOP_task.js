(function () {

    const passengersList = [];  //passengers who are allowed to enter the plane
    const noFlyPassengers = [];  //no fly list of passengers
    const jail = [];    //jail for pilots without the licence 
  

  class Person {
    constructor (firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.weight = Math.ceil(Math.random()*80+20);
    }
    personInfo() {
        return `${this.firstName} ${this.lastName}`
    }
  }

  class Passenger extends Person {
    constructor (firstName, lastName) {
      super(firstName, lastName)
      this.noFly = (function () {
        let chance = Math.ceil(Math.random() * 100)
        let noFlyList;
        if (chance <= 30) {
          noFlyList = true
        } else {
          noFlyList = false
        }
        return noFlyList
      })()
      this.baggage = {}
      this.baggage.weight = Math.ceil(Math.random() * 5)
      this.baggage.type = (function (baggage) {
        if (baggage <= 2) {
          return 'light'
        } else {
          return 'heavy'
        }
      })(this.baggage.weight);
      this.baggage.lost = false;

    }

    passengerInfo() {
        return `Name: ${this.personInfo()}\nBaggage details: ${this.baggage.weight}kg`
    }

  }

  class Pilot extends Person {
    constructor (firstName, lastName) {
      super(firstName, lastName)
      this.licence = (function () {
        let chance = Math.ceil(Math.random() * 100)
        let hasLicence;
        if (chance <= 5) {
          hasLicence = false
        } else {
          hasLicence = true
        }
        return hasLicence
      })()
    }
  }

  class Flight {
      constructor(name, passengersList) {
          this.name = name;
          this.capacity = 1000;
          let totalPassengersWeight = 0;
          passengersList.forEach(passenger => totalPassengersWeight += passenger.weight)
          this.pilots = passengersList.filter(passenger => passenger.hasOwnProperty('licence'));
          this.passengers = passengersList.filter(passenger => passenger.hasOwnProperty('noFly'));
          let totalBaggageWeight = 0;
          this.passengers.forEach(passenger => totalBaggageWeight += passenger.baggage.weight);
          if(this.capacity < (totalPassengersWeight + totalBaggageWeight)) {
            console.log('Caution!!! Capacity limit is passed, we can not fly!')
        }
          const lightBaggage = this.passengers.filter(passenger => passenger.baggage.type === 'light');
          const heavyBaggage = this.passengers.filter(passenger => passenger.baggage.type === 'heavy');
          let passengersInfo = '';
          this.passengers.forEach(passenger => passengersInfo += `${passenger.passengerInfo()},\n\n`);
          console.log(`List of passengers on flight ${this.name} and their info: \n${passengersInfo}`);
      
          function loadBaggage(baggage, chance) {
            baggage.forEach(passenger => {
                if(Math.ceil(Math.random()*100) > chance) {
                    passenger.baggage.lost = false;
                } else {
                    passenger.baggage.lost = true; 
                }
            })
          }
        
          loadBaggage(heavyBaggage, 30);
          loadBaggage(lightBaggage, 10);

          const lostBaggage = [];

          for(let i = 0; i < lightBaggage.length; i++) {
              if(lightBaggage[i].baggage.lost === true) {
                  lostBaggage.push(lightBaggage[i])
                  
              }
          }

          for(let i = 0; i < heavyBaggage.length; i++) {
              if(heavyBaggage[i].baggage.lost === true) {
                  lostBaggage.push(heavyBaggage[i])
              }
          }

        let lostBaggageTotalWeight = 0;
        lostBaggage.forEach(baggage => lostBaggageTotalWeight += baggage.baggage.weight)
        let passengersMissingHeavyBaggage = '';
        lostBaggage.forEach(baggage => {
            if(baggage.baggage.type === 'heavy') {
                passengersMissingHeavyBaggage += `${baggage.personInfo()}\n`
            }
        })
        console.log(`There is ${lostBaggageTotalWeight}kg of baggage missing on flight ${this.name}.\nHere is the list of passengers who have lost their heavy baggage: \n${passengersMissingHeavyBaggage}`);
        
      }

  }

  const passenger1 = new Passenger('Bojan', 'Milutinovic');
  const passenger2 = new Passenger('Ben', 'Rock');
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
 

  function passengersListFill(passenger){
         if(passenger.hasOwnProperty('noFly') && passenger.noFly) {
             noFlyPassengers.push(passenger)
         } else if(passenger.hasOwnProperty('noFly') && !passenger.noFly){
             passengersList.push(passenger)
         }

         if(passenger.hasOwnProperty('licence') && passenger.licence) {
             passengersList.push(passenger)
         } else if(passenger.hasOwnProperty('licence') && !passenger.licence) {
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

  // console.log('Passengers on "No Fly" list:', noFlyPassengers)


  

})()
