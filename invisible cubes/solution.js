function notVisibleCubes(n) {
  if (n===1) { return 0; }
  return Math.pow(n-2, 3);
}