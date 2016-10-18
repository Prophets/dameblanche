const config = require('../config');
if (!config.tasks.templates) return;

const
    browserSync = require('browser-sync'),
    data = require('gulp-data'),
    gulp = require('gulp'),
    gulpif = require('gulp-if'),
    handleErrors = require('../lib/handleErrors'),
    customNotifier = require('../lib/customNotifier'),
    htmlmin = require('gulp-htmlmin'),
    path = require('path'),
    render = require('gulp-nunjucks-render'),
    fs = require('fs'),

    exclude = path.normalize('!**/{' + config.tasks.templates.excludeFolders.join(',') + '}/**'),

    paths = {
        src: [path.join(config.root.src, config.tasks.templates.src, '/**/*.{' + config.tasks.templates.extensions + '}'), exclude],
        dest: path.join(config.root.dest, config.tasks.templates.dest)
    },

    getData = () => {
        const dataPath = path.resolve(config.root.src, config.tasks.templates.src, config.tasks.templates.dataFile);
        return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    },

    templatesTask = () => {
        return gulp.src(paths.src)
            .pipe(data(getData))
            .on('error', handleErrors)
            .pipe(render({
                path: [path.join(config.root.src, config.tasks.templates.src)],
                envOptions: {
                    watch: false
                },
                manageEnv(env) {
                    env.addGlobal('imagePath', config.tasks.images.dest);
                }
            }))
            .on('error', handleErrors)
            .pipe(gulpif(global.production, htmlmin(config.tasks.templates.htmlmin)))
            .pipe(gulp.dest(paths.dest))
            .on('end', browserSync.reload)
            .pipe(customNotifier({ title: 'Template compiled' }));
    };

gulp.task('templates', templatesTask);
module.exports = templatesTask;
