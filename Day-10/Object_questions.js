const teas = {
  name: "Lemon tea",
  type: "Green",
  caffiene: "Low",
};

console.log(teas.name);
console.log(teas["type"]);

teas.origin = "Assam";
teas["caffiene"] = "Medium";

// Remove the type property from the object
delete teas.type;

// Check if teas object has property Origin
console.log("origin" in teas);
console.log(teas.hasOwnProperty("origin"));

// Use for...in loop to print all properties of the tea object
for (let key in teas) {
  console.log(`${key}: ${teas[key]}`);
}

const myTeas = {
  greenTea: {
    name: "Green tea",
  },

  blackTea: {
    name: "Black Tea",
  },
};

// Shallow Copy
const teasCopy = { ...myTeas };
console.log(teasCopy);

// Create copy of myTeas object: Deep Copy
const myTeasString = JSON.stringify(myTeas); // Serialization
const myTeasCopy = JSON.parse(myTeasString); // De-Serialization
