var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var mocha = require('gulp-mocha');

var files = ['lib/**/*.js'];
var tests = ['test/**/*.js'];
var alljs = files.concat(tests);


gulp.task('default', function () {
    return gulp.src(files)
        .pipe(mocha({reporter: 'nyan'}))
        .pipe(babel({presets: ['es2015']}))
        .pipe(concat('lib-crypto.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));        
});



gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(files,['default']).on('change', function(file) {
        livereload.changed(file.path);
        gutil.log(gutil.colors.yellow('JS changed' + ' (' + file.path + ')'));
    });
});


var testmocha = function() {
return gulp.src(tests).pipe(new mocha({
    reporter: 'nyan'
}));
};

gulp.task('test', testmocha);

gulp.task('watch:test', function() {
  livereload.listen();
  gulp.watch(files,['test']).on('change', function(file) {
        livereload.changed(file.path);
        gutil.log(gutil.colors.yellow('JS changed' + ' (' + file.path + ')'));
    });
});