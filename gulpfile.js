var gulp = require('gulp'),
    wiredep = require('wiredep').stream,
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    scss = require('gulp-sass');

//bower
gulp.task('bower', function () {
    gulp.src('./app/index.html')
        .pipe(wiredep({
            directory : "app/bower_components"
        }))
        .pipe(gulp.dest('./app'));
});

gulp.task('html', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function () {
    gulp.src('app/scss/*.scss')
        .pipe(scss())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest("app/css"));
});

gulp.task('watch', function () {
   gulp.watch('bower.json', ['bower']);
});

gulp.task('watch-css', function(){
    gulp.watch(['app/scss/main.scss', 'app/scss/check-in.scss', 'app/scss/main1.scss', 'app/scss/_media.scss'], ['css', 'html']);
});