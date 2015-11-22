var number = function(busStops){
  var num_people = 0;
  for (var i = 0; i < busStops.length; i++) {
  	/*add the number of people getting on and 
  	remove the number of people getting off
  	at each stop*/
    num_people += busStops[i][0] - busStops[i][1];
  }
  return num_people;
}