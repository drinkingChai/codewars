function divisors(integer) {
  divisors = []
  for (var i = 2; i < integer; i++) {
    if (integer % i === 0) { divisors.push(i) }
  }
  return divisors.length > 0 ? divisors : '(' + integer + ') is a prime'
};