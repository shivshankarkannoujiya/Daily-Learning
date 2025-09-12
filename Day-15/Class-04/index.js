import fs from "fs";

// console.log(`Starting program....`)
// const contents = fs.readFileSync("./hello.txt", "utf-8")
// console.log(`File reading success: `, contents);
// console.log(`Program end...`);


// Using Callback: Async
// console.log(`Starting program....`)
// fs.readFile(`./hello.txt`, `utf-8`, function (err, content) {
//     if (err) {
//         console.log(`ERROR WHILE READING FILE: `, err)
//     }
//     console.log(`File reading success: `, content)
// })
// console.log(`Program end...`);



// function sum(a, b, Callback) {
//     setTimeout(() => {
//         Callback(a + b);
//     }, 5 * 1000)
// }

// sum(1, 7, (value) => {
//     console.log(`SUM IS: ${value}`)
// })


// TODO:
// 1. Read the file content from hello.txt
// 2. Then create a new file backup.txt
// 3. Copy the contents of the hello file to backup file
// 4. delete the hello file

fs.readFile("./hello.txt", "utf-8", function (err, content) {
    if (err) {
        console.log("ERROR: ", err)
    } else {
        console.log("File Read success: ", content);
        fs.writeFile("backup.txt", content, function (err) {
            if (err) {
                console.log("ERROR IN WRITTING backup.txt:", err)
            } else {
                fs.unlink("./hello.txt", function (err) {
                    if (err) {
                        console.log("ERROR WHILE DELETING FILE: ", err)
                    } else {
                        console.log("File deleted successfully...")
                    }
                })
            }
        })
    }
})