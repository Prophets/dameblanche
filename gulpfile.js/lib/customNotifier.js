const
    notify = require('gulp-notify');

module.exports = ({ title }) => {
    return notify({
        title: `${title}`,
        message: '<%= file.relative %>',
        icon: `${__dirname}/../extra/xallthey.png`
    });
};
