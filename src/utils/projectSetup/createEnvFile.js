const { log } = require("../logger");
const fs=require("fs")

function createEnvFile() {
  const content = `
PORT=3000
MONGO_URI=mongodb://localhost:27017/myapp
NODE_ENV=development
`;

  fs.writeFileSync(".env", content.trim());
  log("✔ Created .env","success");
}

module.exports={createEnvFile}
