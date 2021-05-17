const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT;

const orderService = require("./services/orderService");

app.use(cors());

app.get("/pizzas", (req, res) => {
  let pizzas = orderService.getAllPizzas();
  res.status(200).send(pizzas);
});

app.get("/order", (req, res) => {
  let order = orderService.getOrder();
  res.status(200).send(order);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
