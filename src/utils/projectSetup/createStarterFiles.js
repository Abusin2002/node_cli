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
  res.send(\`
    <div style="
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      background: linear-gradient(135deg, #667eea, #764ba2);
      font-family: Arial, sans-serif;
      color: #fff;
      flex-direction: column;
      text-align: center;
    ">
      <div style="
        background: rgba(255, 255, 255, 0.1);
        padding: 40px 60px;
        border-radius: 15px;
        box-shadow: 0 8px 20px rgba(0,0,0,0.3);
      ">
        <h1 style="font-size: 3rem; margin-bottom: 20px;">🚀 Node.js Project Running</h1>
        <p style="font-size: 1.2rem; margin-bottom: 30px;">Your server is connected to MongoDB and ready to go!</p>
        <a  href="https://www.linkedin.com/in/abu-softwareengineer" style=" target="_blank"
          text-decoration:none;
          color: #764ba2;
          background: #fff;
          padding: 10px 25px;
          border-radius: 5px;
          font-weight: bold;
        ">Visit Author</a>
      </div>
    </div>
  \`);
});



// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on","http://localhost:" + PORT));
`;

  fs.writeFileSync("src/index.js", serverContent.trim());
  log("✔ Created: src/index.js");
}


module.exports={createStarterFiles}