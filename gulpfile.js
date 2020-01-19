const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const babel = require("gulp-babel");

const cssFiles = [
    './src/css/main.css',
    './src/css/media.css'
];


function styles(){
    return gulp.src(cssFiles)
    // Concat css files
    .pipe(concat('style.css'))
    //AutoPrefixes for css files
    .pipe(autoprefixer({
        cascade: false
    }))
    //Clean CSS
    .pipe(cleanCss({
        level: 2
    }))
    //Where to compile
    .pipe(gulp.dest('./build/css'))
}
function scripts(){
    return gulp.src('./src/js/*.js')

    .pipe(babel())
    //Concat JS files
    .pipe(concat('main.js'))
    //Minimize JS file
    // .pipe(uglify({
    //     toplevel: true
    // }))
    //Where to compile
    .pipe(gulp.dest('./build/js'))
}
gulp.task('sass-compile', function(){
    return gulp.src('./src/scss/*.scss')

    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./src/css/'))
})
gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', function(){
    gulp.watch('./src/scss/*.scss', gulp.series('sass-compile'))
    gulp.watch(cssFiles, gulp.series('styles'))
    gulp.watch('./src/js/*.js', gulp.series('scripts'))  
})