import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import CardFront from './CardFront';
import CardBack from './CardBack';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      isMatched: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e) {
    if (!this.state.isFlipped) {
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
  }

  render() {
    return (
      <div className="game-field__tile">
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
          <CardFront key="back" onClick={this.handleClick} cardFace={this.props.cardFace} />   
          <CardBack key="front" onClick={this.handleClick} />
        </ReactCardFlip>
      </div>
    );
  }
}

export default Card;