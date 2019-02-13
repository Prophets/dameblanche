const gulp = require('gulp');
const getEnabledTasks = require('../../lib/getEnabledTasks');
const isProductionBuild = require('../../lib/isProductionBuild');
const watch = require('../watch');

const defaultTasks = [
    getEnabledTasks().enabledTasksAsOperations,
    isProductionBuild() ? undefined : watch
].filter(Boolean);

module.exports = gulp.series(
    ...defaultTasks
);
