/*
Q9. Day Management System: Accept a number from 1–7, display the day using switch-case, and identify
weekdays versus weekends.
*/

const dayManagementSystem = (day) => {
  let weekName;
  switch (day) {
    case 1:
      weekName = "SunDay - This is Weekend";
      break;

    case 2:
      weekName = "MonDay - This is Weekday";
      break;

    case 3:
      weekName = "TuesDay - This is Weekday";
      break;

    case 4:
      weekName = "WednesDay - This is Weekday";
      break;

    case 5:
      weekName = "ThursDay - This is Weekday";
      break;

    case 6:
      weekName = "FriDay - This is Weekday";
      break;

    case 7:
      weekName = "SaturDay - This is Weekend";
      break;

    default:
      weekName = "Invalid Day, Please enter a number between 1-7";
      break;
  }
  return weekName;
};

console.log(dayManagementSystem(8));
