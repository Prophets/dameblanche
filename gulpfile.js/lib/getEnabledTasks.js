const gulp = require('gulp');
const flattenDeep = require('lodash/flattenDeep');
const config = require('../config');
const isProductionBuild = require('./isProductionBuild');

module.exports = () => {
    const enabled = (task) => {
        return config.tasks[task];
    };

    const taskReq = (task) => {
        return require('../tasks/' + task);
    };

    // Grouped by what can run in parallel
    const allTasks = [
        ['clean'],
        ['eslint', 'stylelint'],
        ['images', 'svgsprite', 'static'],
        ['templates', 'react', 'css', isProductionBuild() ? 'webpack' : undefined],
        isProductionBuild() ? ['rev'] : undefined,
        isProductionBuild() ? ['sizeReport'] : undefined
    ];

    const allEnabledTasks = allTasks.filter(Boolean).map((taskGroup) => taskGroup.filter(enabled));

    const enabledTasksAsStrings = flattenDeep(allEnabledTasks);

    const enabledTasksAsOperations = gulp.series(
        ...allEnabledTasks.map((taskGroup) => {
            return gulp.parallel(...taskGroup.map(taskReq));
        })
    );

    return {
        enabledTasksAsStrings,
        enabledTasksAsOperations
    };
};
