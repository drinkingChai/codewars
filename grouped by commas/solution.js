function groupByCommas(n) {
  string_n = n.toString()	//convert n to string
  string_array = []	//create a new arry to push each digit into
  count = 0;	//keep count of when to place a comma
  for (var i = string_n.length - 1; i > 0; i--) {
  	//count backwards and push to the array
  	//count down to the first index to prevent adding comma at the end
  	string_array.push(string_n[i]);
  	count++;
  	if (count === 3) {
  		//when 3 digits have passed, add a comma and reset count
  		string_array.push(',');
  		count = 0;
  	}
  }
  string_array.push(string_n[0]);	//push in the first item to the array
  return string_array.reverse().join("")	//reverse the array and return it joined
}