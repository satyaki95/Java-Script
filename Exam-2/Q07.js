/*
Q7. Traffic Signal System: Use switch-case for red (Stop), yellow (Get Ready), green (Go), and invalid signals.
*/

const trafficSignalSystem = (signal) => {
  let display = "";
  switch (signal.toUpperCase()) {
    case "RED":
      display = "STOP";
      break;

    case "YELLOW":
      display = "GET READY";
      break;

    case "GREEN":
      display = "GO";
      break;

    default:
      display = "invalid signals";
      break;
  }
  return display;
};

console.log(trafficSignalSystem("green"));
