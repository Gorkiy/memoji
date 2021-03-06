import React, { Component } from 'react';
import { shuffle } from 'lodash';
import Card from './Card';
import TimeLimit from './TimeLimit';
import GameResults from './GameResults';

const gameConfig = {
  totalCards: 12,
  cards: ['🐶', '🐶', '🐱', '🐱', '🐭', '🐭', '🐹', '🐹', '🐰', '🐰', '🐻', '🐻'],
  timeLimit: 20
}

class App extends Component {
  state = { 
    gameStarted: false,
    gameEnded: false,
    cardsLeft: gameConfig.totalCards,
    timeLeft: gameConfig.timeLimit,
    faces: shuffle(gameConfig.cards),
    cardsData: {},
    cards: [],
    exposedCount: 0,
    exposedCards: [],
    outcome: ''
  };
  
  componentDidMount() {
    this.initNewGame();
  }
  
  initNewGame = async () => {
    this.setState({ gameStarted: false });
    this.setState({ gameEnded: false });
    this.setState({ outcome: '' });
    this.setState({ timeLeft: gameConfig.timeLimit });
    this.setState({ cardsLeft: gameConfig.totalCards });
    //Generate new data
    this.setState({ faces: shuffle(gameConfig.cards) });
    const data = await this.getCardsData(this.state.faces);
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
        exposedCount={this.state.exposedCount}
        gameStarted={this.state.gameStarted}
        gameEnded={this.state.gameEnded}
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
  }
  
  markAsExposed(id) {
    const data = this.state.cardsData;
    data[id]['exposed'] = true;
    this.update(data);
  }
  
  switchExposed(id1, id2) {
    const data = this.state.cardsData;
    data[id1]['exposed'] = !data[id1]['exposed'];
    data[id2]['exposed'] = !data[id2]['exposed'];
    this.update(data);
  }
  
  runGame() {
    this.setState({ gameStarted: true });
    const timerId = setInterval(function() {
      this.setState({ timeLeft: this.state.timeLeft - 1 });
      if (this.state.timeLeft <= 0 || this.state.cardsLeft === 0) {
        this.endGame();
        clearInterval(timerId);
      }
    }.bind(this), 1000);
  }
  
  endGame() {
    if (this.state.cardsLeft === 0) {
      this.setState({ outcome: 'win' });
    } else {
      this.setState({ outcome: 'lose' });
    }
    
    this.setState({ gameEnded: true });
    this.setState({ exposedCount: 0 });
    this.setState({ exposedCards: [] });
    this.update(this.state.cardsData);
  }
  
  async update(data) {
    const newData = await this.getCardComponents(data);
    this.setState( { cards: newData });
  }
  
  onCardClick = async (card) => {
    if (!this.state.gameStarted && !this.state.gameEnded) {
      await this.runGame();
    }
    
    this.state.exposedCards.push(card);
    this.markAsExposed(card.props.id);
    await this.setState({ exposedCount: this.state.exposedCount + 1 });
    //Compare exposed cards and check for a match
    if (this.state.exposedCount === 2) {
      let first = this.state.exposedCards[0];
      let second = this.state.exposedCards[1];
      if (first.props.cardFace === second.props.cardFace)  {
        this.markAsMatched(first.props.id, second.props.id);
      } else {
        this.switchExposed(first.props.id, second.props.id);
      }
      this.setState({ exposedCount: 0, exposedCards: [] });
    }
  }
  
  onButtonClick = async (card) => {
    //Wait for update in order to flip back exposed cards in previous match
    await this.setState({ gameStarted: false });
    await this.update(this.state.cardsData);
    //Wait for smooth card faces change
    setTimeout(function() {
      this.initNewGame();
    }.bind(this), 200);
  }

  render() {
    return (
      <div>
        <h1 className="game-name">Memoji</h1>
        <GameResults gameEnded={this.state.gameEnded} outcome={this.state.outcome} onButtonClick={this.onButtonClick}/>
        <div className="game-field">
          {this.state.cards}
        </div>
        <TimeLimit gameStarted={this.state.gameStarted} timeLeft={this.state.timeLeft}/>
      </div>
    );
  }
}

export default App;
