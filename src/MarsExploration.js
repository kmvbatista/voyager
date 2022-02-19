const { Plateau } = require("./entities/Plateau");
const { Rover } = require("./entities/Rover");
const { Commands } = require("./models/Comand");
const {
  createPlateau,
  createRover,
  getRoverById,
  getPlateau,
} = require("./repository/repo");
const {
  moveRoverEast,
  moveRoverLeast,
  moveRoverNorth,
  moveRoverSouth,
} = require("./services/roverMovementService");
const {
  getRoverPositionFromString,
  getPlateuSizeFromString,
  getRoverMovementCommandsFromString,
} = require("./services/stringFormatter");

class MarsExploration {
  definePlateauSize(name, upperRightCoordinates) {
    const { upperX, upperY } = getPlateuSizeFromString(upperRightCoordinates);
    const newPlateau = new Plateau({ name, upperX, upperY });
    createPlateau(newPlateau);
    return {
      name: newPlateau.name,
      upperX: newPlateau.upperX,
      upperY: newPlateau.upperY,
    };
  }

  landRover(roverId, name, landingPosition) {
    const roverLandingPosition = getRoverPositionFromString(landingPosition);
    const { orientation, positionX, positionY } = roverLandingPosition;
    const newRover = new Rover({
      id: roverId,
      name,
      orientation,
      positionX,
      positionY,
    });
    createRover(newRover);
    return {
      id: newRover.id,
      name: newRover.name,
      orientation: newRover.orientation,
      positionX: newRover.positionX,
      positionY: newRover.positionY,
    };
  }

  moveRover(roverId, commands) {
    const rover = getRoverById(roverId);
    const plateau = getPlateau();
    const commandsList = getRoverMovementCommandsFromString(commands);
    const moveByRoverOrientation = {
      N: moveRoverNorth,
      L: moveRoverLeast,
      E: moveRoverEast,
      S: moveRoverSouth,
    };
    for (const command of commandsList) {
      if (command !== Commands.M) {
        rover.setNewOrientationByCommand(command);
      } else {
        moveByRoverOrientation[rover.orientation](rover, plateau);
      }
    }
    return {
      newPositionX: rover.positionX,
      newPositionY: rover.positionY,
      newOrientation: rover.orientation,
    };
  }

  getRoverPositionMessage(roverId) {
    const rover = getRoverById(roverId);
    return `Rover "${rover.name}" is now at positioin ${rover.positionX} ${rover.positionY} ${rover.orientation}`;
  }
}

module.exports = MarsExploration;
