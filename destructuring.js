// sample 1, destructing object: curly braces{}
var expense = {
    type: "Business",
    amount: "$45 USD"
};
// ES5
// var type = expense.type;
// var amount = expense.amount;

// ES6
// const { type } = expense;
// const { amount } = expense;

const { type, amount, height } = expense ;

console.log(type);
console.log(amount);
console.log(height); // undefined

// sample 2, destructing object: curly braces{}
var savedFiled = {
    extension: 'jpg',
    name: 'report',
    size: 14040
};
// function fileSummary(file) {
//     return `The file ${file.name}.${file.extension} is of size ${file.size}`;
// }
function fileSummary({name, extension, size}, { color }) {
    return `${color}, The file ${name}.${extension} is of size ${size}`;
}
console.log(fileSummary(savedFiled, { color: "red" }));

// sample 3, destructing array: square braces[]
const companies = [
    'Google',
    'Facebook',
    'Uber'
];
// const firstCompany = companies[0];
// console.log(firstCompany);
const [ name1, ...rest ] = companies;
console.log(name1);
console.log(rest);

const { length } = companies;
console.log(length);

// Sample 4: desctructing [] first, then {} .
var companieLocations = [
    { name: "Google", location: "Mountain View" },
    { name: "Facebook", location: "Menlo Park" },
    { name: "Uber", location: "San Francisco" }
];
// [] desctructing the first array element
// {} desctructing the object.location
const [ {location} ] = companieLocations;
console.log(location);

// Sample 5: desctructing {} first, then []
const Google = {
    positions: ['Mountain View', 'New Your', 'London']
};
const { positions: [position] } = Google ;
console.log(position);


// Sample 5: no worry about the order of the arguments
function signup({username, password, email, dateOfBirth, city}) { // desctructing object
    console.log("signup----------------");
    console.log(username);
    console.log(password);
    console.log(email);
    console.log(dateOfBirth);
    console.log(city);
}
var user = {
    username: 'myname',
    password: 'mypassword',
    email: 'myemail@example.com',
    dateOfBirth: '1/1/1990',
    city: 'New York'
}
signup(user);

// Sample 6:
const points = [
    [4, 5],
    [10, 1],
    [0, 40]
];
/* Purpose:
[
    {x: 4, y: 5},
    {x: 10, y: 1}.
    {x: 0, y: 40}
]
*/
// var pointsXY = points.map((point) => {
//     return {x: point[0], y: point[1]};
// });
var pointsXY = points.map(([x , y]) => {
    return {x, y};
});
console.log(pointsXY);

// Test: use destructuring, recrusive and the rest/spread operators to create a function double
const numbers = [1, 2, 3];
let doubled = [];
function double(numbers) {
    const [number, ...rest] = numbers;
    if(number) {
        doubled.push(number * 2);
        return double(rest);
    } else {

        return doubled ;
    }
}
console.log(double(numbers));
