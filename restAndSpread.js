//Rest Operator: ...numbers : capture arguments to numbers array.
function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 00);
}
console.log(addNumbers(1,2,3,4,5,6));

// Spread Operator:
const myColors = ["orange", "blue"];
const yourColors = ["purple", "pink"];
const hisColors = ["black", "white"];

// console.log(myColors.concat(yourColors).concat(hisColors));

console.log(["brown", ...myColors, ...yourColors, ...hisColors]);

// Rest & Spread Operator
function validateShoppingList(...items) { // you need milk
    if(items.indexOf("milk") < 0) {
        return [ "milk", ...items];
    }
    return items;
}
console.log(validateShoppingList("oranges", "egges", "bread"));
