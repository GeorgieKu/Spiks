<h1>Project name</h1>

<h2>Available Scripts</h2>

```
npm run start
```
Runs the app in the development mode

```
npm run build
```
Builds the app for production to the `public` folder

```
npm run deploy
```
Pushes the app build for production to the `build gh-subtree`

```
npm run gen:[block|layout|page]
```
Generates files structure
```
npm run sb:start
```
Runs the storybook app
```
npm run sb:build
```
Builds the storybook app for production to the `storybook-static` folder
```
npm run eslint:[check|fix]
```
Runs eslint for `src/**/*.js` files
```
npm run stylelint:[check|fix]
```
Runs stylelint for `src/**/*.scss` files

<h2>Available entry points for the app build</h2>

|    Type | Filename                 |
|--------:|--------------------------|
| scripts | `src/index.js`           |
|  styles | `src/index.scss`         |
|   pages | `src/pages/**/index.pug` |
|  assets | `src/core/assets/**/*.*` |