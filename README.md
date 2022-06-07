# `Project Description:` 

![](public%5CShoppingCart.gif)

The pourpuse of this project is to desing a Shopping Cart using a real catalog, a detail of the product, a summary of the shopping cart and a customer form to complete de shopping order. The orders are stored in the same database where the catalogue is stored. 

The main purpose of this project was to practice the designed by componentes using the powerfull React library.

I also used the Material UI library to desing faster the differents components and elements. 

To help me to make the routing inside the website I used the react-router-dom package. 

The project is stored the catalgue and the customers orders in the firestore database a noSQL database by Firebase

Below, in the section "Install the necessary dependencies", I specify the different way to set up the different package, but it's important to know tha first you need to install NODE JS. 

## Characteristics of the Project: 
    The project achieved the different assingnaments of the instructor. 

    In the Detail of the product also show the size and color available. When you clicked over a color, the picture change to the corresponding color. It was very challenged to achieved this because firestore working with noSQL database. 
    
    If a customer add twice a product in the Shopping Cart there is a function that join the two item in one, adding their quantities. This method uses Mercado Libre on its website. I think it's important that customers "feel free" to hit the "add to cart" button as many times as they want, instead of just once.

    However, the customer have to select the size, color and quantity before to add the product to the cart. 

    I render the customer form in the same view where I render the cart detail. I do that because it's important that the customers click as little as possible to finish the shop. 

    The necessary verification are set up. The customer can delete the product individualy and clean the complete shopping cart. 

    When the customer finish the purchase, the cart and the form are cleaned, the order is submited to the database and the ID order is rendered in the view. El ID es el ID del documents created in firebase. 

### Details to Improve

    Complete the responsive. Not all the componentes are responsive, but this will change in the future. 

    Show the Size and Color buttons that the customer select like active.Actually is only focused.


# `Install the necessary dependencies:` 

# Install NODE JS first

If you have not installed NODE JS yet, you can download the exe file [here](https://nodejs.org/es/)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Using React Router Dom

The react-router-dom package contains bindings for using React Router in web applications. Please see the [Getting Started guide ](https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md)for more information on how to get started with React Router.

## Available Scripts

For a quickly set up go to the project directory, you can run:

### `npm i react-router-dom` or `npm install react-router-dom@6`

# Install Material UI 

You can see what is Materia UI [here](https://mui.com/material-ui/getting-started/installation/) .

## npm
To install and save in your package.json dependencies, run the command below using npm:

### `npm install @mui/material @emotion/react @emotion/styled`

## Yarn:

### `yarn add @mui/material @emotion/react @emotion/styled`

Please note that react >= 17.0.0 and react-dom >= 17.0.0 are peer dependencies.

### Material UI is using emotion as a styling engine by default. If you want to use styled-components instead, run:

### `npm install @mui/material @mui/styled-engine-sc styled-components`

### `yarn add @mui/material @mui/styled-engine-sc styled-components`

## Reboto Font
This font is set up by CDN

## Font Icons & SVG icons

### `npm install @mui/icons-material`
or
### `yarn add @mui/icons-material`

# Firebase
Firebase is a noSQL database when the products and the orders are stored. You need to install it. 

## Install with NPM
### `npm install firebase` 

You can read more [here](https://firebase.google.com/docs/web/setup?authuser=0&%3Bhl=es&hl=es)
