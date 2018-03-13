// prototype inheritance
/* ES5
function Car(options) {
    this.title = options.title;
}
Car.prototype.drive = function() {
    return 'vroom';
}
function Toyota(options) {
    Car.call(this, options);
    this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
    return 'beep';
}

const toyoto = new Toyota({ color: 'red', title : 'Focus' });

console.log(toyoto);
console.log(toyoto.drive());
console.log(toyoto.honk());
*/
// ES6
// no worry about prototype anymore
class Car {
    constructor(options) {
        options || (options = {});
        this.title = options.title;
    }
    drive() {
        return 'vroom';
    }
}
class Toyota extends Car {
    constructor(options) {
        super(options);
        this.color = options.color ;
    }

    honk() {
        //super() 若是parent.honk存在，可以這樣call
        return 'beep';
    }
}
const toyota = new Toyota({ color: 'red', title: 'daily driver '});
console.log(toyota.honk());
console.log(toyota.drive());
console.log(toyota);
