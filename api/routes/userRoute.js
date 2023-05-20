const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  userProfile,
} = require("../controllers/userController");

// register user
router.post("/register", registerUser);
// login user
router.post("/login", loginUser);
// user profile get
router.get("/profile", userProfile);

module.exports = router;
