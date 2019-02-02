const path = require("path");
const fs = require("fs");

const p = path.resolve("../questions");

function readContent(fileName) {
  return fs.readFileSync(path.resolve(p, fileName), "utf-8").trim();
}

module.exports = readContent;
