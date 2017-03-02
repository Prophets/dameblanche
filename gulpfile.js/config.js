const
    getArg = require('./lib/getArg'),
    destFolder = getArg('--build') ? './build' : './public';

module.exports = {
    'root': {
        'src': './src',
        'dest': destFolder
    },

    'tasks': {
        'browserSync': {
            'server': {
                'baseDir': 'public'
            }
        },

        'static': {
            'src': 'static',
            'dest': './',
            'extensions': ['*']
        },

        'js': {
            'src': 'js',
            'dest': 'js',
            'entries': {
                'app': ['./app.js']
            },
            'extensions': ['js', 'json'],
            'babel': {
                'presets': [['es2015', { 'modules': false }]],
                'plugins': []
            },
            'extractSharedJs': false
        },

        'css': {
            'src': 'sass',
            'dest': 'css',
            'sass': {
                'includePaths': [
                    './node_modules'
                ]
            },
            'extensions': ['scss', 'css']
        },

        'templates': {
            'src': 'templates',
            'dest': './',
            'dataFile': 'data/global.json',
            'htmlmin': {
                'collapseWhitespace': true
            },
            'extensions': ['njk', 'json'],
            'excludeFolders': ['layouts', 'shared', 'macros', 'data']
        },

        'images': {
            'src': 'images',
            'dest': 'images',
            'extensions': ['jpg', 'png', 'svg', 'gif']
        },

        'svgSprite': {
            'src': 'symbols',
            'dest': 'images',
            'extensions': ['svg']
        },

        'production': {
            'rev': true
        },

        'eslint': {
            'src': 'js',
            'extensions': ['js', 'json']
        },

        'stylelint': {
            'src': 'sass',
            'extensions': ['scss', 'css']
        }
    }
};
