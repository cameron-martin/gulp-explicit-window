var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var explicitWindow = require('explicit-window');

const PLUGIN_NAME = 'gulp-explicit-window';

function gulpExplicitWindow() {
  return through.obj(function(file, enc, callback) {
    if (file.isNull()) {
      return callback(null, file);
    }
    if (file.isBuffer()) {
      file.contents = new Buffer(explicitWindow(file.contents.toString(enc)));
    }
    if (file.isStream()) {
      return callback(new PluginError(PLUGIN_NAME, 'Streams are not supported!'));
    }

    callback(null, file);

  });

}

module.exports = gulpExplicitWindow;
