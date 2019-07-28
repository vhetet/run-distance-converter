import React, { Component } from 'react';
import '../node_modules/purecss/build/pure-min.css';
import './App.scss';

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
        <div className="result pure-form">
          <p>
            <span className="left">result in km: </span>
            <span className="right">{this.state.result}</span>
            <span className="unit">km</span>
          </p>
          <p>
            <span className="left">pace in min/km: </span>
            <span className="right">{this.state.time && (this.state.time / (this.state.distance * 1.60934)).toFixed(3)}</span>
            <span className="unit">min/km</span>
          </p>
          <p>
            <span className="left">pace in min/miles: </span>
            <span className="right">{this.state.time && (this.state.time / this.state.distance).toFixed(3)}</span>
            <span className="unit">min/miles</span>
          </p>
          <p>
            <span className="left">equivalence for 5km: </span>
            <span className="right">{this.state.time && ((this.state.time / (this.state.distance * 1.60934)) * 5).toFixed(3)}</span>
            <span className="unit">5km</span>
          </p>
          <p>
            <span className="left">equivalence for 10km: </span>
            <span className="right">{this.state.time && ((this.state.time / (this.state.distance * 1.60934)) * 10).toFixed(3)}</span>
            <span className="unit">10km</span>
          </p>
          <p>
            <span className="left">equivalence for half-marathon: </span>
            <span className="right">{this.state.time && ((this.state.time / (this.state.distance * 1.60934)) * 21.1).toFixed(3)}</span>
            <span className="unit">half-marathon</span>
          </p>
          <p>
            <span className="left">equivalence for 3.5 miles: </span>
            <span className="right">{this.state.time && ((this.state.time / this.state.distance) * 3.5).toFixed(3)}</span>
            <span className="unit">3.5 miles</span>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
