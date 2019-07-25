import React, { Component } from 'react';

class CardBack extends Component {
  
  render() {
    return (
      <div className="card card_back" onClick={this.props.onClick}>
      </div>
    );
  }
}

export default CardBack;