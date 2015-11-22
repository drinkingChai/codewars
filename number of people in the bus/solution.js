var number = function(busStops){
  // Good Luck!
  var num_people = 0;
  for (var i = 0; i < busStops.length; i++) {
    num_people += busStops[i][0] - busStops[i][1];
  }
  return num_people;
}