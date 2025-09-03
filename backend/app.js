const express = require("express");
const cors = require("cors");
const path = require("path");
const schoolRoutes = require("./routes/schoolRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// API routes
app.use("/api/schools", schoolRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("🚀 Server is running! Visit /api/schools to see API endpoints.");
});



const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
