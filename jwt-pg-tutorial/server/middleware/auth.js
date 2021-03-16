const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    const jwtToken = req.header("token");
    if (!jwtToken) return res.send(403).json("Unathorized User");
    const payload = jwt.verify(jwtToken, process.env.SECRET);
    req.user = payload.user;
  } catch (error) {
    console.error(403).json("Unauthorized User");
  }
};
