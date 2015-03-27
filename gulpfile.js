/* gulpfile.js */
var gulp = require('gulp'),
    gutil = require('gulp-util'),

    jshint = require('gulp-jshint'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),

    input = {
        'html': 'source/*.html',
        'sass': 'source/sass/**/*.scss',
        'javascript': 'source/javascript/**/*.js',
        'images': 'source/images/**/*'
    },

    output = {
        'html': 'dist',
        'stylesheets': 'dist/css',
        'javascript': 'dist/js',
        'images': 'dist/images'
    };

/* run javascript through jshint */
gulp.task('jshint', function() {
    return gulp.src(input.javascript)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

/* concat javascript files, minify if --type production */
gulp.task('build-js', function() {
    return gulp.src(input.javascript)
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        //only uglify if gulp is ran with '--type production'
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(output.javascript));
});

/* compile scss files */
gulp.task('build-css', function() {
    return gulp.src(input.sass)
        .pipe(sourcemaps.init())
        .pipe(compass({
            css: 'dist/css',
            sass: 'source/sass'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(output.stylesheets));
});

/* copy any html files to dist */
gulp.task('copy-html', function() {
    return gulp.src(input.html)
        .pipe(gulp.dest(output.html));
});

/* Watch these files for changes and run the task on update */
gulp.task('watch', function() {

    gulp.watch(input.javascript, ['jshint', 'build-js']);
    gulp.watch(input.sass, ['build-css']);
    gulp.watch(input.html, ['copy-html']);
    gulp.watch(input.images, ['images']);

    gulp.watch('source/**', notifyLiveReload);
});

/* copy images */
gulp.task('images', function() {

    return gulp.src(input.images)
        .pipe(sourcemaps.init())
        .pipe(gulp.dest(output.images));
});

 
gulp.task('express', function() {
  var express = require('express');
  var app = express();
  app.use(require('connect-livereload')({port: 4002}));
  app.use(express.static(__dirname + '/dist'));
  app.listen(4000);
});

var tinylr;
gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(4002);
});

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname + '/dist', event.path);
  console.log(fileName);
  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}


/* run the watch task when gulp is called without arguments */
gulp.task('default', ['jshint', 'build-js', 'build-css', 'copy-html', 'watch', 'images', 'express', 'livereload']);