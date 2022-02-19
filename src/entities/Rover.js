class Rover {
  constructor({ id, name, positionX, positionY, orientation }) {
    this.id = id;
    this.name = name;
    this.positionX = parseInt(positionX);
    this.positionY = parseInt(positionY);
    this.orientation = orientation;
  }

  setNewOrientationByCommand(command) {
    const newOrientationForNorth = {
      L: "E",
      R: "L",
    };
    const newOrientationForEast = {
      L: "S",
      R: "N",
    };
    const newOrientationForLeast = {
      L: "N",
      R: "S",
    };
    const newOrientationForSouth = {
      L: "L",
      R: "E",
    };
    const x = {
      N: newOrientationForNorth,
      E: newOrientationForEast,
      L: newOrientationForLeast,
      S: newOrientationForSouth,
    };
    this.orientation = x[this.orientation][command];
  }
}

module.exports = { Rover };
