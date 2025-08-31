const Person = {
  fistname: "Rohan",
  lastname: "Singh",
  age: 23,
  hobbies: ["Coding", "Cricket"],
  isMarried: false,
  getFullName: function () {
    return `${this.fistname} ${this.lastname}`;
  },

  address: {
    hno: 1,
    street: 1,
    countryCode: `IN`,
    state: `UP`,
  },
};

console.log(Person.fistname);
console.log(Person["lastname"]);
console.log(Person.address.countryCode);
console.log(Person["address"]["countryCode"]);

const Remote = {
  brand: "abc",
  color: "xyz",
  dimensions: { height: 12, width: 6 },
  turnOff: function () {},
  valumeUp: function () {},
};
