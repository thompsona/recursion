// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //console.log(obj);
  if(Array.isArray(obj) === true) {
    var toreturn = "";
      var arry = [];
      for(var i = 0; i < obj.length; ++i) {
        if(!(typeof obj[i] === "function" || typeof obj[i] === "undefined")){
            if(typeof obj[i] === "object") {
              arry.push(stringifyJSON(obj[i]));
            }
            else {
              var value = typeof obj[i] === "string" ? '"' + obj[i] + '"' : obj[i];
              arry.push(value);
            }
        }
      }

      return "[" + arry.join() + "]";
  }

  // your code goes here
  if(obj != null && typeof obj === "object") {
      var toreturn = "";
      var arry = [];
      var keys = Object.keys(obj);
      for(var i = 0; i < keys.length; ++i) {
        if(!(typeof obj[keys[i]] === "function" || typeof obj[keys[i]] === "undefined")){
            if(typeof obj[keys[i]] === "object") {
              arry.push('"' + keys[i] + '":' + stringifyJSON(obj[keys[i]]));
            }
            else {
              var key = typeof keys[i] === "string" ? '"' + keys[i] + '"' : keys[i];
              var value = typeof obj[keys[i]] === "string" ? '"' + obj[keys[i]] + '"' : obj[keys[i]];
              arry.push(key + ":" + value);
            }
        }
      }

      return "{" + arry.join() + "}";
  }
  if(typeof obj === "string") {
    return '"' + obj + '"';
  }
  return "" + obj;


};
