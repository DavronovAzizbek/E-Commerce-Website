const fs = require("fs");
const path = require("path");

function readFile(filename) {
  return JSON.parse(
    fs.readFileSync(
      path.join(__dirname, "..", "models", `${filename}.json`),
      "utf-8"
    )
  );
}

function writeFile(filename, data) {
  fs.writeFileSync(
    path.join(__dirname, "..", "models", `${filename}.json`),
    JSON.stringify(data, null, 2),
    "utf-8"
  );
}

module.exports = {
  readFile,
  writeFile,
};
