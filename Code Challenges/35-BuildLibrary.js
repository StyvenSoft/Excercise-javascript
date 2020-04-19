class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isChekedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isChekedOut(value){
        this.isChekedOut = value;
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this.isChekedOut;
    }
    getAverageRating() {
        let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating)
        return ratingsSum / this.ratings.length;
    }
    addRating(value) {
        this.ratings.push(value);
    }
}

class Book extends Media {
    constructor (author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

const historyOfEveryThing = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEveryThing.toggleCheckOutStatus();
console.log(historyOfEveryThing.isChekedOut);
historyOfEveryThing.addRating(4);
historyOfEveryThing.addRating(5);
historyOfEveryThing.addRating(5);

console.log(historyOfEveryThing.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();

console.log(speed.isChekedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());





