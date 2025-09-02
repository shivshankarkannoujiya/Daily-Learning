// filter
// Signature
// - Return new Array
//  -input: callback
// - if callback return true, current value included into new Array

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i)) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

const arr = [2, 1, 4, 6, 8, 10, 11];
const even = arr.myFilter((val) => val % 2 === 0);
console.log(even);
