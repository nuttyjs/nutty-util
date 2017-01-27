//Initialize the is object
var is = {};

//Check if a variables is undefined
is.undef = function(value){ return typeof value === 'undefined'; };

//Is undefined alias
is.undefined = function(value){ return is.undef(value); };

//Check if a variable is a string
is.str = function(value){ return typeof value === 'string'; };

//Is string alias
is.string = function(value){ return is.str(value); };

//Is in lower case
is.lowerCase = function(value){ return value.toLowerCase() === value; };

//Is in upper case
is.upperCase = function(value){ return value.toUpperCase() === value; }; 

//Check if a variable is a function
is.fun = function(value){ return typeof value === 'function'; };

//Is function alias
is.function = function(value){ return is.fun(value); };

//Check if a variable is null
is.null = function(value){ return value === null; };

//Check if a variable is a boolean
is.bool = function(value){ return typeof value === 'boolean'; };

//Is boolean alias
is.boolean = function(value){ return is.bool(value); };

//Check if a variable is a number
is.num = function(value){ return typeof value === 'number'; };

//Check if is a number
is.number = function(value){ return is.num(value); };

//Check if is integer
is.int = function(value){ return parseInt(value) === value; };

//Is integer alias
is.integer = function(value){ return is.int(value); };

//Exports to node
module.exports = is;
