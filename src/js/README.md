# JavaScript Assets
We've got modular ES6 with [Babel](http://babeljs.io/) and [Webpack](http://webpack.github.io/)!

In development, JavaScript is compiled with [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) and [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) by [passing these into BrowserSync](gulpfile.js/tasks/browserSync.js#L14-L19) as [middleware](https://browsersync.io/docs/options/#option-middleware). You don't have to take advantage of [webpack hot module replacement](https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack), but it's there if you want it! Use it on React.js projects with things like [react-transform-hmr](https://github.com/gaearon/react-transform-hmr). But before you go and do that, read [Dan Abramov's disclaimer](https://medium.com/@dan_abramov/hot-reloading-in-react-1140438583bf#.jhcp6x3rl), which is also a great tutorial on using vanilla Webpack HMR.

## Tasks and Files
```
gulpfile.js/tasks/browserSync
gulpfile.js/tasks/webpackProduction
gulpfile.js/lib/webpack-multi-config
```

There are a couple of webpack options exposed in the top-level `gulpfile.js/config.json` file.

### `entries`
Discrete js bundle entry points. A js file will be bundled for each item. Paths are relative to the `javascripts` folder. This maps directly to `webpackConfig.entry`.

### Advanced
If you want to mess with the specifics of the webpack config, check out `gulpfile.js/lib/webpack-multi-config.js`.

```
gulpfile.js/tasks/eslint
```
Your Javascript is also linted with [ESLint](https://github.com/eslint/eslint). The linting config of all [ESLint rules](http://eslint.org/docs/rules/) is located in `.eslint.rc`

By default, the linter will [failAfterError](https://github.com/adametry/gulp-eslint#eslintfailaftererror) when building for production. This means that the building process will not be completed as long as there are linting errors.
