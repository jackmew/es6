let promise = new Promise((resolve, reject) => {
    var request = new XHMTLRequest();
    // make request
    // request.onload = () => {
    //     resolve();
    // };

    setTimeout(() => {
        reject();
    }, 3000);
});
promise
    .then(() => console.log("finally finished"))
    .then(() => console.log("i was also ran"))
    .catch(() => console.log("uh oh!!!"));
