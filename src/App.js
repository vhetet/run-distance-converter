import React, { Component } from 'react';
import '../node_modules/purecss/build/pure-min.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { distance: '', time: '', result: '' };

    this.handleDistanceChange = this.handleDistanceChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
  }

  handleDistanceChange(event) {
    this.setState({ distance: event.target.value });
  }

  handleTimeChange(event) {
    this.setState({ time: event.target.value });
    this.setState({ result: this.state.distance * 1.60934 })
  }


  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit} className="pure-form">
          <label>
            <span>distance in miles:</span>
          <input type="text" value={this.state.distance} onChange={this.handleDistanceChange} />
          </label>
          <label>
            <span>time in minutes:</span>
          <input type="text" value={this.state.time} onChange={this.handleTimeChange} />
          </label>
        </form>
        <div className="result">
          <p>
            <span>result in km: </span>
            <span>{this.state.result}</span>
          </p>
          <p>
            <span>pace in min/km: </span>
            <span>{this.state.time && (this.state.time / (this.state.distance * 1.60934)).toFixed(3)}</span>
          </p>
          <p>
            <span>pace in min/miles: </span>
            <span>{this.state.time && (this.state.time / this.state.distance).toFixed(3)}</span>
          </p>
          <p>
            <span>equivalence for 5km: </span>
            <span>{this.state.time && ((this.state.time / (this.state.distance * 1.60934)) * 5).toFixed(3)}</span>
          </p>
          <p>
            <span>equivalence for 10km: </span>
            <span>{this.state.time && ((this.state.time / (this.state.distance * 1.60934)) * 10).toFixed(3)}</span>
          </p>
          <p>
            <span>equivalence for half-marathon: </span>
            <span>{this.state.time && ((this.state.time / (this.state.distance * 1.60934)) * 21.1).toFixed(3)}</span>
          </p>
          <p>
            <span>equivalence for 3.5 miles: </span>
            <span>{this.state.time && ((this.state.time / this.state.distance) * 3.5).toFixed(3)}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
