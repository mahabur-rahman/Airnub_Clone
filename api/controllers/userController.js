const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await UserModel.findOne({ email: email });
  // console.log(userDoc);

  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        process.env.JWTSECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(userDoc);
        }
      );
    } else {
      return res.status(422).json("pass not ok");
    }
  } else {
    return res.status(500).json("User not found!");
  }
};

// get user profile using cookie
const userProfile = async (req, res) => {
  // console.log(req.cookies);
  const { token } = req.cookies;

  if (token) {
    jwt.verify(token, process.env.JWTSECRET, {}, async (err, userData) => {
      if (err) throw err;
      // console.log(userData);
      const { name, email, _id } = await UserModel.findById(userData.id);
      // console.log(user);
      return res.status(200).json({ name, email, _id });
    });
  } else {
    return res.status(500).json(null);
  }
};

module.exports = {
  registerUser,
  loginUser,
  userProfile,
};
