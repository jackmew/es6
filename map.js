// Array using map() to produce new array
var numbers = [1,2,3];
var doubledNumbers = [];

for(var i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i]*2);
}
console.log(doubledNumbers);

// try remove return
var doubled = numbers.map(function(number) {
    return number*2;
});

console.log(doubled);

var cars = [
    { model: 'Buick'  , price: 'cheap' },
    { model: 'Carmado', price: 'expensive'},
    { model: 'Toyora'}
];

var prices = cars.map(function(car) {
    return car.price;
});
console.log(prices);

// element.property =若property是變數=> element[property]
var paints = [
    {color: 'red'},
    {color: 'green'},
    {color: 'blue'}
];
function pluck(array, element) {
    var colors = array.map(function(arr) {
        return arr[element];
    });
    return colors;
}
console.log(pluck(paints, 'color'));
