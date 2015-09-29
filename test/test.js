var File = require('vinyl');
var gulpExplicitWindow = require('../');
var explicitWindow = require('explicit-window');
var es = require('event-stream');
var expect = require('chai').expect;
var assert = require('chai').assert;

describe('gulp-explicit-window', function() {
  describe('in stream mode', function() {
    it('should error', function(done) {
      var fakeFile = new File({
        contents: es.readArray(['var ', 'variable =', ' false;'])
      });

      var myPlugin = gulpExplicitWindow();

      myPlugin.once('data', function(file) {
        assert(false, 'Stream erroneously returned data');
        done();
      }).once('error', function(error) {
        assert(true, 'Stream returned error');
        done();
      });

      myPlugin.write(fakeFile);
    });
  });

  describe('in buffer mode', function() {
    it('should pass the file contents through explicit-window', function(done) {
      var input = 'var variable = false;';
      var expectedOutput = explicitWindow(input);

      var fakeFile = new File({
        contents: new Buffer(input, 'utf8')
      });

      var myPlugin = gulpExplicitWindow();

      myPlugin.write(fakeFile);

      myPlugin.once('data', function(file) {
        expect(file.isBuffer()).to.be.true;

        expect(file.contents.toString('utf8')).to.equal(expectedOutput);
        done();
      });

    });
  });
});
