function meters(x) {
	// todo: return value scaled to correct unit
	// e.g. 5000 becomes "5km", 1 becomes "1m"
	pow_to_suffix = {
		//object with power as key and suffix as value
		0: "m",
		3: "km",
		6: "Mm",
		9: "Gm",
		12: "Tm",
		15: "Pm",
		18: "Em",
		21: "Zm",
		24: "Ym"
	}

	var pow = 0;	//set starting power to 0
	for (key in pow_to_suffix) {
		pow = key;	//set power to the key
		if (x / Math.pow(10, parseInt(key) + 3) < 1) break;	//if dividing x by the next power of 10 results in the quotient being less than 1, break
	}

	x = x / Math.pow(10, pow)	//divide by the power which will result in the quotient being above 1

	return x + pow_to_suffix[pow]	//add the suffix
}