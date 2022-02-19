const fs = require("fs");

const dataPath = "src/data/collections.json";

function loadData() {
  const file = fs.readFileSync(dataPath);
  return JSON.parse(file);
}

function writeData(data) {
  fs.writeFile(dataPath, JSON.stringify(data), (error) => {
    console.log(error);
  });
}

module.exports = {
  loadData,
  writeData,
};
