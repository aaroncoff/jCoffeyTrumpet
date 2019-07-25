import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import nodemailer from 'nodemailer';


//send mail lottiefile
//https://www.lottiefiles.com/1972-send

//payment lottiefile
//https://www.lottiefiles.com/1758-credit-card

//loading lottiefile
//https://www.lottiefiles.com/987-estimate

//dna lottiefile
//https://www.lottiefiles.com/946-dna

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
            this.setState({
                name: '',
                email: '',
                text: ''
            })
            alert("Your message has been sent")
        }).catch(err => {
            console.log('----------email send error', err)
        })
    }

    render(){
        return(
        
                <div>
                    <div className="form-parent">
                        <form className="input">
                            <input id="name" placeholder="Your Name" onChange={(e)=>this.setState({name: e.target.value})} value={this.state.name}/>
                            <input id="email" placeholder="Your email address" onChange={(e)=>this.setState({email: e.target.value})} value={this.state.email}/>
                            <textarea className="message" id="text" placeholder="Message to Josh" onChange={(e)=>this.setState({text: e.target.value})} value={this.state.text}></textarea>
                            <button onClick={this.handleSubmitButton}>Submit</button>
                        </form>
                    </div>
                </div>
        )
    }
}