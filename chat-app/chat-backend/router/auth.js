const router = require("express").Router();

router.get("/register", (req, res) => {
  res.send("Hello from register page");
});

router.get("/login", (req, res) => {
  res.send("Hello from login page");
});

module.exports = router;
