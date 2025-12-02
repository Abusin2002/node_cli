const { default: inquirer } = require("inquirer");
const { log } = require("../utils/logger");
const { PROMPT } = require("../constants/prompt");
const { createProject } = require("../utils/projectSetup/createProject");
const { safeRun } = require("../utils/helper/safeRun");
const fs = require("fs");
const path = require("path");
const { initNodeProject } = require("../utils/projectSetup/initNodeProject");
const { installDefaultPackages } = require("../utils/projectSetup/installDefaultPackages");
const { createEnvFile } = require("../utils/projectSetup/createEnvFile");
const { createDBConfig } = require("../utils/projectSetup/createDBConfig");
const { createStarterFiles } = require("../utils/projectSetup/createStarterFiles");
const { greet, startMessage } = require("../utils/message");

process.on('SIGINT',()=>{
    log("\n❌ Setup cancelled by user.","error")
    process.exit(0);
});

async function initProject() {
    log("Welcome to ABU Init Wizard \n","success");

    const answers=await inquirer.prompt(PROMPT)

    const{projectType,dbType,projectName} =answers;

    //MAKING PROJECT FOLDER
    const projectPath=path.join(process.cwd(),projectName);


    if (!fs.existsSync(projectPath)) {
        fs.mkdirSync(projectPath,{recursive:true});
        log(`📁 Created project folder: ${projectName}`, "success");
    } else {
        log(`⚠ Folder ${projectName} already exists, using it`, "warn");
        process.exit(0);
    }

    //change the working directory to project folder
    process.chdir(projectPath);


    
     log("✔ Answers received", "info");

    safeRun(() => createProject(projectType));
    safeRun(() => initNodeProject(), "NPM init failed");
    safeRun(() => installDefaultPackages(), "Package install failed");
    safeRun(() => createEnvFile(), ".env creation failed");
    safeRun(() => createDBConfig(), "DB config creation failed");
    safeRun(() => createStarterFiles(), "Starter files creation failed");


    // --------------------
    startMessage(projectName);
    
}

module.exports={initProject};