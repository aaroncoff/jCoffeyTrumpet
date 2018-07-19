import React, { Component } from 'react';

export default class NavDash extends Component {

    componentDidMount(){
        this.loggedIn()
    }

    takeMeToDash = () => {
        this.props.history.push('/userdash')
    }

    takeMeToLogin = () => {
        this.props.history.push('/Login')
    }

    // loggedIn = () => {
    //     if(req.session.user){
    //         this.takeMeToDash()
    //     }else{
    //         this.takeMeToLogin()
    //     }
    // }

    render(){
        return(
            <div>Hi</div>
        )
    }
}