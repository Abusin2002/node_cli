const { log } = require("../logger");
const path=require("path")
const { execSync } = require("child_process");
const fs=require("fs")

function initNodeProject() {
  log("\n📦 Initializing npm project...","info");
  execSync("npm init -y", { stdio: "inherit" });

  const pkgPath = path.join(process.cwd(), "package.json");
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

  pkg.scripts = pkg.scripts || {};
  pkg.scripts.start = "nodemon src/index.js";

  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
  log("✔ Added nodemon start script","done");
}


module.exports={initNodeProject}