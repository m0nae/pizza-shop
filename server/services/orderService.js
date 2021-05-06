const fs = require("fs");
let pizzas;
let order;

fs.readFile("./pizzas.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log("An error has occured reading the file: " + err);
  }

  try {
    pizzas = JSON.parse(jsonString);
  } catch (err) {
    console.log(err);
  }
});

fs.readFile("./order.json", "utf8", (err, jsonString) => {
  if (err) {
    console.log(`There was an error reading your file: ${err}`);
  }

  try {
    order = JSON.parse(jsonString);
  } catch (err) {
    console.log(err);
  }
});

module.exports = {
  getAllPizzas: () => {
    return pizzas;
  },

  getOrder: () => {
    return order;
  },
};
