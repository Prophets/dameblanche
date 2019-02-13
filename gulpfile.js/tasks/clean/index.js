const del = require('del');
const config = require('../../lib/configLoader');

const cleanTask = () => {
    const dirty = (config.tasks.clean && config.tasks.clean.patterns) ? config.tasks.clean.patterns : config.root.dest;

    return del(dirty);
};

module.exports = cleanTask;
