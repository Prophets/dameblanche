const config = require('../../lib/configLoader');
if (!config.tasks.svgsprite) return;

const
    browserSync = require('browser-sync'),
    gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    svgstore = require('gulp-svgstore'),
    customNotifier = require('../../lib/customNotifier'),
    path = require('path'),
    svgSpriteTask = () => {
        const settings = {
            src: path.join(config.root.src, config.tasks.svgsprite.src, '/*.svg'),
            dest: path.join(config.root.dest, config.tasks.svgsprite.dest)
        };

        return gulp.src(settings.src)
            .pipe(imagemin())
            .pipe(svgstore())
            .pipe(gulp.dest(settings.dest))
            .on('end', browserSync.reload)
            .pipe(customNotifier({ title: 'SVG sprite compiled' }));
    };


gulp.task('svgsprite', svgSpriteTask);
module.exports = svgSpriteTask;
