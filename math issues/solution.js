Math.round = function(number) {
  //toFixed rounds
	return parseInt(number.toFixed(0), 10);
};

Math.ceil = function(number) {
  //if there is a decimal and it's remainder after multiplying by 10 is greater than 4 or 0, round as normal, else, round and add 1
	return number*10 % 10 >= 5 || number*10 % 10 == 0 ? parseInt(number.toFixed(0), 10) : parseInt(number.toFixed(0), 10) + 1;
};

Math.floor = function(number) {
  //if there is a decimal and it's remainder after multiplying by 10 is less than 5 or 0, round as normal, else, round and subtract 1
	return number*10 % 10 < 5 ? parseInt(number.toFixed(0), 10) : parseInt(number.toFixed(0), 10)  - 1;
};