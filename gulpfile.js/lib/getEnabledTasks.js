const config = require('../config');
const compact = require('lodash/compact');

// Grouped by what can run in parallel
const assetTasks = ['images', 'svgsprite', 'static'];
const codeTasks = ['templates', 'react', 'css', 'webpack'];
const lintTasks = ['eslint', 'stylelint'];

module.exports = (env) => {
    const matchFilter = (task) => {
        if (config.tasks[task]) {
            let t = config.tasks[task].taskName || task;
            if (t === 'js') {
                t = env === 'production' ? 'webpack:production' : false;
            }
            return t;
        }

        return undefined;
    };

    const exists = (value) => {
        return !!value;
    };

    return {
        assetTasks: compact(assetTasks.map(matchFilter).filter(exists)),
        codeTasks: compact(codeTasks.map(matchFilter).filter(exists)),
        lintTasks: compact(lintTasks.map(matchFilter).filter(exists))
    };
};
