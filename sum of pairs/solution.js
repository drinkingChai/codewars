var sum_pairs=function(ints, s) {
    //your code here
    var return_array = undefined;
    for (var i = 0; i < ints.length; i++) {
    	diff_index = s - ints[i];	//diff_index is the number to seek to complete s
    	sliced = ints.slice(i + 1, ints.length);	//seek through the rest of the array
    	if (sliced.indexOf(diff_index) != -1) {
    		//if diff_index is found and the return_array exists,
    		//check it's second index to see if it is less
    		//if so, update the array
    		//otherwise if the array is undefined, update it
    		if (return_array && sliced.indexOf(diff_index) + i + 1 < return_array[1]) {
    			return_array = [i, sliced.indexOf(diff_index) + i + 1];
    		} else {
    			return_array = return_array || [i, sliced.indexOf(diff_index) + i + 1];
    		}
    	}
    }

    //if the array is undefined, return undefined, otherwise, return the items in s with index of return_array
    return return_array == undefined ? return_array : return_array.map(function(n) { return ints[n]});
}

l1= [1, 4, 8, 7, 3, 15];
l2= [1, -2, 3, 0, -6, 1];
l3= [20, -13, 40];
l4= [1, 2, 3, 4, 1, 0];
l5= [10, 5, 2, 3, 7, 5];
l6= [4, -2, 3, 3, 4];
l7= [0, 2, 0];
l8= [5, 9, 13, -3];

console.log(sum_pairs(l5, 10))