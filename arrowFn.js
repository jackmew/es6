/*
*  Arrow Function
*  https://pjchender.blogspot.tw/2017/01/es6-arrow-function.html
*
*/

function greeting() {
    console.log('Welcome to Zestlifia 1!');
}
greeting();

var greeting2 = function() {
    console.log('Welcome to Zestlifia 2!');
}
greeting2();
// 沒有參數的時候要記得加上空括號
var greeting3 = () => {
    console.log('Welcome to Zestlifia 3!');
}
greeting3();

var greeting4 = () => console.log('Welcome to Zestlifia 4!');
greeting4();

// 如果只是要回傳某個值，可以省略return
// var greeting5 = function() {
//     return "Welcome to Zestlifia 5!";
// }
var greeting5 = () => "Welcome to Zestlifia 5!";
console.log(greeting5());





// PASSING ONE VARIABLES
var hi1 = function(person) {
    return 'Hi, '+person;
}
console.log(hi1('Zestlifia 1'));

var hi2 = (person) => 'Hi, '+person;
console.log(hi2('Zestlifia 2'));

// 當參數只有一個時，不需要括號
var hi3 = person => 'Hi, '+person;
console.log(hi3('Zestlifia 3'));






// PASSING TWO VARIABLES
// ES5
var add1 = function(a, b) {
    return a+b;
}
console.log(add1(3, 5));

// ES6 Arrow Function
var add2 = (a, b) => {
    return a+b;
}
console.log(add2(3, 5));

// 不加大括號，會自動加上return
var add3 = (a, b) => a+b;
console.log(add3(3, 5));

// 箭頭函數當中的this是定義的對象，而不是使用時的對象
// zu(zest-uweaver)
//
// https://www.evernote.com/shard/s304/nl/2147483647/64aebd9f-fce8-442b-91f5-3ad77a4ff5d9/

console.log("------------------------");
var numbers = [1,2,3];
var doubles = numbers.map(number => number * 2);
console.log(doubles);

// Lexcial this
const team = {
    members: ["Joan", "Bill"],
    teamName: "Super Squad",
    teamSummary: function() {
        return this.members.map((member) => `${member} is in ${this.teamName}`);
    }
}
console.log(team.teamSummary());
