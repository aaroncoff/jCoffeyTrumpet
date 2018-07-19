import React, { Component } from 'react';
import Auth from '../Components/Admin_login';
import Register from '../Components/Admin_register';
import UserRegister from '../Components/User_register';
import UserAuth from '../Components/User_login';

export default class Login extends Component{
    render(){
        return(
            <div>
                <header className="App-header">
                    <Auth {...this.props}/>
                    <Register/>
                    <UserAuth {...this.props}/>
                    <UserRegister/>
                    
                </header>
                
            </div>
        )
    }
}