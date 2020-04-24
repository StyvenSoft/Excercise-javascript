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
class PrimarySchool extends School {
    constructor (name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
}

