  // leap year calculator
  function leapYear(year) {
      if (year % 4 === 0) {
          if (year % 100 === 0) {
              if (year % 400 === 0) {
                  return "leap year.";
              } else {
                  return "Not A leap year";
              }
          } else {
              return "leap year.";
          }
      } else {
          return "Not A leap Year";
      }
  }

  let check_year = leapYear(1998);
  console.log(check_year);