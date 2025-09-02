// Prototypal Inheritance or
// Prototype Chaining

const obj1 = {
  fname: "Piyush",
  lname: "Garg",
  getFullName: function () {
    return `${this.fname} ${this.lname}`;
  },
};

const obj2 = {
  fname: "Anirudh",
  lname: "Jwala",
};

obj2.__proto__ = obj1;
obj1.__proto__ = null;

console.log(obj2.getFullName());
console.log(obj2.toString());
