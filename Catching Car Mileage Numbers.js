/*
"7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?
Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).

It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.

Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.

"Interesting" Numbers

Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

Any digit followed by all zeros: 100, 90000
Every digit is the same number: 1111
The digits are sequential, incementing†: 1234
The digits are sequential, decrementing‡: 4321
The digits are a palindrome: 1221 or 73837
The digits match one of the values in the awesomePhrases array
† For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.
So, you should expect these inputs and outputs:

// "boring" numbers
isInteresting(3, [1337, 256]);    // 0
isInteresting(3236, [1337, 256]); // 0

// progress as we near an "interesting" number
isInteresting(11207, []); // 0
isInteresting(11208, []); // 0
isInteresting(11209, []); // 1
isInteresting(11210, []); // 1
isInteresting(11211, []); // 2

// nearing a provided "awesome phrase"
isInteresting(1335, [1337, 256]); // 1
isInteresting(1336, [1337, 256]); // 1
isInteresting(1337, [1337, 256]); // 2
Error Checking

A number is only interesting if it is greater than 99!
Input will always be an integer greater than 0, and less than 1,000,000,000.
The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers spell funny words...)
You should only ever output 0, 1, or 2.
*/
function isInteresting(number, awesomePhrases) {
  // Go to town!
  function isIncrementing(n) {
    var nSplit = n.toString().split("").map(function(n) { return parseInt(n) });
    var current = nSplit[0];
    for (var i = 1; i < nSplit.length; i++) {
      if (nSplit[i] == 0 && current == 9 && i == nSplit.length - 1) return true;
      if (nSplit[i] != current + 1) return false;
      current = nSplit[i];
    }
    return true;
  }
  
  function isDecrementing(n) {
    var nSplit = n.toString().split("").map(function(n) { return parseInt(n) });
    var current = nSplit[0];
    for (var i = 1; i < nSplit.length; i++) {
      if (nSplit[i] == 0 && current == 1 && i == nSplit.length - 1) return true;
      if (nSplit[i] != current - 1) return false;
      current = nSplit[i];
    }
    return true;
  }
  
  function isPalindrome(n) {
    var nSplit = n.toString().split("").map(function(n) { return parseInt(n) });
    for (var i = 0; i < Math.floor(nSplit.length / 2);  i++) {
      if (nSplit[i] != nSplit[nSplit.length - i - 1]) return false;
    }
    return true;
  }
  
  function isAllZeroes(n) {
    return n.toString().split("0").length == n.toString().length
  }
  
  function isAllSame(n) {
    var nSplit = n.toString().split("").map(function(n) { return parseInt(n) });
    for(var i = 0; i < nSplit.length; i++) {
      if (nSplit[i] != nSplit[0]) return false;
    }
    return true;
  }
  
  function isAwesome(n) {
    var awesome = false;
    awesomePhrases.forEach(function(m) { awesome = awesome || n == m });
    return awesome;
  }
    
  var conditions = [isAllSame, isIncrementing, isDecrementing, isAllZeroes, isPalindrome, isAwesome];
  
  if (number < 98) return 0;
  for (var i = 0; i < conditions.length; i++) {
    console.log(conditions[i](number), conditions[i].name);
    if (number >= 100 && conditions[i](number)) return 2;
    if (conditions[i](number + 2) || conditions[i](number + 1)) return 1;
  }
  return 0;
}