import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    state = {
      visitorName: ""
    };

    updateVisitorName = (name) => {
      this.setState({ visitorName: name})
    };

    clearText = ( => {
      this.setState({visitorName: ""})
    });
    
    return (
    );
  }
}

export default App;
