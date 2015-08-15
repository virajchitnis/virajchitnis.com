var gulp  = require('gulp');
var gutil = require('gulp-util');

// create a default task to run other tasks
gulp.task('default', ['copyFonts', 'copyImages', 'copyJS'], function() {});

// Copy fonts to public directory
gulp.task('copyFonts', function() {
    // copy any font files in src/ to public/
    gulp.src('src/**/*.{eot, svg, ttf, woff, woff2}').pipe(gulp.dest('public'));
});

// Copy images to public directory
gulp.task('copyImages', function() {
    // copy any image files in src/ to public/
    gulp.src('src/**/*.{png, jpg}').pipe(gulp.dest('public'));
});

// Copy images to public directory
gulp.task('copyJS', function() {
    // copy any javascript files in src/ to public/
    gulp.src('src/**/*.js').pipe(gulp.dest('public'));
});