import React, { Component } from 'react';
import Card from './Card';

class App extends Component {
  state = { 
    gameStarted: false,
    fieldSize: 12 
  };
  
  renderGameField(size) {
    let template = [];
    for (let i = 0; i < size; i++) {
      template.push(<Card key={i}/>);
    }
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
