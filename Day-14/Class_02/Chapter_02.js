let person1 = {
    name: "Piyush",
    greet: function () {
        console.log(`Hello,${this.name}`)
    }
}

let person2 = {
    name: "Raman",
}

// TODO: call: Execute the fn on the particular this
// person1.greet.call(person2)

// return the new function 
const bindGreet = person1.greet.bind(person2)
bindGreet()

