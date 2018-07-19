import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Question from './Components/Qinput';
import Answer from './Components/qAnswers';
import Auth from './Components/Admin_login';
import Register from './Components/Admin_register';
import NavDash from './NavComp/MyDash';
import routes from './routes';
import { Link } from 'react-router-dom';


//30boxesAPIkEY = 8541387-004cc08e200934c2c3f5e46a12ba2625 


class App extends Component {
  render() {
    return (
      <div className="App">

        <Link to='/'>Home | </Link>
        <Link to='/Dash'>My Dashboard</Link>
        <Link to='/Music'>Josh's Music | </Link>
        <Link to='/Contact'>Request a Lesson or Gig | </Link>
        <Link to='/About'>About Josh |</Link>
        <Link to='/Login'>Login</Link>
        
        {routes}
        
      </div>
    );
  }
}

export default App;
