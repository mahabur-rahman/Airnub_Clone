const express = require("express");
const router = express.Router();
const {
  createPlace,
  getPlacesData,
  getSinglePlace,
  updatePlaces,
} = require("../controllers/placeController");

// add data
router.post("/places", createPlace);
// get places
router.get("/user-places", getPlacesData);

// get single place using ID
router.get("/places/:id", getSinglePlace);

// update place
router.put("/places", updatePlaces);

module.exports = router;
