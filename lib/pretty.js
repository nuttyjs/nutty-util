//Print a pretty json to a stream
var pretty = function(obj, stream)
{
  //Check for undefined object
  if(typeof obj === 'undefined'){ return; }
  //Check the stream object
  if(typeof stream === 'undefined'){ var stream = process.stdout; }

  //Convert the json to string
  var str = JSON.stringify(obj, null, '  ');

  //Write the object
  stream.write(str);
};

//Print to stdout stream
pretty.out = function(obj){ return pretty(obj, process.stdout); };

//Print to stderr stream
pretty.err = function(obj){ return pretty(obj, process.stderr); };

//Exports to node
module.exports = pretty;
