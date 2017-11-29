# installation Guide

follow the steps to have peacefull installation.
1. install nodeJS,python2.7,NPM,GIT
2. npm install npm-run-all -g
3. npm install node-gyp -g
4. npm install webpack -g
5. npm install node-sass -g
6. npm install yarn -g
7. yarn install or npm install

# understand packages.json file. 
packages.json file is used to store config of your application. 
configuration of all the modules required. and all the scripts and commands
that will be used to execute the project.
this file has following sections.
{
  "name": "appication name",
  "version": "release version of the application",
  "main": "main page or the entry point of the application",
  "scripts": {"all commands that will be used to execute this project"},
  "license": "open source license MIT",
  "dependencies": {"all project dependencies that will define the project"},
  "devDependencies": {"all development dependencies that are required to build this project and run it"},
  "optionalDependencies": {"some extra opetional dependencies"},
  "jest": {"configuration for JEST tool"}
}

## also read about npm/yarn proxy settings and npm/yarn registry.

# understanding all scripts 
"start": "starts the project in development environment also starts other commands like dev server , lint, webpack  etc",
"prebuild": "will clear the dist folder. usefull when doing prod build",
"build:prod": "sets production env and starts webpack and builds the project. but only build, it will not start the project",
"build:stage": "sets staging env and starts webpack and builds the project. but only build, it will not start the project",
"lint": "starts the eslint tool",
"lint:watch": "eslint watches our code",
"open:dev": "opens the web application with webpack dev server.",
"open:dist": "uses http-server to open dist after stage build or dev build to test it",
"remove-dist": "deletes /dist folder",
"test:stage": "starts JEST test tool with TEST_ENV=development",
"test:prod": "starts JEST test tool with TEST_ENV=production",
"coverage:stage": "starts JEST coverage tool with TEST_ENV=development&&jest --coverage",
"coverage:prod": "starts JEST coverage tool with TEST_ENV=production&&",
"installmodules": "will install all modules npm or yarn you have to edit it",

