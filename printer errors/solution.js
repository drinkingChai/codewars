function printerError(s) {
    // your code
    var errors_chars = [];
    var errors = 0;
    for (var i=110 ; i<=122 ; i++) {
      //110 is character code for 'n'
      //122 is character code for 'z'
      //loops from 110 to 122 and pushes the character into error_chars array
      errors_chars.push(String.fromCharCode(i));
    }
    
    for (var i = 0; i < s.length; i++) {
      if (errors_chars.indexOf(s[i]) != -1) {
        //checks if char in s is in error_chars
        errors += 1;
      }
    }
    
    //covert errors and s.length to string
    return errors.toString() + "/" + s.length.toString();
}