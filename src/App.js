import React, { Component } from 'react';
import '../node_modules/purecss/build/pure-min.css';
import './App.scss';
import DistanceConverterResult from './components/DistanceConverterResults'

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
    this.setState({ result: this.state.distance * 1.60934 });
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
        <DistanceConverterResult result={this.state.result} time={this.state.time} distance={this.state.distance}></DistanceConverterResult>
      </div>
    );
  }
}

export default App;
