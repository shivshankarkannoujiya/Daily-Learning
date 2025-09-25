// function add(x, y) {
//     return x + y
// }

// function sub(x, y) {
//     return x - y
// }

// exports.add = add


exports.add = function (a, b) {
    return a + b
}

exports.sub = function (a, b) {
    return a - b
}

module.exports = function () {
    console.log(`I am from default export`);
}