const
    gulp = require('gulp'),
    config = require('../../lib/configLoader'),
    revReplace = require('gulp-rev-replace'),
    path = require('path');

// 5) Update asset references in HTML
gulp.task('update-html', () => {
    const
        manifest = gulp.src(path.join(config.root.dest, '/rev-manifest.json')),
        htmlDest = config.tasks.templates ? config.tasks.templates.dest : './';

    return gulp.src(path.join(config.root.dest, htmlDest, '/**/*.html'))
        .pipe(revReplace({
            manifest: manifest
        }))
        .pipe(gulp.dest(path.join(config.root.dest, htmlDest)));
});
