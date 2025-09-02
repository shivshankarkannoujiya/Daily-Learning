// .map polyfill

/**
 * Signature
 * Iterate over each element
 * Input: callback, thisArgs
 * Return: new Array of same length
 */

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback, thisArgs) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      const value = callback(this[i], i, this);
      result.push(value);
    }
    return result;
  };
}

// Optimized
if (!Array.prototype.myMap2) {
  Array.prototype.myMap2 = function (callback, thisArgs) {
    if (this === null) {
      throw new TypeError(`myMap2 called on null or undefined`);
    }

    if (typeof callback !== "function") {
      throw new TypeError(`${callback} is not a function`);
    }

    let O = Object(this);
    let len = O.length >>> 0;

    const result = new Array(len);

    for (let i = 0; i < len; i++) {
      if (i in O) {
        result[i] = callback.call(thisArgs, O[i], i, O);
      }
    }

    return result;
  };
}

const arr = [1, 2, 3, 4, 5, 6];
const doubledNumber = arr.myMap2((val) => val * 2);
console.log(doubledNumber);
