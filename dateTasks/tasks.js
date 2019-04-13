// Write a JavaScript function to get the current date.

// Test Data :
// console.log(curday('/'));
// console.log(curday('-'));
// Output :
// "11/13/2014"
// "11-13-2014"

function currentDate(separator) {
  try {
    if (typeof separator !== "string") throw "Wrong input!";
    const validCharacters = ["/", "-", ":", "_"];
    if (validCharacters.indexOf(separator) === -1) {
      throw "Invalid character";
    }
  } catch (err) {
    console.log(err);
  }

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;

  const currentDate = `${day}${separator}${month}${separator}${year}`;

  console.log(currentDate);
}

// currentDate(8);

// 3. Write a JavaScript function to get the number of days in a month. Go to the editor

// Test Data :
// console.log(getDaysInMonth(1, 2012));
// console.log(getDaysInMonth(2, 2012));
// console.log(getDaysInMonth(9, 2012));
// console.log(getDaysInMonth(12, 2012));
// Output : 31, 29, 30, 31

function getDaysInMonth(month, year) {
  const lastDay = new Date(year, month, 0).getDate();

  console.log(lastDay);
}

// getDaysInMonth(2, 1985);

// 4. Write a JavaScript function to get the month name from a particular date. Go to the editor

// Test Data :
// console.log(month_name(new Date("10/11/2009")));
// console.log(month_name(new Date("11/13/2014")));
// Output :
// "October"
// "November"

function month_name(date) {
  switch (date.getMonth()) {
    case 0:
      console.log("January");
      break;
    case 1:
      console.log("February");
      break;
    case 2:
      console.log("March");
      break;
    case 3:
      console.log("April");
      break;
    case 4:
      console.log("May");
      break;
    case 5:
      console.log("June");
      break;
    case 6:
      console.log("July");
      break;
    case 7:
      console.log("August");
      break;
    case 8:
      console.log("September");
      break;
    case 9:
      console.log("October");
      break;
    case 10:
      console.log("November");
      break;
    case 11:
      console.log("December");
      break;
    default:
      console.log("uh");
  }
}

// month_name(new Date());

// Write a JavaScript function to get difference between two dates in days.

// Test Data:
// console.log(date_diff_indays('04/02/2014', '11/04/2014'));
// console.log(date_diff_indays('12/02/2014', '11/04/2014'));
// Output :
// 216
// -28

var date_diff_indays = function(date1, date2) {
  dt1 = new Date(date1);
  dt2 = new Date(date2);
  return Math.floor(
    (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
      Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
      (1000 * 60 * 60 * 24)
  );
};
// console.log(date_diff_indays("04/02/2014", "11/04/2014"));
// console.log(date_diff_indays("12/02/2014", "11/04/2014"));
