const jwt = require("jsonwebtoken");
const PlaceModel = require("../models/Place");
// create place
const createPlace = (req, res) => {
  const {
    title,
    address,
    addedPhotos,
    description,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
  } = req.body;

  const { token } = req.cookies;

  jwt.verify(token, process.env.JWTSECRET, {}, async (err, userData) => {
    if (err) throw err;

    const placeDoc = await PlaceModel.create({
      owner: userData.id,
      title,
      address,
      photos: addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
    });

    return res.status(201).json(placeDoc);
  });
};

// get places data
const getPlacesData = (req, res) => {
  const { token } = req.cookies;
  jwt.verify(token, process.env.JWTSECRET, {}, async (err, userData) => {
    const { id } = userData;

    return res.status(200).json(await PlaceModel.find({ owner: id }));
  });
};

module.exports = {
  createPlace,
  getPlacesData,
};
