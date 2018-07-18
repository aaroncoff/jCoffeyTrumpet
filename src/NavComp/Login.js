import React, { Component } from 'react';
import Auth from '../Components/Admin_login';
import Register from '../Components/Admin_register';

export default class Login extends Component{
    render(){
        return(
            <div>
                <header className="App-header">
                    <Auth {...this.props}/>
                    <Register/>
                    
                </header>
                
            </div>
        )
    }
}