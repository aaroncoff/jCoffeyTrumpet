import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

class UserAuth extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            email: '',
            password: ''
        }
    }
    handleLoginName(val) {
        this.setState({email: val});
    }
    handlePassword(val) {
        this.setState({password: val});
    }
    login(e) {
        e.preventDefault();
        const { email, password } = this.state;
        axios.post('/api/login', { email, password })
        .then(res => {
            //below not hitting
            console.log('login method hitting', this.props)
            //below line showing up in error.  may not like the redirect
            this.props.history.push('/Dash')
           
            //below error logging in console
        }).catch(err => console.log('Axios Login error----------', err));
    }
    render() {
        return (
            <div>
                <div className="loginP">
                        <form>
                            <p>Login</p>
                            <input type='text' className="loginName" onChange={e => this.handleLoginName(e.target.value)} placeholder="login name"/>
                            <input type='password' className="loginPw" onChange={e => this.handlePassword(e.target.value)} placeholder="password"/>
                            <button className='auth-login-btn' onClick={(e) => this.login(e)}>User Login</button>
                        </form>
                    
                </div>
            </div>
        );
    }
}

export default withRouter(UserAuth);