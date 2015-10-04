# gulp-explicit-window

A gulp plugin for [explicit-window](https://github.com/cameron-martin/explicit-window).

## Usage

```javascript
var gulp = require('gulp');
var explicitWindow = require('gulp-explicit-window');

gulp.task('build-js', function() {
  return gulp.src('src/js/*.js')
    .pipe(explicitWindow())
    .pipe(gulp.dest('dist/js'));
});
```

## TODO
* Support sourcemaps. See https://github.com/floridoo/vinyl-sourcemaps-apply, https://github.com/floridoo/gulp-sourcemaps, https://github.com/benjamn/recast#source-maps and https://github.com/sindresorhus/gulp-regenerator/issues/2 for an implementation example.
