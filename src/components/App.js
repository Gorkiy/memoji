import React, { Component } from 'react';
import Card from './Card';
import { shuffle } from 'lodash';

const emojis = ['🐶', '🐶', '🐱', '🐱', '🐭', '🐭', '🐹', '🐹', '🐰', '🐰', '🐻', '🐻'];

class App extends Component {
  state = { 
    gameStarted: false,
    fieldSize: 12,
    cards: shuffle(emojis)
  };
  
  renderGameField(size) {
    let template = [];
    for (let i = 0; i < size; i++) {
      template.push(<Card key={i} id={i} cardFace={this.state.cards[i]}/>);
    }
    console.log(template);
    return template;
  }

  render() {
    return (
      <div className="game-field">
        {this.renderGameField(this.state.fieldSize)}
      </div>
    );
  }
}

export default App;
