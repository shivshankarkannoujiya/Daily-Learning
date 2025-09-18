
// TODO: Object --> Array
const obj = {
    a: 1,
    b: 2,
    c: 3,
}

console.log(Object.entries(obj))
// [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

// TODO: Seprate the <Number>, <String>, <Char> from the array into 
const arr = [100, "a", "piyush", 10, 8, "c"];

function seprateTypes(arr) {
    const stringValue = []
    const numberValue = []
    const charValue = []
    arr.forEach((value) => {
        if (typeof value === "number") {
            numberValue.push(value)
        } else if (typeof value === "string") {
            value.length > 1 ? stringValue.push(value) : charValue.push(value)
        }
    })

    return { stringValue, numberValue, charValue }
}

const { stringValue, numberValue, charValue } = seprateTypes(arr)
console.log(stringValue)
console.log(numberValue)
console.log(charValue)
console.log(arr)
