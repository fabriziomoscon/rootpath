rootpath
========

Little helper to specify `process.env.NODE_PATH`

Require it in your project to set a common project ROOT for your requires

install
-------

`npm install rootpath`


BEFORE
```
// from $HOME_PROJECT/lib/math/
myLib = require('../myLibrary');
myUtils = require('../../utils/myUtils');
myTest = require('../../test/myTest');
``` 

AFTER
```
// from $HOME_PROJECT/lib/math/

require('rootpath')();

myLib = require('lib/myLibrary');
myUtils = require('utils/myUtils');
myTest = require('test/myTest');
```

improvements
------------

If you find a better way to do this please fork and pull request