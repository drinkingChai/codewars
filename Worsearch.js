/*
Create a function wordsearch(w) that searches to see whether a word w is present in the given text variable. Please note it has to be a full word

Update: You must not modify the text variable!

Example:
Text - "what makes the desert beautiful, said the little prince is that somewhere it hides a well";

wordSearch(Text,"prince")--> true
wordSearch(Text,"beautiful")--> true
wordSearch(Text,"clown")--> false
wordSearch(Text,"yellow")--> false
wordSearch(Text,"akes the")--> false
*/
function wordSearch(word, text){
  var splitText = text.split(" ");
  splitText = splitText.map(function(n) {
    for (var i = 0; i < ".,:;".length; i++) {
      n = n.replace(".,:;"[i], "");
    }
    return n;
  })
  
  for (var i = 0; i < splitText.length; i++) {
    if (splitText[i].indexOf(word) != -1) return true;
  }
  return false;
}