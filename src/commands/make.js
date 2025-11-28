const { Command } = require("commander");
const { createFileFromTemplate } = require("../utils/template");

const make = new Command("make");

make
  .command("route <name>")
  .description("Create a route file")
  .action((name) => createFileFromTemplate("route", name));

make
  .command("controller <name>")
  .description("Create a controller file")
  .action((name) => createFileFromTemplate("controller", name));

make
  .command("service <name>")
  .description("Create a service file")
  .action((name) => createFileFromTemplate("service", name));

make
  .command("model <name>")
  .description("Create a model file")
  .action((name) => createFileFromTemplate("model", name));

make
  .command("repo <name>")
  .description("Create a repo file")
  .action((name) => createFileFromTemplate("repo", name));

module.exports = make;
