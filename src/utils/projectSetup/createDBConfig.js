const { log } = require("../logger");
const fs=require("fs")


function createDBConfig() {
  const dbContent = `
const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("📦 MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
`;

  fs.writeFileSync("src/configs/db.js", dbContent.trim());
  log("✔ Created: src/config/db.js","success");
}


module.exports={createDBConfig}