import React, { Component } from 'react';
import Gif from '../utils/gif-api';

class GameResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameEnded: false,
      gif: {
        src: '',
        alt: ''
      }
    }
    this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps.gameEnded !== this.props.gameEnded && this.props.gameEnded === true) {
      this.setState({ gameEnded: true })
    }
    
    if (this.state.gameEnded) {
      this.getGif();
      this.setState({ gameEnded: false })
    }
  }
  
  handleClick() {
    this.props.onButtonClick();
  }
  
  renderOutcome() {
    if (this.props.outcome === 'win' ) {
      return 'Epic Win!';
    }
    
    if (this.props.outcome === 'lose' ) {
      return 'Not Epic Win :(';
    }
  }
  
  async getGif() {
    let url = '';
    let alt = '';
    if (this.props.outcome === 'win' ) {
      const win = new Gif('win', 10);
      await win.setGifURL();
      url = win.gif.src;
      alt = win.gif.alt;
    }
    
    if (this.props.outcome === 'lose' ) {
      const fail = new Gif('fail', 10);
      await fail.setGifURL();
      url = fail.gif.src;
      alt = fail.gif.alt;
    }
    
    this.setState({ gif: {
      src: url,
      alt: alt
    }});
  }
  
  render() {
    const matchedStyle = this.props.gameEnded ? "modal_show" : "";
    
    return (
      <div className={`modal ${matchedStyle}`}>
        <div className="game-results">
          <h2 className="game-results__title">{this.renderOutcome()}</h2>
          <div className="game-results__gif"><img src={this.state.gif.src} alt={this.state.gif.alt} /></div>
          <button className="game-results__button" type="button" onClick={this.handleClick}>New Game
          </button>
        </div>
      </div>
    );
  }
}

export default GameResults;