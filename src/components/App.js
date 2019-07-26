import React, { Component } from 'react';
import Card from './Card';
import { shuffle } from 'lodash';

const emojis = shuffle(['🐶', '🐶', '🐱', '🐱', '🐭', '🐭', '🐹', '🐹', '🐰', '🐰', '🐻', '🐻']);
// const emojis = shuffle(['🐶', '🐶', '🐱', '🐱']);

class App extends Component {
  state = { 
    gameStarted: false,
    cardsLeft: 12,
    cardsData: {},
    cards: [],
    exposedCount: 0,
    exposedCards: []
  };
  
  componentDidMount() {
    const data = this.getCardsData(emojis);
    this.setState({ cardsData: data });
    this.setState( { cards: this.getCardComponents(data) });
  }
  
  getCardsData(emojis) {
    let data = {};
    for (let i = 0; i < emojis.length; i++) {
      data[i] = {
        id: i,
        cardFace: emojis[i],
        isMatched: false,
        exposed: false
      }
    }
    return data;
  }
  
  getCardComponents(data) {
    let cards = [];
    for (let key in data) {
      let card = data[key];
      cards.push(<Card 
        key={card.id} 
        id={card.id} 
        cardFace={card.cardFace} 
        isMatched={card.isMatched} 
        exposed={card.exposed} 
        onClick={this.onCardClick}
      />);
    }
    return cards;
  }
  
  markAsMatched(id1, id2) {
    const data = this.state.cardsData;
    data[id1]['isMatched'] = true;
    data[id2]['isMatched'] = true;
    this.update(data);
  }
  
  switchExposed(id1, id2) {
    const data = this.state.cardsData;
    data[id1]['exposed'] = !data[id1]['exposed'];
    data[id2]['exposed'] = !data[id2]['exposed'];
    this.update(data);
  }
  
  async update (data) {
    const newData = await this.getCardComponents(data);
    this.setState( { cards: newData });
  }
  
  onCardClick = async (card) => {
    this.state.exposedCards.push(card);
    await this.setState({ exposedCount: this.state.exposedCount + 1 });
    
    if (this.state.exposedCount === 2) {
      let first = this.state.exposedCards[0];
      let second = this.state.exposedCards[1];
      if (first.props.cardFace === second.props.cardFace)  {
        this.markAsMatched(first.props.id, second.props.id);
      } else {
        this.switchExposed(first.props.id, second.props.id);
        // Uncheck cards as exposed in a second
        setTimeout(function() {
          this.switchExposed(first.props.id, second.props.id);
        }.bind(this), 1000);
      }
      this.setState({ exposedCount: 0, exposedCards: [] });
    }
  }

  render() {
    return (
      <div className="game-field">
        {this.state.cards}
      </div>
    );
  }
}

export default App;
