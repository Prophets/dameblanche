const
    gulp = require('gulp'),
    config = require('../../config'),
    revReplace = require('gulp-rev-replace'),
    path = require('path');

// 5) Update asset references in HTML
gulp.task('update-html', () => {
    const manifest = gulp.src(path.join(config.root.dest, '/rev-manifest.json'));

    return gulp.src(path.join(config.root.dest, config.tasks.templates.dest, '/**/*.html'))
        .pipe(revReplace({
            manifest: manifest
        }))
        .pipe(gulp.dest(path.join(config.root.dest, config.tasks.templates.dest)));
});
