const fs = require('fs');
const Path = require('path');


const configLoader = () => {
    const currentPath = Path.resolve(__dirname, '../tasks');
    const config = {};
    fs.readdirSync(currentPath).forEach((item) => {
        config[item] = require(currentPath + '/' + item + '/config') || {};
    });
    return config;
};
const configDefaults = configLoader();
const config = require('../config');

for (let taskName in config.tasks) {
    if (config.tasks[taskName]) {
        config.tasks[taskName] = Object.assign(configDefaults[taskName], config.tasks[taskName]);
    }
}
module.exports = config;
