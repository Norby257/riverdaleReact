import React, { Component } from "react"
import "./App.css"
import CharacterCard from "./components/global/CharacterCard"
import Characters from "./Characters.json"
import Wrapper from "./components/global/Wrapper"
import NavBar from "./components/global/NavBar"
import Score from "./components/global/Score"
import Footer from "./components/global/Footer"


class App extends Component {
  //  state goes here
  //  setting score and top score to 0 as well 
  //  Characters has to be plural 
  state = {
    Characters
 
  }

  //  handleImageClick -
  //  when an image is clicked
  //  update the state of that image id to clicked
  //  then filter the array to find the images that do not have status of clicked
  //  if array item with class of .clicked is clicked, then re-set the game
  //  pseudocode for shuffling the cards  
  //  doing in app and then passing as prop(this.props.characters)

  // handleShuffle() {
  //   //  get length of array and subtract one 
  //   let i = array.length - 1;
  //   //  loop thru it backwards 
  //   for (; i > 0; i--) {
  //     //  here we are setting a const 
  //     const j = Math.floor(Math.random() * (i+ 1));
  //     //  temp variable set to current index of array
  //     const temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
      
  //   }
  //   return array;
  // }

  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <h1 className="App-title">Welcome to Riverdale, the town with pep</h1>
          <h2> Clicky game </h2>

          <p className="App-intro"> Click an image to earn points, but don't click on any more than once!
          </p>
        </header>
        <Score />
        <Wrapper>
          {/* const shuffledCards = handleShuffle(this.props.Characters) */}
          {this.state.Characters.map(character => (
            <CharacterCard 
            id={character.id} 
           key={character.id}
            image={character.image} />
          ))}
        </Wrapper>
        <Footer />
      </div>
    )
  }
}

export default App
