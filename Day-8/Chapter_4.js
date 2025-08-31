let fruits = ["apple", "cherry", "banana"];
let internationalFruits = new Array("Kiwi", "Avacado", "dragon fruits");

console.log(fruits);
console.log(internationalFruits);

console.log(typeof fruits); // object
console.log(typeof internationalFruits); // object

console.log(fruits[0]);
console.log(fruits.length);

fruits[0] = "blue berry";
console.log(fruits);

// Add item at the end
fruits.push("new item");

// Add item at beginning
fruits.unshift("item_2");

// Remove last item
fruits.pop();
console.log(fruits);
