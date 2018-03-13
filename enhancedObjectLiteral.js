const inventory = [
    { title: "Harry Potter", price: 10 },
    { title: "Elogant JavaScript", price: 15 }
];
var bookShop = createBookShop(inventory);
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle("Harry Potter"));

// ES5
// function createBookShop(inventory) {
//     return {
//         inventory: inventory,
//         inventoryValue: function() {
//             return this.inventory.reduce(function(total, book) {
//                 return total + book.price;
//             }, 0);
//         },
//         priceForTitle: function(title) {
//             return this.inventory.find(function(book) {
//                 return title === book.title;
//             }).price;
//         }
//     };
// }
// ES6: Fat Arrow
// function createBookShop(inventory) {
//     return {
//         inventory: inventory,
//         inventoryValue: function() {
//             return this.inventory.reduce((total, book) => total + book.price, 0);
//         },
//         priceForTitle: function(title) {
//             return this.inventory.find(book => title === book.title).price;
//         }
//     };
// }
// ES6: Enhanced Object Literal
function createBookShop(inventory) {
    return {
        inventory, // key and value are the same
        inventoryValue() { // reduce function keywork
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle(title) { // reduce function keywork
            return this.inventory.find(book => title === book.title).price;
        }
    };
}
