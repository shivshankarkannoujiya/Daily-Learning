if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i);
    }
  };
}

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      const value = callback(this[i], i);
      result.push(value);
    }
    return result;
  };
}

// if (!Array.prototype.myReduce) {
//   Array.prototype.myReduce = function (callback, initialValue = undefined) {
//     if (!initialValue) {
//       let accumulator = this[0];
//       for (let i = 1; i < this.length; i++) {
//         accumulator = callback(accumulator, this[i]);
//       }
//       return accumulator;
//     }

//     let accumulator = initialValue;
//     for (let i = 0; i < this.length; i++) {
//       accumulator = callback(accumulator, this[i]);
//     }

//     return accumulator;
//   };
// }

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback, initialValue = undefined) {
    let accumulator = initialValue || this[0];
    let startIndex = initialValue ? 0 : 1;
    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i]);
    }
    return accumulator;
  };
}

const arr = [1, 2, 3, 4, 5];
arr.myForEach((value, index) => {
  console.log(`Value at index: ${index}:${value}`);
});

const trippledArray = arr.myMap((value) => value * 3);
console.log(trippledArray);
