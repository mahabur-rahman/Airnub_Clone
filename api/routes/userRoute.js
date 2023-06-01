const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  userProfile,
  logoutUser,
} = require("../controllers/userController");

// register user
router.post("/register", registerUser);
// login user
router.post("/login", loginUser);
// user profile get
router.get("/profile", userProfile);
// logout user
router.post("/logout", logoutUser);

module.exports = router;
