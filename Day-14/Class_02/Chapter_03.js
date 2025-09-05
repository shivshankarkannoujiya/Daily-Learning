const obj = {
    personName: "Piyush",
    greet: function () {
        console.log(`Hello,${this.personName}`)
    }
}

console.log(`Hello from JS`);
setTimeout(obj.greet, 2 * 1000);
console.log(`Bye Bye`);