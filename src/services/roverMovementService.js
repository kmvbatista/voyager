function moveRoverSouth(rover) {
  if (rover.positionY - 1 >= 0) rover.positionY -= 1;
}

function moveRoverNorth(rover, plateau) {
  if (rover.positionY <= plateau.upperY) rover.positionY += 1;
}

function moveRoverEast(rover) {
  if (rover.positionX - 1 >= 0) rover.positionX -= 1;
}

function moveRoverLeast(rover, plateau) {
  if (rover.positionX + 1 <= plateau.upperX) rover.positionX += 1;
}

module.exports = {
  moveRoverSouth,
  moveRoverNorth,
  moveRoverEast,
  moveRoverLeast,
};
