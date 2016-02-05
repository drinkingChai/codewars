/*
Write a function called validBraces that takes a string of braces, and determines if the order of the braces is valid. validBraces should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces four new characters. Open and closed brackets, and open and closed curly braces. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of open parentheses '(' , closed parentheses ')', open brackets '[', closed brackets ']', open curly braces '{' and closed curly braces '}'.

What is considered Valid? A string of braces is considered valid if all braces are matched with the correct brace.
For example:
'(){}[]' and '([{}])' would be considered valid, while '(}', '[(])', and '[({})](]' would be considered invalid.

Examples:
validBraces( "(){}[]" ) => returns true
validBraces( "(}" ) => returns false
validBraces( "[(])" ) => returns false
validBraces( "([{}])" ) => returns true
*/

function validBraces(braces){
  //TODO
  var openBraces = [];  //array of open braces
  var openingBraces = "[({";  //string of opening braces
  var closingBraces = "])}";  //string of closing braces
  for (var i = 0; i < braces.length; i++) {
    if (openingBraces.indexOf(braces[i]) != -1) openBraces.push(braces[i]); //if it's in opening braces, add it to openBraces
    else if (closingBraces.indexOf(braces[i]) != -1 && openBraces[openBraces.length - 1] == openingBraces[closingBraces.indexOf(braces[i])]) {
      //if it's in closing braces and the last item is the open item on openBraces, remove it
      openBraces.pop();
    } else return false;  //if either of these conditions fail, the string is invalid
  }

  return openBraces.length == 0  //if all the open braces were closed, return true. If any are left open, return false
}
