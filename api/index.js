const express = require("express");
const app = express();
const cors = require("cors");
const colors = require("colors");

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8080;

// all route
const userRoute = require("./routes/userRoute");

// connect to db
const connectedDB = require("./db/connect");
connectedDB();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoute);

// listen app
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
