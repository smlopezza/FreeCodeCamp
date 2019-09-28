function rot13(str) { // LBH QVQ VG!
  // This function applies Caesars Cipher by 13 places
  let lettersEng = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let ii = lettersEng.length;
  console.log(ii);
  let str2 = str.split('');
  let newLetter=[];
  let j;

  // Loop for string
  for (let k=0; k < str2.length; k++){

    // loop for alpha characters
    for (let i=0; i<lettersEng.length; i++){

      if (str2[k] == lettersEng[i]){
        j = i - 13;

        if (j >= 0){
          newLetter[k]=lettersEng[j];

        } else {
          newLetter[k]=lettersEng[j+26];
        }
      }

    }

    if (newLetter[k] == undefined){
      newLetter[k] = str2[k];
    }

  }

  return newLetter.join('');
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC!"));
