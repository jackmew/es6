// every & some return true/false
var computers = [
    { name: 'Apple' , ram: 24 },
    { name: 'Compqa', ram: 4},
    { name: 'Acer'  , ram: 32}
];

var allComputersCanRunProgram = true ;
var onlySomeComputersCanRunProgram = false ;

for(var i = 0; i < computers.length; i++) {
    var computer = computers[i];

    if(computer.ram < 16) {
        allComputersCanRunProgram = false ;
    } else {
        onlySomeComputersCanRunProgram = true ;
    }
}
console.log(allComputersCanRunProgram);
console.log(onlySomeComputersCanRunProgram);

// every(): iterate all element and && together
// every 指全部的element都是true 才是true
var everyRam = computers.every(function(computer) {
    return computer.ram > 16 ;
});
console.log(everyRam);

// some(): iterate all element and || together
// some 只要有一個element是true 才是true
var someRam = computers.some(function(computer) {
    return computer.ram > 16 ;
});
console.log(someRam);

var names = [
    'Alexandria',
    'Matthew',
    'Joe'
];
var everyName = names.every(function(name) {
    return name.length > 4;
});
console.log(everyName);

var someName = names.some(function(name) {
    return name.length > 4;
});
console.log(someName);

// In practice
function Field(value) {
    this.value = value;
}
Field.prototype.validate = function() {
    return this.value.length > 0;
}

var username = new Field('2cool');
var password = new Field('my_password');
var birthday = new Field("1989/09/19")

var fields = [username, password, birthday];
var isValid = fields.every(function(field) {
    return field.validate();
});
console.log(isValid);

if(isValid) {
    // allow user to submit
} else {
    // show an error message
}
