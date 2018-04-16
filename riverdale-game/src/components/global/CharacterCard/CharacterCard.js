import React, { Component } from "react";
import "./CharacterCard.css";

class CharacterCard extends Component {
        handleClick = () => {
            console.log("I've been clicked")
            console.log(this.props.image)
            console.log(this.props.id)
        }
        render() {
            // let classes = this.props.id ? "character" : "character clicked"
            return (
                <div className="card">
                   <div className="img-container" onClick={this.handleClick}>
                   <img src ={this.props.image} alt={this.props.name} />
                 </div>
                   </div>
    
            )
        }
    }

        //  and then we'd have to check if that image id was alredy with .clicked or .selected (See tic tak toe game)
    //  i.e. (if image[i] === .clicked ) then set score to zero, re-start game  - this can be handled with a ternary operator 
    //  set state to empty 
    //  when clicked update state - className .clicked 

export default CharacterCard;


