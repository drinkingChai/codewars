function rgb(r, g, b){
  // complete this function
  function doubleDigitHex(x) {
  	//if the converted digit is less than 10 in hex, add 0 to the front
  	//return it on uppercase
    return x.toString(16).length < 2 ? '0' + x.toString(16).toUpperCase() : x.toString(16).toUpperCase()
  }
  
  //round r, g, b
  r = r < 0 ? 0 : r > 255 ? 255 : r
  g = g < 0 ? 0 : g > 255 ? 255 : g
  b = b < 0 ? 0 : b > 255 ? 255 : b

  return doubleDigitHex(r) + doubleDigitHex(g) + doubleDigitHex(b) //convert r, g, b and concatenate
}