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

// get places from /:id
const getSinglePlace = async (req, res) => {
  const { id } = req.params;

  return res.status(200).json(await PlaceModel.findById(id));
};

// update place
const updatePlaces = (req, res) => {
  const { token } = req.cookies;

  const {
    id,
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

  jwt.verify(token, process.env.JWTSECRET, {}, async (err, userData) => {
    if (err) throw err;

    const placeDoc = await PlaceModel.findById(id);
    if (userData.id === placeDoc.owner.toString()) {
      placeDoc.set({
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

      // save data
      await placeDoc.save();
      return res.status(200).json(`Update Place Data`);
    }
  });
};

// get all places
const getAllPlaces = async (req, res) => {
  return res.status(200).json(await PlaceModel.find());
};

module.exports = {
  createPlace,
  getPlacesData,
  getSinglePlace,
  updatePlaces,
  getAllPlaces,
};
