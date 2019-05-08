import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { distance: '', time: '', result: '' };

    this.handleDistanceChange = this.handleDistanceChange.bind(this);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDistanceChange(event) {
    this.setState({ distance: event.target.value });
  }

  handleTimeChange(event) {
    this.setState({ time: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ result: this.state.distance * 1.60934 })
  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
          <label>
            distance in miles:
          <input type="text" value={this.state.distance} onChange={this.handleDistanceChange} />
          </label>
          <label>
            time in minutes:
          <input type="text" value={this.state.time} onChange={this.handleTimeChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div>
          <p>
            result in km: {this.state.result}
          </p>
          <p>
            pace in min/km: {(this.state.time / (this.state.distance * 1.60934)).toFixed(3)}
          </p>
          <p>
            pace in min/miles: {(this.state.time / this.state.distance).toFixed(3)}
          </p>
          <p>
            equivalence for 5km: {((this.state.time / (this.state.distance * 1.60934)) * 5).toFixed(3)}
          </p>
          <p>
            equivalence for 10km: {((this.state.time / (this.state.distance * 1.60934)) * 10).toFixed(3)}
          </p>
          <p>
            equivalence for half-marathon: {((this.state.time / (this.state.distance * 1.60934)) * 21.1).toFixed(3)}
          </p>
          <p>
            equivalence for 3.5 miles: {((this.state.time / this.state.distance) * 3.5).toFixed(3)}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
