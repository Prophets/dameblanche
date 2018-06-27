const colors = require('ansi-colors');
const prettifyTime = require('./prettifyTime');
const handleErrors = require('../../lib/handleErrors');

module.exports = (err, stats) => {
    if (err) throw new Error(err);

    if (stats.compilation.errors.length > 0) {
        stats.compilation.errors.forEach((error) => {
            handleErrors(error);
        });
    } else {
        const compileTime = prettifyTime(stats.endTime - stats.startTime);

        console.log(
            '\n',
            stats.toString({
                chunks: false,
                colors: true
            }),
            '\n'
        );

        console.log('Compiled with', colors.cyan('webpack'), 'in', colors.magenta(compileTime));
    }
};
