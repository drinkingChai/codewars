function humanReadable(seconds) {
  // TODO
  function zeroPadded(n) {
  	//return zero padded number
    return n.toString().length < 2 ? '0' + n.toString() : n.toString();
  }

  //zero pad each 
  var hours = zeroPadded(Math.floor(seconds / 3600))	//get total number of hours, 60*60
  var minutes = zeroPadded(Math.floor((seconds % 3600) / 60)) //divide the remainder from dividing by hours by 60 
  var seconds = zeroPadded(seconds % 60) //get remainder of seconds by dividing by 60
  return hours + ':' + minutes + ':' + seconds;	//return concatenated string with colons
}