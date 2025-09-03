// 1
let teas = [
  "green tea",
  "oolong tea",
  "black tea",
  "ginger tea",
  "masala tea",
  "white tea",
  "herbal tea",
];

// 2
teas.push("Chamomile tea");

// 3
const oolongTeaIndex = teas.indexOf("oolong tea");
if (oolongTeaIndex > -1) {
  teas.splice(oolongTeaIndex, 1);
}

// 4
const caffienatedTeas = teas.filter((tea) => tea !== "herbal tea");
console.log(`CAFFIENATED TEAS: ${caffienatedTeas}`);

// 5
teas.sort();

// 6
for (let i = 0; i < teas.length; i++) {
  console.log(teas[i]);
}

// 7
let caffienatedMyTeas = 0;
for (let i = 0; i < teas.length; i++) {
  if (teas[i] !== "herbal tea") {
    caffienatedMyTeas++;
  }
}

// 8
const upperCaseTeas = [];
for (let i = 0; i < teas.length; i++) {
  upperCaseTeas.push(teas[i].toUpperCase());
}

// 9
const longestTeas = "";
for (let i = 0; i < teas.length; i++) {
  if (teas[i].length > longestTeas.length) {
    longestTeas = teas[i];
  }
}

// 10
const reversedArray = [];
for (let i = teas.length - 1; i >= 0; i--) {
  reversedArray.push(teas[i]);
}
