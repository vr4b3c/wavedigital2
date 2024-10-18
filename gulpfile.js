const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

const cleanCSS = require('gulp-clean-css');
const del = require("del");

//compile scss to css
function style() {
    //1. where is my scss files
    return gulp.src('./public/assets/scss/main.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('./public/assets/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifyCSS())
        .pipe(browserSync.stream())
        .pipe(gulp.dest('./public/assets/css'));
}

function styleAdmin(){
  return gulp.src('./public/assets/admin/scss/theme.scss')
      .pipe(sass())
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
      .pipe(gulp.dest('./public/assets/css'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(minifyCSS())
      .pipe(browserSync.stream())
      .pipe(gulp.dest('./public/assets/css'));
}

function watch() {
    browserSync.init({
        proxy: {
            target: '127.0.0.1:443',
            ws: true,
            proxyOptions: { changeOrigin: false },
        },
    });
    gulp.watch('./public/assets/scss/**/*.scss', style);
    gulp.watch('./templates/**/**/**/*.html.twig').on('change', browserSync.reload);
    gulp.watch('./public/assets/js/**/*.js').on('change', browserSync.reload);
}

function deletecss() {
    return del('./public/assets/css/main-style.min.css');
}

function minifyjs() {
    return gulp.src('./public/assets/js/**/*.js')
                .pipe(concat('app.min.js'))
                .pipe(uglify())
                .pipe(gulp.dest('./public/assets/js'))
}

function deletejs() {
    return del('./public/assets/js/app.min.js');
}

exports.style = style;
exports.styleadmin = styleAdmin;
exports.watch = watch;
exports.deletecss = deletecss;
exports.minifyjs = minifyjs;
exports.deletejs = deletejs;