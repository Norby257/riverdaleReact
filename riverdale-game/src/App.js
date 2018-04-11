import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CharacterCard from "./components/CharacterCard"
import Characters from "./Characters.json"
//  importing navBar 
// import Navbar from "./components/Navbar"
//improting header 
// import Header from "./components/Header"
//  importing footer 
// import Footer from "./components/Footer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to Riverdale, the town with pep</h1>
        </header>
        <p className="App-intro">
          {/* To get started, edit <code>src/App.js</code> and save to reload. */}
        </p>
      </div>
    );
  }
}

export default App;
