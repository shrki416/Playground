const router = require("express").Router();

router.get("/home", (req, res) => {
  res.send("Hello World");
});

router.use("/", require("./auth"));

module.exports = router;
