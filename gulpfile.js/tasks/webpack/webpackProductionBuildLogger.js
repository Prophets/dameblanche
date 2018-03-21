const
    colors = require('ansi-colors'),
    prettifyTime = require('./prettifyTime'),
    handleErrors = require('../../lib/handleErrors');

module.exports = (err, stats) => {
    if (err) throw new Error(err);

    let statColor = stats.compilation.warnings.length < 1 ? 'green' : 'yellow';

    if (stats.compilation.errors.length > 0) {
        stats.compilation.errors.forEach((error) => {
            handleErrors(error);
            statColor = 'red';
        });
    } else {
        const compileTime = prettifyTime(stats.endTime - stats.startTime);
        console.log(colors[statColor](stats));
        console.log('Compiled with', colors.cyan('webpack'), 'in', colors.magenta(compileTime));
    }
};
