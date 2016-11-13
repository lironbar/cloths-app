var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var rename = require('gulp-rename');

gulp.task('scripts', function() {
    gulp.src(['app/**/*.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('assets/'))
})

gulp.task('styles', function() {
    gulp.src(['style/**/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('assets/style/'))
})

gulp.task('html', function() {
    gulp.src("app/**/*.html")
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest('assets/templates/'))
})

gulp.task('default', function() {
    gulp.run('scripts', 'styles', 'html');

    gulp.watch('app/**/*.js', function(event) {
        gulp.run('scripts');
    })

    gulp.watch('style/**/*.scss', function(event) {
        gulp.run('styles');
    })

    gulp.watch('app/**/*.html', function(event) {
        gulp.run('html');
    })
})
