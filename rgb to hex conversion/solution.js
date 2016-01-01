function rgb(r, g, b){
  // complete this function
  function doubleDigitHex(x) {
    //round r, g, b
    //if the converted digit is less than 10 in hex, add 0 to the front
    //return it on uppercase
    x = x < 0 ? 0 : x > 255 ? 255 : x
    return x.toString(16).length < 2 ? '0' + x.toString(16).toUpperCase() : x.toString(16).toUpperCase()
  }
  
  return doubleDigitHex(r) + doubleDigitHex(g) + doubleDigitHex(b) //convert r, g, b and concatenate
}