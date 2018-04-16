import React, { Component } from "react"
import "./App.css"
import CharacterCard from "./components/global/CharacterCard"
import Characters from "./Characters.json"
import Wrapper from "./components/global/Wrapper"
import NavBar from "./components/global/NavBar"
import Footer from "./components/global/Footer"

class App extends Component {
  //  state goes here
  state = {
    Characters
  }


  //  handleImageClick -
  //  when an image is clicked
  //  update the state of that image id to clicked
  //  then filter the array to find the images that do not have status of clicked
  //  if array item with class of .clicked is clicked, then re-set the game
  //  shuffle the cards - shuffle react? or randomize  | consult the google

  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <h1 className="App-title">Welcome to Riverdale, the town with pep</h1>

          <p className="App-intro" />
        </header>
        <Wrapper>
          {this.state.Characters.map(character => (
            <CharacterCard id={character.id} image={character.image} />
          ))}
        </Wrapper>
        <Footer />
      </div>
    )
  }
}

export default App
