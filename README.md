# Super Day Test

Code challenge for the Voyager Portal Super Day hiring event

## Mars Rover in JavaScript

A squad of robotic rovers are to be landed by NASA on a plateau on Mars.

This plateau, which is curiously rectangular, must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.

A rover’s position and location is represented by a combination of x and y co-ordinates and a letter representing one of the four cardinal compass points. The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.

In order to control a rover , NASA sends a simple string of letters. The possible letters are ‘L’, ‘R’ and ‘M’. ‘L’ and ‘R’ makes the rover spin 90 degrees left or right respectively, without moving from its current spot. ‘M’ means move forward one grid point, and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y 1).

## Input

### Plateau
To define a plateau we need to input the plateau name and the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.

### Rover
To define a Rover we need to inform and id, name, and his landing position. The position is made up of two integers and a letter separated by spaces, corresponding to the x and y co-ordinates and the rover’s orientation.

### Move Rover on the Plateau
To move a rover on the plateau we need tto define which rover we need to move and the instructions telling the rover how to explore the plateau.

## Tests
### Test Scenario 1

Rover Landing: 1 2 N  
Commands to Explore: LMLMLMLMM  
Final Position: 1 3 N 

### Test Scenario 2
Rover Landing: 3 3 E  
Commands to Explore: MRRMMRMRRM  
Final Position: 2 3 S  

## What's Expected

We expect that you as a developer implement the logics that will allow the Rover to explore the mars plateau.

If you think that makes sense you can do any changes on the project structure to improve it or use any kind of node libraries that may help the implemtation.

We expect that you deliver the project in a new repository and send the link to cassiano@voyagerportal.com with the subject Super Day Test.

## Instructions to run the project

- Setup nodeJS on your environment
- clone the repo
- `npm start` to run the applicaton
- `npm test` to run the tests