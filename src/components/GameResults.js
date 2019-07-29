import React, { Component } from 'react';

class GameResults extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.onButtonClick();
  }
  
  render() {
    const matchedStyle = this.props.gameEnded ? "modal_show" : "";
    
    return (
      <div className={`modal ${matchedStyle}`}>
        <div className="game-results">Game finished
          <button type="button" onClick={this.handleClick}>click
          </button>
        </div>
      </div>
    );
  }
}

export default GameResults;