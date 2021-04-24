const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view-engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/login", req, (res) => {
  res.rend("login.ejs");
});

app.listen(PORT, () => `live on ${PORT} ⚜️`);
