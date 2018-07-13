import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Question from './Components/Qinput';
import Answer from './Components/qAnswers';
import Auth from './Components/Admin_login';
import Register from './Components/Admin_register';
import routes from './routes';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Link to='/qahome'>Ask Josh</Link>
        
        {routes}
        
      </div>
    );
  }
}

export default App;
