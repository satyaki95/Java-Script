// Q14. Traffic Signal System
// Take a traffic signal color as input:
//  Red: Stop
//  Yellow: Get Ready
//  Green: Go
//  Any other input: Invalid Signal
// Implement using switch case.

let color = "red";

switch (color) {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Get Ready");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Invalid Signal ");

    break;
}
