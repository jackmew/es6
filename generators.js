// for...of
const numbers = [1,2,3,4];

let total = 0 ;
for(let number of numbers) {
    total += number ;
}
console.log(total);

// Introduction of Generator
function* nums() {
    yield
}
const gen = nums();
console.log(gen.next());
console.log(gen.next());
