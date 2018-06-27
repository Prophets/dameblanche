const config = require('../../lib/configLoader');

if (!config.tasks.production.sizeReport) return;

const gulp = require('gulp');
const sizereport = require('gulp-sizereport');

gulp.task('size-report', () => {
    return gulp.src([config.root.dest + '/**/*', '*!rev-manifest.json'])
        .pipe(sizereport({
            gzip: true
        }));
});
