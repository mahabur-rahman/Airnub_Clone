const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/userController");

// register user
router.post("/register", registerUser);
// login user
router.post("/login", loginUser);
// user profile get
router.get("/profile");

module.exports = router;
