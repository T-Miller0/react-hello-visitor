import React, { Component } from 'react';
import './App.css';

class VisitorName extends React.Component {
  handleChange = (e) => {
    this.props.updateVisitorName(e.target.value);
  };

  render() {
    return (
      <input type='text' placeholder='Enter your name'
             value={this.props.visitorName}
             onChange={this.handleChange} />
    );
  }
}

class App extends React.Component {
  state = {
    visitorName: ''
  };
  updateVisitorName = (name) => {
    this.setState({ visitorName: name });
  };
  clearText = () => {
    this.setState({ visitorName: '' })
  };
  render() {
    return (
      <div>
        <VisitorName visitorName={this.state.visitorName}
                     updateVisitorName={this.updateVisitorName} />
        <button type='button' onClick={this.clearText}>Clear</button>
        <br />
        <p>Hello, {this.state.visitorName || 'visitor'}</p>
      </div>
    );
  }
}
export default App;
