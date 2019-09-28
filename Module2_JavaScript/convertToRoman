function convertToRoman(num) {
  // Convert the given number into a roman numeral.
  var romanDict = {
    M :   1000,
    CM :  900,
    D :   500,
    CD :  400,
    C :   100,
    XC :  90,
    L :   50,
    XL :  40,
    X :   10,
    IX :  9,
    V :   5,
    IV :  4,
    I :   1

  }

  var romanNum = "";

  for (let key in romanDict){

    while (num >= romanDict[key]){
      romanNum += key;
      num -= romanDict[key];
      console.log(num);

    }
  }
 return romanNum;
}

convertToRoman(36);
