import fs from "fs";

// console.log(`Starting program....`)
// const contents = fs.readFileSync("./hello.txt", "utf-8")
// console.log(`File reading success: `, contents);
// console.log(`Program end...`);


// Using Callback Async
// console.log(`Starting program....`)
// fs.readFile(`./hello.txt`, `utf-8`, function (err, content) {
//     if (err) {
//         console.log(`ERROR WHILE READING FILE: `, err)
//     }
//     console.log(`File reading success: `, content)
// })
// console.log(`Program end...`);



function sum(a, b, Callback) {
    Callback(a + b)
}

sum(1, 7, (value) => {
    console.log(`SUM IS: ${value}`)
})