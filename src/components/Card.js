import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import CardFront from './CardFront';
import CardBack from './CardBack';

class Card extends Component {
  constructor(props) {
    super(props);
    this.cardRef = React.createRef();
    this.state = {
      isFlipped: false,
      exposed: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.exposed !== this.props.exposed && this.props.exposed === true ) {
      this.setState( {exposed: true} );
    }
    
    if (this.state.exposed) {
      this.flip();
      this.setState( {exposed: false} );
    }
  }
  
  flip() {
    setTimeout(function() {
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }.bind(this), 1000);
  }
  
  handleClick() {    
    if (!this.state.isFlipped) {
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      this.props.onClick(this);
    }
  }

  render() {
    return (
      <div className="game-field__tile" ref={this.cardRef}>        
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
          <CardFront key="back" onClick={this.handleClick} cardFace={this.props.cardFace} isMatched={this.props.isMatched}/>
          <CardBack key="front" onClick={this.handleClick} />
        </ReactCardFlip>
      </div>
    );
  }
}

export default Card;