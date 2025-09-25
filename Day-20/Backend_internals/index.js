const fs = require("fs")
fs.writeFile("./test.txt", "Insert this content to test file", () => {})

const xyz = require("./math.js")
console.log(xyz())
console.log(xyz.add())
console.log(xyz.add())

// console.log("exports:", exports);
// console.log("require:", require);
// console.log("module:", module);
// console.log("__filename:", __filename);
// console.log("__dirname:", __dirname);

