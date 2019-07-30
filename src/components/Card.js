import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import CardFront from './CardFront';
import CardBack from './CardBack';

class Card extends Component {
  constructor(props) {
    super(props);
    // this.cardRef = React.createRef();
    this.state = {
      isFlipped: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.exposed && this.props.exposedCount >= 1 && !this.props.gameEnded) {
      this.flip();
    }
    //Triggers when the "new game" button is clicked
    // Flip back all exposed cards for a new match
    if (!this.props.gameStarted && this.props.gameEnded && this.state.isFlipped) {
      this.setState({ isFlipped: false });
    }
  }
  
  flip() {
    setTimeout(function() {
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }.bind(this), 600);
  }
  
  handleClick() {
    if (!this.state.isFlipped) {
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      this.props.onClick(this);
    }
  }

  render() {
    return (
      <div className="game-field__tile">        
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
          <CardFront key="back" onClick={this.handleClick} cardFace={this.props.cardFace} isMatched={this.props.isMatched}/>
          <CardBack key="front" onClick={this.handleClick} />
        </ReactCardFlip>
      </div>
    );
  }
}

export default Card;