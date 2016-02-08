/*
Welcome to this Kata. In this Kata you will be given a string. Your task is to replace every character with the letter following it in the alphabet (for example, "b" should be "c", "z" should be "a" and capital "Z" should be "A").

The test cases would not have any special symbols or numbers but it will have spaces. And the upper and lower cases should be retained in your output.

For Example:

letterChange('Lorem Ipsum')    // return Mpsfn Jqtvn
*/

function letterChange(str) {
//Do your coding here
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = lowercase.toUpperCase();
  var new_str = "";	//new string to return
  
  for (var i = 0; i < str.length; i++) {
    if (lowercase.indexOf(str[i]) != -1) {
      var index = lowercase.indexOf(str[i]);	//get index of letter within lowercase
      new_str += index == 25 ? lowercase[0] : lowercase[index % 25 + 1];	//if it's z, get a, else get the next element
    } else if (uppercase.indexOf(str[i]) != -1) {
      var index = uppercase.indexOf(str[i]);
      new_str += index == 25 ? uppercase[0]: uppercase[index % 25 + 1];
    } else {
      new_str += str[i];
    }
  }
  
  return new_str;
}