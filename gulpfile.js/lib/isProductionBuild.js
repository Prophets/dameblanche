const argv = require('minimist')(process.argv.slice(2));

module.exports = () => {
    return argv.production;
};
