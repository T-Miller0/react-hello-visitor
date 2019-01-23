import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
      visitorName: ""
    };

    updateVisitorName = (name) => {
      this.setState({ visitorName: name})
    };

    clearText = () => {
      this.setState({visitorName: ""})
    };

    render() {
    return (
      <div>
      <VisitorName visitorName={this.state.visitorName}
        updateVisitorName={this.updateVisitorName} />
      <button type='button' onClick={this.clearText}>Clear</button>
      <br/>
      <p>Hello, {this.state.visitorName || 'visitor'}</p>
      </div>
    );
  }
}

// ReactDOM.render(<App/>.document.getElementById('app'));
export default App;
