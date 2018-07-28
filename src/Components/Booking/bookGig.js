import React, { Component } from 'react';

export default class BookGig extends Component{

    componentDidMount(){
    

        window.TTE.init({
            targetDivId: "TTE-UUID",
            uuid: "bfc81293-892a-4c07-94ad-fdf6393d5dc1",
            service: 499979
        });

    }
    render(){
        return(
        
        <div id="TTE-UUID">
        
        </div>
        )
    }
}