/*
Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

Examples: 
validParentheses( "()" ) => returns true 
validParentheses( ")(()))" ) => returns false 
validParentheses( "(" ) => returns false 
validParentheses( "(())((()())())" ) => returns true 

All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')'
*/

function validParentheses(parens){
  //TODO 
  var nOpen = 0;  //number of open parenthesis
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] === "(") nOpen++;  //increment nOpen by 1 for every open parenthesis
    else nOpen--;  //decrement by 1 for closed
    if (nOpen < 0) return false;  //if nOpen falls below 0, it means a closed parenthesis appears before an open and the string is invalid
  }
  return !nOpen;  //return opposite of nOpen as 0 is valid
}