module.exports = {
    'taskName': 'js',
    'src': 'js',
    'dest': 'js',
    'extensions': ['js', 'json'],
    'babel': {
        'presets': [['env', { 'modules': false }]],
        'plugins': []
    },
    'extractSharedJs': false
};
