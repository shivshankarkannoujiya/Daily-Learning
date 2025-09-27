const fs = require("fs");
const crypto = require(`crypto`);

setTimeout(() => {
  console.log(`Set Timeout`);
}, 0);

setImmediate(() => {
  console.log(`Set Immediate`);
}, 0);

// TODO: Decreasing threadpool worker size 
process.env.UV_THREADPOOL_SIZE = 1024;

fs.readFile("sample.txt", "utf-8", function (err, data) {

  setTimeout(() => {
    console.log(`Set Timeout inside FS`);
  }, 0);
    
  setImmediate(() => console.log(`Immediate inside FS 1`));

  // CPU INTENSIVE TASK
  const start = Date.now();
  crypto.pbkdf2(
    "password",
    "salt1",
    100000,
    1024,
    "sha512",
    function (err, data) {
      console.log(`[${Date.now() - start}ms]: Password 1 hashed`);
    }
  );

  crypto.pbkdf2(
    "password",
    "salt1",
    100000,
    1024,
    "sha512",
    function (err, data) {
      console.log(`[${Date.now() - start}ms]: Password 1 hashed`);
    }
  );

  crypto.pbkdf2(
    "password",
    "salt1",
    100000,
    1024,
    "sha512",
    function (err, data) {
      console.log(`[${Date.now() - start}ms]: Password 1 hashed`);
    }
  );

  crypto.pbkdf2(
    "password",
    "salt1",
    100000,
    1024,
    "sha512",
    function (err, data) {
      console.log(`[${Date.now() - start}ms]: Password 1 hashed`);
    }
  );
  
});



console.log(`Hello`);
