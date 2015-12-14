function gap(num) {
    //code me
    var toBin = num.toString(2);  //convert to binary
    var zeroTotal = 0;  //total number of zeros
    var zeroCount = 0;  //current number of zero
    for (n in toBin) {
      if (toBin[n] === '0') {
        //if zero is found, start counting zeroes
        zeroCount++;
      } else {
        //if not, compare current number of zeroes to zeroTotal
        zeroTotal = Math.max(zeroTotal, zeroCount);  //set zeroTotal to max of the two
        zeroCount = 0;  //reset zeroCount
      }
    }
    return zeroTotal;  //return final count
}