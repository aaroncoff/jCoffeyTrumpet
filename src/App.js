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
import Hero from './Media/Hero';

//30boxesAPIkEY = 8541387-004cc08e200934c2c3f5e46a12ba2625 


class App extends Component {

  componentDidMount(){
    console.log(window)
  }

  render() {
    return (
      <div>
        <div className="topparent">

            <div className="topchild">


            <span className="first">JOSH</span><span className="last">COFFEY</span>
              {/* <div className="title"><h1>JOSH</h1><h1>COFFEY</h1></div> */}
            {/* <Hero/> */}
            
            </div>

          </div>

            <div className="midparent">
              <div className="midchild">
                <img src={require('./Media/Josh/Josh1.jpg')} alt={"Josh"} className="hero"/>
              </div>
            </div>

       
          <div className="navparent">
          <div className="navchild">
            <Link to='/'>Home</Link>
            <Link to='/Music'>Josh's Music</Link>
            <Link to='/Contact'>Contact Josh</Link>
            <Link to='/Lesson'>Book Josh For a Lesson</Link>
            <Link to='/Gig'>Book Josh for a Gig</Link>
            <Link to='/Dash'>My Dashboard</Link>
            <Link to='/Login'>Login</Link>
          </div>

          </div>
          <div className="bodyparent">
            <div className="bodychild"> 
            {routes}
            </div>
          </div>
        </div>
    );
  }
}

export default App;
