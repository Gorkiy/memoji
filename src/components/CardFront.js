import React, { Component } from 'react';

class CardFront extends Component {
  render() {
    const matchedStyle = this.props.isMatched ? "card_matched" : "";
    return (
      <div className={`card card_front ${matchedStyle}`} onClick={this.props.onClick}>
        {this.props.cardFace}
      </div>
    );
  }
}

export default CardFront;