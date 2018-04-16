import React from "react";
//  since this is dynamic component, using the full class method 

class Score extends React.Component {
    state = {
        score: 0,
        topScore: 0 
    };

    //  handle incrememnt - when user clicks a new image, this.state.count+ 1 
    //  we pass in an object for set state 
    handleIncrement = () => {
        this.setState({score: this.state.score + 1});
    };

    //  handle top score - that is the value of score when the game re-sets. 
    //  store all scores in list, sort them, pull greatest score and display to screen 


    //  rendering a div with the words score <br> and top score 
    //  keeping div simple for now, can make it fancy with bootstrap later 
    render() {
        return (
            <div> 
                <p> Score: {this.state.score} </p>
                <br />
                <p> Top Score: {this.state.topScore} </p>
                </div>
        )
    }
}

export default Score;