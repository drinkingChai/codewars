/*

Given an array containing only numbers, add all the elements and return the binary equivalent of that sum.

Note:The binary equivalent should be in string and the array should contain only number otherwise return false.

arr2bin(1,2) == '11'
arr2bin(1,2,'a') == false

*/


function arr2bin(n){
//GET STARTED
  total = 0;  //total to be returned
  for (var i = 0; i < n.length; i++) {
    //if the typeof the item is not a number, exit the function
    if (typeof(n[i]) !== "number") return false;
    total += n[i];
  }
  return total.toString(2); //convert to binary
}