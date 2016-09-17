var jshint = require('gulp-jshint'),
var gulp = require('gulp'),
    img = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    htmlReplace = require('gulp-html-replace');
uglyfy = require('gulp-uglyfy'),
    usemin = require('gulp-usemin');
gulp.task('lint', function () {
    return gulp.src('public/js/**/*.js')//**Todo o arquivo js
        .pipe(jshint())//Pipe junta com jshint
        .pipe(jshint.reporter('default'));//Reportar o erro
});

gulp.task('build-min', function () {
    gulp.src('public/img/*')
        .pipe(imagemin())             // Pega na memória e guarda na pasta dist
        .pipe(gulp.dest('dist/img'));
});

gulp.task('build-js', function () {
    gulp.src(['public/vendor/angular.js',
        'public/vendor/angular-route/angular-route.js',
        'public/js/**/*.js'])
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('build-html', ['build-js'], function () {//build html espera o js.
    gulp.src('public/**/*.html')
        .pipe(htmlReplace({
            'js': 'js/main.js'
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('usemin', function () {
    return gulp.src('public/**/*.html')
        .pipe(usemin({
            js: [uglify]
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['lint', 'build-img', 'build-js', 'usemin']);