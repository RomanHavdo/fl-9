const gulp = require('gulp')
const connect = require('gulp-connect')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify-es').default
const sourcemaps = require('gulp-sourcemaps')
const cleanCSS = require('gulp-clean-css')
const sass = require('gulp-sass')
const del = require('del')
const rename = require('gulp-rename')
const runSequence = require('run-sequence')
const jshint = require('gulp-jshint')
const stylish = require('jshint-stylish')
const watch = require('gulp-watch')

gulp.task('connect', function () {
    connect.server({
        port: 8080
    });
});

gulp.task('css-min', function () {
    return gulp.src('./src/sass/*.scss')
        .pipe(sass({
            outputStyle: 'nested',
            onError: console.error.bind(console, 'Sass error:')
        }))
        .pipe(concat('style.min.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('src/folder/css'))
});

gulp.task('js-min', function () {
    return gulp.src(['node_modules/moment/min/moment.min.js', 'src/js/*.js'])
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('src/folder/js'))
});

gulp.task('html', function () {
    gulp.src('src/*.html')
        .pipe(gulp.dest('./src'))
        .pipe(connect.reload());
});

gulp.task('livereload', function () {
    gulp.src(['src/folder/js/*.js', 'src/folder/css/*.css'])
        .pipe(watch(['src/folder/js/*.js', 'src/folder/css/*.css']))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/sass/*.scss', ['css-source-map']);
    gulp.watch('src/js/*.js', ['js-source-map']);
});

gulp.task('default', function () {
    runSequence('build', 'connect', 'livereload', 'watch');
});
gulp.task('css-source-map', function () {
    return gulp.src('src/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'nested',
            onError: console.error.bind(console, 'Sass error:')
        }))
        .pipe(concat('style.min.css'))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/folder/css'))
});

gulp.task('js-source-map', function () {
    return gulp.src(['node_modules/moment/min/moment.min.js', 'src/js/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('src/folder/js'))
});

gulp.task('clean', () => del(['dist', './src/folder']));

gulp.task('build', function () {
    runSequence('clean', ['js-source-map', 'css-source-map'])
});


gulp.task('copy-index', function () {
    return gulp.src('src/app.html')
        .pipe(rename("index.html"))
        .pipe(gulp.dest("src/folder/"));
});

gulp.task('move-to-dist', function () {
    return gulp.src([
        './src/folder/css/*.css',
        './src/folder/js/*min.js',
        './src/folder/index.html'
    ])
        .pipe(gulp.dest('dist'));
});

gulp.task('build-prod', function () {
    runSequence('clean', ['js-min', 'css-min', 'copy-index'], 'move-to-dist');
});

gulp.task('lint', function () {
    return gulp.src(['src/js/*.js', '!src/js/*.min.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});