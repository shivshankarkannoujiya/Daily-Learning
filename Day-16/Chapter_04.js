/**
 * I should have a function increment()
 * On call of the function it should increment the number
 * And return the current count 
 * 
 * EXAMPLE:
        console.log(Increment()) 1
        console.log(Increment()) 2
        console.log(Increment()) 3
 */

// ------------------ lexical scoping --------------------------

// let count = 0
// function increment() {
//     count++
//     return count
// }

// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());

// count = 100

// console.log(increment());
// console.log(increment());
// console.log(increment());




function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const counter = createCounter()
const counter2 = createCounter()


console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());

