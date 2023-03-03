import concat from "gulp-concat";

//js
import gulp from "gulp";
import babel from "gulp-babel";
import terser from "gulp-terser";

//Css
import cssnano from "cssnano"
import autoprefixer from "autoprefixer";
import postcss from "gulp-postcss";
//html
import htmlmin from "gulp-htmlmin";

//clean cache
import cache from "gulp-cache-bust";

//comprimir imagenes
import imagemin from "gulp-imagemin";
import {gifsicle, mozjpeg, optipng,svgo} from "gulp-imagemin";


const css = [
    cssnano(),
    autoprefixer()
]

//html
gulp.task("html-min", () => {
    return gulp
        .src("./src/*.html")
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(cache({
            type: "timestamp"
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
    .pipe(concat("index.js"))

    .pipe(terser())
    .pipe(gulp.dest("./public/js"))
    
})



// Optimizando Imagen
gulp.task("imgmin", () => {

    return gulp.src("./src/assets/images/*")

    .pipe(imagemin([
        gifsicle({interlaced: true}),
	    mozjpeg({quality: 75, progressive: true}),
	    optipng({optimizationLevel: 5}),
	    svgo({
		plugins: [
			{removeViewBox: true},
			{cleanupIDs: false}
		]
	})
    ]))

    .pipe(gulp.dest("./public/assets/images"))

})


gulp.task('default', () => {
    gulp.watch("./src/*.html", gulp.series("html-min"))
    gulp.watch("./src/css/*.css", gulp.series("styles"))
    gulp.watch("./src/js/*.js", gulp.series("babel"))

})