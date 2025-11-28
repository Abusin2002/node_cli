const fs = require("fs");
const path = require("path");

const { execSync } = require("child_process");
const { log } = require("./logger");
const PROJECT_STRUCTURES = require("../constants/projectStructure");


function createProjectV2(type){

    log(`Creating project : ${type}`,"done")

    const folders=PROJECT_STRUCTURES[type];

    if(!folders){
        log("Unknown Project type","error")
        return;
    }

    folders.forEach((folder)=>{
        fs.mkdirSync(folder,{recursive:true});
        log(`Created : ${folder}`,"success")
    });

    execSync("npm init -y");
    log("Initialized npm", "success");

    execSync("npm install express cors dotenv");
    log("Installed dependencies", "success");

    fs.writeFileSync("src/index.js", "console.log('Server Running')");
    fs.writeFileSync(".env", "PORT=3000");

    log("Project Ready!", "done");
}


module.exports = { createProjectV2 };