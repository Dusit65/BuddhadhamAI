const express = require('express');
const cors = require("cors");
const chatRoutes = require("./routes/chat.route.js");
const qNaRoutes = require("./routes/qNa.route.js");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Parse incoming JSON

// Routes
app.use("/chat", chatRoutes);
app.use("/qNa", qNaRoutes);

// Static files for images
// app.use("/images/user", express.static("images/user"));
// app.use("/images/place", express.static("images/place"));

// Basic test route
app.get("/", (req, res) => {
  res.json({ message: "Hello from BuddhamAI_UAT server!" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ message: "Something went wrong! Please try again later." });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});