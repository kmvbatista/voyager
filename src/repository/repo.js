const { loadData, writeData } = require("../data/dataService");
const { Plateau } = require("../entities/Plateau");
const { Rover } = require("../entities/Rover");

function createPlateau(plateau) {
  const db = loadData();
  db["plateaus"].push(plateau);
  writeData(db);
}

function createRover(rover) {
  const db = loadData();
  db["rovers"].push(rover);
  writeData(db);
}

function getRoverById(roverId) {
  const db = loadData();
  const dbRover = db["rovers"].find((x) => x.id === roverId);
  if (dbRover) {
    return new Rover({ ...dbRover });
  }
}

function getPlateau(plateauName) {
  let dbPlateau;
  if (plateauName) dbPlateau = db["plateaus"][0];
  return new Plateau({ ...dbPlateau });
}

module.exports = { createPlateau, createRover, getRoverById, getPlateau };
