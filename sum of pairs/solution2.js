var sum_pairs=function(ints, s) {
    //your code here
    //recursive solution
    count = 0;  //count keeps track of the index in relation to ints
    output = undefined;

    function countBack(arr) {
        //count the array from left to right
        if (arr.length == 0) {
            //if length is 0, return
            return;
        } else {
            diff_index = arr.slice(1, arr.length).indexOf(s - arr[0]) //get index of the difference in ints from that point onward

            if (diff_index >= 0 && (output == undefined || diff_index + count + 1 < output[1])) {
                //if difference exists and if the out is undefined or the index is less than the current index of the 2nd number, update output
                output = [count, diff_index + count + 1]
            }
            count++;    //increment count
            return countBack(arr.slice(1, arr.length)); //count back the next set
        }
    }

    countBack(ints);
    //if the array is undefined, return undefined, otherwise, return the items in s with index of return_array
    return output == undefined ? output : output.map(function(n) { return ints[n] })
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