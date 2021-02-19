const express = require("express");
require("dotenv").config();

const app = express();
const config = require("./config/app");

app.get("/home", (req, res) => {
  res.send("Hello World");
});

app.get("/login", (res, req) => {
  res.send("Hello from login page");
});

const PORT = config.appPort;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
