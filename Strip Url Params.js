/*
Complete the method so that it does the following:

Removes any duplicate query string parameters from the url
Removes any query string parameters specified within the 2nd argument (optional array)
Examples:

stripUrlParams('www.codewars.com?a=1&b=2&a=2') // returns 'www.codewars.com?a=1&b=2'
stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) // returns 'www.codewars.com?a=1'
stripUrlParams('www.codewars.com', ['b']) // returns 'www.codewars.com'
*/
function stripUrlParams(url, paramsToStrip){
  // complete me
  var hostName = url.slice(0, url.indexOf('?') + 1);  //get the host name
  var queryStrings = url.slice(url.indexOf('?') + 1).split('&');  //get the parameters
  var queryParams = paramsToStrip || [];  //use the parameters to strip. Otherwise use a blank array
  var finalParams = [];  //final parameters to add
 
  queryStrings.forEach(function(n) {
    var queryParam = n.split('=')[0];  //get the parameter name
    if (queryParams.indexOf(queryParam) == -1) {
      //if the parameter doesn't exist, push it to queryParameters and push the entire expression into finalParams
      queryParams.push(queryParam);
      finalParams.push(n);
    }
  });
 
  return hostName +  finalParams.join('&');  //join the hostname with the final parameters.
}