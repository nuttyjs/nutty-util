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

### util.is.{TYPE}(obj)

Returns `true` or `false` if the provided object is the specified type.

```javascript
//Check for undefined
util.is.undef(a); // --> true

//Check for boolean
util.is.boolean(true); // --> true
util.is.boolean(1); // --> false
util.is.boolean('false'); // --> false

//Check for string
util.is.string('my string'); // --> true
util.is.string(0.987); // --> false

//Check if string is in lower or upper case
util.is.lowerCase('my string'); // --> true
util.is.upperCase('MY string'); // --> false

//Check for number
util.is.num('0'); // --> false

//Check for integer
util.is.int(0.12); // --> false

//Check for null
util.is.null(null); // --> true
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
