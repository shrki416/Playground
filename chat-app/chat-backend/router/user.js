const router = require("express").Router();
const { update } = require("../controller/userController");
const { validate } = require("../validators");
const { auth } = require("../middleware/auth");

router.post("/update", [auth], update);

module.exports = router;
