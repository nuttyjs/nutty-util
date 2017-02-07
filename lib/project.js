//Import dependencies
var path = require('path');

//Import libs
var template = require('./template.js');

//Exports to node
module.exports = function(p, files)
{
  //Return the new function
  return function(args)
  {
    //Check for undefined object
    if(typeof args !== 'object'){ var args = {}; }

    //Get the new path
    var new_path = template(p, args);

    //Get the new object
    var obj = {};

    //Read all the files
    for(var key in files)
    {
      //Add the file to the object
      obj[key] = path.resolve(new_path, files[key]);
    }

    //Return the files list
    return obj;
  };
};
