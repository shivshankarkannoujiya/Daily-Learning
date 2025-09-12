import fs from "fs";
import fsV2 from "fs/promises"


// TODO: Promisification
function readFileWithPromise(filepath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, encoding, (error, content) => {
            if (error) {
                reject(error)
            } else {
                resolve(content)
            }
        })
    })
}

function writeFileWithPromise(filepath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filepath, content, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

function unlinkFileWithPromise(filepath) {
    return new Promise((resolve, reject) => {
        fs.unlink(filepath, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve()
            }
        })
    })
}

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


// TODO: CALLBACK HELL
// 1. Read the file content from hello.txt
// 2. Then create a new file backup.txt
// 3. Copy the contents of the hello file to backup file
// 4. delete the hello file

// fs.readFile("./hello.txt", "utf-8", function (err, content) {
//     if (err) {
//         console.log("ERROR: ", err)
//     } else {
//         console.log("File Read success: ", content);
//         fs.writeFile("backup.txt", content, function (err) {
//             if (err) {
//                 console.log("ERROR IN WRITTING backup.txt:", err)
//             } else {
//                 fs.unlink("./hello.txt", function (err) {
//                     if (err) {
//                         console.log("ERROR WHILE DELETING FILE: ", err)
//                     } else {
//                         console.log("File deleted successfully...")
//                     }
//                 })
//             }
//         })
//     }
// })

// fsV2
//     .readFile(`./hello.txt`, `utf-8`)
//     .then((content) => fsV2.writeFile(`backup.txt`, content))
//     .then(() => fsV2.unlink(`./hello.txt`))
//     .catch((err) => console.log(`ERROR:`, err))

// readFileWithPromise(`./hello.txt`, `utf-8`)
//     .then(content => writeFileWithPromise(`backup.txt`, content))
//     .then(() => unlinkFileWithPromise(`./hello.txt`))
//     .catch((err) => console.log(`ERROR: `, err))
    
// const fileContent = await readFileWithPromise(`./hello.txt`, `utf-8`)
// await writeFileWithPromise(`backup.txt`, fileContent)
// await unlinkFileWithPromise(`./hello.txt`)

function wait(seconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), seconds * 10000)
    })
}

async function doTask() {
    try {
        const fileContent = await readFileWithPromise(`./hello.txt`, `utf-8`)
        await writeFileWithPromise(`backup.txt`, fileContent)
        await wait(10);
        await unlinkFileWithPromise(`./hello.txt`)
    } catch (error) {
        console.log(`ERROR: `, error)
    }
}

doTask() 
    .then(() => {
        console.log(`ALL DONE`);
    })