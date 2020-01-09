// OBJECTS
// Bracket Notation

let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth',
  numCrew: 5
 };

let propName =  'Active Mission';

let isActive = spaceship[propName];

console.log(isActive);



// OBJECTS
// Property Assignment


let spaceshipAssi = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

spaceshipAssi.color = 'glorious gold';

spaceshipAssi['numEngines'] = 5;

delete spaceshipAssi['Secret Mission'];
console.log(spaceshipAssi);

const alienShip = {
  invade () {
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};


alienShip.invade();


// Methods

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShipMet = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
}

alienShipMet.retreat();
alienShipMet.takeOff();

// Objetos anidados

const spaceshipNest = {
     telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLength: 2032
     },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log('We got this!') }
         }
    },
    engine: {
        model: 'Nimbus2000'
     },
     nanoelectronics: {
         computer: {
            terabytes: 100,
            monitors: 'HD'
         },
        'back-up': {
           battery: 'Lithium',
           terabytes: 50
         }
    }
};

spaceshipNest.nanoelectronics['back-up'].battery;

// Seconds example

let spaceshipNew = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032
  },
  crew: {
    captain: {
      name: 'Sandra',
      degree: 'Computer Engineering',
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
};

let capFave = spaceshipNew.crew.captain['favorite foods'][0];
spaceshipNew.passengers = [{name : 'Andrew', age : 19}];

let firstPassenger = spaceshipNew.passengers[0];
console.log(spaceshipNew);

// Pasar por referencia

const protspaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};

let paintIt = obj => {
  obj.color = 'glorious gold'
};

paintIt(protspaceship);

console.log(protspaceship.color);


// Exercise cambio de parametros por referencia

let spaceshipTurb = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};


let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
};

let remotelyDisable = objpar =>{
  objpar.disabled = true;
};

greenEnergy(spaceshipTurb);
remotelyDisable(spaceshipTurb);

console.log(spaceshipTurb);

// Recorriendo objetos for...in

let spaceshipComp = {
    crew: {
    captain: {
        name: 'Lily',
        degree: 'Computer Engineering',
        cheerTeam() { console.log('You got this!') }
        },
    'chief officer': {
        name: 'Dan',
        degree: 'Aerospace Engineering',
        agree() { console.log('I agree, captain!') }
        },
    medic: {
        name: 'Clementine',
        degree: 'Physics',
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna',
        degree: 'Conservation Science',
        powerFuel() { console.log('The tank is full!') }
        }
    }
};
// crew roles and names
for (let crewMember in spaceshipComp.crew) {
  console.log(`${crewMember}: ${spaceshipComp.crew[crewMember].name}`)
};

// second list name : degree

for(let crewMemberdegree in spaceshipComp.crew){
  console.log(`${spaceshipComp.crew[crewMemberdegree].name}: ${spaceshipComp.crew[crewMemberdegree].degree}`)
}
