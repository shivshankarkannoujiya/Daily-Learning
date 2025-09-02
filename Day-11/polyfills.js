// Polyfills

const arr = [1, 2, 3, 4, 5, 6];

// 1. forEach
// if (!Array.prototype.myForEach) {
//   Array.prototype.myForEach = function (callbackFn) {
//     const originalArray = this;
//     for (let i = 0; i < originalArray.length; i++) {
//       callbackFn(originalArray[i], i);
//     }
//   };
// }

// Professional
if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (callback, thisArgs) {
    if (this === null) {
      throw new TypeError(
        `Array.prototype.forEach called on null or undefined`
      );
    }

    let O = Object(this);
    let len = O.length >>> 0;

    if (typeof callback !== "function") {
      throw new TypeError(`${callback} is not a function`);
    }

    for (let i = 0; i < len; i++) {
      if (i in O) {
        callback.call(thisArgs, O[i], i, O);
      }
    }
  };
}

arr.myForEach(function (value, index) {
  console.log(`My value at index: ${index}: ${value}`);
});
