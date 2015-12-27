function makePalindrome(text){
  // ...
  function isPaldindrome(t) {
    for (var i = 0; i < t.length / 2; i++) {
      if (t[i] !== t[t.length-1-i]) {
        return false;
      }
    }
    return true;
  }

  function findAll(t) {
    

  }
  
  function createPalindrome(t) {
    var palArray = [];
    for (var i = 0; i < t.length; i++) {
      var joinString = t + t.split("").splice(0,i).join("");
      console.log(joinString);
      if (isPaldindrome(t + t.split("").splice(0,i).join(""))) {
        palArray.push(joinString);
      }
    }

    palArray.sort(function(a, b) {
      if (a.length > b.length) {
        return 1;
      }
      if (a.length < b.length) {
        return -1;
      }
      return 0;
    })

    console.log(palArray);
  }

  console.log(createPalindrome('abc'));
}

makePalindrome('test');