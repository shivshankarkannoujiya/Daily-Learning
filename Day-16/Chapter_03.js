// let fname = "Piyush"

// function sayName() {
//     let fname = "Akash"
//     console.log(`Inside sayName fn, value of fname is ${fname}`)
// }

// console.log(`fname is ${fname}`);
// sayName()


let fname = "Piyush";

function OuterFunction() {
    let lname = "Garg";

    function InnerFunction() {
        console.log(`Fname is  and Lname is ${lname}`)
        return;
    }

    InnerFunction()
}

OuterFunction()