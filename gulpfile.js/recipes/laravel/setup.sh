#!/bin/bash

# remove favicon as it will be in laravels public folder
rm -fi src/static/favicon.ico

# replace current config file with laravel recipe config file.
cp -fi gulpfile.js/recipes/laravel/config.js gulpfile.js/config.js
