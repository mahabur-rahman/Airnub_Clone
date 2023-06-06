const express = require("express");
const router = express.Router();
const { createPlace } = require("../controllers/placeController");

// add data
router.post("/places", createPlace);

module.exports = router;
