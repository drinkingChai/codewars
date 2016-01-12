/*
Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If method gets number, it should return string.

Examples:

//  returns test_controller
toUnderscore('TestController');

// returns movies_and_books
toUnderscore('MoviesAndBooks');

// returns app7_test
toUnderscore('App7Test');

// returns "1"
toUnderscore(1);
*/

function toUnderscore(string) {
  // TODO: complete
  //check if length of toString of string is 1, then return string.toString()
  //otherwise, split the string and use map to check if it's the equivalent of uppercase
  //and is not a number. If so, check if the index is 0. If so, return it in lower case.
  //Otherwise, return it with underscore appended. Otherwise, return n
  return string.toString().length === 1 ? string.toString() : string.split('').map(function(n, i) {
    return n === n.toUpperCase() && isNaN(n) ? i === 0 ? n.toLowerCase(): '_' + n.toLowerCase() : n;
  }).join('');
}