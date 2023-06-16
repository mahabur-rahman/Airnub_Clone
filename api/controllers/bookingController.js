const jwt = require("jsonwebtoken");
const BookingModel = require("../models/Booking");

// getUserDataFromReq
function getUserDataFromReq(req) {
  return new Promise((resolve, reject) => {
    jwt.verify(
      req.cookies.token,
      process.env.JWTSECRET,
      {},
      async (err, userData) => {
        if (err) throw err;
        resolve(userData);
      }
    );
  });
}

// create a booking
const createBooking = async (req, res) => {
  const userData = await getUserDataFromReq(req);
  const { place, checkIn, checkOut, numberOfGuests, name, phone, price } =
    req.body;

  BookingModel.create({
    place,
    checkIn,
    checkOut,
    numberOfGuests,
    name,
    phone,
    price,
    user: userData.id,
  })
    .then((doc) => {
      return res.status(201).json(doc);
    })
    .catch((err) => {
      throw err;
    });
};

// get all booking login user
const getAllBooking = async (req, res) => {};

module.exports = {
  createBooking,
  getAllBooking,
};
