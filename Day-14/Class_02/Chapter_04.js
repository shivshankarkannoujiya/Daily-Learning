console.log("Hello");

setTimeout(function TimerFn() {
  console.log("A0S");
}, 0);

Promise.resolve().then(function P1() {
  console.log("Promise 1 Resolved");

  Promise.resolve().then(function P2() {
    console.log("Promise 2 Resolved");

    Promise.resolve().then(function P3() {
      console.log("Promise 3 Resolved");

      Promise.resolve().then(function P4() {
        console.log("Promise 4 Resolved");

        Promise.resolve().then(function P5() {
          console.log("Promise 5 Resolved");
        });
      });
    });
  });
});

console.log("BYE BYE");
