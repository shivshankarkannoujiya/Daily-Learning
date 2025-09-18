// TODO: Revise Array Methods
// 1. slice vs splice
// 2. find vs filter
// Merge 2 objects
// Function currying

// TODO: Type Coercion
// console.log([] === []);
// console.log([] == []);





// TODO: Write a common function for, 
// console.log(sum(8, 9));
// console.log(sum(8)(9));


const obj1 = {};
const obj2 = {
  name: "Piyush",
};

const obj3 = {
  name: "Naman",
};

obj1[obj2] = { name: "Rohan" };
obj1[obj3] = { name: "Raj" };

// obj1["[object Object]"] = { name: "Rohan" };
// obj1["[object Object]"] = { name: "Raj" }; Keys are same it will overwrite otherone

// console.log(obj1[obj2]);

/*
    TODO: EXPLANATION
    - In JavaScript, object keys are always strings (or symbols).
    - When you use another object as a key (obj1[obj2]), JavaScript implicitly calls .toString() on that object.
        - obj2.toString() → "[object Object]"
        - obj3.toString() → "[object Object]"
    
    - obj1["[object Object]"] = { name: "Rohan" };
    - obj1["[object Object]"] = { name: "Raj" }; // overwrites the first one <keys are same>

    IMPORTANT:
        console.log(obj1[obj2]);
         - It looks up obj1["[object Object]"], which now holds:
         - OUTPUT: { name: "Raj" }



 */


// TODO: Study more about this         
function sum(a, b) {
    if (a && b) return a + b;
    return function (b) {
        return a + b;
    }
}

console.log(sum(8, 9))
console.log(sum(8)(9))


// Non - Primitive Data type:
// On Comparing [] === [] => false
// On Comparing [] == [] => false
// - Checks the memory location value
    

// HTML
    // - Table <Combining Rows>
    // - imagemap
    // - required attribute
    // - em and i
    // - ways to hide elements

