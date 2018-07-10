import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Question from './Components/Qinput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header>
        
        <Question/>

        
      </div>
    );
  }
}

export default App;
