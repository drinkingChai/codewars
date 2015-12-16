function collatz(n){
  //your code here
  count = 1;  //start count at 1 so that n can be counted as first item
  while(n !== 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n = n * 3 + 1;
    }
    count++;
  }
  return count;
}