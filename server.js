const express = require('express');
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const chatRoutes = require("./routes/chat.route.js");
const qNaRoutes = require("./routes/qNa.route.js");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// สร้าง HTTP server จาก express app
const server = http.createServer(app);

// สร้าง Socket.IO server
const io = new Server(server, {
  cors: { origin: "*" }, // ถ้าอยากจำกัด ให้ใส่ URL ของ frontend
});

const chatSockets = {};
app.set("chatSockets", chatSockets);

module.exports = { app, server, io, chatSockets };

// ทำให้ routes หรือฟังก์ชันอื่น ๆ ใช้ io ได้
app.set("io", io);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/chat", chatRoutes);
app.use("/qNa", qNaRoutes);

// Static files (ถ้ามี)
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

// Socket.IO connection log
io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);

  socket.on("join_chat", ({ chatId }) => {
    if (!chatSockets[chatId]) chatSockets[chatId] = [];
    chatSockets[chatId].push(socket.id);
    console.log(`Socket ${socket.id} joined chat ${chatId}`);
  });

  socket.on("disconnect", () => {
    for (const chatId in chatSockets) {
      chatSockets[chatId] = chatSockets[chatId].filter(id => id !== socket.id);
      if (chatSockets[chatId].length === 0) delete chatSockets[chatId];
    }
    console.log("Client disconnected:", socket.id);
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} with Socket.IO...`);
});