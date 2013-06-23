rootpath
========

Little helper to make node.js require relative to your project root

Little helper to specify 

Require it in your project to set `process.env.NODE_PATH` as the project ROOT for all your `require`

install
-------

`npm install rootpath`


BEFORE
```JavaScript
// from $HOME_PROJECT/lib/math/
var myLib = require('../myLibrary');
var myUtils = require('../../utils/myUtils');
var myTest = require('../../test/myTest');
``` 

AFTER
```JavaScript
// from $HOME_PROJECT/lib/math/

require('rootpath')();

var myLib = require('lib/myLibrary');
var myUtils = require('utils/myUtils');
var myTest = require('test/myTest');
```

improvements
------------

If you find a better way to do this please fork and pull request