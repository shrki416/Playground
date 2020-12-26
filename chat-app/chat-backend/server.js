const express = require("express");
const config = require("./config/app");

const app = express();
const PORT = config.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
