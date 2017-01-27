//Parse object
var parse = {};

//Converts a value to boolean
parse.bool = function(value)
{
  //Check for boolean
  if(typeof value === 'boolean'){ return value; }

  //Check for string
  if(typeof value === 'string'){ value = value.trim().toLowerCase(); }

  //Check the value
  if(value === true || value === 'true' || value === 1 || value === '1')
  {
    //Return true
    return true;
  }

  //Check for true sinonims
  if(value === 'on' || value === 'yes'){ return true; }

  //Default, return false
  return false;
};

//Converts to boolean alias
parse.boolean = function(value){ return parse.bool(value); };

//Parse a number
parse.number = function(value){ return Number(value); };

//Parse a number alias
parse.num = function(value){ return parse.number(value); };

//Parse a string
parse.string = function(value){ return String(value); };

//Parse a string alias
parse.str = function(value){ return parse.string(value); };

//Parse an integer
parse.int = function(value){ return parseInt(value); };

//Parse an integer alias
parse.integer = function(value){ return parse.int(value); };

//Exports to node
module.exports = parse;
