function titleCase(title, minorWords) {
	minorWords = minorWords || false;	//set minorWords to false if the paramter is not defined
	function capitalize(word) {
		//captilze each word by converting the first element to uppercase and appending the rest of the string
		return word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
	}

	function titleize(word) {
		//check if the word is in minorWords by converting minorwords to an array of lower case words and if so, convert it to lower case, otherwise, capitalize it
		return minorWords && minorWords.split(" ").map(function(n) { return n.toLowerCase()}).indexOf(word.toLowerCase()) != -1 ? word.toLowerCase() : capitalize(word);
  	}
  	
  	//if the title's length is greater than 0, titleize it, if not, return it
  	return title.length > 0 ? title.split(" ").map(function(n, index) { return index == 0 ? capitalize(n) : titleize(n) }).join(" ") : title;
}