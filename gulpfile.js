const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const obfuscate = require('gulp-obfuscate');

function compilaSass() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/styles'));
}

function comprimeImg() {
    return gulp.src('./src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
}

function comprimeJs() {
    return gulp.src('./src/scripts/*.js')
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/scripts'))
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImg));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(comprimeJs));
}