const { log } = require("../logger");
const fs=require("fs")



function createStarterFiles() {
  const serverContent = `
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./configs/db");

const app = express();
app.use(express.json());
app.use(cors());

// DB Connection
connectDB();

// Default Route
app.get("/", (req, res) => {
  res.send("🚀 Server Running with MongoDB");
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));
`;

  fs.writeFileSync("src/index.js", serverContent.trim());
  log("✔ Created: src/index.js");
}


module.exports={createStarterFiles}