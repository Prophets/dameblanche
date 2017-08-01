module.exports = {
    'taskName': 'js',
    'src': 'js',
    'dest': 'js',
    'extensions': ['js', 'json'],
    'babel': {
        'presets': [['es2015', { 'modules': false }]],
        'plugins': []
    },
    'extractSharedJs': false
};
