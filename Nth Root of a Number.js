function root(x, n) {
  // TODO: Return nth root of x
  var r = 1;
  while (true) {
    if (Math.pow(r, n) === x) {
      return r;
    }
    r++;
  }
}