const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  // Get token from header
  const token = req.header("token");

  // Check if not token
  if (!token) return res.status(403).json({ message: "authorization denied" });

  // Verify token
  try {
    //it is going to give use the user id (user:{id: user.id})
    const payload = jwt.verify(token, process.env.SECRET);

    req.user = payload.user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};
