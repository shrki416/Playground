const router = require("express").Router();
const { update } = require("../controller/userController");
const { validate } = require("../validators");
const { auth } = require("../middleware/auth");
const { rules: updadeRules } = require("../validators/user/update");
const { userFile } = require("../middleware/fileUpload");

router.post("/update", [auth, userFile, updadeRules, validate], update);

module.exports = router;
