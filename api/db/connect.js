const mongoose = require("mongoose");
const DB = process.env.MONGO_URI;

// connect to db
const connectedDB = async () => {
  try {
    const conn = await mongoose.connect(DB);
    console.log(`MongoDB connected: ${conn.connection.host.cyan.underline}`);
  } catch (err) {
    console.log(`Connection error: ${err.red.underline}`);
  }
};

module.exports = connectedDB;
