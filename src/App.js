import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
      {
        name: "Lynda"
      },
      {
        name: "Dave"
      }, 
      {
        name: "Simon"
      },
    ]
  }
  } 
  render() {
    return (
      <div className="App">
        <h1>{this.state.monster1.name}</h1>
        <h1>{this.state.monster2.name}</h1>
        <h1>{this.state.monster3.name}</h1>

      </div>
    );
  }
}

export default App;
