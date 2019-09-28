/*
Return trueif the passed string looks like a valid US phone number.
Examples:
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
*/

function telephoneCheck(str) {
  // Regular expressions
  //var regExp1 = /^([0-9]{3})([0-9]{3})([0-9]{3})$/
  var regExp1 = /^(1\s?)?(\(\d{3}\)|\d{3})[-. ]?(\d{3})[-. ]?(\d{4})$/
  if (str.match(regExp1)){
    return true
  }
  return false;
}

console.log(telephoneCheck("(555) 555 5555"));
