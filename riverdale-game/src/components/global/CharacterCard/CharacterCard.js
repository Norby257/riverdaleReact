import React, { Component } from "react";
import "./CharacterCard.css";


class CharacterCard extends Component {

    state = {
        score: 0
        // topScore: 0
    };
        handleClick = () => {
            console.log("I've been clicked")
            // console.log(this.props.image)
            // console.log(this.props.id)
            this.setState({ score: this.state.score + 1});
            console.log(this.state.score);

            if (this.state.score > 1) {
                console.log("restart game");
            }
        };

        
        render() {
            // let classes = this.props.id ? "character" : "character clicked"
            return (
                <div className="card">
                   <div className="img-container">
                   <img src ={this.props.image} alt={this.props.name} onClick ={this.handleClick}/>
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


