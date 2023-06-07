const express = require("express");
const router = express.Router();
const {
  createPlace,
  getPlacesData,
} = require("../controllers/placeController");

// add data
router.post("/places", createPlace);
// get places
router.get("/user-places", getPlacesData);

module.exports = router;
