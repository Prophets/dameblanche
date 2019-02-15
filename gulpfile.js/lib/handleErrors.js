const notify = require('gulp-notify');
const colors = require('ansi-colors');
const isProductionBuild = require('./isProductionBuild');

module.exports = ({ plugin, message, file, fileName } = {}) => {
    notify.onError({
        title: `${plugin} failed`,
        message: 'error'
    }).apply(this);

    const chalk = colors.red;
    let report = '';

    report += `\n ${chalk(`${message}`)} \n\n`;
    if (fileName || file) report += `${chalk(`${fileName || file}`)} \n`;

    console.error(report);

    // Keep gulp from hanging on this task
    if (typeof this.emit === 'function') this.emit('end');

    // Hard exit build process on error when in production -- needed for CI
    if (isProductionBuild()) {
        process.exit(1);
    }
};
