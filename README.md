# nutty-util

[![npm](https://img.shields.io/npm/v/nutty-util.svg?style=flat-square)](https://www.npmjs.com/package/nutty-util)
[![npm](https://img.shields.io/npm/dt/nutty-util.svg?style=flat-square)](https://www.npmjs.com/package/nutty-util)
[![npm](https://img.shields.io/npm/l/nutty-log.svg?style=flat-square)](https://github.com/nuttyjs/nutty-log)

> Utilities for cli applications and nutty middlewares

## Installation

Run the following command on your project folder:

```
npm install --save nutty-util
```

## API

Include the library on your project:

```javascript
var util = require('nutty-util');
```

### new util.file(path, [ opt])

Returns an instance of a [floby object](https://github.com/jmjuanes/floby#file--new-flobypath--options).

```javascript
var file = new util.file('/path/to/my/file.txt', { encoding: 'utf8' });
```

### util.template(str, obj)

Compile a string template.

```javascript
var str = util.template('My car is {color}.', { color: 'blue' }); //--> My car is blue.
```


## License

[MIT LICENSE](./LICENSE) &copy; Josemi Juanes.
