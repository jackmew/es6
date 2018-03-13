// Array filter condition and produce a new array
var products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
    { name: 'banana', type: 'fruit', quantity: 10, price: 15},
    { name: 'celery', type: 'vegetable', quantity: 30, price: 13},
    { name: 'orange', type: 'fruit', quantity: 3, price: 5},
];
// sub-set only have fruits
var filteredProducts = [];

for(var i = 0; i < products.length; i++) {
    if(products[i]. type === 'fruit') {
        filteredProducts.push(products[i]);
    }
}
// console.log(filteredProducts);

var filtered = products.filter(function(product) {
    return product.type === 'fruit';
});
// console.log(filtered);

// Type is 'vegetable', quantity is greater than 0, price is less than 10
var filterConditions = products.filter(function(product) {
    return product.type === 'vegetable'
    && product.quantity > 0
    && product.price < 15;
});
// console.log(filterConditions);

var post = { id: 4, title: 'New Post' };
var comments = [
    { postId: 4, content: 'awesome post' },
    { postId: 3, content: 'it was ok' },
    { postId: 4, content: 'neat'}
]
function commentsForPost(post, comments) {
    return comments.filter(function(comment) {
        return comment.postId === post.id;
    });
}
// console.log(commentsForPost(post, comments));

// reject function - if a function returns true, the item should not be included
var numbers = [10,20,30];
var reject = function(numbers, iteratorFn) {
    return numbers.filter(function(number) {
        return !iteratorFn(number);
    });
};
var lessThanFifteen = reject(numbers, function(number) {
    return number > 15
});
// console.log(lessThanFifteen);
