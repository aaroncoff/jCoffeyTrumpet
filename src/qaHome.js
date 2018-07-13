import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Question from './Components/Qinput';
import Auth from './Components/Admin_login';
import Register from './Components/Admin_register';
import routes from './routes';
import Answer from './Components/qAnswers';

export default class QaHome extends Component{
    render(){
        return(
            <div>
                <header className="App-header">
                    <Auth {...this.props}/>
                    <Register/>
                    
                </header>
        
                <Question/>
          
       

            </div>
        )
    }
}