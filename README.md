## Description

Створити 3 функціональні компоненти у Вашому додатку: PostList, PostListItem і MoreButton
Використовуючи ХУКи отримати дані із відкритого АРІ “https://jsonplaceholder.typicode.com/posts”
Добавити компонент Loader і відображати поки фетчаться дані
PostList повинен отримувати лише “posts” параметр і рендерити PostListItem для кожного елемента із масиву.
PostListItem повинен отрисувати “id”, “title”, “body” параметри, порівнювати їх і ререндерити компонент лише при їх зміні.
Головний компонент App повинен передавати в PostList обмеження - (10 “posts” по замовчуванню)
MoreButton повинен збільшувати ліміт (10 “posts” за клік) поки це можливо.

Завдання із зірочкою: Додати поле пошуку, яке фільтруватиме дані по “title” чи “body”

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you canât go back!**

If you arenât satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point youâre on your own.

You donât have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldnât feel obligated to use this feature. However we understand that this tool wouldnât be useful if you couldnât customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
