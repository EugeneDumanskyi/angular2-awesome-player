'use strict';
 
var gulp = require('gulp'),
    del = require('del'),
    typescript = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    rootTscConfig = require('./tsconfig.json'),
    srcTscConfig = require('./src/tsconfig.json'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    inject = require('gulp-inject-string');

gulp.task('clean:src', function () {
    return del('./dist/*');
});

gulp.task('clean:app', function () {
    return del(['./app/**/*.js', './app/**/*.map']);
});

gulp.task('compile:app', function () {
    return gulp
            .src('./app/**/*.ts')
            .pipe(sourcemaps.init())
            .pipe(typescript(rootTscConfig.compilerOptions))
            .pipe(sourcemaps.write('.'))
            .pipe(inject.replace('../src/', '../dist/'))
            .pipe(gulp.dest('./app'));
});

gulp.task('compile:src', function () {
    return gulp
            .src('./src/*.ts')
            .pipe(sourcemaps.init())
            .pipe(typescript(srcTscConfig.compilerOptions))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('./dist'));
});

//gulp.task('compile', ['clean:src', 'compile:src', 'clean:app', 'compile:app']);
gulp.task('compile', function () {
    runSequence('clean:src', 'compile:src', 'clean:app', 'compile:app');
});

gulp.task('src:watch', function () {
    gulp.watch('./src/*.ts', ['compile:src']);
});

gulp.task('template', function () {
    return gulp
            .src('./src/*.component.html')
            .pipe(inject.wrap('export var template = `\n', '`;'))
            .pipe(rename(function (path) {
                path.basename += ".template";
                path.extname = ".ts"
            }))
            .pipe(gulp.dest('./src'));
});

gulp.task('template:watch', function () {
    gulp.watch('./src/*.component.html', ['template']);
});

gulp.task('sass', function () {
    return gulp
            .src('./src/*.component.scss')
            .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
            .pipe(inject.wrap('export var styles = `\n', '`;'))
            .pipe(rename(function (path) {
              path.basename += ".styles";
              path.extname = ".ts"
            }))
            .pipe(gulp.dest('./src'));
});
 
gulp.task('sass:watch', function () {
    return gulp.watch('./src/*.component', ['sass']);
});

gulp.task('watch', ['sass:watch', 'template:watch', 'src:watch']);

gulp.task('build', function () {
    runSequence('sass', 'template', 'compile');
});

gulp.task('default', ['build', 'watch']);
