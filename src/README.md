# Add Dark/Light modes to React Info Site <mark>Notes</mark>


* ## Review and understand the JavaScript files to solve the challenge

    * ### Index.js

        * Three import statements:
        ```javascript
        import React from "react"
        ```
        * <mark>Imports the React library</mark> enabling the creation and management of React components with all its features.
        ```javascript
        import ReactDOM from "react"
        ```
				
        * <mark>Imports the ReactDOM library</mark> provided methods for rendering React components to the DOM.
        ```javascript
        import App from "./App"
        ```
        * <mark>Imports the App component</mark> from the “./App” file which is the parent component to allow its use.
        ```javascript
        ReactDOM.render(<App />, document.getElementById("root"))
        ```
        * <mark>Renders the App component</mark> and inserts it into the HTML element which is the entry point of the React application and where the entire component tree is rendered and displayed on the webpage. 

    * ### App.js:
        * Three import statements (again):
            * Imports the React library to enable the creation and management of components
            * Navbar component
            * Main component
        * It has an export default App function:
        ```javascript
        export default function App() {
          return (
            <div> className="container">
              <Navbar />
              <Main />
             </div> 
          )
        }
        ```
        * This export function defines the behavior and structure of the App component which contains both the imported Main and Navbar child components.

     * ### Main.js:
        * One import statement:
            * Imports the React library to enable the creation and management of components
            * It has an export default Main function with a return statement:
            ```javascript
            export default function Main(props) {
              return (
                <main className={props.darkMode ? "dark" : ""}>
                  <h1 className="main--title">Fun facts about React</h1>
                  <ul className="main--facts">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Was well over 100K stars on GitHub</li>
                    <li>>Is maintained by Facebook</li>
                    <li>>Powers thousands of enterprise apps, including mobile apps<</li>
                  </ul>
                </main>
              )
            }
            ```
				
            * Main element:
                * The main element has a className attribute which receives props in the form of a JS boolean expression which colloquially says, “if the `darkMode` prop is true (ternary operator) then apply the dark theme, otherwise if the darkMode prop is false then apply an empty string, resulting in no additional styling applied."
            * H1:
                * The header no. 1 element has a className attribute called “main–title” which has CSS styling applied and contains texts.
            * UL: 
                * The unordered list has a className attribute called “main–facts” which has CSS styling applied and contains list items.
            * LI: 
                * There are five list items which contain no className attribute but rather inherit it from the parent ul element. They all contain texts. 

     * ### Navbar.js
        * One import statement:
            * Imports the React library to enable the creation and management of components
            * It has an export default Navbar function with a return statement:
            ```javascript
            export default function Navbar(props) {
                return (
                    <nav 
                        className={props.darkMode ? "dark": ""}
                    >
                        <img 
                            className="nav--logo_icon"
                            src="./images/react-icon-small.png"
                        />
                        <h3 className="nav--logo_text">ReactFacts</h3>
                        
                        <div 
                            className="toggler" 
                        >
                            <p className="toggler--light">Light</p>
                            <div 
                                className="toggler--slider"
                                onClick={props.toggleDarkMode}
                            >
                                <div className="toggler--slider--circle"></div>
                            </div>
                            <p className="toggler--dark">Dark</p>
                        </div>
                    </nav>
                )
            }
            ```

            * Nav:
                * The navigation element has a className attribute which receives props in the form of a JS boolean expression which colloquially says, “if the `darkMode` prop is true (ternary operator) then apply the dark theme, otherwise if the darkMode prop is false then apply an empty string, resulting in no additional styling applied.”
            * Img: 
                * The image element has a className attribute called “nav–logo_icon” which has CSS styling applied and an src attribute to access the local image stored inside the images folder.  
            * H3:
               * The header no. 3 has a className attribute called “nav–logo_text” which has CSS styling applied and contains texts.
            * Div:
               * The divider element has a className attribute called “toggler” applied
                   * P:
                       * The paragraph element has a className attribute called “toggler–light” which has CSS styling applied and contains texts
                   * Div:
                       * The nested divider element has a className “toggler–slider” which has CSS styling applied and contains an onClick attribute which receives props in the form of a JSX expression which colloquially says, “when the toggle is clicked, it will trigger a function called `toggleDarkMode` that is passed a prop.”
                   * Div:
                      * This divider element is nested within another divider element. It has a className “toggler–slider-circle” which has CSS styling applied.
                   * P:
                      * This paragraph element has a className “toggler–dark” which has CSS styling applied and contains text.
    * ### Style.css
        * Analyze the CSS classNames to understand how the styles should be applied
            * Nav.dark
            * Toggler–dark
            * Main.dark
        * Analyze the CSS conditional classNames in the JSX to decide what kind of props the components need to receive

* Think about which components need state
    * What is the concept of state?
        * State is data that changes over time across renders in React.
    * What do you use to create state changes?
        * In React use the `useState` hook.
    * What are the steps for creating state with the `useState` hook?
        1. Import { useState } from ‘react’;
        2. Create state variable then open an array
        ```javascript
        const [darkMode, setDarkMode] = React.useState(true)
        ```
        * First element of the array is the state variable which represents what it is I am trying to display because I want to keep track of the `darkMode`. 
        * Second element of the array is the updater function that updates the state of the action taking place, in my case it is toggling from light to dark mode.
            * By convention the variable should have a descriptive name which properly conveys the action it will do.
            * By convention the updater function should always begin with set and then whatever the variable name is.
            * Optionally provide a default value. 
            * With the insertion of state the application has now become “stateful”: it uses some piece of state in its components.
        3. Create a function to make the updater function have functionality which updates the state. This can be done inline or in, you guessed it, a separate function with the component itself. This separate function will be placed above the component return statement and below the useState expression.
        ```javascript
        export default function App() {
          const [darkMode, setDarkMode] = React.useState(true)
          function toggleDarkMode() {
              setDarkMode(prevD)
          }
          return (
              <div className="container">
                  <Navbar darkMode={darkMode} toggleDarkMode={} />
                  <Main darkMode={darkMode} />
              </div>
          )
        }
        ```

				
    * Where?
        * The App component is where the state should be held.
    * Why? 
        * It is the parent component where the Main and Nav components are rendered.

* A brief review of Props: See this Bro Code props tutorial
    * What is the concept of props? 
        * Props is short for properties, it represents data that will be shared between components. A parent component can send data to a child component using props. When I include a component within a parent I can send that child component key=value pairs e.g.
        ```javascript 
        <Component key=value  />
        ``` 
        * Using props I can send child components individual values so that they’re all unique. 
    * How does it work?
        * In order for a component to accept props its function needs a props parameter. Props is a JavaScript object. 
        ```javascript
        esport default function Student(props){
          return (
          <div>
            <p>Name: {props.name}</p>
          </div>
          )
        }
        ```
        * Then list key=value pairs within the parent component to access the name object listed inside the child component. 
        ```javascript
        import Student from './Student.jsx'

        export default function App() {
          return (
            <>
              <Student name="Spongebob" />
            </>
          )
        }
        ```
        * This is the result of doing so. 

        * I got the value associated with the props object I simply typed props dot, then the name of the key e.g. 
        ```javascript
        <p>Name: {props.name}</P>
        ```
        thus providing the associated value. 

  #### (These notes are comprehensive instructions on how to solve the challenge but they're close enough to job my memory)