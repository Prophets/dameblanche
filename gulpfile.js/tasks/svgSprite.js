const config = require('../config');
if (!config.tasks.svgSprite) return;

const
    browserSync = require('browser-sync'),
    gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    svgstore = require('gulp-svgstore'),
    path = require('path'),
    svgSpriteTask = function() {
        const settings = {
            src: path.join(config.root.src, config.tasks.svgSprite.src, '/*.svg'),
            dest: path.join(config.root.dest, config.tasks.svgSprite.dest)
        };

        return gulp.src(settings.src)
            .pipe(imagemin())
            .pipe(svgstore())
            .pipe(gulp.dest(settings.dest))
            .pipe(browserSync.stream());
    };


gulp.task('svgSprite', svgSpriteTask);
module.exports = svgSpriteTask;
