const MarsExplorastion = require('./src/MarsExploration');

const exploration1 = new MarsExplorastion();
exploration1.definePlateauSize('North Plateau', '10,10');
exploration1.landRover(1, 'Eagle', '1 2 N');
exploration1.landRover(2, 'Falcon', '3 3 E');
exploration1.moveRover(1, 'LMLMLMLMM');
exploration1.moveRover(2, 'MRRMMRMRRM');

const message1 = exploration1.getRoverPositionMessage(1);
console.log(message1);
const message2 = exploration1.getRoverPositionMessage(2);
console.log(message2);