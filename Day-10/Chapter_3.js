const p1 = {
  fname: "Piyush",
  lname: "Garg",
  address: {
    street: 1,
    Hno: 12,
    state: `UP`,
  },
};

// const p2 = {
//   fname: p1.fname,
//   lname: p1.lname,
//   address: p1.address,
// };

// const p2 = {
//   ...p1, // Spread Operator
// };

// p2.fname = "Rohan";
// p2.lname = "Singh";

// console.log(p1);
// console.log(p2);

const p1String = JSON.stringify(p1);
const p2 = JSON.parse(p1String);
