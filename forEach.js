var colors = ['red', 'blue', 'green'];
// sometimes it's hard to debug.
for(var i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
// forEach: array helper method
colors.forEach(function(color) {
    console.log(color);
});

// Create an array of numbers
var numbers = [1, 2, 3, 4, 5];
// Create a variable to hold the sum
var sum = 0;
// Loop over the array, incrementing the sum variable
function adder(number) {
    sum += number;
}
numbers.forEach(adder);
// println the sum variable
console.log(sum);


// test
var bets = [
    {id: "021", name: "Jack"},
    {id: "022", name: "Summer"},
    {id: "023", name: "Ken"}
];
var betNew = {id: "021", name: "Zest", age: 18};
bets.forEach((bet) => {
    if(bet.id === betNew.id) {
        bet = betNew;
    }
    console.log(bet);
});
