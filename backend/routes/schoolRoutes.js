const express = require("express");
const multer = require("multer");
const path = require("path");
const { addSchool, getSchools } = require("../controllers/schoolController");

const router = express.Router();

// File storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/schoolImages"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({ storage });

// Routes
router.post("/add", upload.single("image"), addSchool);
router.get("/", getSchools);

module.exports = router;
