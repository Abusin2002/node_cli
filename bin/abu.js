#!/usr/bin/env node
const {Command}=require("commander")
const program=new Command();


//GLOBAL CONFIG
program
    .name("abu")
    .description("Node Project Generator CLI")
    .version("1.0.0");
    
program.addCommand(require("../src/commands/create"))
program.addCommand(require("../src/commands/make"))


program.parse(process.argv);