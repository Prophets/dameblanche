const
    config = require('../config'),
    compact = require('lodash/compact'),

    // Grouped by what can run in parallel
    assetTasks = ['images', 'svgSprite'],
    codeTasks = ['templates', 'css', 'js'],
    lintTasks = ['eslint', 'stylelint'];

module.exports = (env) => {
    const
        matchFilter = (task) => {
            let t = task;

            if (config.tasks[t]) {
                if (t === 'js') {
                    t = env === 'production' ? 'webpack:production' : false;
                }

                return t;
            }

            return undefined;
        },
        exists = (value) => {
            return !!value;
        };

    return {
        assetTasks: compact(assetTasks.map(matchFilter).filter(exists)),
        codeTasks: compact(codeTasks.map(matchFilter).filter(exists)),
        lintTasks: compact(lintTasks.map(matchFilter).filter(exists))
    };
};
