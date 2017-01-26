//Replace in a string
module.exports = function(str, obj)
{
  //Check the template object
  if(typeof obj !== 'object'){ return str; }

  //Read all the keys in the object
  for(var key in obj)
  {
    //Get the regular expression
    var reg = new RegExp('{' + key + '}', 'gi');

    //Replace in the string
    str = str.replace(reg, obj[key]);
  }

  //Return the formated path
  return str;
};
