## Figma URL

[Navbar](https://www.figma.com/file/Se61eLfK50x0JatmdSdLzL/Navbar?node-id=0%3A1&t=iDQ4v9bsLeblAFUK-1)

## Steps

#### Data

Check the data.jsx file and find two arrays: one for links and one for social icons. Notice how icons from react-icons can be used directly in the data structures. Just make sure in Vite to use .jsx file extension

#### Initial Approach

Set up a Navbar component with a showLinks state value (boolean). Import the links from data and render them conditionally in the Navbar based on the showLinks state value. Set up a button that toggles the value and as a result, toggles the links. Set up CSS for the Navbar.

#### Fixed Approach

Hide links by default in the CSS. Create a class that displays links with a fixed height. Refactor the JSX in the Navbar to toggle the class, which in turn toggles the Navbar.

#### Dynamic Approach

Use the useRef and getBoundingClientRect() function, to get exact height of links

[Javascript Nuggets - Width/Height](https://www.youtube.com/watch?v=v8YENdbDv1w&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=20)

#### Complete App

Finally, add social links and CSS to render the Navbar on the big screen.

#### Application Flow

The flow of the application should look something like this:

- Check the data.js file and find two arrays: one for links and one for social icons.

- Set up a Navbar component with a showLinks state value (boolean). Import the links from data and render them conditionally in the Navbar based on the showLinks state value. Set up a button that toggles the value and as a result, toggles the links. Set up CSS for the Navbar.

- Hide links by default in the CSS. Create a class that displays links with a fixed height. Refactor the JSX in the Navbar to toggle the class, which in turn toggles the Navbar.

- Use the useRef and getBoundingClientRect() function, to get exact height of links

- Add social links and CSS to render the Navbar on the big screen.
