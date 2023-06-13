const express = require("express");
const router = express.Router();
const {
  createPlace,
  getPlacesData,
  getSinglePlace,
  updatePlaces,
  getAllPlaces,
} = require("../controllers/placeController");

// add data
router.post("/places", createPlace);
// get places for login user
router.get("/user-places", getPlacesData);

// get single place using ID
router.get("/places/:id", getSinglePlace);

// update place
router.put("/places", updatePlaces);

// get all places
router.get("/all-places", getAllPlaces);

module.exports = router;
