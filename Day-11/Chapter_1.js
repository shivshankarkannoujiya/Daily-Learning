class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getFullName() {
    return `${this.firstname} ${this.lastname}`;
  }
}

const p1 = new Person("Akash", "Kadlag");
const p2 = new Person("Piyush", "Garg");

console.log(p1.getFullName());
console.log(p2.getFullName());
