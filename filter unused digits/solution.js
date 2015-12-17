function unusedDigits(){
  // ...
  var allNums = "0123456789".split('');  //array from 0-9
  for (var i = 0; i < arguments.length; i++) {
    //convert the input into string
    //iterate through the string and if that string is in allNums, remove it from allNums
    stringNum = arguments[i].toString();
    for (var j = 0; j < stringNum.length; j++) {
      curNumIndex = allNums.indexOf(stringNum[j].toString());  //current index of string in allNums
      if (curNumIndex != -1) {
        allNums.splice(curNumIndex, 1);
      }
    }
  }
  return allNums.join('');  //return joined string
}