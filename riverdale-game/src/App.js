import React, { Component } from 'react';
// import {Jumbotron as DJumbotron, Button } from 'react-bootstrap';

import './App.css';
//  code dependencies created from components 
import CharacterCard from "./components/global/CharacterCard";
import Characters from "./Characters.json";
import Wrapper from "./components/global/Wrapper";
// import Title from "./components/global/Title";
//  importing navBar 
import NavBar from "./components/global/NavBar"
// import Jumbotron from "./components/global/Jumbotron";
//  importing footer 
import Footer from "./components/global/Footer"

class App extends Component {

  //  state goes here 
    state = {
      Characters
    };
  //   methods go here 

  //  handleImageClick - put the function definition in the component too  

  //  getCurrentImage
  render() {
    //  we'd need to render the images here. Doing this similar to how the tic tac toe app was done 
    //  we can either do a map function of a for loop. just to get it working, do a for loop for now
    //  with this loop, we'd have to also assign an id (so try passing i as an argument)
    //  and then we'd have to check if that image id was alredy with .clicked or .selected 
    //  i.e. (if image[i] === .clicked ) then set score to zero, re-start game 

    //  shuffle the cards - shuffle react? or randomize  | consult the google 
    return (
      <div className="App">
      < NavBar />
        <header className="App-header">
         <h1 className="App-title">Welcome to Riverdale, the town with pep</h1>
        
        <p className="App-intro">
        </p>
        
          </header>
          {/* <Jumbotron /> */}
          <Wrapper> 
            {this.state.Characters.map(character => (

           
              <CharacterCard
              id={character.id}
              image={character.image}
              />
            ))}
          </Wrapper>
          <Footer />
      </div>
    );
  }
}

export default App;
