let teas = ["masala", "ginger", "oolong", "orange", "lemon"];

for (let i = 0; i < teas.length; i++) {
  console.log(`Tea at index: ${i}: ${teas[i]}`);
}

let myArray = [1, 2, 3, 4, 5, 6];

function calculateSum(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum = sum + number[i];
  }
  return sum;
}

const result = calculateSum(myArray)
console.log(`SUM IS: ${result}`)