import React, { Component } from 'react';

class CardFront extends Component {
  
  render() {
    return (
      <div className="card card_front" onClick={this.props.onClick}>
        {this.props.cardFace}
      </div>
    );
  }
}

export default CardFront;