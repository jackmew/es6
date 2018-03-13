// function a() {
//     console.log('a');
// }
// function b() {
//     console.log('b');
// }
function a(callback) {
    setTimeout(function() {
        console.log('a');

        callback && callback();
    }, 1000);
}
function b() {
    console.log('b');
}
a(b);
