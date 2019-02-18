const notify = require('gulp-notify');
const colors = require('ansi-colors');
const isProductionBuild = require('./isProductionBuild');

module.exports = function({ plugin, message, file, fileName } = {}) {
    notify.onError({
        title: `${plugin} failed`,
        message: 'ERROR',
        icon: `${__dirname}/../extra/xallthey.png`
    }).apply(this, arguments);

    const chalk = colors.red;
    let report = '';

    report += `\n ${chalk(`${message}`)} \n\n`;
    if (fileName || file) report += `${chalk(`${fileName || file}`)} \n`;

    console.error(report);

    // Keep gulp from hanging on this task
    if (this.end && typeof this.end === 'function') {
        this.end();
    }

    // Hard exit build process on error when in production -- needed for CI
    if (isProductionBuild()) {
        process.exit(1);
    }
};
