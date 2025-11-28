const { Command } = require("commander");
const { createProject } = require("../utils/projectSetup/createProject");
const { initNodeProject } = require("../utils/projectSetup/initNodeProject");
const { installDefaultPackages } = require("../utils/projectSetup/installDefaultPackages");
const { createEnvFile } = require("../utils/projectSetup/createEnvFile");
const { createDBConfig } = require("../utils/projectSetup/createDBConfig");
const { createStarterFiles } = require("../utils/projectSetup/createStarterFiles");
const { log } = require("../utils/logger");
const { greet } = require("../utils/message");
// const { createProject } = require("../utils/file");

const create = new Command("create");

create
  .argument("<type>")
  .description("Create project structure")
  .action((type) => {
   try{
     // createProject(type);
    createProject(type);
    initNodeProject();
    installDefaultPackages();
    createEnvFile();
    createDBConfig();
    createStarterFiles();

    // --------------
    greet();
   }catch(error){
    log(error.message,"error")
   }
  });
module.exports = create;
