import React, { Component } from 'react';

class TimeLimit extends Component {
  render() {
    return (
      <div className="time-limit">
        {this.props.timeLeft}
      </div>
    );
  }
}

export default TimeLimit;