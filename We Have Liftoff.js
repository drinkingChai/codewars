/*
You have an array of numbers 1 through 10 (JS: 1 through 10 or less). The array needs to be formatted correctly for the person reading the countdown of a spaceship launch.

Unfortunately, the person reading the countdown only knows how to read strings. After the array is sorted correctly make sure it's in a format he can understand.

Between each number should be a space and after the final number (1) should be the word 'liftoff!'

Example:

// Given
instructions = [8,1,10,2,7,9,6,3,4,5]
// Should return
"10 9 8 7 6 5 4 3 2 1 liftoff!"
// Given
instructions = [1,2,4,3,5]
// Should return
"5 4 3 2 1 liftoff!"
*/

function liftoff(instructions){
  //...
  instructions.sort(function(a, b) {
    if (a === 10 || a > b) return 1;  //identify 10 as greatest value
    if (a < b) return -1;
    return 0;
  }).reverse();  //reverse the returned string
  return instructions.reduce(function(a, b) {
    return a.toString() + ' ' + b.toString();
  }) + ' liftoff!';
}