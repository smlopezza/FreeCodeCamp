/* Palindrome Checker
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
*/

function palindrome(str) {
  let str2 = str; // creates new variable Str2 to hold str
  // RegEx --> Regular Expression for all the non-alphanumeric characters
  let regEx = /[^0-9a-zA-Z]/g;
  // Replace all the non-alphanumerics and converts to lower case
  str2=str2.replace(regEx, '').toLowerCase();
  // Reverse the string
  let str3 = str2.split('').reverse().join('');
  console.log(str3);
  // loop to check palindrome
  for (let i=0; i<str3.length; i++){
    if (str2[i] != str3[i]){
      return false;
    }
  }
  return true;
}


console.log(palindrome("Eye"));
