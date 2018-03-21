const config = require('../../lib/configLoader');

if (!config.tasks.nunjucks) return;

const browserSync = require('browser-sync');
const data = require('gulp-data');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const htmlmin = require('gulp-htmlmin');
const render = require('gulp-nunjucks-render');
const path = require('path');
const fs = require('fs');
const handleErrors = require('../../lib/handleErrors');
const customNotifier = require('../../lib/customNotifier');

const exclude = path.normalize('!**/{' + config.tasks.nunjucks.excludeFolders.join(',') + '}/**');

const paths = {
    src: [path.join(config.root.src, config.tasks.nunjucks.src, '/**/*.{' + config.tasks.nunjucks.extensions + '}'), exclude],
    dest: path.join(config.root.dest, config.tasks.nunjucks.dest)
};

const getData = () => {
    const dataPath = path.resolve(config.root.src, config.tasks.nunjucks.src, config.tasks.nunjucks.dataFile);
    return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
};

const templatesTask = () => {
    return gulp.src(paths.src)
        .pipe(data(getData))
        .on('error', handleErrors)
        .pipe(render({
            path: [path.join(config.root.src, config.tasks.nunjucks.src)],
            envOptions: {
                watch: false
            },
            manageEnv(env) {
                env.addGlobal('imagePath', config.tasks.images.dest);
            }
        }))
        .on('error', handleErrors)
        .pipe(gulpif(global.production, htmlmin(config.tasks.nunjucks.htmlmin)))
        .pipe(gulp.dest(paths.dest))
        .on('end', browserSync.reload)
        .pipe(customNotifier({ title: 'Template compiled' }));
};

gulp.task('templates', templatesTask);

module.exports = templatesTask;
