# Currency calculator (app is using styled components)
  
 ## Description
 You can calculate in this application the value of same currencies compare to polish currency: PLN
 There are five currencies (PLN, EUR, USD, GBP, CHF) and calculations can be made between each pair of this curriences (for example between EUR and GBP or GBP and EUR) so there can be made twenty differenet calculations. Beside this it is very easy to add new curriences to this conventer. To add new currency you should add new element to the const initialRatesTable in the App.js component with data on the new curriency. To update the exchange rates of any currency you should click the red label in: "Kursy walut można zobaczyć/zmienić tutaj". 
 To return to the main screen the red label in: "Powrót do kalkulacji tutaj", must be clicked but every exchange rates of the curriencies must be greater than zero and can not be empty.
 This aplication was build in React.js technology. It consit of six components: Header, Footer, Container, Calculator, Rates and Curriences and the main component App.js. The BEM (Blocks, Elements and Modifiers) methodology gives CSS code a solid structure that remains simple and easy to understand.  

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

First builds the app for production to the `build` folder and after deployes the app on the GitHub Pages!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
