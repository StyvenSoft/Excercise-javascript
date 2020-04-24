// Create ParentSchool Class
class School {
    constructor (name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    set numberOfStudents (newNumberOfStudets) {
        if (typeof newNumberOfStudets === 'String') {
            this._numberOfStudents = numberOfStudents;
          } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');            
          }
    }
    quickFacts() {
        console.log(`${this.name} educates ${this.newNumberOfStudets} students at the ${this.level} school level.`);
    }
    static pickSubstituteTeacher (substituteTeacher) {
        const rantInt = Math.floor(Math.random() * substituteTeacher.length);
        return substituteTeacher[rantInt];
    }
}
// Create PrimarySchool Class
class PrimarySchool extends School {
    constructor (name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy () {
        return this._pickupPolicy;
    }
}
// Create HighSchool Class

class HightSchool extends School {
    constructor (name, numberOfStudents, sportsTeams) {
        super(name, 'hight', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
        return this._sportsTeams;
    }
}

// Instances of PrimarySchool and HighSchool

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();

const subs = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HightSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);