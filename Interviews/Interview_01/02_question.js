const number = [1, 2, 3, 4, 5];
const doubledNumbers = number.map((value, index, arr) => {
  return value * 2;
});
// console.log(doubledNumbers);

/*
    EXPLANATION
        - .map() is an array method in JavaScript that `creates a new array` by applying a `callback function` to each element of the original array.
            - it does not mutate the original array 
            - It always returns a new array of the same length
 */

// TODO: What happens if the callback doesn’t return anything?
const numbers = [1, 2, 3];
const result = numbers.map((value) => {
  console.log(value);
});

// console.log(result);

/*   
 1
 2
 3
 [ undefined, undefined, undefined ]
 
 EXPLANATION:
    - If the callback doesn’t explicitly return a value, map fills the new array with undefined values. That’s because map always creates a new array of the same length, regardless of what you return.
 */

//TODO: What if I want to skip elements inside .map()?
const arr = [1, 2, 3, 4];
const output = arr.map((num) => {
  if (num % 2 === 0) return num * 2;
});
// console.log(output);
/*
EXPLANATION:
    -`The skipped element will be `undefined` in the new created array by the .map()
*/

// TODO: Can .map() be async?

const score = [11, 12, 13];
const doubleScore = score.map(async (value) => {
  return value * 2;
});

console.log(doubleScore); // [ Promise { 22 }, Promise { 24 }, Promise { 26 } ]

Promise.all(doubleScore)
  .then((resolvedScore) => {
    console.log(resolvedScore);
  })
  .catch((error) => {
    console.error(`Error while resolving the doubleScore: `, error);
  });

/*
EXPLANATION:
    - map doesn’t know how to handle async callbacks; it just returns an array of Promises. If you want the resolved values, you need Promise.all(result).
*/

// TODO: QUESTION
const score2 = [1, 2, 3, 4, 5];
const newScore = score2.map((value) => {
    return value = 10
})

console.log(newScore); // [ 10, 10, 10, 10, 10 ]
