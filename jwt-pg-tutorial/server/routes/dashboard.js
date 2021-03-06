const router = require("express").Router();
const pool = require("../database/db");
const auth = require("../middleware/auth");

router.get("/dashboard", auth, async (req, res) => {
  try {
    // req.user has the payload
    const user = await pool.query(
      "SELECT user_name FROM users WHERE user_id = $1",
      [req.user]
    );
    res.json(user.rows[0]);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
});

module.exports = router;
