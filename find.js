// once find() meet true return specific value and it will stop.
// if find meet false return undefined;
// Drawback: find only can get the first one maching condition.
var users = [
    { name: 'Jill' },
    { name: 'Alex' },
    { name: 'Bill' },
    { }
];
var user ;

for(var i = 0; i < users.length ; i++) {
    if(users[i].name === 'Alex') {
        user = users[i];
        break;
    }
}
console.log(user);

var userFind = users.find(function(user) {
    return user.name === 'Alex';
});
console.log(userFind);
function Car(model) {
    this.model = model;
}
var cars = [
    new Car('Buick'),
    new Car('Camaro'),
    new Car('Focus')
];
var filterCar = cars.find(function(car) {
    return car.model = 'Buick';
});
console.log(filterCar);

var posts = [
    { id: 1 , title: 'New Post' },
    { id: 2 , title: 'Old Post' }
];
var comment = { postId: 1, content: 'Great Post' } ;

function postForComment(posts, comment) {
    return posts.filter(function(post) {
        return post.id === comment.postId;
    });
}
console.log(postForComment(posts, comment));
