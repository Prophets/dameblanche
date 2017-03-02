const config = require('../config');
if (!config.tasks.css) return;

const
    gulp = require('gulp'),
    gulpif = require('gulp-if'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    handleErrors = require('../lib/handleErrors'),
    customNotifier = require('../lib/customNotifier'),
    autoprefixer = require('gulp-autoprefixer'),
    path = require('path'),
    cssnano = require('gulp-cssnano'),
    paths = {
        src: path.join(config.root.src, config.tasks.css.src, '/**/*.{' + config.tasks.css.extensions + '}'),
        dest: path.join(config.root.dest, config.tasks.css.dest)
    },
    cssTask = () => {
        return gulp.src(paths.src)
            .pipe(gulpif(!global.production, sourcemaps.init()))
            .pipe(sass(config.tasks.css.sass))
            .on('error', handleErrors)
            .pipe(autoprefixer())
            .pipe(gulpif(global.production, cssnano({
                autoprefixer: false
            })))
            .pipe(gulpif(!global.production, sourcemaps.write()))
            .pipe(gulp.dest(paths.dest))
            .pipe(customNotifier({ title: 'CSS compiled' }))
            .pipe(browserSync.stream());
    };

gulp.task('css', cssTask);
module.exports = cssTask;
