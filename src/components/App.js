import React, { Component } from 'react';
import { shuffle } from 'lodash';
import Card from './Card';
import TimeLimit from './TimeLimit';

const gameConfig = {
  totalCards: 12,
  cards: shuffle(['🐶', '🐶', '🐱', '🐱', '🐭', '🐭', '🐹', '🐹', '🐰', '🐰', '🐻', '🐻']),
  timeLimit: 30  
}

class App extends Component {
  state = { 
    gameStarted: false,
    cardsLeft: gameConfig.totalCards,
    timeLeft: gameConfig.timeLimit,
    cardsData: {},
    cards: [],
    exposedCount: 0,
    exposedCards: []
  };
  
  componentDidMount() {
    const data = this.getCardsData(gameConfig.cards);
    this.setState({ cardsData: data });
    this.setState( { cards: this.getCardComponents(data) });
  }
  
  getCardsData(cardFaces) {
    let data = {};
    for (let i = 0; i < cardFaces.length; i++) {
      data[i] = {
        id: i,
        cardFace: cardFaces[i],
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
    this.setState({ cardsLeft: this.state.cardsLeft - 2 });
    this.update(data);
    console.log(this.state.cardsLeft);
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
  
  runGame() {
    if (!this.state.gameStarted && this.state.cardsLeft > 0) {
      this.setState({ gameStarted: true });
      const timerId = setInterval(function() {
        this.setState({ timeLeft: this.state.timeLeft - 1 });
        if (this.state.timeLeft <= 0) {
          clearInterval(timerId);
          this.setState({ gameStarted: false });
        }
      }.bind(this), 1000);
    } else {
      this.setState({ gameStarted: false });
    }
  }
  
  onCardClick = async (card) => {
    this.runGame();
    
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
      <div>
        <div className="game-field">
          {this.state.cards}
        </div>
        <TimeLimit gameStarted={this.state.gameStarted} timeLeft={this.state.timeLeft}/>
      </div>
    );
  }
}

export default App;
