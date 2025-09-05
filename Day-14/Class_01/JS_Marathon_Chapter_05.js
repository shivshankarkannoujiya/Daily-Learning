/**
 * What is a Pipe?
 * A pipe lets you chain multiple functions together so that the output of one  function becomes the input of the next.
 * it Works like a Factory Assembly line:
 */
// Input → Function 1 → Function 2 → Function 3 → Output

function addTwo(num) {
  return num + 2;
}

function multiplyByThree(num) {
  return num * 3;
}

function substractFive(num) {
  return num - 5;
}

// PIPE
function pipe(...functions) {
  return function (initialValue) {
    return functions.reduce((acc, currFn) => currFn(acc), initialValue);
  };
}

const doMath = pipe(addTwo, multiplyByThree, substractFive);
// console.log(doMath(5));

// TODO: PIPE WITH MULTIPLE PARAMETERS
function add(a, b) {
  return a + b;
}

function multiply(x) {
  return x * 3;
}

function subtract(x) {
  return x - 5;
}


function pipeWithMultiArguments(...functions) {
    return function (...args) {
        return functions.reduce((acc, fn, index) => {
           return (index === 0) ? fn(...acc) : fn(acc)
        }, args )
    }
}

const doMathMulti = pipeWithMultiArguments(add, multiply, subtract)
console.log(doMathMulti(2,3))

