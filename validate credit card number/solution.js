function validate(n){
  //split array by converting it into string then converting the string to array
  //then mapping each to n_array after converting them back to int
	n_array = n.toString().split("").map(function(n) { return parseInt(n) });  
	total = 0;  //total for step 4

	function addToTotal(element, index, array) {
    //if the length is even and the index is even or the length or
    //if the length is odd and the index is odd
    //double the element
    	total += array.length % 2 == 0 && index % 2 == 0 ? (element*2 > 9 ? element*2-9 : element*2) : array.length % 2 != 0 && index %2 != 0 ? (element*2 > 9 ? element*2-9 : element*2) : element
  	}
	n_array.forEach(addToTotal);

	return total % 10 == 0 ? true : false
}