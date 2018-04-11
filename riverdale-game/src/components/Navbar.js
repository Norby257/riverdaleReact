//  react dependencies
import React from "react"
//  style dependencies  => make sure file path is correct
import "../styles/Navbar.css"

//  declaring a component caled styles and exporting that
const styles = {
  //  this is an object of objects, where each object takes key value pairs
  //
  NavbarStyle: {
    /* I am using the riverdale colors here 
        background: rgb() // this is that indigo color  
        */
        background: "green"
  },
  anchorStyle: {
    /* anchor tag styling goes here 
        again this would also be a color from riverDale  
        */
        float: "right"
  }
};

//  here is the navbar component
//  it contains a nav and an href (just like a navbar in plain ol HTML)
//  using JSX to evaluate the style object

const Navbar = () => {
  ;<nav style={styles.navbarStyle} className="navbar">
    <a style={styles.anchorStyle} href="/">
      Riverdale - the town with Pep
    </a>
  </nav>
}

//   exporting default so all of these can be used  in the app (by being imported in the topmost app.js file)
export default Navbar
