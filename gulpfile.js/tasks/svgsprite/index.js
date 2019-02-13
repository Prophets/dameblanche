const config = require('../../lib/configLoader');

if (!config.tasks.svgsprite) return;

const browserSync = require('browser-sync');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const svgstore = require('gulp-svgstore');
const path = require('path');
const customNotifier = require('../../lib/customNotifier');

const svgSpriteTask = () => {
    const paths = {
        src: path.join(config.root.src, config.tasks.svgsprite.src, '/*.svg'),
        dest: path.join(config.root.dest, config.tasks.svgsprite.dest)
    };

    return gulp.src(paths.src)
        .pipe(imagemin([
            imagemin.svgo({
                plugins: [{
                    removeViewBox: false
                }]
            })
        ]))
        .pipe(svgstore())
        .pipe(gulp.dest(paths.dest))
        .on('end', browserSync.reload)
        .pipe(customNotifier({ title: 'SVG sprite compiled' }));
};

module.exports = svgSpriteTask;
