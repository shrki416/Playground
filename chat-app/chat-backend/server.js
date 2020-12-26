const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/home", (req, res) => {
  res.send("Hello World");
});

app.get("/login", (res, req) => {
  res.send("Hello from login page");
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
