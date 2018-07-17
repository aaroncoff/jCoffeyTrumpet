import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

class Auth extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            username: '',
            password: ''
        }
    }
    handleLoginName(val) {
        this.setState({username: val});
    }
    handlePassword(val) {
        this.setState({password: val});
    }
    login(e) {
        e.preventDefault();
        const { username, password } = this.state;
        axios.post('/api/login', { username, password })
        .then(res => {
            //below not hitting
            console.log('login method hitting', this.props)
            //below line showing up in error.  may not like the redirect
            this.props.history.push('/userdash')
           
            //below error logging in console
        }).catch(err => console.log('Axios Login error----------', err));
    }
    render() {
        return (
            <div>
                <div>
                    <div>
                        <div></div>
                        
                        <form>
                            <input type='text' onChange={e => this.handleLoginName(e.target.value)} placeholder="login name"/>
                            <input type='password' onChange={e => this.handlePassword(e.target.value)} placeholder="password"/>
                            <button className='auth-login-btn' onClick={(e) => this.login(e)}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Auth);