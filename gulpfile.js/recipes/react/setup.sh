#!/bin/bash

# install js dependencies for react recipe
yarn add react react-dom
yarn add babel-plugin-transform-react-jsx

# replace current config file with react recipe config file.
cp -fi gulpfile.js/recipes/react/config.js gulpfile.js/config.js
cp -rfi gulpfile.js/recipes/react/src/* src/
rm -rfi src/js/modules