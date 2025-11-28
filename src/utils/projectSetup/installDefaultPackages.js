const { log } = require("../logger");
const { execSync } = require("child_process");


function installDefaultPackages() {
  log("⬇ Installing packages: express, cors, dotenv, mongoose, nodemon...","info");

  execSync("npm install express cors dotenv mongoose nodemon", { stdio: "inherit" });
  execSync("npm install -D nodemon", { stdio: "inherit" });
}


module.exports={installDefaultPackages}