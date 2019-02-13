/*
  gulpfile.js
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in gulpfile.js/tasks. Any files in that directory get
  automatically required below.
*/

// Load all environment variables from .env into process.env
require('dotenv').config();

module.exports.clean = require('./tasks/clean');
module.exports.css = require('./tasks/css');
module.exports.eslint = require('./tasks/eslint');
module.exports.images = require('./tasks/images');
module.exports.rev = require('./tasks/rev');
module.exports.sizeReport = require('./tasks/sizeReport');
module.exports.static = require('./tasks/static');
module.exports.stylelint = require('./tasks/stylelint');
module.exports.svgsprite = require('./tasks/svgsprite');
module.exports.templates = require('./tasks/templates');
module.exports.webpack = require('./tasks/webpack');

module.exports.watch = require('./tasks/watch');
module.exports.default = require('./tasks/default');
