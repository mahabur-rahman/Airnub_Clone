const express = require("express");
const app = express();
const cors = require("cors");
const colors = require("colors");
const cookieParser = require("cookie-parser");
// add photo by link
const imageDownloader = require("image-downloader");
const fs = require("fs");
const multer = require("multer");

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8080;

// all route
const userRoute = require("./routes/userRoute");
const placeRoute = require("./routes/placeRoute");

// connect to db
const connectedDB = require("./db/connect");
connectedDB();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
// for image show in uploads folder api
app.use("/uploads", express.static(__dirname + "/uploads")); // for showing Browser ex: http://localhost:5000/uploads/photo1685741007061.jpg

app.use("/api/users", userRoute);
app.use("/api/users", placeRoute);

// add photo by link
app.post("/api/users/upload-by-link", async (req, res) => {
  const { link } = req.body;

  const newName = "photo" + Date.now() + ".jpg";

  await imageDownloader.image({
    url: link,
    dest: __dirname + "/uploads/" + newName,
  });

  return res.json(newName);
});

// upload from computer
const photosMiddleware = multer({ dest: "uploads/" });

app.post(
  "/api/users/upload",
  photosMiddleware.array("photos", 100),
  async (req, res) => {
    const uploadedFiles = [];

    for (let i = 0; i < req.files.length; i++) {
      const { path, originalname } = req.files[i];

      const parts = originalname.split(".");
      const ext = parts[parts.length - 1];
      const newPath = path + "." + ext;

      fs.renameSync(path, newPath);

      const filename = newPath.replace(`uploads/`, "");
      uploadedFiles.push(filename);
    }

    const uniqueFilenames = [...new Set(uploadedFiles)];
    return res.json(uniqueFilenames);
  }
);

// listen app
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
