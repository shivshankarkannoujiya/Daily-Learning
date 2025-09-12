if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (callback) {
        for (let i = 0; i < this.length; i++){
            callback(this[i], i)
        }
    }
}

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback) {
        const result = []
        for (let i = 0; i < this.length; i++){
            const value = callback(this[i], i)
            result.push(value)
        }
        return result
    }   
}

const arr = [1, 2, 3, 4, 5];
arr.myForEach((value, index) => {
    console.log(`Value at index: ${index}:${value}`)
})

const trippledArray = arr.myMap((value) => value * 3)
console.log(trippledArray);
