//Import utils
var util = require('../index.js');

//Files list
var files = { config: './config.json', logs: './project.logs' };

//Generate a new project object
var project = util.project('/path/to/my/{id}', files);

//Generate a new project structure
var test = project({ id: 'test' });

//Display in console
console.log(test);

// Output:
// {
//   config: '/path/to/my/test/config.json',
//   logs: '/path/to/my/test/project.logs'
// }
