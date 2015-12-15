function pattern2(n){
	var output="";
	// Happy Coding ^_^
	var countBack = function(start, end) {
		//count a number backwards from start to end
		var out = "";
		while(start > end) {
			out += start.toString();
			start--;
		}
		return out;
	};

	end = 0;
	while(end < n) {
		//start from n to end, and increment end
		output += countBack(n, end);
		if (end !== n - 1) {
			//if it's not the last iteration, add \n
			output += "\n";
		}
		end++;
	}

	return output;
}