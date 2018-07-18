import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import nodemailer from 'nodemailer';

export default class Contact extends Component{
    constructor(){
        super()
        this.state={
            name: '',
            email: '',
            text: ''
        }
        this.handleSubmitButton = this.handleSubmitButton.bind(this)
    }

   //set email subject to either "gig request" or "lesson request" based on radial button selector

    handleSubmitButton(e){
        e.preventDefault()
        const {name,email,text} = this.state
        let body = {
            name: name,
            email: email,
            text: text
        }
        axios.post(`/api/sendEmail`, body).then(response => {
            console.log('-----response', response.data)
        }).catch(err => {
            console.log('----------email send error', err)
        })
    }

    render(){
        return(
        
                <div>
                    <form>
                    <input id="name" placeholder="Your Name" onChange={(e)=>this.setState({name: e.target.value})}/>
                    <input id="email" placeholder="Your email address" onChange={(e)=>this.setState({email: e.target.value})}/>
                    <textarea id="text" placeholder="Message to Josh" onChange={(e)=>this.setState({text: e.target.value})}></textarea>
                    <button onClick={this.handleSubmitButton}>Submit</button>
                    </form>
                </div>
        )
    }
}