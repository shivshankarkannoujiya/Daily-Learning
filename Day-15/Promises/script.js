document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.getElementById("productsContainer");

  const data = fetch(`https://api.freeapi.app/api/v1/public/randomproducts`);
  console.log(`Fetch initiated, got Promise: `, data);
  data
    .then((res) => {
      console.log(`Fetched Successfully, Parsing JSON...`);
      console.log(typeof res);
      return res.json();
    })
    .then((parsedData) => {
      console.log(typeof parsedData);

      console.log(`Final API DATA Received: `, parsedData);
      console.log(parsedData.data.data);
      const products = parsedData.data.data;
      products.forEach((product) => {
        const li = document.createElement("li");
        li.textContent = product.title;
        productsContainer.appendChild(li);
      });
    })
    .catch((error) => console.error(`Oops! Something went wrong: `, error))
    .finally(() => {
      console.log(`Process Finished`);
    });
});
