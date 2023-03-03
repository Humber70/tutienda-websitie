const concat = require("gulp-concat");

//js
const gulp = require("gulp");
const babel = require("gulp-babel");
const terser = require("gulp-terser");

//Css
const cssnano = require("cssnano")
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");

const htmlmin = require("gulp-htmlmin");

const css = [
    cssnano(),
    autoprefixer()
]
//html
gulp.task("html-min", () => {
    return gulp
        .src("./src/views/pages/**/*.html")
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest("./public"))
})

//css
gulp.task("styles", () => {

    return gulp
        .src("./src/css/*.css")
        .pipe(concat("style.css"))

        .pipe(postcss(css))
        .pipe(gulp.dest("./public/css"))
})


//JS
gulp.task('babel', () => {

    return gulp
    .src("./src/js/*.js") 
    .pipe(concat("script.js"))

    .pipe(terser())
    .pipe(gulp.dest("./public/js"))
    
})

gulp.task('default', () => {
    gulp.watch("./src/views/pages**/*.html", gulp.series("html-min"))
    gulp.watch("./src/css/*.css", gulp.series("styles"))
    gulp.watch("./src/js/*.js", gulp.series("babel"))

})