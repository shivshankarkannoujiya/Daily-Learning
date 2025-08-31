// let users = ["Abhi", "Ravi", "Neha"];
// users.forEach((user) => {
//   console.log(`Hello, ${user}`);
// });

let prices = [100, 200, 300];
const discountedPrice = prices.map((price) => {
  return price * 0.9;
});

let numbers = [10, 25, 40, 5];
const small = numbers.filter((number) => number > 25);
console.log(`Smaller Number is: ${small}`);

let users = [
  { id: 1, name: "Abhi" },
  { id: 2, name: "Aman" },
];

const user = users.find((user) => user.id === 2);
console.log(`User: ${user}`); // {id: 2, name: "Aman"}

let marks = [30, 45, 80];
const passed = marks.some((mark) => mark >= 50);
console.log(passed); // true

let scores = [40, 60, 70];
const allPassed = marks.every((score) => score >= 35);
console.log(allPassed); // true

let expenses = [100, 200, 50];
let total = expenses.reduce((sum, val) => sum + val, 0);
console.log(total); // 350

let items = ["milk", "bread", "banana"];
console.log(items.includes("milk")); // true
console.log(items.includes("butter")); // false

// let prices = [50, 5, 20, 100];
// numbers.sort((a, b) => a - b);
// console.log(prices); // [5, 20, 50, 100]

let tasks = ["Task1", "Task2", "Task3"];
tasks.splice(1, 1, "New Task");
console.log(tasks)