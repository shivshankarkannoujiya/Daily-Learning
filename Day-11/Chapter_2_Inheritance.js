class A {
  funInsideA() {
    console.log(`Class A ka Method`);
  }
}

// class B extends A {
//   funInsideB() {
//     console.log(`Class B ka Method`);
//   }
// }

// Inheritance Without using extends
class B {
  funInsideB() {
    console.log(`Class B ka Method`);
  }
}

// Object.setPrototypeOf(B.prototype, A.prototype);
B.__proto__ === A

const p = new B();
p.funInsideB();
p.funInsideA();
