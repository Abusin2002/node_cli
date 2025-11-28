
const fs  = require("fs");
const { log } = require("./logger");
const path= require("path")

function createFileFromTemplate(type,name){
    const templatePath= path.join(__dirname,'..',"templates",`${type}.txt`);

    if(!fs.existsSync(templatePath)){
        return log(`Template for ${type} not found`,"error");

    }
    const content =fs.readFileSync(templatePath,"utf-8")
                     .replace(/<name>/g,name);
                    
    const outputFile=`src/${type}s/${name}.${type}.js`;

    if(fs.existsSync(outputFile)){
        return log(`File already exists : ${outputFile}`,"warn")
    }

    fs.writeFileSync(outputFile,content);
    log(`Created ${type}: ${outputFile}`,"success");
}

module.exports = { createFileFromTemplate };