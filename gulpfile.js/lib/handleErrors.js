const
    notify = require('gulp-notify'),
    gutil = require('gulp-util');

module.exports = ({plugin, message, file, fileName} = {}) => {
    notify.onError({
        title: `${plugin} failed`,
        message: 'error'
    }).apply(this, arguments);

    const chalk = gutil.colors.red;
    let report = '';

    report += `\n ${chalk(`${message}`)} \n\n`;
    if (fileName || file) report += `${chalk(`${fileName || file}`)} \n`;

    console.error(report);

        // Keep gulp from hanging on this task
    if (typeof this.emit === 'function') this.emit('end');
};
