import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CharacterCard from "./components/CharacterCard"
import Characters from "./Characters.json"
//  importing navBar 
import NavBar from "./components/NavBar"

//  importing footer 
import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <div className="App">
      < NavBar />
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to Riverdale, the town with pep</h1>
        
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
          Riverdale Clicky Game!
        </p>
        <p> Click an image to earn points, but don't click on an image more than once 
          </p>
          </header>
          <Footer />
      </div>
    );
  }
}

export default App;
