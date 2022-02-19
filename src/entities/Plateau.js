class Plateau {
  constructor({ upperX, name, upperY }) {
    this.name = name;
    this.upperX = parseInt(upperX);
    this.upperY = parseInt(upperY);
  }
}

module.exports = { Plateau };
