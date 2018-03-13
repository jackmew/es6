// Example 1
makeAjaxRequest("google.com", null); // Notice: null, undefined are different.
makeAjaxRequest("google.com", undefined);

// function makeAjaxRequest(url, method) {
//     if(!method) {
//         method = "GET"
//     }
//     console.log(`url: ${url}`);
//     console.log(`method: ${method}`);
//     // logic to make request
// }

// function makeAjaxRequest(url, method) {
//     method || (method = "GET");
//     console.log(`url: ${url}`);
//     console.log(`method: ${method}`);
//     // logic to make request
// }

function makeAjaxRequest(url, method = "GET") {

    console.log(`url: ${url}`);
    console.log(`method: ${method}`);
    // logic to make request
}

// Example 2
console.log("-------------------------------------");
function User(id) {
    this.id = id;
}
function generateId() {
    return Math.random() * 999999;
}
function createAdminUser(user = new User(generateId())) {
    user.admin = true ;

    return user ;
}
var adminUser = createAdminUser();
console.log(adminUser);
