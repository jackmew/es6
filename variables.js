/*
    let: 只在block中有作用
*/
{
    var a = 10;
    let b = 1 ;
}
// console.log(a);
// console.log(b); // ReferenceError: b is not defined

/*
    適合使用在只用一次的變數. ex: for
*/
for(let i = 0; i<10; i++) {
    // console.log(i);
}
// console.log(i); // ReferenceError: i is not defined

/*
    var i is a gloabal variable.
    array is asigned in function.
    function is in the same scope(for)
    所以i在這個scope中i只有一個

    var i => let i
    let: 每一次新的循環都是一個新的variable
*/
var array = [];
for(var i = 0; i < 10; i++) {
    array[i] = function() {
        console.log(i);
    };
}
// array[0]();
// console.log(array.length);
for(var l = 0; l < array.length; l++) {
    // array[l]();
}

/*
    parent scope, child scope is different scope.
    let 每一次都會產生新的variable
    let u -> var u 就可以看出差別
*/
for(let u = 0; u < 10; u++) {
    let u = 'abc';
    // console.log(u);
}

/*
    變量提升/Hoisted
*/
// console.log(h1);
var h1 = 2 ;

// console.log(h2);
let h2 = 3 ;

/*
    暫時性死區/Temporal Dead Zone(TDZ)．
    這樣的設計是為了讓大家養成良好的編程習慣
*/
/*
var tmp = 123;
if(true) {
    tmp = 'abc';
    let tmp;
    console.log(tmp);
}
*/
/*
if(true) {
    // TDZ開始
    tmp = 'abc';
    console.log(tmp);

    let tmp; // TDZ結束
    console.log(tmp);

    tmp = 123 ;
    console.log(tmp);
}
*/
/*
    1.global scope
    2.function scope
    3.block statement(compound statement)块级作用域
    let -> var
    IIFE 不在必要了
*/
// function f1() {
//     let n = 5 ;
//     if(true) {
//         let n = 10 ;
//     }
//     console.log(n);
// }
// f1();
