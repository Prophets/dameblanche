#!/bin/bash

# install js dependencies for react recipe
yarn add react@next react-dom@next
yarn add babel-plugin-transform-react-jsx
yarn add babel-plugin-transform-decorators-legacy
yarn add babel-plugin-transform-object-rest-spread
yarn add babel-preset-stage-1

# replace current config file with react recipe config file.
cp -f gulpfile.js/recipes/react/config.js gulpfile.js/config.js
cp -rf gulpfile.js/recipes/react/src/* src/
rm -rf src/js/modules