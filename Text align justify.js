/**
http://www.codewars.com/kata/537e18b6147aa838f600001b/train/javascript
 * @param {String} str - inital string
 * @param {Number} len - line length
 */
var justify = function(str, len) {
  // Your code goes here
  var final_string = [];
  var new_string = [];
  var new_string_len = 0;
  var split_str = str.split(" ");

  function gen_spacing(n) {
  	var spacing = ' ';
  	for (var i = 0; i < n - 1; i++) spacing += ' '
  	return spacing;
  }

  for (var i = 0; i < split_str.length; i++) {
  	new_string.push(split_str[i]);
  	new_string_len += split_str[i].length;
  	if ((i + 1) < split_str.length && len - new_string_len - split_str[i + 1].length < 0) {
  		final_string.push(new_string.join(gen_spacing(len - new_string_len)));
  		new_string = [];
  		new_string_len = 0;
  	} else if (i == split_str.length - 1) {
  		final_string.push(new_string.join(gen_spacing(len - new_string_len)));
  	}
  	/*
  	if (len - new_string_len > 0) {
  		var new_s = ;
  	}
  	*/
  }

  console.log(final_string.join("\n"));
  return final_string.join("\n");
};

var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor"
var len = 100;

justify(str, len);
/* no change */