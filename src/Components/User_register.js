import React, { Component } from 'react';
import axios from 'axios';

//firstname
//lastname
//email
//birthday



export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            showRegister: false,
            message: null,
            fetchedDataMessage: null


            // password: '',
            // username: '',
            // email: ''
        }
    }
    handleRegPassword(val) {
        this.setState({password: val});
    }
    handleRegUsername(val) {
        this.setState({username: val});
    }
    // handleRegEmail(val) {
    //     this.setState({email: val});
    // }
    // register() {
    //     const { username, password } = this.state;
    //     axios.post('/api/auth/register', {username, password})
    //     .then(res => {
    //         this.setState({user: res.data})
    //     }).catch(err => console.log('Axios Register Error-------------', err));
    // }
    getMessage = error => error.response
        ? error.response.data
            ? error.response.data.message
            : JSON.stringify(error.response.data, null, 2)
        : error.message;

    register = (e) => {
        e.preventDefault();
        this.setState({message: null });
        const username = this.state.username;
        const password = this.state.password;
        axios.post(`/api/register`, {
            username,
            password
        }).then(response => {
            this.setState({ username: response.data});
        }).catch(err => {
            this.setState({message: 'Something went wrong: ' + this.getMessage(err)})
        })
    }

    render() {
        const { username, password } = this.state;
        return (
            <div>
                <form>
                    <input type='text' onChange={e => this.handleRegUsername(e.target.value)} placeholder='username' value={username}/>
                    {/* <input type='text' onChange={e => this.handleRegEmail(e.target.value)} placeholder='email' value={email}/> */}
                    <input type='password' onChange={e => this.handleRegPassword(e.target.value)} placeholder='password' value={password}/>
                    <button onClick={(e) => this.register(e)}>Register</button>
                </form>
            </div>
        );
    }
}