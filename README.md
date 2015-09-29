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
