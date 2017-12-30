# React-redux-starter (with tests)

#### this starter kit is a complete assets kit for reactjs project with ,redux, react-router-v4,unit test with jest and enzyme, eslint webpack 3 .

## Read [INSTALL.md](/INSTALL.md) for installation and basic setup guide

#  References for this project :

1. [NodeJS](https://nodejs.org/en/)
2. [NPM](https://www.npmjs.com/)
3. [Yarn](https://yarnpkg.com/en/)
4. [Single page application](https://www.codeschool.com/beginners-guide-to-web-development/single-page-applications)
5. [web API's / REST API's](http://searchmicroservices.techtarget.com/definition/RESTful-API)
6. [yarn.lock and npm-shinkwrap](https://stackoverflow.com/questions/40057469/what-is-the-difference-between-yarn-lock-and-npm-shrinkwrap)
7. [git, gitHUB, gitLAB](https://www.atlassian.com/git/tutorials/what-is-git)
8. [webpack](https://scotch.io/tutorials/getting-started-with-webpack-module-bundling-magic)
9. [Module bundeling](https://medium.com/@sungyeol.choi/javascript-module-module-loader-module-bundler-es6-module-confused-yet-6343510e7bde)
10. [Build tools](https://stateofjs.com/2016/buildtools/)
11. [component architecture](https://www.tandemseven.com/technology/6-reasons-component-based-ui-development/)
12. [Flux](https://facebook.github.io/flux/) 
13. [Redux](https://redux.js.org/)
14. [unit testing with JEST and enzyme](https://medium.com/wehkamp-techblog/unit-testing-your-react-application-with-jest-and-enzyme-81c5545cee45)
15. [Build tools ref2](https://medium.freecodecamp.org/making-sense-of-front-end-build-tools-3a1b3a87043b)
16. [CSS FLEXBOX](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)

# Tools, Frameworks and Plugins required for this Project
1.  [Visual studio code (Most recomended text editor)](https://code.visualstudio.com/download  )
2.  [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
3.  [Prettier - JavaScript formatter for VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
4.  [NodeJS](https://nodejs.org/en/)
5.  [BabelJS](https://babeljs.io/)
6.  [ESlint](https://eslint.org/)
7.  [NPM](https://www.npmjs.com/)
8.  [Webpack](https://webpack.js.org/)
9.  [ReactJS](https://reactjs.org/)
10. [React Router](https://reacttraining.com/react-router/)
11. [Axios](https://github.com/axios/axios)
12. [ReduxJS](https://redux.js.org/)
13. [React-Redux](https://redux.js.org/docs/basics/UsageWithReact.html)
14. [JestJS](https://facebook.github.io/jest/   )
15. [EnzymeJS](http://airbnb.io/enzyme/docs/api/)
16. [FontAwesome](http://fontawesome.io/icons/)
17. [HighlightJS](https://highlightjs.org/)
18. [Eslint for VS Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
19. [Yarn](https://yarnpkg.com/en/)
20. [CSS FLEXBOX](https://scotch.io/tutorials/a-visual-guide-to-css3-flexbox-properties)
21. [Bootstrap v4 grid](https://v4-alpha.getbootstrap.com/layout/grid/#grid-options)
22. [Bootstrap v4 responsive breakpoints](https://v4-alpha.getbootstrap.com/layout/overview/#responsive-breakpoints)


# More References 
for React 16.0 Life cycle method reference : https://github.com/hannadrehman/React-Lifecycle-explained

# Project structure 
all Files and Folders in the root directore are described below:

### Folders :
  1. __mocks__ : will contain files that will mock modules in webpack like images,css etc
  2. __dist__ : contains final transpiled files that will be deployed on a web server.
  3. __node_modules__ : is the folder where are dependencies are kept.
  4. __src__ : is where all the source code will be written.

### Files in root directory

  1.  [.babelrc](/.babelrc) : configuration file for babel transpiler.to keep the pluguns detalls etc
  2.  [.eslintignore](/.eslintignore) : configuration file that will store the ignored/disabled rules for eslint
  3.  [.gitignore](/.gitignore) : config for git that contains ignore file info. ex we dont want nodemodules to be stored on git
  4.  [.CHANGELOG.md](/.CHANGELOG.md) : all release notes and changes per version will be mentioned here.
  5.  [License.md](/License.md) : license info
  6.  [webpack.config.js](/ webpack.config.js) : configuration file for webpack which will have transpile and bundle our project
  7.  [yarn-error.log](/yarn-error.log)  : will contains error logs if occured in yarn execution
  8.  [README.md](/README.md)  : contains usefull info.
  9.  [package.json](/package.json)  : contains all dependency details and also Jest config
  10. [yarn.lock](/yarn.lock)  : lock file created by yarn to make sure all node modules are locked
  11. [INSTALL.md](/INSTALL.md) :has installation instructions

# The Project
#### using cross-env to make set NODE_ENV cross platfom

All of our development will be done in "src" folder in the root directory
the src folder has following structure

```
+-- App -- root application that will be load our react app
|    +-- common --  common react components will be created here
|    |    +-- AutoComplete
|    |    +-- Nav
|    |    +-- modalPopup
|    |    +-- reducer.js -- all combined reducers for each commponent
|    |    +-- action.js -- all actions for each commponent
|    |
|    +-- elements --   components that are single elements like textbox,label,dropdown etc are kept here
|    |    +-- TextBox
|    |    +-- Label
|    |    +-- List
|    +-- Routes  --   page level comonents will be kept here
|    |    +-- Home
|    |    +-- Ask
|    |    +-- Profile
|    |    +-- Search
|    |    +-- reducer.js -- all combined reducers for each commponent
|    +-- scss  --   site top level styling will be kept here 
|    |    +-- _colors.scss
|    |    +-- _mixins.scss
|    |    +-- _variables.scss
|    |    +-- base.scss
|    +-- store  --   redux store initialization and reducers.
|    |    +-- combinedReducer.js -- will combine all components reducers
|    |    +-- configureStore.js --  will create redux store
|    |    +-- logger.js --  a console logger for all store actions and reducers
|    +-- actions.js  --  all actions for App component 
|    +-- reducer.js  --  reducer function for App component
|    +-- util.js  --  utility functions for App component .
|    +-- index.jsx --  the entry point or the App component definition .
|
+-- assets --  this folder will have static assets for the application
|    +-- css --  all css libs should placed here
|    +-- images --  images should be kept here
|
+-- services --  will contain classes with tests. this app will be used as a helping application to the main app
```
# Understand

1. All file names will be camel cased ex index.jsx,index.js, fileName.aspx.
2. All folders will me lowercased
3. If a folder contains a Class (only 1 class that is exported) the folder name will be same as the class. and is PascalCased
4. We have 4 types of components 
      1. __App__ Component : the entry point . 
      2. __Common__ Components : placed inside common folder. these are common and re-usable accross the application
      3. __Element__ : smallest components that will replace html elements like textbox,list,label etc. these are placed inside elemetns folder
      4. __Route__ Component these are page level components that will define the page /route of an app. these are placed in Routes folder
5. Each component can use redux , for which the need to have 1 actions.js and reducer.js file created in the same directory

6. Structure of a Component :
   a component is bascially a folder with all the required files.
   
   ```
      +-- MyComponent -- folder
      |   +-- index.jsx -- component login will go here
      |   +-- style.scss -- all styles will be written in scss
      |   +-- reducer.js -- if a component uses redux its reducer function will go here
      |   +-- actions.js -- if a component uses redux all action creators for the component    
      |   +-- utility.js -- helper functions for the component usually pure functions
      |   +-- MyComponent.spec.js -- Unit test cases for the component
  
   ``` 

7. structure for Redux store is :

    ```
      +--App -- root component
      |   +-- common
      |   |   +-- Component
      |   |   |   +--reducer.js
      |   |   +-- reducer.js -- combined reducer of common and all child components in this directory
      |   |   +-- action.js -- action creators Names of all common components
      |   |
      |   +-- Routes
      |   |   +-- Component
      |   |   |   +--reducer.js      
      |   |   +-- reducer.js -- combined reducer of Route component and all its child components.
      |   +-- reducer.js -- combined reducer of root + common and Routes
      |   +-- store
      |   |   +-- configureStore.js -- will create store with all reducers
      |   |   +-- combinedReducers.js will export alredy combined reducers from App reducer.js
      |   |   +-- logger.js middle ware to log on console on each dispatch  

    ```
      our top level reducer will be in App folder. which will combine all the reducers in 
      common and Routes folder. and also it will have its own (App component) reducer functions. 
      finally it will be exported and used in the store.
      the store folder has cominedReducerfile which will import this component and pass it to the 
      redux store.

8. Component Types in ReactJS
    there are 3 component types in reactJS as of now. you should read about these 3 components before
    diving into the code.
    1. Statefull Components 
    2. Pure Components
    3. Functional Components
    

# Understand packages.json file. 

packages.json file is used to store config of your application. 
configuration of all the modules required. and all the scripts and commands
that will be used to execute the project.
this file has following sections.
```
{
  "name": "appication name",
  "version": "release version of the application",
  "main": "main page or the entry point of the application",
  "scripts": "all commands that will be used to execute this project",
  "license": "open source license MIT",
  "dependencies": "all project dependencies that will define the project",
  "devDependencies": "all development dependencies that are required to build this project and run it",
  "optionalDependencies": "some extra opetional dependencies",
  "jest": "configuration for JEST testing tool"

}
```

### also read about npm/yarn proxy settings and npm/yarn registry.

# Understanding all scripts 

```

{
  "start": "starts the project in development environment also starts other commands like dev server ,
  lint, webpack  etc",
  "prebuild": "will clear the dist folder, usefull when doing prod build",
  "build:prod": "sets production env and starts webpack and builds the project, but only build, it will not start the project",
  "build:stage": "sets staging env and starts webpack and builds the project, but only build, it will not start the project",
  "lint": "starts the eslint tool",
  "lint:watch": "eslint watches our code",
  "open:dev": "opens the web application with webpack dev server,",
  "open:dist": "uses http-server to open dist after stage build or dev build to test it",
  "remove-dist": "deletes /dist folder",
  "test:stage": "starts JEST test tool with TEST_ENV=development",
  "test:prod": "starts JEST test tool with TEST_ENV=production",
}

```
