// 用以簡化，合計、總合出來是多少，並return array
var numbers = [10, 20, 30];
var sum = 0 ;

for(var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum);

// reduce:
var reduceTotal = numbers.reduce(function(total, number) {
    return total + number ;
}, 100); // initial value

console.log(reduceTotal);

var primaryColors = [
    { color: 'red' },
    { color: 'yellow'},
    { color: 'blue'}
];
var reduceColor = primaryColors.reduce(function(accumulator, primaryColor) {
    accumulator.push(primaryColor.color);
    return accumulator;
}, ['black']);
console.log(reduceColor);

// In practice
function balancedParents(string) {
    return !string.split("").reduce(function(previous, char) {
        if(previous < 0) { return previous };
        if(char === "(" ) { return ++previous; }
        if(char === ")") { return --previous; }
        return previous;
    }, 0);
}
console.log(balancedParents("(((())))"));


var numbers = [1,1,2,3,4,5];
function unique(array) {
    var uniqueArr = array.reduce(function(accumulate, number) {

        var numberExist = accumulate.find(function(acc) {
            return acc === number;
        });
        if(!numberExist) {
            accumulate.push(number);
        }

        return accumulate;
    }, []);
    return uniqueArr ;
}
console.log(unique(numbers));
