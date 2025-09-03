Function.prototype.describe = function () {
  console.log(`Function name is ${this.name}`);
};

function greet(name) {
  return `Hello, ${name} `;
}

console.log(greet instanceof Function);
// Now we can call the .describe that we have added on the Function Prototype
// greet("abhi").describe()
greet.describe();

function add(a, b) {
  return a + b;
}

const substact = function (a, b) {
  return a - b;
};

// TODO: What is the behaviour of code

function applyOperation(a, b, operation) {
  return operation(a, b);
}
const result = applyOperation(6, 3, (x, y) => x / y);



function createCounter() {
    let count = 0
    return function () {
        count++
        return count
    }
}
  
const counter = createCounter()
console.log(counter());

(function () {
    console.log(`Piyush`)
})()

