//Converts a value to boolean
module.exports.bool = function(value)
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

//Parse a number
module.exports.number = function(value){ return Number(value); };

//Parse a string
module.exports.string = function(value){ return String(value); };

//Parse an integer
module.exports.int = function(value){ return parseInt(value); };
