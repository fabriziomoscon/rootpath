var path = require('path');
var fs = require('fs');

/**
 * Make require calls relative to your project root, or to a specific folder
 * within your project (e.g. a "build" folder).
 *
 * @example e.g. require('rootpath')()
 * @example e.g. require('rootpath')({ isRelative: true, path: "build"})
 * @param  {String|Object} filePath - a given string becomes new absolute path
 *           require calls will be made relative to. If object with property
 *           filePath.isRelative === true, path becomes filePath.path.
 */
module.exports = function(filePath) {
  var orig, p, root, stat, newPath;
  if (typeof filePath === 'object'){
    if (!!filePath.isRelative){
        newPath = filePath.path;
        filePath = null;
    } else {
        filePath = filePath.path;
    }
  }
  p = filePath || path.join(__filename, '../../');
  stat = fs.lstatSync(p);
  if (stat.isSymbolicLink()) {
    p = fs.readlinkSync(p);
  }
  root = (!!newPath) ? path.join(path.dirname(p), "/", newPath, "/") : path.dirname(p);
  orig = process.env.NODE_PATH ? process.env.NODE_PATH : '';
  if (filePath) {
    process.env.NODE_PATH = path.join(root, '../libs') + path.delimiter + orig;
  } else {
    process.env.NODE_PATH = root + path.delimiter + orig;
  }
  return require('module')._initPaths();
};

