const express = require("express");
const router = express.Router();
const {
  createBooking,
  getAllBooking,
} = require("../controllers/bookingController");

// create booking
router.post("/booking", createBooking);

// get login user booking
router.get("/booking", getAllBooking);

module.exports = router;
