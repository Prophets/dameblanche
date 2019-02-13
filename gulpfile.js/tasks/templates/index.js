const config = require('../../lib/configLoader');

if (!config.tasks.templates) return;

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
const isProductionBuild = require('../../lib/isProductionBuild');

const templatesTask = () => {
    const exclude = path.normalize('!**/{' + config.tasks.templates.excludeFolders.join(',') + '}/**');

    const paths = {
        src: [path.join(config.root.src, config.tasks.templates.src, '/**/*.{' + config.tasks.templates.extensions + '}'), exclude],
        dest: path.join(config.root.dest, config.tasks.templates.dest)
    };

    const getData = () => {
        const dataPath = path.resolve(config.root.src, config.tasks.templates.src, config.tasks.templates.dataFile);
        return JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    };

    return gulp.src(paths.src)
        .pipe(data(getData))
        .on('error', handleErrors)
        .pipe(render({
            path: [path.join(config.root.src, config.tasks.templates.src)],
            envOptions: {
                watch: false
            },
            manageEnv(env) {
                env.addGlobal('imagePath', config.tasks.images ? config.tasks.images.dest : 'images');
            }
        }))
        .on('error', handleErrors)
        .pipe(gulpif(isProductionBuild(), htmlmin(config.tasks.templates.htmlmin)))
        .pipe(gulp.dest(paths.dest))
        .on('end', browserSync.reload)
        .pipe(customNotifier({ title: 'Template compiled' }));
};

module.exports = templatesTask;
