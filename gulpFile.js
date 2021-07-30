const gulp = require('gulp');
const sass = require('gulp-sass');
const sourceMaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');

gulp.task('scss-compile', function () {
	return gulp.src('#src/scss/**/*.scss')
	.pipe(sourceMaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(sourceMaps.write('./'))
	.pipe(gulp.dest('dist/css/'))
})

gulp.task('watch', function () {
	gulp.watch('#src/scss/**/*.scss', gulp.series('scss-compile'))
})

