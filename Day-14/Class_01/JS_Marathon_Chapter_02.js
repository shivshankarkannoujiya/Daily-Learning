const chaiTypes = ["Masala Chai", "Ginger Chai", "Green Tea", "lemon Tea", "Ginger Chai"];

// console.log(chaiTypes[0]);
// console.log(`Total Chai Types: ${chaiTypes.length}`)

let index = chaiTypes.indexOf("Ginger Chai")
// console.log(index);

if (index !== -1) {
    chaiTypes.splice(index, 1)
}

// console.log(chaiTypes)

// chaiTypes.forEach((chai, index) => {
//     console.log(`${index + 1}: ${chai}`)
// })


let moreChaiTypes = ["Oolong Tea", "White Tea"]
let allChaiTypes = chaiTypes.concat(moreChaiTypes)
// console.log(allChaiTypes);


let chaiRecipe = {
    name: "Masala Chai",
    ingredients: {
        tealeaves: "Assam Tea",
        milk: "Full cream milk",
        sugar: "Brown Sugar",
        spices: ["Daalchini", "Ginger"],
    },
    instructions: "Boil water, add tea leaves, milk, sugar  and spices"
}

chaiRecipe.name
chaiRecipe.ingredients.spices[1]


let updatedChaiReccipe = {
    ...chaiRecipe,
    instructions: "Boil water, add tea leaves, milk, sugar  and spices with some love"
}

// console.log(updatedChaiReccipe);

let { name, ingredients } = chaiRecipe;
let [firstChai, secondChai] = chaiTypes;

console.log(firstChai);
console.log(secondChai);
