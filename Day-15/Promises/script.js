console.log(`HELLO`);
const data = fetch(`https://api.freeapi.app/api/v1/public/randomproducts`);
console.log(`Fetch initiated, got Promise: `, data);
data
  .then((res) => {
      console.log(`Fetched Successfully, Parsing JSON...`);
      return res.json()
  })
    .then((jsonDATA) => {
      console.log(`Final API DATA Received: `, jsonDATA)
  })
  .catch((error) => console.error(`Oops! Something went wrong: `, error))
  .finally(() => {
    console.log(`Process Finished`);
  });
