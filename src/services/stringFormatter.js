function getItemsFromStringFormatting(string, separator) {
  return string.split(separator);
}

function getRoverPositionFromString(string) {
  const [positionX, positionY, orientation] = getItemsFromStringFormatting(
    string,
    " "
  );
  return { positionX, positionY, orientation };
}

function getPlateuSizeFromString(string) {
  const [upperX, upperY] = getItemsFromStringFormatting(string, ",");
  return { upperX, upperY };
}

function getRoverMovementCommandsFromString(string) {
  return getItemsFromStringFormatting("");
}

module.exports = {
  getRoverPositionFromString,
  getPlateuSizeFromString,
  getRoverMovementCommandsFromString,
};
