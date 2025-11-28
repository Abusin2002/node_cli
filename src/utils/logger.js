
function log(message, type = "info") {
  const colors = {
    success: "\x1b[32m", // green
    error: "\x1b[31m",   // red
    info: "\x1b[36m",    // cyan
    warn: "\x1b[33m",    // yellow
    done: "\x1b[35m",    // magenta
  };

  const prefix = {
    success: "✔",
    error: "✖",
    info: "•",
    warn: "⚠",
    done: "✓",
  }[type];

  const color = colors[type] || colors.info;
  const reset = "\x1b[0m";

  console.log(`${color}${prefix} ${message}${reset}`);
}

module.exports = { log };
