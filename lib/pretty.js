//Generates a string with a pretty json
var pretty = function(obj)
{
  //Build the pretty json string
  return JSON.stringify(obj, null, '  ');
};

//Print a pretty json to sdtout
pretty.stdout = function(obj)
{
  //Converts to pretty string and prints to stdout
  process.stdout(pretty(obj));
};

//pretty.stdout alias
pretty.console = function(obj){ return pretty.stdout(obj); };

//Print a pretty json to stderr
pretty.stderr = function(obj)
{
  //Converts to pretty string and prints to stderr
  process.strerr(pretty(obj));
};

//Exports to node
module.exports = pretty;
