const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const PORT = 1010;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Main route!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
