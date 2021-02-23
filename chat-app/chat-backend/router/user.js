const router = require("express").Router();
const { update } = require("../controller/userController");
const { validate } = require("../validators");
const { auth } = require("../middleware/auth");
const { rules: updadeRules } = require("../validators/user/update");

router.post("/update", [auth, updadeRules, validate], update);

module.exports = router;
