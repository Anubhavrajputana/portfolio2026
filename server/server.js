require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const chatRoutes = require("./routes/chatRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// ==============================
// Connect MongoDB
// ==============================

connectDB();

// ==============================
// Middleware
// ==============================

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

// ==============================
// Routes
// ==============================

app.use("/api/chat", chatRoutes);
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio AI Backend Running 🚀",
  });
});

// ==============================
// Start Server
// ==============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});