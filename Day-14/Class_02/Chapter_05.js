// Hoisting

// ---------- RefrenceError: Cannot access `age` before initialization --------
// console.log(`Age is: ${age}`);
// const age = 25


// ---------------------- WORKING FINE -------------------
// test()
// function test() {
//     console.log(`I am inside test function`)
// }
// test()


// -------- RefrenceError: Cannot access `age` before initialization -----------
// console.log(`Age is: ${age}`);
// let age = 35;


// -------------- Undefined : But Not throwing Error ------------
// console.log(`Age is: ${age}`);
// var age = 24;
// console.log(`Age is: ${age}`);


// -------------- Working Fine: 3000 ------------
// age = 3000
// console.log(`Age is: ${age}`);
// var age = 24;



// test()
// console.log(`Age is: ${age}`);

// var age = 24;

// console.log(`Age is: ${age}`);


// Hoisting in case of function
// function test() {
//     console.log("Testing...")
// }


// sayHello()

// var sayHello = function () {
//     console.log("Hello")
// }


console.log(`Score: ${score}`)
let score = 99;