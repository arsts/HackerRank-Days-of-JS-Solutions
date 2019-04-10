






// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  // Write your code here

  // Get Date string and turn it into a date object
  const dateObj = new Date(dateString);
  // Get day string from days using day number from Dateobj as index
  const dayName = days[dateObj.getDay()];


  // Ruturn
  return dayName;
}

