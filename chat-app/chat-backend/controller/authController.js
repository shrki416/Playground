const User = require("../models").User;
const bcrypt = require("bcrypt");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // find the user with this email address
    const user = await User.findOne({ where: { email } });
    // check if the user is found
    if (!user) return res.status(404).json({ message: "User does not exist" });
    // check if password matches
    if (!bcrypt.compareSync(password, user.password))
      return res.status(401).json({ message: "incorrect password " });
    // generate auth token
    return res.send(user);
  } catch (error) {}

  return res.send([email, password]);
};

exports.register = async (req, res) => {};
