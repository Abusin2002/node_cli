const PROJECT_STRUCTURES = require("../../constants/projectStructure");
const { log } = require("../logger");
const fs=require("fs")

function createProject(projectType) {
  log( `Creating project: ${projectType}`,"info");

  const folders=PROJECT_STRUCTURES[projectType];
  

    if (!folders) {
        const types=Object.keys(PROJECT_STRUCTURES).join(", ")
        throw new Error(`Unknown Project type.. "${projectType}" \n  Choose one of : ${types}`);
    }

    folders.forEach((folder) => {
        fs.mkdirSync(folder, { recursive: true });
        log(`Created : ${folder}`, "success")
    });

    log("\n🎉 PROJECT READY! \n 😊Happy Hacking..!!  — by Abu\n","done");
}

module.exports={createProject}