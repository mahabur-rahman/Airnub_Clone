const bcrypt = require("bcryptjs");
const UserModel = require("../models/User");

// for password hashing
const bcryptSalt = bcrypt.genSaltSync(10);

// register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(500).json("Please fill all fields!");
  }

  try {
    const userInfo = await UserModel.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });

    return res
      .status(201)
      .json({ message: "User register successful", userInfo });
  } catch (err) {
    return res.status(422).json(err);
  }
};

module.exports = {
  registerUser,
};
