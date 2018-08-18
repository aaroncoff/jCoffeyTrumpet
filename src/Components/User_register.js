import React, { Component } from 'react';
import axios from 'axios';

//firstname
//lastname
//email
//birthday



export default class UserRegister extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
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

    handleRegEmail(val) {
        this.setState({email: val})
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
        const email = this.state.email;
        const password = this.state.password;
        axios.post(`/api/register`, {
            email,
            password,
        }).then(response => {
            this.setState({ email: response.data});
        }).catch(err => {
            this.setState({message: 'Something went wrong: ' + this.getMessage(err)})
        })
    }

    render() {
        const { email, password } = this.state;
        return (
            <div>
                <div className="registerP">
                    <form>
                        <p>New User Register</p>
                        <input type='text' className="registerName" onChange={e => this.handleRegEmail(e.target.value)} placeholder='email' value={email}/>
                        {/* <input type='text' onChange={e => this.handleRegEmail(e.target.value)} placeholder='email' value={email}/> */}
                        <input type='password'className="registerPw" onChange={e => this.handleRegPassword(e.target.value)} placeholder='password' value={password}/>
                        <button onClick={(e) => this.register(e)}>User Register</button>
                    </form>
                </div>
            </div>
        );
    }
}


