// for (var i = 0; i < 3; i++) {
//   setTimeout(function() { alert(i); }, 1000 + i);
// }


// (function() {
//   var a = b = 5;
// })();

// console.log(b);



function myMod(array, s) {
  var na = [];
  for (var i = 0; i < array.length; i++) {
    na.push(s + array[i]);
  }
  return na;
}

const ans = myMod()



// Solution-1 (question in README)
function MovingMedian(arr) {
  const N = arr[0];
  const data = arr.slice(1);
  let varOcg = [];

  for (let i = 0; i < data.length; i++) {
    const start = Math.max(0, i - N + 1);
    const window = data.slice(start, i + 1);
    window.sort((a, b) => a - b);

    let median;
    if (window.length % 2 === 1) {
      median = window[Math.floor(window.length / 2)];
    } else {
      const mid1 = window[window.length / 2 - 1];
      const mid2 = window[window.length / 2];
      median = (mid1 + mid2) / 2;
    }
    varOcg.push(median);
  }

  const varFiltersCg = varOcg.join(',');
  return varFiltersCg;
}