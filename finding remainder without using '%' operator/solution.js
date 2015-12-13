//Keep anyone type of function declaration:

var remainder = function(D,d){
  /*Your Code Goes Here...*/
  if (d === 0) {
  	//if divisor is 0, return string 'NaN'
    return 'NaN';
  }
  while (D >= d) {
  	//while Dividend is greater than divisor,
  	//subtract from Dividend
     D -= d;
  }  
  return D;	//return remainder
}