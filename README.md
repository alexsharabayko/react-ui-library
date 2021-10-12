# react-ui-library
Small UI Lib on React + Example Page

## Available commands

- `npm start:index` - start dev server on port 6001 with example page
- `npm start:storybook` - start storybook server
- `npm run g` - helper for generating new component
- `npm run build` - build library
- `npm run build:analyze` - build with outputting ifo to `app-stats.json` file which can be  seen in https://chrisbateman.github.io/webpack-visualizer/

## How to run the app

 - Clone the project
 - Go to the project folder
 - Run `npm install`
 - Run `npm start:index` or `npm start:storybook`
 

## What should be added to real life version of this project

- Prettier: to make formatting the same across the app
- EsLint: to make code style the same across the app
- Tests: some tests to decrease regression
- Bundling with typescript declarations
- Separate bundles for components (to have ability to improve build size)
