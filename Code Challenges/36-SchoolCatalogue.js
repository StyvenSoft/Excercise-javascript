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
        console.log(`${name} educates ${newNumberOfStudets} students at the ${level} school level.`);
    }
}

